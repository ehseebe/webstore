import CartItem from "../CartItem/CartItem";
// styles
import { Wrapper } from "./Cart.styles";
//types
import { Product } from "../../client";

type Props = {
  cartItems: Product[];
  addToCart: (clickedItem: Product) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: Product[]) =>
    items.reduce((acc: number, item) => acc + item.amount * item.sort_price, 0);

  return (
    <Wrapper data-testid="cart">
      <h2 id="cart-title">Your Shopping Cart</h2>
      {cartItems.length === 0 && <p>No Items in Cart</p>}
      <ul aria-labelledby="cart-title">
        {cartItems.map((item) => (
          <CartItem
            key={item.product_id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
      <h3 aria-label="cart-total">Total: ${calculateTotal(cartItems).toFixed(2)}</h3>
    </Wrapper>
  );
};

export default Cart;
