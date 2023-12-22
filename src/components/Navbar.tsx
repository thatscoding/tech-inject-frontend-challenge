import { RxHamburgerMenu } from "react-icons/rx";
import { IoCaretDown } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex h-20 border w-full items-center">
        <div className="w-full lg:w-[55%] border h-full flex items-center justify-between  ">
          <h1 className="font-inter font-bold text-4xl w-20 border h-full  flex justify-center items-center hover:text-[#609ca9] ease-in-out duration-150">
            W
          </h1>
          <div className="hidden lg:flex">
            <ul className="flex gap-6 pr-4 text-base ">
              <li className="hover:text-[#609ca9] ease-in-out duration-150">
                About Us
              </li>
              <li className="hover:text-[#609ca9] ease-in-out duration-150">
                Wines
              </li>
              <li className="hover:text-[#609ca9] ease-in-out duration-150">
                Our Story
              </li>
              <li className="hover:text-[#609ca9] ease-in-out duration-150">
                <Link to={"/login"}>Login</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[45%]  h-full hidden lg:flex">
          <div className="w-[60%] border h-full flex items-center justify-between px-4">
            <div className="flex gap-x-2 items-center cursor-pointer">
              En
              <span>
                <IoCaretDown />
              </span>
            </div>
            <div className="cursor-pointer">
              <RxHamburgerMenu />
            </div>
          </div>
          <div className="w-[40%] border h-full flex items-center justify-center px-4">
            <div className="flex gap-x-2 items-center cursor-pointer">
              <span>
                <FaShoppingBag />
              </span>
              <span className="flex  items-center">
                <FaEuroSign className="text-sm" />
                <span className="text-sm">3200</span>
              </span>
            </div>
          </div>
        </div>
        <div className="cursor-pointer lg:hidden pr-6">
          <RxHamburgerMenu size={30} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
