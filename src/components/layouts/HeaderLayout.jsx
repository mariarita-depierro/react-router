import { Link } from "react-router";
import Navbar from "../ui/Navbar";
import logo from "../../assets/logo-beauty-glam.jpg";
import Cart from "../ui/Cart";

export default function HeaderLayout() {
  return (
    <header className="grid grid-cols-3 bg-red-300 p-4 uppercase">
      <Link to="/">
        <img className="w-50 h-30 rounded" src={logo} alt="logo beauty-glam" />
      </Link>
      <h1 className="text-2xl font-semibold italic self-center">
        Nuove Collezioni Disponibili!
      </h1>
      <div className="flex justify-end">
        <Cart></Cart>
        <Navbar />
      </div>
    </header>
  );
}
