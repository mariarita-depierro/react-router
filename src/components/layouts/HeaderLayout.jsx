import { Link } from "react-router";

export default function HeaderLayout() {
  return (
    <header className="bg-blue-700 text-white p-4 text-center">
      Header
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about-us">About US</Link>
      </nav>
    </header>
  );
}
