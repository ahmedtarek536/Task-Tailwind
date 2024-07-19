import { useSelector } from "react-redux";
import { RootState } from "../store";

function Footer() {
  const { cart } = useSelector((store: RootState) => store.app);
  const totalItems = cart.reduce((prev, current) => prev + current.num, 0);
  const totalPrices = cart.reduce(
    (prev, current) => prev + current.num * current.price,
    0,
  );

  return (
    <div className="mt-10 flex flex-col items-start justify-between bg-green-400 px-10 py-5 sm:flex-row sm:items-center">
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrices.toFixed(2)}</p>
      <p>Shopping Cart &copy; 2024</p>
    </div>
  );
}

export default Footer;
