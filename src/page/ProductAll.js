import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./component/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = "http://localhost:5000/products";
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const location = useLocation();
  console.log("Current path:", location.pathname);

  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default ProductAll;
