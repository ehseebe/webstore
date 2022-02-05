import Button from "@material-ui/core/Button";
// types
import { Product } from "../../client";
// styles
import { Wrapper } from "./Item.styles";

type Props = {
    item: Product;
    handleAddToCart: (clickedItem: Product) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart }) => (
    <Wrapper aria-label="product">
        <img src={item.photos[0].urls.medium} alt={item.name}/>
        <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <h3>${item.sort_price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
    </Wrapper>
)

export default Item;
