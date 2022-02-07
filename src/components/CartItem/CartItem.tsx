import Button from "@material-ui/core/Button";
//types
import { Product } from "../../client";
// styles
import { Wrapper } from "../CartItem/CartItem.styles";

type Props = {
  item: Product;
  addToCart: (clickedItem: Product) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  const { name, photos, amount, sort_price, product_id, max_cart_quantity } =
    item;
  return (
    <Wrapper>
      <div className="cart-item__main">
        <h3>{name}</h3>
        <img src={photos[0].urls.small} alt={name} />
      </div>
      <div className="cart-item__information">
        <h4>Total: ${(amount * sort_price).toFixed(2)}</h4>
        <div className="cart-item__buttons">
          <Button
            aria-label="remove one item"
            type="button"
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(product_id)}
          >
            -
          </Button>
          <h4>{amount}</h4>
          <Button
            aria-label="add one item"
            type="button"
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
            disabled={amount === max_cart_quantity ? true : false}
          >
            +
          </Button>
        </div>
      </div>
      {amount === max_cart_quantity && <h4>This is our max inventory for this product ~enjoy!</h4>}
    </Wrapper>
  );
};

export default CartItem;
