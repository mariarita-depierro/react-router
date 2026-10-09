import { Link, NavLink } from "react-router";
import { navLink } from "../../lib/vars";
import { ShoppingCart } from "lucide-react";

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
      <nav>
        <ul className="flex gap-2 justify-end uppercase">
          {navLink.map((item) => (
            <li key={item.path}>
              <NavLink
                className={({ isActive }) => (isActive ? "font-bold" : "")}
                to={item.path}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
