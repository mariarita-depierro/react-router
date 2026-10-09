import { NavLink } from "react-router";
import { navLink } from "../../lib/vars";

export default function Navbar() {
  return (
    <nav className="self-end justify-self-end">
      <ul className="flex gap-3">
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
