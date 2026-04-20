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
                        <Link to="#">เกี่ยวกับโกลโฟลฯ</Link>
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
                                    <div className="relative p-3 item-center font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full">
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
                                        <div className="p-3 hover:bg-gray-100">Stereo Microscope (2D)</div>
                                        <div className="p-3 hover:bg-gray-100">Profile Projector</div>
                                        <div className="p-3 hover:bg-gray-100">CCD Camera (Software)</div>
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
                                        เครื่องมือวัดชิ้นงาน(Measuring Tools)
                                        <span>›</span>
                                    </div>

                                    <div
                                        className="absolute top-0 left-full w-[260px] bg-white shadow-xl 
        opacity-0 invisible -translate-x-3 
        group-hover/item:opacity-100 group-hover/item:visible group-hover/item:translate-x-0 
        transition-all duration-300 rounded-md"
                                    >
                                        <div className="p-3 hover:bg-gray-100">Cutting / Grinding</div>
                                        <div className="p-3 hover:bg-gray-100">Polishing / Mounting Machine</div>
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
                                    เครื่องวัดขนาดชิ้นงานผลิต
                                    <span>{subMenu === "measure" ? "−" : "+"}</span>
                                </div>

                                <div
                                    className={`${subMenu === "measure" ? "block" : "hidden"} pl-10 bg-gray-100`}
                                >
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
                                        className={`ml-2 text-lg transition-transform duration-300 ${openMenu === "tool" ? "rotate-45" : ""
                                            }`}
                                    >
                                        +
                                    </span>
                                </div>

                                <div
                                    className={`${subMenu === "tool" ? "block" : "hidden"} pl-10 bg-gray-100`}
                                >
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

                                <div
                                    className={`${subMenu === "test" ? "block" : "hidden"} pl-10 bg-gray-100`}
                                >
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

                                <div
                                    className={`${subMenu === "test1" ? "block" : "hidden"} pl-10 bg-gray-100`}
                                >
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

                                <div
                                    className={`${subMenu === "test2" ? "block" : "hidden"} pl-10 bg-gray-100`}
                                >
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

                                <div
                                    className={`${subMenu === "test3" ? "block" : "hidden"} pl-10 bg-gray-100`}
                                >
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

                                <div
                                    className={`${subMenu === "test4" ? "block" : "hidden"} pl-10 bg-gray-100`}
                                >
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
