"use client";

import Image from "next/image";
import avatar from "@/assets/user.png";
import Link from "next/link";
import NavLink from "./NavLink";
import DropDownMenu from "./DropDownMenu";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <p className="mt-6 font-semibold flex justify-between mx-10 md:mx-40">
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-md"></span>
      </p>
    );
  }

  const user = session?.user;

  console.log(user);
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

        <ul className="gap-7 md:gap-7 font-medium text-gray-700 md:flex hidden text-center">
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
          {user ? (
            <div className="flex gap-1 md:gap-2 items-center">
              <Link href={"/profile"}>
                <Image
                  className="mx-auto rounded-full mr-0.5 md:mr-1 "
                  src={user.image || avatar}
                  width={32}
                  height={30}
                  alt="avatar"
                />
              </Link>
              <button
                onClick={async () => await authClient.signOut()}
                className="btn bg-red-500 hover:bg-red-400 text-white md:px-4 px-1 text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-1 md:gap-3">
              <Image
                  className="mr-0.5 md:mr-1 "
                  src={avatar}
                  width={30}
                  height={15}
                  alt="avatar"
                />
              <Link
                href={"/signup"}
                className="btn text-sm bg-blue-500 text-white md:px-4 px-1 py-0.5 rounded-md hover:bg-blue-400"
              >
                Sign Up
              </Link>
              <Link
                href={"/login"}
                className="btn bg-purple-500 text-white p-1.5 md:px-4 text-sm rounded-md hover:bg-purple-400"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
