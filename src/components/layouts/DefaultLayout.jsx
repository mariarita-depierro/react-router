import { Outlet } from "react-router";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";
import { CartContextProvider } from "../../contexts/CartContext";

export default function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <CartContextProvider>
        <HeaderLayout />
        <main className="flex-1">
          <Outlet />
        </main>
        <FooterLayout />
      </CartContextProvider>
    </div>
  );
}
