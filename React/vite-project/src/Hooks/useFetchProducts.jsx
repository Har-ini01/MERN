import React, {useEffect, useState} from "react";
import ProductLayout from "../components/ProductLayout/ProductLayout";

export const useFetchProducts = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [count, setCounter] = useState(10);
  useEffect(() => {
    setCounter(count + 1);
  }, []);
  useEffect(() => {
    console.log("useEffect Executed");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log("Data:", data.products);
      setProductData(data.products);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return {productData, isLoading}
};
 export default useFetchProducts;