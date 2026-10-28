import { useCartContext } from "../../contexts/CartContext";

export default function CartPage() {
  const { cartProducts, totalPriceCartProds } = useCartContext();

  return (
    <section className="m-4">
      <h1 className="text-2xl font-bold mb-4">In your Cart: </h1>
      <ul>
        {cartProducts.map((prod) => (
          <li className="mb-4 p-4 bg-gray-100 rounded" key={prod.id}>
            <p className="font-bold">{prod.title}</p>
            <img className="w-30" src={prod.images} alt={prod.title} />
            <p>
              <span className="font-bold">Price:</span> {prod.price} €
            </p>
          </li>
        ))}
      </ul>
      <p>
        Total: <span className="font-bold">{totalPriceCartProds} €</span>
      </p>
    </section>
  );
}
