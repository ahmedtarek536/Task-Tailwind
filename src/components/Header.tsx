import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePage } from "../Features/appSlice";
import { RootState } from "../store";

interface CartItem {
  num: number;
  price: number;
}

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { pageIsProducts, cart } = useSelector((state: RootState) => state.app);

  const totalItems = cart.reduce(
    (prev: number, current: CartItem) => prev + current.num,
    0
  );
  const totalPrices = cart.reduce(
    (prev: number, current: CartItem) => prev + current.num * current.price,
    0
  );

  const handleUpdatePage = () => {
    dispatch(updatePage());
  };

  return (
    <div className="header">
      <h2>Acm Co.</h2>
      <div>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ${totalPrices.toFixed(2)}</p>
        <button onClick={handleUpdatePage}>
          View {pageIsProducts ? "Cart" : "Products"}
        </button>
      </div>
    </div>
  );
};

export default Header;
