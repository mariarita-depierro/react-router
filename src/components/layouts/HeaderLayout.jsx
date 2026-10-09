import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";
import Navbar from "../ui/Navbar";

export default function HeaderLayout() {
  return (
    <header className="bg-red-300 p-4 ">
      <Link className="uppercase" to="/">
        <div className="flex gap-2 justify-center">
          <h1>My E-commerce</h1>
          <span>
            <ShoppingCart />
          </span>{" "}
        </div>
      </Link>
      <Navbar />
    </header>
  );
}
