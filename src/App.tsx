import React from "react";
import Cart from "./Features/Cart/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./Features/Products/Products";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const App: React.FC = () => {
  const { pageIsProducts } = useSelector((state: RootState) => state.app);

  return (
    <div className="container">
      <Header />
      {/* <Products /> */}
      {pageIsProducts ? <Products /> : <Cart />}
      <Footer />
    </div>
  );
};

export default App;
