import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../appSlice";

interface ItemProps {
  title: string;
  img: string;
  price: number;
}

interface ItemComponentProps {
  product: ItemProps;
}

const Item: React.FC<ItemComponentProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>{product.title}</h4>
      <img src={product.img} alt="img-product" />
      <p>${product.price}</p>
      <button
        onClick={() => {
          dispatch(addToCart(product));
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
