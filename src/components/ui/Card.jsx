import { Link } from "react-router";

export default function Card({ id, title, image, price, to }) {
  return (
    <div key={id} className="rounded p-4 border border-gray-400">
      <p>{title}</p>
      <img className="w-40" src={image[0]} alt={title} />
      <p className="mb-2">{price}€</p>
      <Link
        to={`/products/${to}`}
        className="text-red-400 rounded-full border py-1 px-2"
      >
        View more details
      </Link>
    </div>
  );
}
