import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import { RootState } from "../store";

const Products: React.FC = () => {
  const { products } = useSelector((state: RootState) => state.app);

  return (
    <div className="products">
      {products.map((product, i) => (
        <Item product={product} key={i} />
      ))}
    </div>
  );
};

export default Products;
