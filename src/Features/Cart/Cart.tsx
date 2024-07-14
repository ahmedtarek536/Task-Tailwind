import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateItemInCart } from "../appSlice";
import { RootState } from "../../store";

interface CartType {
  title: string;
  img: string;
  price: number;
  num: number;
}

const Cart: React.FC = () => {
  const cart = useSelector((store: RootState) => store.app.cart) as CartType[];

  if (cart.length === 0) return <h1>Cart Is Empty!</h1>;

  return (
    <div>
      {cart.map((item) => (
        <ItemCart key={item.title} item={item} />
      ))}
    </div>
  );
};

interface ItemCartProps {
  item: CartType;
}

const ItemCart: React.FC<ItemCartProps> = ({ item }) => {
  const [numitems, setNumItems] = useState<number>(item.num);
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.img} alt="product-image" />
      <p>${item.price}</p>
      <select
        value={numitems}
        onChange={(e) => {
          setNumItems(+e.target.value);
          dispatch(updateItemInCart(item, +e.target.value));
        }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <option key={i + 1} value={`${i + 1}`}>
            {i + 1}
          </option>
        ))}
      </select>
      <p>${(item.price * numitems).toFixed(2)}</p>
      <button onClick={() => dispatch(removeFromCart(item))}>X</button>
    </div>
  );
};

export default Cart;
