import { useSelector } from "react-redux";
import { RootState } from "../store"; // Adjust the import path as necessary

function Footer() {
  const { cart } = useSelector((store: RootState) => store.app);
  const totalItems = cart.reduce((prev, current) => prev + current.num, 0);
  const totalPrices = cart.reduce(
    (prev, current) => prev + current.num * current.price,
    0
  );

  return (
    <div className="footer">
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrices.toFixed(2)}</p>
      <p>Shopping Cart &copy; 2022</p>
    </div>
  );
}

export default Footer;
