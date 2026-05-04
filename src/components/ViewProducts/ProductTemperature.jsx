import React, { useState } from 'react'
import { FaSearch, FaLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import product1 from "../../assets/image/Productgoalflow/Programmable Temperature And Humidity Test Chamber.png"
import specvmm from "../../assets/image/spec/ProgrammableTemperatureAndHumidityTestChamberspec01.png";
import Stand from "../../assets/image/spec/ProgrammableTemperatureAndHumidityTestChamberspec02.png";
import specFile from "../../assets/image/spec/ProgrammableTemperatureAndHumidityTestChamberspec.pdf";
import p1 from "../../assets/image/brandsale/brand-gf.png";


const products = [
  {
    id: 1,
    spec: specFile,
    lineid: "https://lin.ee/v7Kf7rD",
  },
];

const ProductTemperature = () => {

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
          Programmable Temperature And <br/> Humidity Test Chamber
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          High Precision Measurement Solution
        </p>
      </div>

      {/* Back */}
      <div className="max-w-7xl mx-auto mb-4 flex justify-end">
        <Link
          to="/Ptemperature"
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
                 Programmable Temperature And Humidity Test Chamber
                </h2>

                {/* 🔷 LOGO */}
                <div className="flex justify-start sm:justify-end">
                  <img
                    src={p1}
                    alt="logo"
                    className="h-[50px] sm:h-[10px] md:h-[40px] w-auto object-contain"
                  />
                </div>

              </div>


              {/* Feature */}
              <div className="mb-4">
                <div className="flex items-center grid grid-cols-2 gap-2 mb-2">
                  <h3 className="font-semibold text-[#003b6e] mb-2">คุณลักษณะของผลิตภัณฑ์ (Product Features):</h3>
                  {/* <img src={p1} alt="Product Feature" className='w-auto h-32 justify-end' /> */}
                </div>
                <ul className="text-sm text-gray-600 space-y-1 leading-relaxed">
                  <li>• หน้าจอควบคุมแบบสัมผัสชนิดสี (Color LCD Touch Screen)</li>
                  <li>• โครงสร้างภายนอกผลิตจากแผ่นเหล็กพ่นสี มีคุณสมบัติป้องกันการกัดกร่อน ป้องกันสนิม ทนต่อการสึกหรอและรอยขีดข่วน พร้อมช่วยเพิ่มความสวยงามของตัวเครื่อง</li>
                  <li>• หน้าต่างสังเกตการณ์แบบกระจกสุญญากาศ 3 ชั้น (Three-layer Vacuum Glass) พร้อมไฟส่องสว่างภายใน และระบบไล่ฝ้าแบบไฟฟ้า (Electric Defogging) ช่วยให้มองเห็นภายในตู้ทดสอบได้อย่างชัดเจน</li>
                  <li>• ห้องทดสอบภายในผลิตจากสเตนเลสเกรด 304 พร้อมชั้นวางสเตนเลสจำนวน 2 ชั้น สามารถปรับระดับความสูงได้</li>
                  <li>• ขนาดห้องทดสอบสามารถสั่งผลิตตามความต้องการได้ โดยขนาดมาตรฐานคือ 500 × 750 × 600 มม. (ความจุประมาณ 408 ลิตร)</li>
                  <li>• วัสดุฉนวนกันความร้อนใช้โฟมโพลียูรีเทนชนิดแข็ง (Polyurethane Rigid Foam) ร่วมกับใยแก้ว (Glass Wool)</li>
                  <li>• ช่วงอุณหภูมิ: -40℃ ถึง +150℃</li>
                  <li>• ช่วงความชื้น: 20% – 98% RH (ปรับตั้งค่าได้)</li>
                  <li>• ติดตั้งถังเก็บน้ำภายในแบบเคลื่อนย้ายได้ พร้อมปั๊มน้ำอัตโนมัติ สำหรับลำเลียงน้ำจากถังด้านล่างไปยังส่วนด้านบนโดยอัตโนมัติ</li>
                  <li>• ระบบแจ้งเตือนเมื่อน้ำในถังไม่เพียงพอ (Water Shortage Alarm)</li>
                  <li>• ฐานเครื่องติดตั้งล้อเลื่อนอเนกประสงค์ (Universal Wheels) เพื่อความสะดวกในการเคลื่อนย้าย</li>
                  <li>• ระบบทำความชื้นแบบแยกส่วน (Split-type Humidifying Cylinder)</li>
                  <li>• แสดงผลกราฟอุณหภูมิและความชื้นแบบเรียลไทม์ (Real-time Curve Display)</li>
                  <li>• รองรับการตั้งโปรแกรมอุณหภูมิและความชื้นแบบหลายช่วง (Multi-stage Program) และสามารถกำหนดรอบการทำงานซ้ำได้หลาย Cycle</li>
                  <li>• มีฟังก์ชันบันทึกโปรแกรมเมื่อไฟฟ้าดับ (Power-off Memory) และสามารถเลือกให้ทำงานต่ออัตโนมัติเมื่อไฟฟ้ากลับมา</li>
                  <li>• รองรับการตั้งเวลาเริ่มต้นและหยุดการทำงานล่วงหน้า (Reservation Start/Stop) สำหรับการทำงานแบบอัตโนมัติ</li>
                  <li>• อุปกรณ์หลักใช้ชิ้นส่วนคุณภาพสูงนำเข้า เช่น คอมเพรสเซอร์จากประเทศฝรั่งเศส (Tecumseh)</li>
                  <li>• ระบบความปลอดภัยครบถ้วน ได้แก่ <br/>
-- ระบบป้องกันแรงดันเกิน (Overpressure Protection)<br/>
-- ระบบป้องกันกระแสเกินและโหลดเกิน (Overcurrent / Overload Protection)<br/>
-- ระบบป้องกันฮีตเตอร์ทำงานแห้ง (Dry-burning Protection)<br/>
-- ระบบป้องกันไฟฟ้าขาดเฟส (Phase Failure Protection)<br/>
-- ระบบป้องกันน้ำในถังไม่เพียงพอ (Water Shortage Protection)</li>
                  <li>• มีพอร์ต USB สำหรับส่งออกข้อมูล (Data Export)</li>
                </ul>
              </div>

              {/* Application */}
              <div className="mb-6">
                <h3 className="font-semibold text-[#003b6e] mb-2">มาตรฐานที่รองรับ (Standards)</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ออกแบบตามมาตรฐาน:
GB 11158, GB 10589-89, GB 10592-89, GB/T 10586-89
GB/T 2423.1, GB/T 2423.2, GB/T 2423.3, GB/T 2423.4, GB/T 2423.22
IEC 60068-2-1, IEC 60068-2-2
GJB 150.3, GJB 150.4, GJB 150.9</li>
                  {/* <li>• สามารถประยุกต์ใช้กับวัสดุหลากหลายประเภท ได้แก่</li> */}
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
              <img
                src={Stand}
                alt="Specification"
                className="w-full object-contain block -mt-8 md:-mt-auto transition duration-500"
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

export default ProductTemperature
