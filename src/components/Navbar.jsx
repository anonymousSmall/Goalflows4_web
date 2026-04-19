import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/image/GF-1.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(null);
  const [hoverMenu, setHoverMenu] = useState(false);

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
          <li
            className="relative"
            onMouseEnter={() => setHoverMenu(true)}
            onMouseLeave={() => setHoverMenu(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              สินค้าของเรา
              <motion.span
                animate={{ rotate: hoverMenu ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </div>

            {/* 🔥 ANIMATED MEGA MENU */}
            <AnimatePresence>
              {hoverMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 top-full w-[1000px] bg-white text-black shadow-2xl rounded-xl p-8"
                >

                  <div className="grid grid-cols-4 gap-6">

                    <div>
                      <h4 className="font-bold mb-3 text-[#003b6e]">เครื่องวัดขนาด</h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-600 cursor-pointer">2.5D</li>
                        <li className="hover:text-blue-600 cursor-pointer">Profile</li>
                        <li className="hover:text-blue-600 cursor-pointer">CCD</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 text-[#003b6e]">เครื่องมือวัด</h4>
                      <ul className="space-y-2">
                        <li>Vernier</li>
                        <li>Micrometer</li>
                        <li>Height Gauge</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 text-[#003b6e]">เครื่องทดสอบ</h4>
                      <ul className="space-y-2">
                        <li>Hardness</li>
                        <li>Tensile</li>
                        <li>Salt Spray</li>
                      </ul>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-[#003b6e]">🔥 แนะนำ</h4>
                      <p className="text-sm mb-3">3D Measurement รุ่นใหม่</p>
                      <button className="bg-blue-600 text-white px-3 py-2 rounded">
                        ดูสินค้า
                      </button>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link to="/contact">ติดต่อเรา</Link>
          </li>
        </ul>

        {/* MOBILE BTN */}
        <div className="md:hidden text-white text-xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white overflow-hidden"
          >
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
                  <motion.span
                    animate={{ rotate: mobileOpen === "product" ? 180 : 0 }}
                  >
                    ▼
                  </motion.span>
                </div>

                <AnimatePresence>
                  {mobileOpen === "product" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-6 pb-4"
                    >
                      <p className="font-semibold">เครื่องวัดขนาด</p>
                      <p className="ml-3 py-1">2.5D</p>
                      <p className="ml-3 py-1">CCD</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li className="p-4 border-b">
                <Link to="/contact">ติดต่อเรา</Link>
              </li>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
