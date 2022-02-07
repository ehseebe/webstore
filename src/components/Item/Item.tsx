// import Button from "@material-ui/core/Button";
// types
import { Product } from "../../client";
// styles
import { Wrapper } from "./Item.styles";

type Props = {
    item: Product;
    handleAddToCart: (clickedItem: Product) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart }) => (
    <Wrapper aria-label="product" role="product">
        <div className="item__image">
        <img src={item.photos[0].urls.medium} alt={item.name}/>
        </div>
        <div className="item__details">
            <h2 className="item__name">{item.name}</h2>
            <h3 className="item__price">${item.sort_price}</h3>
        </div>
        <button className="item__button" onClick={() => handleAddToCart(item)}>Add to Cart</button>
    </Wrapper>
)

export default Item;
