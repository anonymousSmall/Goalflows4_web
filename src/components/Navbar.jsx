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
      <div
  className={`md:hidden bg-white transition-all duration-300 ${
    menuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
  }`}
>
  <div className="overflow-y-auto max-h-screen">

    <ul className="flex flex-col text-black">

      {/* HOME */}
      <li className="p-4 border-b">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          หน้าแรก
        </Link>
      </li>

      {/* PRODUCT */}
      <li className="border-b">

        {/* LEVEL 1 */}
        <div
          className="p-4 flex justify-between items-center cursor-pointer"
          onClick={() => {
            handleToggle("product");
            setSubMenu(null); // reset submenu
          }}
        >
          <span>สินค้าของเรา</span>
          <span className="text-lg">
            {openMenu === "product" ? "−" : "+"}
          </span>
        </div>

        {/* LEVEL 2 */}
        <div
          className={`bg-gray-50 transition-all duration-300 ${
            openMenu === "product" ? "block" : "hidden"
          }`}
        >

          {/* SUB 1 */}
          <div
            className="pl-6 py-3 flex justify-between cursor-pointer border-b"
            onClick={() => handleSubToggle("measure")}
          >
            เครื่องวัดขนาด
            <span>{subMenu === "measure" ? "−" : "+"}</span>
          </div>

          <div
            className={`pl-10 bg-gray-100 ${
              subMenu === "measure" ? "block" : "hidden"
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
            <span>{subMenu === "tool" ? "−" : "+"}</span>
          </div>

          <div
            className={`pl-10 bg-gray-100 ${
              subMenu === "tool" ? "block" : "hidden"
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
            <span>{subMenu === "test" ? "−" : "+"}</span>
          </div>

          <div
            className={`pl-10 bg-gray-100 ${
              subMenu === "test" ? "block" : "hidden"
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
          <span>{openMenu === "service" ? "−" : "+"}</span>
        </div>

        <div className={`${openMenu === "service" ? "block" : "hidden"} pl-6 bg-gray-50`}>
          <p className="py-2">สอบเทียบ ISO17025</p>
          <p className="py-2">ซ่อมเครื่องมือ</p>
          <p className="py-2">อบรม</p>
        </div>
      </li>

      {/* CONTACT */}
      <li className="p-4 border-b">
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          ติดต่อเรา
        </Link>
      </li>

      {/* BUTTON */}
      <li className="p-4 flex flex-col gap-2">
        <button className="border py-2 rounded">Login</button>
        <button className="bg-green-500 text-white py-2 rounded">
          Sign up
        </button>
      </li>

    </ul>
  </div>
</div>
    </nav>
  );
}
