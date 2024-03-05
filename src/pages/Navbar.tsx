import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Globe } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[75px] ">
      <nav
        className=" h-full max-w-[1380px] w-full px-[30px]
      flex justify-between items-center  "
      >
        <div className="md:flex justify-between items-center gap-4 ">
          <span className="font-bold text-4xl place-content-around ">miro</span>
          <ul className="flex space-x-5 items-center">
            <NavLink to="/product" className="flex items-center">
              Product <ArrowDown />
            </NavLink>
            <NavLink to="/solution" className="flex items-center">
              Solution <ArrowDown />
            </NavLink>
            <NavLink to="/contact" className="flex items-center">
              Resources <ArrowDown />
            </NavLink>
            <NavLink to="/resources" className="flex items-center">
              Enterprise <ArrowDown />
            </NavLink>
            <NavLink to="/pricing" className="flex items-center">
              Pricing <ArrowDown />
            </NavLink>
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-center">
            <Globe />
          </span>
          <ul className="space-x-5 ">
            <NavLink to="/en">En</NavLink>
            <NavLink to="/contactSales">Contact Sales</NavLink>
            <NavLink to="/login">Login</NavLink>
            <Button className="bg-blue-500 rounded-full">
              Sign up free <ArrowRight />
            </Button>
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
