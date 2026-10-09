import { useEffect, useState } from "react";
import Card from "../ui/Card";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function handleFetchProducts() {
      const response = await fetch("https://dummyjson.com/products?limit=10");
      const data = await response.json();
      console.log(data);
      setProducts(data.products);
    }
    handleFetchProducts();
  }, []);

  return (
    <section>
      <div className="grid grid-cols-5 m-5 gap-2">
        {products.map((prod) => (
          <Card
            key={prod.id}
            title={prod.title}
            image={prod.images}
            price={prod.price}
            to={prod.id}
          />
        ))}
      </div>
    </section>
  );
}
