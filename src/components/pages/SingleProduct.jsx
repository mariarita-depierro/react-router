import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Spinner from "../ui/Spinner";

export default function SingleProduct() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function handleFetchProduct() {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          if (response.status === 404) {
            navigate("/products");
          } else {
            throw new Error("Error fetching your products, please try again.");
          }
        }
        const data = await response.json();
        //console.log(data);
        setProduct(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }
    handleFetchProduct();
  }, [id, navigate]);

  return (
    <section className="m-4">
      {isLoading ? (
        <Spinner />
      ) : (
        product !== null && (
          <>
            <div className="flex flex-col text-center ">
              <h2 className="font-bold uppercase pt-4">{product.title}</h2>
              <img
                className="w-90 self-center"
                src={product.thumbnail}
                alt={product.title}
              />
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
              <button className="flex self-center gap-2 p-2 p w-20 border rounded-lg cursor-pointer">
                Add
                <ShoppingCart />
              </button>
            </div>
          </>
        )
      )}
    </section>
  );
}
