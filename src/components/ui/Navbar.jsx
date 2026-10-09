import { NavLink } from "react-router";
import { navLink } from "../../lib/vars";

export default function Navbar() {
  return (
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
  );
}
