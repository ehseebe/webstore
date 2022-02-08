import { useState, useEffect } from "react";
import { fetchProducts } from "./client";
//components
import Header from "./components/Header/Header";
import SearchInput from "./components/Search/SearchInput";
import Item from "./components/Item/Item";
import Drawer from "@material-ui/core/Drawer";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import Cart from "./components/Cart/Cart";
// styles
import {
  StyledButton,
  SearchInputWrap,
  GridMain,
  GridWrap,
} from "./App.styles";
// type
import { Product } from "./client";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as Product[]);
  const [products, setProducts] = useState([] as Product[]);
  const [searchQuery, setSearchQuery] = useState("");

  // use existing fetch function to set product data
  const setProductData = () => {
    fetchProducts().then((res) => {
      setProducts(res);
    });
  };

  // wrap in useEffect to render on load
  useEffect(() => {
    setProductData();
  }, []);

  // checks if search query exists & renders items with matching name or description
  const renderedProducts = () => {
    let productList = products;

    if (searchQuery) {
      const keyword = searchQuery.toLowerCase();

      productList = products.filter((item) => {
        return (
          item.name.toLowerCase().includes(keyword) ||
          item.description.toLowerCase().includes(keyword)
        );
      });
    }

    return productList.map((item) => (
      <Item
        item={item}
        handleAddToCart={handleAddToCart}
        key={item.product_id}
        data-testid="product"
      />
    ));
  };

  const handleAddToCart = (clickedItem: Product) => {
    setCartItems((prev) => {
      // checks if the item already in the cart
      const isItemInCart = prev.find(
        (item) => item.product_id === clickedItem.product_id
      );

      if (isItemInCart) {
        // check that we don't go over max_amount
        const checkItem = prev.map((item) => {
          if (item.amount !== item.max_cart_quantity) {
            return item.product_id === clickedItem.product_id
            ? { ...item, amount: item.amount + 1 }
            : item;
          } else {
            return item;
          }
        });
        return checkItem;
      }
      // new cart item
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (product_id: number) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        // start with empty array(specified as Product)
        // is the item in the cart
        if (item.product_id === product_id) {
          // if only one, remove from cart
          if (item.amount === 1) return acc;
          // if more than one, subtract one
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as Product[])
    );
  };

  // iterate through items in cart and add them up
  const getTotalItems = (items: Product[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);

  // checks if products exits & calls product render function
  const visibleProducts = products && renderedProducts();

  return (
    <main className="main-grid" id="main">
      <Header />
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="primary">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <SearchInputWrap>
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </SearchInputWrap>
      <GridMain id="page-content">
        <h1 id="list-title">Browse Products</h1>
        <GridWrap aria-labelledby="list-title">{visibleProducts}</GridWrap>
      </GridMain>
    </main>
  );
};

export default App;
