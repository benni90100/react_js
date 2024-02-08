import { useEffect } from "react";
import { useState } from "react";
import { Card } from "./Card";
import "./Homepage.css"
export function Homepage() {
  const [productArr, setProductArr] = useState([]);
  async function fetchProduct() {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const products = await res.json();
    setProductArr(products);
  }
  useEffect(() => {
    fetchProduct();
  }, []);
  productArr.length > 0 && console.log(productArr);
  return (
    <>
    <h1>Ecommerce</h1>
      <div className="card-container">
      
      {productArr.map((product) => {
        return (
          <Card
            key={product.id}
            product={product}
          />
        );
      })}
      </div>
    </>
  );
}
