// type
import { Product } from "../../client";
// style
import { Wrapper } from "./Item.styles";

type Props = {
  item: Product;
  handleAddToCart: (clickedItem: Product) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  let { name, photos, sort_price } = item;

  return (
    <Wrapper aria-label="product" role="product">
      <div className="item__image">
        <img src={photos[0].urls.medium} alt={name} />
      </div>
      <div className="item__details">
        <h2 className="item__name">{name}</h2>
        <h3 className="item__price">${sort_price}</h3>
      </div>
      <button className="item__button" aria-label="add to cart" onClick={() => handleAddToCart(item)}>
        Add to Cart
      </button>
    </Wrapper>
  );
};

export default Item;
