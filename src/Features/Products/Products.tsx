import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import { RootState } from "../../store";

interface Product {
  title: string;
  img: string;
  price: number;
}

const Products: React.FC = () => {
  const products = useSelector(
    (state: RootState) => state.app.products
  ) as Product[];

  return (
    <div className="products">
      {products.map((product) => (
        <Item product={product} key={product.title} />
      ))}
    </div>
  );
};

export default Products;
