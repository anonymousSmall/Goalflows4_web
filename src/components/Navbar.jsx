import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/image/GF-1.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleToggle = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const [subMenu, setSubMenu] = useState(null);

const handleSubToggle = (menu) => {
  setSubMenu(subMenu === menu ? null : menu);
};

  return (
    <nav className="fixed w-full z-50 bg-[#003b6e]/90 backdrop-blur-md shadow-lg">
      <div className="max-w-[1320px] mx-auto px-4 flex justify-between items-center h-[70px]">

        {/* LOGO */}
        <Link to="/">
          <img src={logo} className="h-12" alt="logo" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <Link to="/">หน้าแรก</Link>
          </li>

          {/* PRODUCT */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              สินค้าของเรา ▼
            </div>

            {/* DROPDOWN */}
            <div className="absolute left-0 top-full w-[260px] bg-white text-black shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="p-3 hover:bg-gray-100">เครื่องวัดขนาด</div>
              <div className="p-3 hover:bg-gray-100">เครื่องมือวัด</div>
              <div className="p-3 hover:bg-gray-100">เครื่องทดสอบ</div>
            </div>
          </li>

          {/* SERVICE */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              บริการ ▼
            </div>

            <div className="absolute left-0 top-full w-[220px] bg-white text-black shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="p-3 hover:bg-gray-100">สอบเทียบ</div>
              <div className="p-3 hover:bg-gray-100">ซ่อมเครื่องมือ</div>
              <div className="p-3 hover:bg-gray-100">อบรม</div>
            </div>
          </li>

          <li>
            <Link to="/contact">ติดต่อเรา</Link>
          </li>
        </ul>

        {/* RIGHT BUTTON */}
        <div className="hidden md:flex gap-3">
          <button className="text-white">Login</button>
          <button className="bg-green-500 px-4 py-1 rounded text-white">
            Sign up
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden text-white text-xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col text-black">

          <li className="p-4 border-b">
            <Link to="/" onClick={() => setMenuOpen(false)}>หน้าแรก</Link>
          </li>

          <li className="border-b">
  {/* MAIN MENU */}
  <div
    className="p-4 flex justify-between cursor-pointer"
    onClick={() => handleToggle("product")}
  >
    สินค้าของเรา
    <span>{openMenu === "product" ? "-" : "+"}</span>
  </div>

  {/* LEVEL 1 */}
  <div
    className={`bg-gray-50 transition-all duration-300 ${
      openMenu === "product"
        ? "max-h-[1000px]"
        : "max-h-0 overflow-hidden"
    }`}
  >
    {/* SUB 1 */}
    <div
      className="pl-6 py-3 flex justify-between cursor-pointer border-b"
      onClick={() => handleSubToggle("measure")}
    >
      เครื่องวัดขนาด
      <span>{subMenu === "measure" ? "-" : "+"}</span>
    </div>

    {/* LEVEL 2 */}
    <div
      className={`pl-10 bg-gray-100 transition-all duration-300 ${
        subMenu === "measure"
          ? "max-h-[500px]"
          : "max-h-0 overflow-hidden"
      }`}
    >
      <p className="py-2">2.5D</p>
      <p className="py-2">Profile Projector</p>
      <p className="py-2">CCD Camera</p>
    </div>

    {/* SUB 2 */}
    <div
      className="pl-6 py-3 flex justify-between cursor-pointer border-b"
      onClick={() => handleSubToggle("tool")}
    >
      เครื่องมือวัด
      <span>{subMenu === "tool" ? "-" : "+"}</span>
    </div>

    <div
      className={`pl-10 bg-gray-100 transition-all duration-300 ${
        subMenu === "tool"
          ? "max-h-[500px]"
          : "max-h-0 overflow-hidden"
      }`}
    >
      <p className="py-2">Vernier</p>
      <p className="py-2">Micrometer</p>
      <p className="py-2">Height Gauge</p>
    </div>

    {/* SUB 3 */}
    <div
      className="pl-6 py-3 flex justify-between cursor-pointer"
      onClick={() => handleSubToggle("test")}
    >
      เครื่องทดสอบ
      <span>{subMenu === "test" ? "-" : "+"}</span>
    </div>

    <div
      className={`pl-10 bg-gray-100 transition-all duration-300 ${
        subMenu === "test"
          ? "max-h-[500px]"
          : "max-h-0 overflow-hidden"
      }`}
    >
      <p className="py-2">Hardness</p>
      <p className="py-2">Tensile</p>
      <p className="py-2">Salt Spray</p>
    </div>
  </div>
</li>
          

          {/* SERVICE */}
          <li className="border-b">
            <div
              className="p-4 flex justify-between cursor-pointer"
              onClick={() => handleToggle("service")}
            >
              บริการ
              <span>{openMenu === "service" ? "-" : "+"}</span>
            </div>

            <div
              className={`pl-6 bg-gray-50 transition-all duration-300 ${
                openMenu === "service" ? "max-h-[500px]" : "max-h-0 overflow-hidden"
              }`}
            >
              <p className="py-2">สอบเทียบ ISO17025</p>
              <p className="py-2">ซ่อมเครื่องมือ</p>
              <p className="py-2">อบรม</p>
            </div>
          </li>

          <li className="p-4 border-b">
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              ติดต่อเรา
            </Link>
          </li>

          {/* BUTTON */}
          <li className="p-4 flex flex-col gap-2">
            <button className="border py-2">Login</button>
            <button className="bg-green-500 text-white py-2 rounded">
              Sign up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
