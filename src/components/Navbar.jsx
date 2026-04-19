import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/image/GF-1.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [subMenu, setSubMenu] = useState(null); // ✅ เพิ่ม

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleToggle = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
    setSubMenu(null); // ✅ reset submenu
  };

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

            <div className="absolute left-0 top-full w-[260px] bg-white text-black shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="p-3 hover:bg-gray-100">เครื่องวัดขนาดชิ้นงานผลิต</div>
              <div className="p-3 hover:bg-gray-100">เครื่องวัดชิ้นงานแบบสัมผัส</div>
              <div className="p-3 hover:bg-gray-100">เครื่องเทสชิ้นงาน</div>
              <div className="p-3 hover:bg-gray-100">เครื่องมือวัดชิ้นงาน</div>
              <div className="p-3 hover:bg-gray-100">เครื่องมือตรวจสอบต่างๆ</div>
              <div className="p-3 hover:bg-gray-100">เครื่องมือทดสอบห้องปฏิบัติการ</div>
              <div className="p-3 hover:bg-gray-100">เครื่องชั่งน้ำหนัก</div>
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

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden bg-white transition-all duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="overflow-y-auto max-h-screen">

          <ul className="flex flex-col text-black">

            {/* HOME */}
            <li className="p-4 border-b">
              <Link to="/" onClick={() => setMenuOpen(false)}>หน้าแรก</Link>
            </li>

            {/* PRODUCT */}
            <li className="border-b">

              {/* LEVEL 1 */}
              <div
                 className="p-4 pr-6 flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle("product")}
              >
                สินค้าของเรา
                <span className="ml-2 text-lg font-semibold transition-transform duration-300">
                      {openMenu === "product" ? "−" : "+"}
                </span>
              </div>

              {/* LEVEL 2 */}
              <div className={`${openMenu === "product" ? "block" : "hidden"} bg-gray-50`}>

                {/* SUB 1 */}
                <div
                  className="p-4 pl-6 py-3 flex justify-between cursor-pointer border-b"
                  onClick={() => handleSubToggle("measure")}
                >
                  เครื่องวัดขนาดชิ้นงานผลิต
                  <span>{subMenu === "measure" ? "−" : "+"}</span>
                </div>

                <div className={`${subMenu === "measure" ? "block" : "hidden"} pl-10 bg-gray-100`}>
                  <p className="py-2">กล้องวัดขนาดชิ้นงาน2.5D</p>
                  <p className="py-2">Profile Projector</p>
                  <p className="py-2">CCD Camera</p>
                </div>

                {/* SUB 2 */}
                <div
                  className="p-4 pl-6 py-3 flex justify-between cursor-pointer border-b"
                  onClick={() => handleSubToggle("tool")}
                >
                  เครื่องวัดชิ้นงานแบบสัมผัส
                  <span
                    className={`ml-2 text-lg transition-transform duration-300 ${
                    openMenu === "tool" ? "rotate-45" : ""
                    }`}
                    >
                      +
                  </span>
                </div>

                <div className={`${subMenu === "tool" ? "block" : "hidden"} pl-10 bg-gray-100`}>
                  <p className="py-2">CONTOUR</p>
                  <p className="py-2">ROUNGNESS</p>
                  <p className="py-2">SURFTEST</p>
                  <p className="py-2">COORDINATE MEASURING MACHINE</p>
                  <p className="py-2">PROTABLE CMM ARM</p>
                </div>

                {/* SUB 3 */}
                <div
                  className="p-4 pl-6 py-3 flex justify-between cursor-pointer"
                  onClick={() => handleSubToggle("test")}
                >
                  เครื่องเทสชิ้นงาน
                  <span>{subMenu === "test" ? "−" : "+"}</span>
                </div>

                <div className={`${subMenu === "test" ? "block" : "hidden"} pl-10 bg-gray-100`}>
                  <p className="py-2">HARDNESS TEST</p>
                  <p className="py-2">PUSH PULL TESTER</p>
                  <p className="py-2">CUTTING / POLISHING MACHINE</p>
                  <p className="py-2">TENSILE MACHINE</p>
                  <p className="py-2">SALT SPRAY</p>
                  <p className="py-2">OVEN</p>
                </div>
                
                {/* SUB 4 */}
                <div
                  className="p-4 pl-6 py-3 flex justify-between cursor-pointer"
                  onClick={() => handleSubToggle("test1")}
                >
                  เครื่องมือวัดชิ้นงาน
                  <span>{subMenu === "test1" ? "−" : "+"}</span>
                </div>

                <div className={`${subMenu === "test1" ? "block" : "hidden"} pl-10 bg-gray-100`}>
                  <p className="py-2">VERNIER CALIPER</p>
                  <p className="py-2">MICROMETER</p>
                  <p className="py-2">DIAL INDICATOR / DIAL TEST</p>
                  <p className="py-2">HEIGHT GAUGE</p>
                  <p className="py-2">THICKNESS GAUGE</p>
                  <p className="py-2">HOLE TEST / BORE GAUGE</p>
                  <p className="py-2">DIAL TEST</p>
                </div>
                
                {/* SUB 5 */}
                <div
                  className="p-4 pl-6 py-3 flex justify-between cursor-pointer"
                  onClick={() => handleSubToggle("test2")}
                >
                  เครื่องมือตรวจสอบต่างๆ
                  <span>{subMenu === "test2" ? "−" : "+"}</span>
                </div>

                <div className={`${subMenu === "test2" ? "block" : "hidden"} pl-10 bg-gray-100`}>
                  <p className="py-2">FEELIER GAUGE</p>
                  <p className="py-2">SCALE LUPE</p>
                  <p className="py-2">PIN GAUGE / GAUGE BLOCK</p>
                  <p className="py-2">PLUG GAUGE / RING GAUGE</p>
                  <p className="py-2">TORQUE WRENCH</p>
                  <p className="py-2">GRANIT / CAST IRON SURFACE</p>
                </div>
                
                {/* SUB 6 */}
                <div
                  className="p-4 pl-6 py-3 flex justify-between cursor-pointer"
                  onClick={() => handleSubToggle("test3")}
                >
                  เครื่องมือทดสอบห้องปฏิบัติการ
                  <span>{subMenu === "test3" ? "−" : "+"}</span>
                </div>

                <div className={`${subMenu === "test3" ? "block" : "hidden"} pl-10 bg-gray-100`}>
                  <p className="py-2">THERMOMETER</p>
                  <p className="py-2">CONDUCTIVITY</p>
                  <p className="py-2">BRIX METER</p>
                  <p className="py-2">TRUE METER</p>
                  <p className="py-2">LIGHT METER</p>
                  <p className="py-2">VOICE METER / SOUND METER</p>
                  <p className="py-2">GAUSS METER</p>
                  <p className="py-2">GLOSS METER</p>
                  <p className="py-2">MAGNETIC FIELD TESTER</p>
                  <p className="py-2">DEMAGNETIZER</p>
                </div>
                
                {/* SUB 7 */}
                <div
                  className="p-4 pl-6 py-3 flex justify-between cursor-pointer"
                  onClick={() => handleSubToggle("test4")}
                >
                  เครื่องชั่งน้ำหนัก
                  <span>{subMenu === "test4" ? "−" : "+"}</span>
                </div>

                <div className={`${subMenu === "test4" ? "block" : "hidden"} pl-10 bg-gray-100`}>
                  <p className="py-2">INDUSTRIAL BALANCE</p>
                  <p className="py-2">HOSPITAL BALANCE</p>
                  <p className="py-2">ANIMAL SCALE</p>
                </div>

              </div>
            </li>

            {/* SERVICE */}
            <li className="border-b">
              <div
                className="p-4 pr-6 flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle("service")}
              >
                บริการ
                <span>{openMenu === "service" ? "−" : "+"}</span>
              </div>

              <div className={`${openMenu === "service" ? "block" : "hidden"} pl-6 bg-gray-50`}>
                <p className="py-2">สอบเทียบ ISO17025</p>
                <p className="py-2">ซ่อมเครื่องมือ</p>
                <p className="py-2">บำรุงรักษาเครื่องมือ เครื่องจักร</p>
                <p className="py-2">อบรมการใช้งาน</p>
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
