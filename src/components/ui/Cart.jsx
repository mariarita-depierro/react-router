import { ShoppingCart } from "lucide-react";
import { useCartContext } from "../../contexts/CartContext";
import { NavLink } from "react-router";

export default function Cart() {
  const { totalCartProds } = useCartContext();

  return (
    <NavLink to="/cart" className="relative">
      <div className="absolute top-25 right-5">
        <ShoppingCart></ShoppingCart>
      </div>
      <div className="flex">
        <span className="absolute bottom-0 right-3 rounded-full px-2 w-2 h-2 text-white">
          {totalCartProds}
        </span>
      </div>
    </NavLink>
  );
}
