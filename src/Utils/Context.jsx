import React, { createContext, useEffect } from "react";
import { useState } from "react";
import api from "./Axios.jsx";
export const ProductContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || [],
  );

  const fetchProducts = async () => {
    try {
      const { data } = await api("/products");
      console.log("API se aaya hua data:", data);
      const fetchedData = data.products || data;
      setProducts(fetchedData);
      localStorage.setItem("products", JSON.stringify(fetchedData));
    } catch (error) {}
  };

  useEffect(() => {
    // Agar localStorage bilkul khali hai, tabhi API se fetch karein
    if (!localStorage.getItem("products")) {
      fetchProducts();
    }
  }, []);
  useEffect(() => {
    if (products) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);
  return (
    <ProductContext value={{ products, setProducts }}>
      {props.children}
    </ProductContext>
  );
};

export default Context;
