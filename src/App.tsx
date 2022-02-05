import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchProducts } from "./client";

//components
import Header from "./components/Header/Header";
import SearchInput from "./components/Search/SearchInput";
import Item from "./components/Item/Item";
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import Cart from "./components/Cart/Cart";

// styles
import { Wrapper, StyledButton, SearchInputWrap } from "./App.styles";

// types
import { Product } from "./client";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as Product[]);
  const [products, setProducts] = useState([] as Product[]);
  const [searchQuery, setSearchQuery] = useState("");

  const setProductData = () => {
    fetchProducts().then((res) => {
      setProducts(res);
    });
  };

  useEffect(() => {
    setProductData();
  }, []);

  console.log("data", products);

  const renderedProducts = () => {
    let productList = products;

    if (searchQuery) {

      const keyword = searchQuery.toLowerCase();

      productList = products.filter((item) => {
        return item.name.toLowerCase().includes(keyword) || item.description.toLowerCase().includes(keyword)
      })

    }

    return productList.map((item) => (
      <Grid item key={item.product_id} xs={12} sm={3}>
        <Item item={item} handleAddToCart={handleAddToCart} />
      </Grid>
    ));
  };

  const handleAddToCart = (clickedItem: Product) => {
    setCartItems((prev) => {
      // 1. is the item already in the cart?
      const isItemInCart = prev.find(
        (item) => item.product_id === clickedItem.product_id
      );

      if (isItemInCart) {
        return prev.map((item) =>
          item.product_id === clickedItem.product_id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      // 2. new cart item
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

  const visibleProducts = products && renderedProducts();

  return (
    <main>
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
      <Grid container spacing={3}>
        {visibleProducts}
      </Grid>
    </main>
  );
};

export default App;
