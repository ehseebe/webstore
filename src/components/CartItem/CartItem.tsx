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
        <div>
            <h3>{item.name}</h3>
        </div>
        <div className="information">
            <p>Price: ${item.sort_price}</p>
            <p>Total: ${(item.amount * item.sort_price).toFixed(2)}</p>

            <div className="buttons">
                <Button size="small" disableElevation variant="contained" onClick={() => removeFromCart(item.product_id)}>
                    -
                </Button>
                <p>{item.amount}</p>
                <Button size="small" disableElevation variant="contained" onClick={() => addToCart(item)}>
                    +
                </Button>
            </div>
        </div>
        <img src={item.photos[0].urls.small} alt={item.name} />
    </Wrapper>
)

export default CartItem;
