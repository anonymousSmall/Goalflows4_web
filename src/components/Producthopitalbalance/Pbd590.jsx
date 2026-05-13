import React, { useState } from 'react'
import { FaSearch, FaLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import product1 from "../../assets/image/hospitalbalance/BD-590.png"
import specvmm from "../../assets/image/spechospitalbalance/Bd-590-1.png";
import Stand from "../../assets/image/spechospitalbalance/DC-360-1.png";
import specFile from "../../assets/image/spechospitalbalance/BD-590SPEC.pdf";
import p1 from "../../assets/image/brandsale/63.png";

 
const products = [
  {
    id: 1,
    spec: specFile,
    lineid: "https://lin.ee/v7Kf7rD",
  },
];

const Pbd590 = () => {

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
            BABY SCALE BD-590
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
            เครื่องชั่งน้ำหนักเด็กอ่อนดิจิตอล
        </p>
      </div>

      {/* Back */}
      <div className="max-w-7xl mx-auto mb-4 flex justify-end">
        <Link
          to="/HospitalBalance"
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
                  BABY SCALE BD-590
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
                  <li>เครื่องชั่งน้ำหนักเด็กอ่อนดิจิตอล [TANITA รุ่น BD-590] เป็นเครื่องชั่งคุณภาพสูงจากญี่ปุ่น ชั่งน้ำหนักได้สูงสุด 20 กก. ความละเอียด 10 กรัม (0.01 กก.) โดดเด่นด้วยดีไซน์ All-in-One แข็งแรงทนทาน น้ำหนักเบา หน้าจอ LCD ขนาดใหญ่ 28 มม. อ่านค่าง่าย มีฟังก์ชัน Tare หักค่าน้ำหนักภาชนะ/ผ้าห่อตัว และฟังก์ชันล็อคค่าน้ำหนักอัตโนมัติขณะเด็กขยับตัว</li>
                  <li>• คุณสมบัติเด่นและข้อมูลจำเพาะ TANITA BD-590</li>
                  <li>- ความแม่นยำสูง: ชั่งน้ำหนักได้สูงสุด 20 กิโลกรัม (44 ปอนด์) ค่าความละเอียด 10 กรัม (0.5 ออนซ์) เหมาะสำหรับเช็คน้ำหนักทารก</li>
                  <li>- เทคโนโลยี Motion-Stop: ล็อคค่าน้ำหนักอัตโนมัติแม้เด็กจะไม่อยู่นิ่ง ช่วยให้อ่านค่าได้แม่นยำ</li>
                  <li>- ฟังก์ชัน TARE: สามารถหักน้ำหนักผ้าอ้อมหรือผ้าห่อตัวก่อนชั่งได้</li>
                  <li>- หน้าจอชัดเจน: แสดงผลหน้าจอ LCD ขนาดใหญ่ 28 มิลลิเมตร</li>
                  <li>- ดีไซน์ปลอดภัยและทำความสะอาดง่าย: โครงสร้างแบบชิ้นเดียว (All-in-one) ไม่มีรอยต่อ แข็งแรงทนทาน</li>
                  <li>- พลังงาน: ใช้แบตเตอรี่ AA 4 ก้อน (มีแถมมาในชุด)</li>
                  <li>- ขนาด: ถาดชั่งกว้างขวาง เหมาะสำหรับเด็กนอนชั่ง</li>
                  {/* <li>• การแสดงผลและบันทึกข้อมูล: มีเครื่องพิมพ์ในตัว (ในรุ่น DC-360P) เพื่อแสดงผลลัพธ์ทันที หรือสามารถถ่ายโอนข้อมูลไปยังคอมพิวเตอร์ผ่าน USB ได้</li>
                  <li>• โครงสร้าง: ออกแบบมาให้มีความแข็งแรง ใช้งานง่าย และมีความแม่นยำสูง</li>
                  <li>• ข้อควรระวังในการใช้งาน: ขณะทำการวัด แขนทั้งสองข้างไม่ควรแนบติดชิดข้างลำตัว และต้นขาด้านในไม่ควรสัมผัสกัน</li> */}
                </ul>
              </div>

              {/* Application */}
               {/* <div className="mb-6">
                <h3 className="font-semibold text-[#003b6e] mb-2">ฟังก์ชัน: </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• โปรแกรมหักน้ำหนักภาชนะ (Tare)</li>
                  <li>• โปรแกรม Zero ล้างค่าหน้าจอ</li>
                  <li>• TARE ตัดน้ำหนักภาชนะ (ชั่งน้ำหนักแม่และเด็ก)</li>
                  <li>• Zero เคลียร์ค่าหน้าจอเป็นศูนย์</li>
                   <li>• ซอฟต์แวร์ ACCETee: ใช้งานง่าย พร้อมฟังก์ชัน teach-in programming สำหรับ CNC</li> 
                </ul>
              </div> */}

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
              {/* <img
                src={Stand}
                alt="Specification"
                className="w-full object-contain block -mt-auto md:-mt-auto transition duration-500"
              /> */}
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

export default Pbd590