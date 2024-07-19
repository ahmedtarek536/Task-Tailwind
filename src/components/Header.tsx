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
    0,
  );
  const totalPrices = cart.reduce(
    (prev: number, current: CartItem) => prev + current.num * current.price,
    0,
  );

  const handleUpdatePage = () => {
    dispatch(updatePage());
  };

  return (
    <div className="flex w-full items-center justify-between px-10 py-3 shadow-lg">
      <h2 className="text-green-bold text-3xl font-bold text-green-500">
        Acm Co.
      </h2>
      <div className="flex items-center justify-center gap-6 text-sm">
        <p className="hidden sm:block">Total Items: {totalItems}</p>
        <p className="hidden sm:block">
          Total Price: ${totalPrices.toFixed(2)}
        </p>
        <button className="btn" onClick={handleUpdatePage}>
          View {pageIsProducts ? "Cart" : "Products"}
        </button>
      </div>
    </div>
  );
};

export default Header;
