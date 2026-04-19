import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/image/GF-1.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(null);

  const toggleMobileMenu = (menu) => {
    setMobileOpen(mobileOpen === menu ? null : menu);
  };

  return (
    <nav className="fixed w-full z-50 bg-[#003b6e]/90 backdrop-blur-md shadow-lg">
      <div className="max-w-[1320px] mx-auto px-4 flex justify-between items-center h-[70px]">

        {/* LOGO */}
        <Link to="/">
          <img src={logo} className="h-12" alt="logo" />
        </Link>

        {/* ================= DESKTOP ================= */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">

          <li>
            <Link to="/">หน้าแรก</Link>
          </li>

          {/* MEGA MENU */}
          <li className="relative group">

            <div className="cursor-pointer flex items-center gap-1">
              สินค้าของเรา ▼
            </div>

            {/* MEGA PANEL */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-[1000px] bg-white text-black shadow-2xl rounded-xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

              <div className="grid grid-cols-4 gap-6">

                {/* COLUMN 1 */}
                <div>
                  <h4 className="font-bold mb-3 text-[#003b6e]">
                    เครื่องวัดขนาด
                  </h4>
                  <ul className="space-y-2">
                    <li className="hover:text-blue-600 cursor-pointer">2.5D</li>
                    <li className="hover:text-blue-600 cursor-pointer">Profile Projector</li>
                    <li className="hover:text-blue-600 cursor-pointer">CCD Camera</li>
                  </ul>
                </div>

                {/* COLUMN 2 */}
                <div>
                  <h4 className="font-bold mb-3 text-[#003b6e]">
                    เครื่องวัดแบบสัมผัส
                  </h4>
                  <ul className="space-y-2">
                    <li className="hover:text-blue-600">CMM</li>
                    <li className="hover:text-blue-600">Roundness</li>
                    <li className="hover:text-blue-600">Contour</li>
                  </ul>
                </div>

                {/* COLUMN 3 */}
                <div>
                  <h4 className="font-bold mb-3 text-[#003b6e]">
                    เครื่องมือวัด
                  </h4>
                  <ul className="space-y-2">
                    <li>Vernier</li>
                    <li>Micrometer</li>
                    <li>Height Gauge</li>
                  </ul>
                </div>

                {/* COLUMN 4 (Highlight) */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-[#003b6e]">
                    🔥 แนะนำ
                  </h4>
                  <p className="text-sm mb-3">
                    เครื่องวัด 3D รุ่นใหม่ ความแม่นยำสูง
                  </p>
                  <button className="bg-blue-600 text-white px-3 py-2 rounded">
                    ดูสินค้า
                  </button>
                </div>

              </div>
            </div>
          </li>

          {/* SERVICE */}
          <li className="relative group">
            <div className="cursor-pointer">บริการ ▼</div>

            <div className="absolute left-0 top-full w-[220px] bg-white text-black shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="p-3 hover:bg-gray-100">สอบเทียบ</div>
              <div className="p-3 hover:bg-gray-100">ซ่อมเครื่องมือ</div>
              <div className="p-3 hover:bg-gray-100">อบรม</div>
            </div>
          </li>

          <li>
            <Link to="/contact">ติดต่อเรา</Link>
          </li>
        </ul>

        {/* RIGHT */}
        <div className="hidden md:flex gap-3">
          <button className="text-white">Login</button>
          <button className="bg-green-500 px-4 py-1 rounded text-white">
            Sign up
          </button>
        </div>

        {/* MOBILE BTN */}
        <div className="md:hidden text-white text-xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className={`md:hidden bg-white transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[1000px]" : "max-h-0"}`}>
        <ul className="flex flex-col text-black">

          <li className="p-4 border-b">
            <Link to="/">หน้าแรก</Link>
          </li>

          {/* PRODUCT */}
          <li className="border-b">
            <div
              className="p-4 flex justify-between cursor-pointer"
              onClick={() => toggleMobileMenu("product")}
            >
              สินค้าของเรา
              <span>{mobileOpen === "product" ? "-" : "+"}</span>
            </div>

            <div className={`${mobileOpen === "product" ? "block" : "hidden"} pl-6 pb-4`}>

              <p className="font-semibold mt-2">เครื่องวัดขนาด</p>
              <p className="ml-3 py-1">2.5D</p>
              <p className="ml-3 py-1">CCD</p>

              <p className="font-semibold mt-3">เครื่องมือวัด</p>
              <p className="ml-3 py-1">Vernier</p>
              <p className="ml-3 py-1">Micrometer</p>

            </div>
          </li>

          {/* SERVICE */}
          <li className="border-b">
            <div
              className="p-4 flex justify-between cursor-pointer"
              onClick={() => toggleMobileMenu("service")}
            >
              บริการ
              <span>{mobileOpen === "service" ? "-" : "+"}</span>
            </div>

            <div className={`${mobileOpen === "service" ? "block" : "hidden"} pl-6 pb-4`}>
              <p className="py-1">สอบเทียบ</p>
              <p className="py-1">ซ่อม</p>
              <p className="py-1">อบรม</p>
            </div>
          </li>

          <li className="p-4 border-b">
            <Link to="/contact">ติดต่อเรา</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
