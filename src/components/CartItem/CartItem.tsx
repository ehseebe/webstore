import Button from "@material-ui/core/Button";

//types
import { Product } from "../../client";
// styles
import { Wrapper } from "../CartItem/CartItem.styles";

type Props = {
    item: Product;
    addToCart: (clickedItem: Product) => void;
    removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
    <Wrapper>
        <div className="cart-item__main">

            <h3>{item.name}</h3>
        <img src={item.photos[0].urls.small} alt={item.name} />
        </div>
            {/* <p>Price: ${item.sort_price}</p> */}
        <div className="cart-item__information">
        <h4>Total: ${(item.amount * item.sort_price).toFixed(2)}</h4>
            <div className="cart-item__buttons">
                <Button aria-label="remove one item" type="button" size="small" disableElevation variant="contained" onClick={() => removeFromCart(item.product_id)}>
                    -
                </Button>
                <h4>{item.amount}</h4>
                <Button aria-label="add one item" type="button" size="small" disableElevation variant="contained" onClick={() => addToCart(item)}>
                    +
                </Button>
            </div>

        </div>
    </Wrapper>
)

export default CartItem;
