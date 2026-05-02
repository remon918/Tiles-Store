"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2f4358] text-gray-300 pt-12 pb-6 px-6 md:px-16 ">
      <div className=" md:hidden mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">dbl</h1>
        <p className="mb-4 text-sm">CERAMICS</p>

        <p className="mb-3 text-white">FOLLOW US</p>
        <div className="flex gap-3 mb-4">
          {[
            FaFacebookF,
            FaInstagram,
            FaYoutube,
            FaLinkedinIn,
            FaPinterestP,
          ].map((Icon, i) => (
            <div
              key={i}
              className="border p-2 rounded-full hover:bg-white hover:text-black cursor-pointer"
            >
              <Icon size={14} />
            </div>
          ))}
        </div>

        <span className="text-sm mb-2 flex items-center gap-2">
          <FaPhoneAlt />
          <p>09638113300</p>
        </span>
        <p className="text-sm">✉️ info@dblceramics.com</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo + Social */}
          <div className=" md:block hidden">
        <h1 className="text-3xl font-bold text-white mb-2">dbl</h1>
        <p className="mb-4 text-sm">CERAMICS</p>

        <p className="mb-3 text-white">FOLLOW US</p>
        <div className="flex gap-3 mb-4">
          {[
            FaFacebookF,
            FaInstagram,
            FaYoutube,
            FaLinkedinIn,
            FaPinterestP,
          ].map((Icon, i) => (
            <div
              key={i}
              className="border p-2 rounded-full hover:bg-white hover:text-black cursor-pointer"
            >
              <Icon size={14} />
            </div>
          ))}
        </div>

        <span className="text-sm mb-2 flex items-center gap-2">
          <FaPhoneAlt />
          <p>09638113300</p>
        </span>
        <p className="text-sm">✉️ info@dblceramics.com</p>
      </div>
        {/* Quick Links */}
        <div>
          <h2 className="text-white font-semibold mb-4">QUICK LINKS</h2>
          <ul className="space-y-2 text-sm">
            {[
              "All Products",
              "Download",
              "Display Center",
              "Dealer Profile",
              "Latest Collection",
              "Room Visualizer",
              "Blog",
              "Neuro Tiles",
            ].map((item, i) => (
              <li key={i} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h2 className="text-white font-semibold mb-4">ABOUT US</h2>
          <ul className="space-y-2 text-sm">
            {[
              "About Us",
              "Why Choose Us",
              "News And Events",
              "FAQ",
              "Our Projects",
            ].map((item, i) => (
              <li key={i} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="text-white font-semibold mb-4">CUSTOMER SERVICE</h2>
          <ul className="space-y-2 text-sm">
            {["Contact Us", "Store Locator", "Tiles Calculator"].map(
              (item, i) => (
                <li key={i} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Office Info */}
        <div>
          <h2 className="text-white font-semibold mb-4">CORPORATE OFFICE</h2>
          <p className="text-sm mb-4">
            2nd Floor, House 10, Road 04, Gulshan 1, Dhaka 1212, Bangladesh
          </p>
          <div className="">
            <h2 className="text-white font-semibold mb-2">FACTORY</h2>
            <p className="text-sm">Dhanua, Sreepur, Gazipur, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-500 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2026 DBL Ceramics Limited All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">
            Terms And Conditions
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
