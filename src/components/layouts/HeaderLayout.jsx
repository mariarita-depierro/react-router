import { Link } from "react-router";
import Navbar from "../ui/Navbar";
import logo from "../../assets/logo-beauty-glam.jpg";

export default function HeaderLayout() {
  return (
    <header className="bg-red-300 p-4 ">
      <div className="flex gap-2 uppercase">
        <Link to="/">
          <img
            className="w-70 h-40 rounded"
            src={logo}
            alt="logo beauty-glam"
          />
        </Link>
        <h1 className="text-lg font-semibold">Nuove Collezioni Disponibili!</h1>
      </div>

      <Navbar />
    </header>
  );
}
