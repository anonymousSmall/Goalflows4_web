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

    const handleSubToggles = (menu) => {
        setSubMenu(subMenu === menu ? null : menu);
    };

    return (
        <nav className='fixed w-full z-50 bg-[#003b6e]/70 backdrop-blur-md border-b border-[#003b6e]/40  shadow-xl transition-all top-0'>
            <div className="max-w-[1320px] mx-auto px-4 flex justify-between items-center h-[70px]">
                {/* LOGO */}
                <Link to="/">
                    {/* <img src={logo} className="h-12" alt="logo" /> */}
                    <img
                        src={logo}
                        className="h-20 drop-shadow-md transition-transform hover:scale-105"
                        alt=""
                    />
                </Link>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex items-center gap-8 text-white font-medium">
                    <li className="drop-shadow-md transition-transform hover:scale-105">
                        <Link to="/">หน้าแรก</Link>
                    </li>

                    <li className="drop-shadow-md transition-transform hover:scale-105">
                        <Link to="/Workandservices">เกี่ยวกับโกลโฟลฯ</Link>
                    </li>

                    {/* PRODUCT */}
                    <li className="relative group cursor-pointer">
                        <div className="flex items-center gap-1">สินค้าของเรา ▼</div>

                        {/* MAIN DROPDOWN */}
                        <div
                            className="absolute left-0 top-full w-[280px] bg-white text-black shadow-2xl 
  opacity-0 invisible translate-y-3 
  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
  transition-all duration-300 z-50 rounded-md"
                        >
                            <ul className="py-2">
                                {/* ITEM 1 */}
                                <li className="relative group/item">
                                    <div className="p-3 hover:bg-gray-100 flex justify-between items-center cursor-pointer">
                                        เครื่องวัดชิ้นงานด้านมิติ(Measuring Machine)
                                        <span>›</span>
                                    </div>

                                    {/* SUBMENU RIGHT */}
                                    <div
                                        className="absolute top-0 left-full w-[260px] bg-white shadow-xl 
        opacity-0 invisible -translate-x-3 
        group-hover/item:opacity-100 group-hover/item:visible group-hover/item:translate-x-0 
        transition-all duration-300 rounded-md"
                                    >
                                        <div className="p-3 hover:bg-gray-100">Video Measuring (VMM)</div>
                                        <div className="p-3 hover:bg-gray-100">Profile Projector</div>
                                        <div className="p-3 hover:bg-gray-100">CCD Camera / Stereo Microscope</div>
                                        <div className="p-3 hover:bg-gray-100">Coordinate Measuring Machine (CMM)</div>
                                        <div className="p-3 hover:bg-gray-100">Protable CMM Arm</div>
                                        <div className="p-3 hover:bg-gray-100">Contour Measuring Machine</div>
                                        <div className="p-3 hover:bg-gray-100">Surface Texture Measuring Machine</div>
                                        <div className="p-3 hover:bg-gray-100">Roundness Mesitn Machine</div>
                                    </div>
                                </li>

                                {/* ITEM 2 */}
                                <li className="relative group/item">
                                    <div className="p-3 hover:bg-gray-100 flex justify-between items-center cursor-pointer">
                                        เครื่องทดสอบชิ้นงาน (Testing Machine)
                                        <span>›</span>
                                    </div>

                                    <div
                                        className="absolute top-0 left-full w-[260px] bg-white shadow-xl 
        opacity-0 invisible -translate-x-3 
        group-hover/item:opacity-100 group-hover/item:visible group-hover/item:translate-x-0 
        transition-all duration-300 rounded-md"
                                    >
                                        <div className="p-3 hover:bg-gray-100">Cutting / Grinding Polishing / Mounting Machine</div>
                                        <div className="p-3 hover:bg-gray-100">Hardness Tester Machine</div>
                                        <div className="p-3 hover:bg-gray-100">Tensile Machine</div>
                                        <div className="p-3 hover:bg-gray-100">Salt Spray Machine</div>
                                        <div className="p-3 hover:bg-gray-100">Oven Machine</div>
                                        <div className="p-3 hover:bg-gray-100">Temperature & Humidity Chamber</div>
                                    </div>
                                </li>

                                {/* ITEM 3 */}
                                <li className="relative group/item">
                                    <div className="p-3 hover:bg-gray-100 flex justify-between items-center cursor-pointer">
                                        เครื่องมือวัดชิ้นงาน(Measuring Tools)
                                        <span>›</span>
                                    </div>

                                    <div
                                        className="absolute top-0 left-full w-[260px] bg-white shadow-xl 
  opacity-0 invisible -translate-x-3 
  group-hover/item:opacity-100 group-hover/item:visible group-hover/item:translate-x-0 
  transition-all duration-300 z-50
  max-h-[70vh] overflow-y-auto py-2
  scrollbar-thin scrollbar-thumb-gray-300
  pointer-events-auto rounded-md
  "
                                    >
                                        <div className="p-3 hover:bg-gray-100">Mitoyo</div>
                                        <div className="p-3 hover:bg-gray-100">Insize</div>
                                        <div className="p-3 hover:bg-gray-100">Teclock</div>
                                        <div className="p-3 hover:bg-gray-100">Peacock</div>
                                        <div className="p-3 hover:bg-gray-100">Shinwa</div>
                                        <div className="p-3 hover:bg-gray-100">Mitsuwa</div>
                                        <div className="p-3 hover:bg-gray-100">Fuji Tool</div>
                                        <div className="p-3 hover:bg-gray-100">Hunter</div>
                                        <div className="p-3 hover:bg-gray-100">Tsk</div>
                                        <div className="p-3 hover:bg-gray-100">Issoku</div>
                                        <div className="p-3 hover:bg-gray-100">Eisen</div>
                                        <div className="p-3 hover:bg-gray-100">SK</div>
                                        <div className="p-3 hover:bg-gray-100">Elcometer</div>
                                        <div className="p-3 hover:bg-gray-100">Defelshko</div>
                                        <div className="p-3 hover:bg-gray-100">Vertex</div>
                                        <div className="p-3 hover:bg-gray-100">Gin</div>
                                        <div className="p-3 hover:bg-gray-100">Noga</div>
                                        <div className="p-3 hover:bg-gray-100">Kanetec</div>
                                        <div className="p-3 hover:bg-gray-100">Fluke</div>
                                        <div className="p-3 hover:bg-gray-100">Yamamoto</div>
                                        <div className="p-3 hover:bg-gray-100">Kanon</div>
                                        <div className="p-3 hover:bg-gray-100">Imada</div>
                                        <div className="p-3 hover:bg-gray-100">Aikoh</div>
                                        <div className="p-3 hover:bg-gray-100">Tohnichi</div>
                                        <div className="p-3 hover:bg-gray-100">Hanna</div>
                                        <div className="p-3 hover:bg-gray-100">Lutron</div>
                                        <div className="p-3 hover:bg-gray-100">Extech</div>
                                        <div className="p-3 hover:bg-gray-100">Digicon</div>
                                        <div className="p-3 hover:bg-gray-100">CEM</div>
                                        <div className="p-3 hover:bg-gray-100">Smart Sensor</div>
                                        <div className="p-3 hover:bg-gray-100">Chuer</div>
                                        <div className="p-3 hover:bg-gray-100">เครื่องมืออื่นๆ</div>
                                    </div>
                                </li>
                                {/* ITEM 4 */}
                                <li className="relative group/item">
                                    <div className="p-3 hover:bg-gray-100 flex justify-between items-center cursor-pointer">
                                        เครื่องชั่ง(Balance)
                                        <span>›</span>
                                    </div>

                                    <div
                                        className="absolute top-0 left-full w-[260px] bg-white shadow-xl 
  opacity-0 invisible -translate-x-3 
  group-hover/item:opacity-100 group-hover/item:visible group-hover/item:translate-x-0 
  transition-all duration-300 z-50
  max-h-[70vh] overflow-y-auto py-2
  scrollbar-thin scrollbar-thumb-gray-300
  pointer-events-auto rounded-md
  "
                                    >
                                        <div className="p-3 hover:bg-gray-100">INDUSTRIAL BALANCE</div>
                                        <div className="p-3 hover:bg-gray-100">HOSPITAL BALANCE</div>
                                        <div className="p-3 hover:bg-gray-100">ANIMAL BALANCE</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="drop-shadow-md transition-transform hover:scale-105">
                        <Link to="#">Catalog</Link>
                    </li>

                    {/* SERVICE */}
                    <li className="relative group cursor-pointer">
                        <div className="flex items-center gap-1">บริการ ▼</div>

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
                className={`md:hidden bg-white transition-all duration-300 ${menuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
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
                        {/* Contact */}
                        <li className="p-4 border-b">
                            <Link to="#" onClick={() => setMenuOpen(false)}>
                                เกี่ยวกับโกลโฟลฯ
                            </Link>
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
                            <div
                                className={`${openMenu === "product" ? "block" : "hidden"} bg-gray-50`}
                            >
                                {/* SUB 1 */}
                                <div
                                    className="p-4 pl-6 py-3 flex justify-between cursor-pointer border-b"
                                    onClick={() => handleSubToggle("measure")}
                                >
                                    เครื่องวัดชิ้นงานด้านมิติ(Measuring Machine)
                                    <span>{subMenu === "measure" ? "−" : "+"}</span>
                                </div>

                                <div
                                    className={`${subMenu === "measure" ? "block" : "hidden"} pl-10 bg-gray-100`}
                                >
                                    <p className="py-2">Stereo Microscope (2D)</p>
                                    <p className="p-3 hover:bg-gray-100">Video Measuring (VMM)</p>
                                    <p className="p-3 hover:bg-gray-100">Profile Projector</p>
                                    <p className="p-3 hover:bg-gray-100">CCD Camera / Stereo Microscope</p>
                                    <p className="p-3 hover:bg-gray-100">Coordinate Measuring Machine (CMM)</p>
                                    <p className="p-3 hover:bg-gray-100">Protable CMM Arm</p>
                                    <p className="p-3 hover:bg-gray-100">Contour Measuring Machine</p>
                                    <p className="p-3 hover:bg-gray-100">Surface Texture Measuring Machine</p>
                                    <p className="p-3 hover:bg-gray-100">Roundness Mesitn Machine</p>
                                </div>

                                {/* SUB 2 */}
                                <div
                                    className="p-4 pl-6 py-3 flex justify-between cursor-pointer border-b"
                                    onClick={() => handleSubToggle("tool")}
                                >
                                    เครื่องทดสอบชิ้นงาน (Testing Machine)
                                    <span
                                        className={`ml-2 text-lg transition-transform duration-300 ${openMenu === "tool" ? "rotate-45" : ""
                                            }`}
                                    >
                                        +
                                    </span>
                                </div>

                                <div
                                    className={`${subMenu === "tool" ? "block" : "hidden"} pl-10 bg-gray-100`}
                                >
                                    <p className="p-3 hover:bg-gray-100">Cutting / Grinding Polishing / Mounting Machine</p>
                                    <p className="p-3 hover:bg-gray-100">Hardness Tester Machine</p>
                                    <p className="p-3 hover:bg-gray-100">Tensile Machine</p>
                                    <p className="p-3 hover:bg-gray-100">Salt Spray Machine</p>
                                    <p className="p-3 hover:bg-gray-100">Oven Machine</p>
                                    <p className="p-3 hover:bg-gray-100">Temperature & Humidity Chamber</p>
                                </div>

                                {/* SUB 3 */}
                                <div
                                    className="p-4 pl-6 py-3 flex justify-between cursor-pointer border-b"
                                    onClick={() => handleSubToggle("test")}
                                >
                                    เครื่องมือวัดชิ้นงาน(Measuring Tools)
                                    <span>{subMenu === "test" ? "−" : "+"}</span>
                                </div>

                                <div
                                    className={`${subMenu === "test" ? "block" : "hidden"} pl-10 bg-gray-100`}
                                >
                                    <p className="p-3 hover:bg-gray-100">Mitoyo</p>
                                    <p className="p-3 hover:bg-gray-100">Insize</p>
                                    <p className="p-3 hover:bg-gray-100">Teclock</p>
                                    <p className="p-3 hover:bg-gray-100">Peacock</p>
                                    <p className="p-3 hover:bg-gray-100">Shinwa</p>
                                    <p className="p-3 hover:bg-gray-100">Mitsuwa</p>
                                    <p className="p-3 hover:bg-gray-100">Fuji Tool</p>
                                    <p className="p-3 hover:bg-gray-100">Hunter</p>
                                    <p className="p-3 hover:bg-gray-100">Tsk</p>
                                    <p className="p-3 hover:bg-gray-100">Issoku</p>
                                    <p className="p-3 hover:bg-gray-100">Eisen</p>
                                    <p className="p-3 hover:bg-gray-100">SK</p>
                                    <p className="p-3 hover:bg-gray-100">Elcometer</p>
                                    <p className="p-3 hover:bg-gray-100">Defelshko</p>
                                    <p className="p-3 hover:bg-gray-100">Vertex</p>
                                    <p className="p-3 hover:bg-gray-100">Gin</p>
                                    <p className="p-3 hover:bg-gray-100">Noga</p>
                                    <p className="p-3 hover:bg-gray-100">Kanetec</p>
                                    <p className="p-3 hover:bg-gray-100">Fluke</p>
                                    <p className="p-3 hover:bg-gray-100">Yamamoto</p>
                                    <p className="p-3 hover:bg-gray-100">Kanon</p>
                                    <p className="p-3 hover:bg-gray-100">Imada</p>
                                    <p className="p-3 hover:bg-gray-100">Aikoh</p>
                                    <p className="p-3 hover:bg-gray-100">Tohnichi</p>
                                    <p className="p-3 hover:bg-gray-100">Hanna</p>
                                    <p className="p-3 hover:bg-gray-100">Lutron</p>
                                    <p className="p-3 hover:bg-gray-100">Extech</p>
                                    <p className="p-3 hover:bg-gray-100">Digicon</p>
                                    <p className="p-3 hover:bg-gray-100">CEM</p>
                                    <p className="p-3 hover:bg-gray-100">Smart Sensor</p>
                                    <p className="p-3 hover:bg-gray-100">Chuer</p>
                                    <p className="p-3 hover:bg-gray-100">เครื่องมืออื่นๆ</p>
                                </div>

                                {/* SUB 4 */}
                                <div
                                    className="p-4 pl-6 py-3 flex justify-between cursor-pointer border-b"
                                    onClick={() => handleSubToggle("test1")}
                                >
                                    เครื่องชั่ง(Balance)
                                    <span>{subMenu === "test1" ? "−" : "+"}</span>
                                </div>

                                <div
                                    className={`${subMenu === "test1" ? "block" : "hidden"} pl-10 bg-gray-100`}
                                >
                                    <p className="p-3 hover:bg-gray-100">INDUSTRIAL BALANCE</p>
                                    <p className="p-3 hover:bg-gray-100">HOSPITAL BALANCE</p>
                                    <p className="p-3 hover:bg-gray-100">ANIMAL BALANCE</p>
                                </div>
                            </div>
                        </li>
                        {/* Contact */}
                        <li className="p-4 border-b">
                            <Link to="#" onClick={() => setMenuOpen(false)}>
                                Catalog
                            </Link>
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

                            <div
                                className={`${openMenu === "service" ? "block" : "hidden"} pl-6 bg-gray-50`}
                            >
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
