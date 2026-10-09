import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="p-4">
      <h1 className="text-3xl mb-4 font-bold">Errore 404 - Page Not Found!</h1>
      <p className="mb-2">
        Are you sure what you are looking for is on this site?
      </p>
      <Link className="underline" to={"/products"}>
        Back to Products
      </Link>
    </section>
  );
}
