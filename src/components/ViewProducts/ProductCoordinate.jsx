import React, { useState } from 'react'
import { FaSearch, FaLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import product1 from "../../assets/image/Productgoalflow/Coordinate Measuring Machines (CMMs).png"
import specvmm from "../../assets/image/spec/CoordinateMeasuringMachines(CMMs)spec01.png";
import Stand from "../../assets/image/spec/CoordinateMeasuringMachines(CMMs)spec02.png";
import specFile from "../../assets/image/spec/cnc-vmm-spec.pdf";
import p1 from "../../assets/image/brandsale/22.png";


const products = [
  {
    id: 1,
    spec: "",
    lineid: "https://lin.ee/v7Kf7rD",
  },
];

const ProductCoordinate = () => {

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
          Coordinate Measuring Machine (CMM)
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          High Precision Measurement Solution
        </p>
      </div>

      {/* Back */}
      <div className="max-w-7xl mx-auto mb-4 flex justify-end">
        <Link
          to="/Pcoordinate"
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
                  Explorer  CMM
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
                  <h3 className="font-semibold text-[#003b6e] mb-2">Product Feature</h3>
                  {/* <img src={p1} alt="Product Feature" className='w-auto h-32 justify-end' /> */}
                </div>
                <ul className="text-sm text-gray-600 space-y-1 leading-relaxed">
                  <li>• Explorer เป็นซีรีส์ผลิตภัณฑ์เครื่องมือวัด 3 มิติ หรือ CMM ที่มีความคุ้มค่าและถูกแบ่งออกเป็นสองรุ่นด้วยกัน ได้แก่ Explorer Classic และ Explorer Performance ผลิตภัณฑ์ Explorer Classic รองรับการวัดแบบ Universal Touch-Trigger Measurement ซึ่งถูกปรับให้เหมาะสำหรับความต้องการในการวัดของชิ้นส่วนต่างๆ สำหรับการใช้งานที่ท้าทายและมีความต้องการมากขึ้น ผลิตภัณฑ์ Explorer Performance สามารถรองรับฟังค์ชั่นการสแกนชิ้นงานแบบต่อเนื่อง ซึ่งนำมาสู่ความแม่นยำและประสิทธิภาพการวัดที่มากขึ้น นอกเหนือจากนี้ ผลิตภัณฑ์นี้ยังมีโครงสร้างและการประกอบที่มีคุณสมบัติเสมือนเครื่องมือวัด 3 มิติระดับไฮเอนด์ของ Hexagon เพื่อสร้างประสิทธิภาพที่ดีที่สุดในด้าน ความแม่นยำและความน่าเชื่อถือของการวัด สายผลิตภัณฑ์เครื่องมือวัด 3 มิตินี้นำเสนอคำตอบสำหรับเครื่องมือวัดในราคาที่เหมาะสมและไม่สูงมากนักในการเป็นเจ้าของ</li>
                  {/* <li>• High-precision imaging technology</li>
                  <li>• User-friendly interface</li>
                  <li>• ระบบ CNC อัตโนมัติ พร้อม Closed-loop Control</li>
                  <li>• โครงสร้างหินแกรนิต ลดการสั่นสะเทือน</li>
                  <li>• ความละเอียด 1 µm แม่นยำสูง</li>
                  <li>• กล้อง CCD + เลนส์ซูม</li>
                  <li>• LED Multi-zone + Contour LED 256 ระดับ</li> */}
                </ul>
              </div>

              {/* Application */}
              <div className="mb-6">
                <h3 className="font-semibold text-[#003b6e] mb-2">คุณสมบัติและประโยชน์</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• มีการกำหนดค่าและขนาดให้เลือกหลากหลายแบบเพื่อรองรับความต้องการในการวัดของการใช้งานต่างๆ</li>
                  <li>• การออกแบบพิเศษด้วย bridge ทรงสามเหลี่ยม เพื่อสร้างความแม่นยำและความแข็งแรงในระยะยาว</li>
                  <li>• ตัวยึดแบบ Dovetail พร้อมโครงสร้างแบบปิดเพื่อช่วยให้มีการเคลื่อนไหวที่มั่นคง</li>
                  <li>• สเกลจาก Heidenhain ปลายของด้านหนึ่งคงที่และอีกด้านหนึ่งปล่อยอิสระ เพื่อการชดเชยของอุณหภูมิที่ง่ายสำหรับการเปลี่ยนแปลงเชิงเส้น</li>
                  <li>• ประสิทธิภาพการวัดที่น่าเชื่อถือด้วยการออกแบบเครื่องถ่วงดุลแบบ นิวแมติก (pneumatic)</li>
                  <li>• เพื่อลดผลกระทบของความร้อนต่อประสิทธิภาพในการวัด มอเตอร์ไดรฟ์ชนิดรีโมทสามารถระบายความร้อนออกจากโครงเครื่อง
                    มีขนาดเล็กเพื่อการติดตั้งและการใช้งานในที่แคบ</li>
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
                className="w-full object-contain block -mt-8 md:-mt-auto transition duration-500"
              />
            </div>
          )}

          {/* 🟩 DELIVERY TAB */}
          {activeTab === "delivery" && (
            <div className="overflow-x-auto">
              <img
                src={Stand}
                alt="Specification"
                className="w-full object-contain block -mt-8 md:-mt-30 transition duration-500"
              />
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

export default ProductCoordinate