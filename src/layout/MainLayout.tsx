import Footer from "@/pages/Footer";
import Navbar from "@/pages/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer  />
    </div>
  );
};

export default MainLayout;
