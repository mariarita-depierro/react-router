import { Frown } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="flex flex-col text-center pt-4">
      <Frown className="self-center" size={100} />
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
