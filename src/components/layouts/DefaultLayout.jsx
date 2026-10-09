import { Outlet } from "react-router";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

export default function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <HeaderLayout />
      <main className="flex-1">
        <Outlet />
      </main>
      <FooterLayout />
    </div>
  );
}
