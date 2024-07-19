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
    <div className="h-min rounded-xl p-2 px-5 shadow-xl">
      <img
        className="max-h-[400px] rounded-xl"
        src={product.img}
        alt="img-product"
      />
      <h4 className="text-md py-2 font-semibold md:text-lg">{product.title}</h4>
      <div className="mb-3 flex items-center justify-between gap-4">
        <p className="text-[#777]">${product.price}</p>
        <button
          onClick={() => {
            dispatch(addToCart(product));
          }}
          className="btn"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
