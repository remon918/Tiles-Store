import Image from "next/image";
import avatar from "@/assets/user.png";
import Link from "next/link";
import NavLink from "./NavLink";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  return (
    <div className="pb-4 shadow-sm">
      <div className="flex justify-between items-center w-[97%] mx-auto md:w-[85%] mt-4 relative">
        <div className="flex items-center gap-1">
          <DropDownMenu />

          <h2 className="font-semibold text-lg md:font-bold text-blue-100 bg-linear-to-r from-purple-400 to-blue-500 p-1.5 md:px-5 px-2 rounded-md md:text-2xl">
            <Link href="/">
              <span className="text-amber-300">DBL</span> Ceramics
            </Link>
          </h2>
        </div>

        <ul className="gap-7 md:gap-15 font-medium text-gray-700 md:flex hidden text-center">
          <li className="hover:bg-gray-200 p-2">
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li className="hover:bg-gray-200 p-2">
            <NavLink href={"/alltiles"}>All Tiles</NavLink>
          </li>
          <li className="hover:bg-gray-200 p-2">
            <NavLink href={"/tiles-cart"}>Tiles cart</NavLink>
          </li>
          <li className="hover:bg-gray-200 p-2">
            <NavLink href={"/profile"}>Profile</NavLink>
          </li>
        </ul>

        <div className="flex justify-center items-center md:gap-3 gap-1">
          <Image
            className="mx-auto"
            src={avatar}
            width={30}
            height={30}
            alt="avatar"
          />
          <button className="btn text-sm bg-blue-500 text-white md:px-4 px-1 py-0.5 rounded-md hover:bg-blue-400">
            <Link href={"/login"}>Sign Up</Link>
          </button>
          <button className="btn bg-purple-500 text-white p-1.5 md:px-4 text-sm rounded-md hover:bg-purple-400">
            <Link href={"/login"}>Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
