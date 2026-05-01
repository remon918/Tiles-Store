import Image from "next/image";
import avatar from "@/assets/user.png";
import Link from "next/link";
import NavLink from "./NavLink";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  return (
    <div className="pb-4 shadow-md">
      <div className="flex justify-between items-center gap-10 md:gap-55 mx-10 md:mx-27 mt-4 relative">
        <div className="flex items-center gap-3">
          {/* Hamburger - only on small devices */}
          <DropDownMenu />

          {/* Logo */}
          <h2 className="font-bold text-xl text-blue-100 bg-linear-to-r from-purple-500 to-blue-600 p-2 rounded-md">
            <Link href="/">
              <span className="text-amber-300">DBL</span> Ceramics
            </Link>
          </h2>
        </div>

        {/* Desktop nav links */}
        <ul className="gap-7 md:gap-15 font-medium text-gray-700 md:flex hidden">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/all-tiles"}>All Tiles</NavLink>
          </li>
          <li>
            <NavLink href={"/tiles-cart"}>Tiles cart</NavLink>
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
          <button className="btn bg-blue-500 text-white p-2 px-4 rounded-md">
            <Link href={"/login"}>Sign Up</Link>
          </button>
          <button className="btn bg-purple-500 text-white p-2 px-4 rounded-md">
            <Link href={"/login"}>Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
