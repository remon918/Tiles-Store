import Image from "next/image";
import avatar from "@/assets/user.png";
import Link from "next/link";
import NavLink from "./NavLink";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  return (
    <div className="pb-4 shadow-md">
      <div className="flex justify-between items-center w-[93%] mx-auto md:w-[85%] mt-4 relative">
        <div className="flex items-center gap-3">
          {/* Hamburger - only on small devices */}
          <DropDownMenu />

          {/* Logo */}
          <h2 className="font-bold text-xl text-blue-100 bg-linear-to-r from-purple-400 to-blue-500 p-1.5 md:px-5 px-3 rounded-md">
            <Link href="/">
              <span className="text-amber-300">DBL</span> Ceramics
            </Link>
          </h2>
        </div>

        {/* Desktop nav links */}
        <ul className="gap-7 md:gap-15 font-medium text-gray-700 md:flex hidden text-center">
          <li className="hover:bg-gray-200 p-2">
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li className="hover:bg-gray-200 p-2">
            <NavLink href={"/tiles"}>All Tiles</NavLink>
          </li>
          <li className="hover:bg-gray-200 p-2">
            <NavLink href={"/tiles-cart"}>Tiles cart</NavLink>
          </li>
          <li className="hover:bg-gray-200 p-2">
            <NavLink href={"/profile"}>Profile</NavLink>
          </li>
        </ul>

        {/* Avatar + Login */}
        <div className="flex justify-center items-center gap-2">
          <Image
            className="mx-auto"
            src={avatar}
            width={30}
            height={30}
            alt="avatar"
          />
          <button className="btn bg-blue-500 text-white p-2 px-4 rounded-md hover:bg-blue-400">
            <Link href={"/login"}>Sign Up</Link>
          </button>
          <button className="btn bg-purple-500 text-white p-2 px-4 rounded-md hover:bg-purple-400">
            <Link href={"/login"}>Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
