import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Globe, Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="h-[75px] ">
      <nav className="h-full max-w-[1380px] w-full pt-2 px-[30px] flex place-content-center justify-between items-center">
        <div className="md:flex justify-between items-center place-content-center gap-4 ">
          <span className="font-bold text-4xl">miro</span>
          <div className="md:hidden md:pt-6">
            <button onClick={toggleMenu}>
              <Menu />
            </button>
          </div>
          <ul
            className={`md:flex space-x-5 items-center ${
              showMenu ? "block" : "hidden"
            }`}
          >
            <NavLink to="/product" className="flex items-center">
              Product
            </NavLink>
            <NavLink to="/solution" className="flex items-center">
              Solution
            </NavLink>
            <NavLink to="/contact" className="flex items-center">
              Resources
            </NavLink>
            <NavLink to="/resources" className="flex items-center">
              Enterprise
            </NavLink>
            <NavLink to="/pricing" className="flex items-center">
              Pricing
            </NavLink>
          </ul>
        </div>
        <div className="flex justify-between items-center md:hidden ">
          <span className="text-center">
            <Globe />
          </span>
          <button onClick={toggleMenu} className="md:hidden">
            <ArrowDown />
          </button>
        </div>
        <ul
          className={`md:flex space-x-5 items-center ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <NavLink to="/en">En</NavLink>
          <NavLink to="/contactSales">Contact Sales</NavLink>
          <NavLink to="/login">Login</NavLink>
          <Button className="bg-blue-500 rounded-full">
            Sign up free <ArrowRight />
          </Button>
        </ul>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
