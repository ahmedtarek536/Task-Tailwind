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
    (state: RootState) => state.app.products,
  ) as Product[];

  return (
    <div className="mx-auto mt-20 grid w-[90%] grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <Item product={product} key={product.title} />
      ))}
    </div>
  );
};

export default Products;
