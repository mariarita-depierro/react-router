import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function SingleProduct() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function handleFetchProduct() {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    }
    handleFetchProduct();
  }, [id]);

  return (
    <section className="m-4">
      {product !== null && (
        <>
          <div className="flex flex-col text-center ">
            <h2 className="font-bold uppercase">{product.title}</h2>
            <img className="w-90" src={product.thumbnail} alt={product.title} />
          </div>
          <div className="flex flex-col gap-y-1">
            <h3>
              <strong>Brand:</strong> {product.brand}
            </h3>
            <p>{product.description}</p>
            <span>
              <strong>Prezzo:</strong> {product.price}€
            </span>
            <p>
              <strong>Stock:</strong> {product.stock}
            </p>
            <span className="text-red-400">#{product.category}</span>
            <button className="flex gap-2 p-2 p w-20 border rounded-lg">
              Add
              <ShoppingCart />
            </button>
          </div>
        </>
      )}
    </section>
  );
}
