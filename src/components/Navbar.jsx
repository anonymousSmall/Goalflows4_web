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
        <nav className='fixed w-full z-50 bg-[#003b6e]/80 backdrop-blur-md border-b border-[#003b6e]/40  shadow-xl transition-all top-0'>
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
                        <Link to="/Goalflows">เกี่ยวกับโกลโฟลฯ</Link>
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
                                        <div className="p-3 hover:bg-gray-100">
                                            <Link to="/Videomeasuring" onClick={() => setMenuOpen(false)}>
                                                Video Measuring (VMM)
                                            </Link>
                                        </div>
                                        <div className="p-3 hover:bg-gray-100">
                                            <Link to="/Pprofileprojecter" onClick={() => setMenuOpen(false)}>
                                                Profile Projector
                                            </Link>
                                        </div>
                                        <div className="p-3 hover:bg-gray-100">
                                            <Link to="/PccdCamera" onClick={() => setMenuOpen(false)}>
                                                CCD Camera / Stereo Microscope
                                            </Link>
                                        </div>
                                        <div className="p-3 hover:bg-gray-100">
                                            <Link to="/Pcoordinate" onClick={() => setMenuOpen(false)}>
                                                Coordinate Measuring Machine (CMM)
                                            </Link>
                                        </div>
                                        <div className="p-3 hover:bg-gray-100">
                                            <Link to="/Pprotablecmm" onClick={() => setMenuOpen(false)}>
                                                Portable CMM Arm
                                            </Link>
                                        </div>
                                        <div className="p-3 hover:bg-gray-100">
                                            <Link to="/Pcontourmeasuring" onClick={() => setMenuOpen(false)}>
                                                Contour Measuring Machine
                                            </Link>
                                        </div>
                                        <div className="p-3 hover:bg-gray-100">
                                            <Link to="/Psurfacetexture" onClick={() => setMenuOpen(false)}>
                                                Surface Texture Measuring Machine
                                            </Link>
                                        </div>
                                        <div className="p-3 hover:bg-gray-100">
                                            <Link to="/Proundness" onClick={() => setMenuOpen(false)}>
                                                Roundness Measuring Machine
                                            </Link>
                                        </div>
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
                                        <div className="p-3 hover:bg-gray-100">
                                            <Link to="/Pcustting" onClick={() => setMenuOpen(false)}>
                                                Cutting / Grinding Polishing / Mounting Machine
                                            </Link>
                                        </div>
                                        <div className="p-3 hover:bg-gray-100">
                                            <Link to="/Phardness" onClick={() => setMenuOpen(false)}>
                                                Hardness Tester Machine
                                            </Link>
                                        </div>
                                        <div className="p-3 hover:bg-gray-100">
                                            <Link to="/Ptensilemachine" onClick={() => setMenuOpen(false)}>
                                                Tensile Machine
                                            </Link>
                                        </div>
                                        <div className="p-3 hover:bg-gray-100">
                                            <Link to="/Psaltspray" onClick={() => setMenuOpen(false)}>
                                                Salt Spray Machine
                                            </Link>
                                        </div>
                                        <div className="p-3 hover:bg-gray-100">
                                            <Link to="/Povenmachine" onClick={() => setMenuOpen(false)}>
                                                Oven Machine
                                            </Link>
                                        </div>
                                        <div className="p-3 hover:bg-gray-100">
                                            <Link to="/Ptemperature" onClick={() => setMenuOpen(false)}>
                                                Temperature & Humidity Chamber
                                            </Link>
                                        </div>
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
                                        <div className="p-3 hover:bg-gray-100">Mitutoyo</div>
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

                    {/* SERVICE */}
                    <li className="relative group cursor-pointer">
                        <div className="flex items-center gap-1">บริการ ▼</div>

                        <div className="absolute left-0 top-full w-[220px] bg-white text-black shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <div className="p-3 hover:bg-gray-100">
                                <Link to="/Workandservices">สอบเทียบ ISO17025</Link>
                            </div>
                            <div className="p-3 hover:bg-gray-100">
                                <Link to="/Workandservices">ซ่อมเครื่องมือ</Link>
                            </div>
                            <div className="p-3 hover:bg-gray-100">
                                <Link to="/Workandservices">บำรุงรักษาเครื่องมือ เครื่องจักร</Link>
                            </div>
                             <div className="p-3 hover:bg-gray-100">
                                <Link to="/Workandservices">อบรมการใช้งาน</Link>
                            </div>
                        </div>
                    </li>
                    <li className="drop-shadow-md transition-transform hover:scale-105">
                        <Link to="#">Catalog</Link>
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
                            <Link to="/Goalflows" onClick={() => setMenuOpen(false)}>
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
                                    <p className="p-3 hover:bg-gray-100">
                                        <Link to="/Videomeasuring" onClick={() => setMenuOpen(false)}>
                                            Video Measuring (VMM)
                                        </Link>
                                    </p>
                                    <p className="p-3 hover:bg-gray-100">
                                        <Link to="/Pprofileprojecter" onClick={() => setMenuOpen(false)}>
                                            Profile Projector
                                        </Link>
                                    </p>
                                    <p className="p-3 hover:bg-gray-100">
                                        <Link to="/PccdCamera" onClick={() => setMenuOpen(false)}>
                                            CCD Camera / Stereo Microscope
                                        </Link>
                                    </p>
                                    <p className="p-3 hover:bg-gray-100">
                                        <Link to="/Pcoordinate" onClick={() => setMenuOpen(false)}>
                                            Coordinate Measuring Machine (CMM)
                                        </Link>
                                    </p>
                                    <p className="p-3 hover:bg-gray-100">
                                        <Link to="/Pprotablecmm" onClick={() => setMenuOpen(false)}>
                                            Portable CMM Arm
                                        </Link>
                                    </p>
                                    <p className="p-3 hover:bg-gray-100">
                                        <Link to="/Pcontourmeasuring" onClick={() => setMenuOpen(false)}>
                                            Contour Measuring Machine
                                        </Link>
                                    </p>
                                    <p className="p-3 hover:bg-gray-100">
                                        <Link to="/Psurfacetexture" onClick={() => setMenuOpen(false)}>
                                            Surface Texture Measuring Machine
                                        </Link>
                                    </p>
                                    <p className="p-3 hover:bg-gray-100">
                                        <Link to="/Proundness" onClick={() => setMenuOpen(false)}>
                                            Roundness Measuring Machine
                                        </Link>
                                    </p>
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
                                    <p className="p-3 hover:bg-gray-100">
                                        <Link to="/Pcustting" onClick={() => setMenuOpen(false)}>
                                            Cutting / Grinding Polishing / Mounting Machine
                                        </Link>
                                    </p>
                                    <p className="p-3 hover:bg-gray-100">
                                        <Link to="/Phardness" onClick={() => setMenuOpen(false)}>
                                            Hardness Tester Machine
                                        </Link>
                                    </p>
                                    <p className="p-3 hover:bg-gray-100">
                                        <Link to="/Ptensilemachine" onClick={() => setMenuOpen(false)}>
                                            Tensile Machine
                                        </Link>
                                    </p>
                                    <p className="p-3 hover:bg-gray-100">
                                        <Link to="/Psaltspray" onClick={() => setMenuOpen(false)}>
                                            Salt Spray Machine
                                        </Link>
                                    </p>
                                    <p className="p-3 hover:bg-gray-100">
                                        <Link to="/Povenmachine" onClick={() => setMenuOpen(false)}>
                                            Oven Machine
                                        </Link>
                                    </p>
                                    <p className="p-3 hover:bg-gray-100">
                                        <Link to="/Ptemperature" onClick={() => setMenuOpen(false)}>
                                            Temperature & Humidity Chamber
                                        </Link>
                                    </p>
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
                                    <p className="p-3 hover:bg-gray-100">Mitutoyo</p>
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
                                    <p className="p-3 hover:bg-gray-100">
                                        INDUSTRIAL BALANCE
                                    </p>
                                    <p className="p-3 hover:bg-gray-100">
                                        HOSPITAL BALANCE
                                    </p>
                                    <p className="p-3 hover:bg-gray-100">
                                        ANIMAL BALANCE
                                    </p>
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
                                <p className="py-2 hover:bg-gray-100">
                                    <Link to="/Workandservices" onClick={() => setMenuOpen(false)}>
                                        สอบเทียบ ISO17025
                                    </Link>
                                </p>
                                <p className="py-2 hover:bg-gray-100">
                                    <Link to="/Workandservices" onClick={() => setMenuOpen(false)}>
                                        ซ่อมเครื่องมือ
                                    </Link> 
                                </p>
                                <p className="py-2 hover:bg-gray-100">
                                    <Link to="/Workandservices" onClick={() => setMenuOpen(false)}>
                                        บำรุงรักษาเครื่องมือ เครื่องจักร
                                    </Link>
                                </p>
                                <p className="py-2 hover:bg-gray-100">
                                    <Link to="/Workandservices" onClick={() => setMenuOpen(false)}>
                                        อบรมการใช้งาน
                                    </Link>
                                </p>
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
