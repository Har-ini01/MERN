import React, {useState, useEffect} from 'react'

export const useFetchProductsDetails = (id) => {
  const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://dummyjson.com/products/${id}`);
          const data = await response.json();
          setProduct(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching product:", error);
          setLoading(false);
        }
      };
  
      fetchProduct();
    }, [id]);

    return {product, loading}
}

export default useFetchProductsDetails;
