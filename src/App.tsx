import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchProducts } from './client';

//components
import Header from "./components/Header/Header";
import Item from "./components/Item/Item";
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import Cart from './components/Cart/Cart';

// styles
import { Wrapper, StyledButton } from './App.styles';

// types
import { Product } from "./client";
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

// const getProducts = async (): Promise<CartItemType[]> =>
//   await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  // const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);

  const what = fetchProducts().then(res => console.log(res))

  console.log("data", what)

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // 1. is the item already in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id ?
            { ...item, amount: item.amount + 1 }
            : item
        )
      }

      // 2. new cart item
      return [...prev, { ...clickedItem, amount: 1 }]
    })
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((acc, item) => {
        // start with empty array(specified as CartItemType)

        // is the item in the cart
        if (item.id === id) {
          // if only one, remove from cart
          if (item.amount === 1) return acc;
          // if more than one, subtract one
          return [...acc, {...item, amount: item.amount - 1}];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    ))
  };

  // iterate through items in cart and add them up
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0)

  // if (isLoading) return <LinearProgress />;
  // // also CircularProgress

  // if (error) return <div>Error, something went wrong</div>
  return (
    <main>
       <Header />
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {/* {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))} */}
      </Grid>
    </main>
  );
}

export default App;
