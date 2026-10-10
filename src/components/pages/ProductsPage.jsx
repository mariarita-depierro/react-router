import { useEffect, useState } from "react";
import Card from "../ui/Card";
import Spinner from "../ui/Spinner";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function handleFetchProducts() {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch("https://dummyjson.com/products?limit=10");
      const data = await response.json();
      console.log(data);
      setProducts(data.products);
      setIsLoading(false);
    }
    handleFetchProducts();
  }, []);

  return (
    <section>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </section>
  );
}
