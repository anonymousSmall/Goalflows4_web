import React, { useState } from 'react'
import { FaSearch, FaLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import product1 from "../../assets/image/Smalltool/SKFEELERGAUGE.png"
import specvmm from "../../assets/image/specSmalltool/SKFEELERGAUGESPEC01.png";
import Stand from "../../assets/image/specSmalltool/shinwa11215spec02.png";
import specFile from "../../assets/image/specSmalltool/SKSPEC.pdf";
import p1 from "../../assets/image/brandsale/12.png";

 
const products = [
  {
    id: 1,
    spec: specFile,
    lineid: "https://lin.ee/v7Kf7rD",
  },
];

const Pfeelergaugesfg005 = () => {

  const [activeTab, setActiveTab] = useState("spec");
  const [open, setOpen] = useState(false);
  const [currentSpec, setCurrentSpec] = useState(null);
  const handlePreview = (spec) => {
    setCurrentSpec(spec);
    setOpen(true);
  };
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-10 px-4 md:px-10">

      {/* 🔷 HEADER */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-[#003b6e] tracking-wide">
            Feeller Gauge SFG-005-1
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          High Precision Measurement Solution
        </p>
      </div>

      {/* Back */}
      <div className="max-w-7xl mx-auto mb-4 flex justify-end">
        <Link
          to="/Psk"
          className="text-sm text-gray-500 hover:text-[#003b6e] mr-4 md:mr-6"
        >
          &larr; Back to Products
        </Link>
      </div>

      {/* 🔷 PRODUCT */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-4 md:p-8">
        {products.map((item) => (
          <div className="grid md:grid-cols-2 gap-8 items-start">

            {/* 🔷 IMAGE */}
            <div className="group overflow-hidden rounded-xl">
              <img
                src={product1}
                alt="CNC Video Measuring System"
                className="w-full h-[250px] sm:h-[320px] md:h-[380px] object-cover rounded-xl 
              group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* 🔷 DETAIL */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                {/* 🔷 TITLE */}
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 leading-tight">
                    Feeller Gauge SFG-005-1
                </h2>

                {/* 🔷 LOGO */}
                <div className="flex justify-start sm:justify-end">
                  <img
                    src={p1}
                    alt="logo"
                    className="h-[50px] sm:h-[60px] md:h-[80px] w-auto object-contain"
                  />
                </div>

              </div>


              {/* Feature */}
              <div className="mb-4">
                <div className="flex items-center grid grid-cols-2 gap-2 mb-2">
                  <h3 className="font-semibold text-[#003b6e] mb-2">คุณสมบัติหลัก: </h3>
                  {/* <img src={p1} alt="Product Feature" className='w-auto h-32 justify-end' /> */}
                </div>
                <ul className="text-sm text-gray-600 space-y-1 leading-relaxed">
                  <li>ฟิลเลอร์เกจสแตนเลส เป็นเกจแบบม้วน บรรจุในกล่องกระดาษสะดวกต่อการจัดเก็บ สามารถตัดตามความยาวที่ต้องการใช้งานได้ เป็นเครื่องมือวัดความละเอียดสูง</li>
                  {/*<li>• วัสดุ: เหล็กคุณภาพสูง (มีรุ่น SUS หรือ Stainless Steel ให้เลือกตามรุ่นย่อย)</li>
                  <li>• ความแม่นยำสูง: มีค่าความตั้งฉากอยู่ที่ \(\pm \) 0.1 มม. หรือน้อยกว่าต่อ 100 มม.</li>
                  <li>• สเกลชัดเจน: ตัวเลขและสเกลวัดขนาด (มิลลิเมตร) ทั้งสองด้านถูกกัดลึก (Etched) ทำให้ทนทานต่อการลบเลือนและอ่านง่าย</li>
                  <li>• ใช้งานได้สองด้าน: สเกลระบุขนาดมม. เท่ากันทั้งสองด้าน สะดวกในการใช้งาน</li>
                  <li>• มาตรฐาน JIS: ผลิตตามมาตรฐานอุตสาหกรรมญี่ปุ่น (JIS)</li>
                  <li>• การใช้งาน: เหมาะสำหรับงานตรวจสอบมุมฉาก งานวัดระยะ งานเขียนแบบ และงานตัดในงานเหล็กหรืองานไม้</li>
                  <li>• ข้อมูลการส่งออก: มีช่องส่งข้อมูล (Data output)</li>*/}
                </ul>
              </div>

              {/* Application */}
               <div className="mb-6">
                <h3 className="font-semibold text-[#003b6e] mb-2">การใช้งาน: </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>•  ใช้สำหรับเช็คระยะห่าง (Gap) ความละเอียดสูง ในงานประกอบเครื่องยนต์, ปรับแต่งเครื่องจักร หรือวัดช่องว่างต่างๆ</li>
                  {/*<li>• เหมาะกับงานวัดชิ้นงานยาง, พลาสติกอ่อน, นีโอพรีน (Neoprene), ซิลิโคน</li>
                  <li>• นิยมใช้ในอุตสาหกรรมยานยนต์และชิ้นส่วนยางต่างๆ</li>
                 <li>Absolute Arm 7-Axis 83 series เหมาะสำหรับงานอุตสาหกรรมที่ต้องการทั้งความเร็วในการเก็บข้อมูลผ่านเลเซอร์สแกนเนอร์และความแม่นยำในการสัมผัสชิ้นงาน</li>
                  <li>• ความแม่นยำทางคอนทัวร์: มาตรฐานความแม่นยำ ±(1.2+|2H|/100) µm</li>
                  <li>• ซอฟต์แวร์ ACCETee: ใช้งานง่าย พร้อมฟังก์ชัน teach-in programming สำหรับ CNC</li> */}
                </ul>
              </div>

              {/* 🔷 BUTTON */}
              <div className="flex flex-col sm:flex-row gap-3">

                {/* PREVIEW */}
                <button
                  onClick={() => handlePreview(item.spec)}
                  className="flex items-center justify-center gap-2 w-full sm:w-[180px] 
                bg-[#003b6e] text-white px-4 py-2 rounded-xl text-sm 
                hover:bg-blue-800 transition"
                >
                  <FaSearch />
                  Preview Spec
                </button>

                {/* LINE */}
                <a
                  href="https://lin.ee/v7Kf7rD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full sm:w-[180px] 
                bg-green-500 text-white px-4 py-2 rounded-xl text-sm 
                hover:bg-green-600 transition"
                >
                  <FaLine className="text-lg" />
                  ติดต่อ LINE
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-10 bg-white rounded-2xl shadow-md p-4 md:p-6">

        {/* 🔷 TAB HEADER */}
        <div className="flex border-b mb-2">
          <button
            onClick={() => setActiveTab("spec")}
            className={`px-4 py-2 text-sm font-semibold transition
        ${activeTab === "spec"
                ? "border-b-2 border-[#003b6e] text-[#003b6e]"
                : "text-gray-500 hover:text-[#003b6e]"}`}
          >
            Specification
          </button>

          <button
            onClick={() => setActiveTab("delivery")}
            className={`px-4 py-2 text-sm font-semibold transition
        ${activeTab === "delivery"
                ? "border-b-2 border-[#003b6e] text-[#003b6e]"
                : "text-gray-500 hover:text-[#003b6e]"}`}
          >
            Standard Delivery
          </button>
        </div>

        {/* 🔷 CONTENT */}
        <div className="mt-0"> {/* 🔥 ตัดช่องว่างตรงนี้ */}

          {/* 🟦 SPEC TAB */}
          {activeTab === "spec" && (
            <div className="overflow-x-auto">
              <img
                src={specvmm}
                alt="Specification"
                className="w-full object-contain block -mt-auto md:-mt-auto transition duration-500"
              />
            </div>
          )}

          {/* 🟩 DELIVERY TAB */}
          {activeTab === "delivery" && (
            <div className="overflow-x-auto">
              {/*<img
                src={Stand}
                alt="Specification"
                className="w-full object-contain block -mt-8 md:-mt-auto transition duration-500"
              />*/}
            </div>
          )}

        </div>
      </div>


      {/* 🔷 MODAL PREVIEW */}
      {
        open && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 md:p-6"
            onClick={() => setOpen(false)}
          >
            <div
              className="bg-white rounded-xl w-full max-w-5xl h-[85vh] relative flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >

              {/* HEADER */}
              <div className="flex justify-between items-center p-3 border-b">
                <h2 className="font-semibold text-[#003b6e]">
                  Preview Specification
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 hover:text-black text-xl"
                >
                  ✕
                </button>
              </div>

              {/* PDF */}
              <iframe
                src={currentSpec}
                title="Specification"
                className="w-full flex-1"
              />

              {/* FOOTER */}
              <div className="p-3 border-t flex justify-end">
                <a
                  href={currentSpec}
                  download
                  className="bg-[#003b6e] text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800"
                >
                  Download
                </a>
              </div>

            </div>
          </div>
        )
      }
    </section >
  )
}

export default Pfeelergaugesfg005