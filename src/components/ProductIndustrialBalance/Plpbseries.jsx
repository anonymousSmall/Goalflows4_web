import React, { useState } from 'react'
import { FaSearch, FaLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import product1 from "../../assets/image/industrialbalance/LPB-series.png"
import specvmm from "../../assets/image/specindustrialbalance/lpb-series1.png";
import Stand from "../../assets/image/specindustrialbalance/lpb-series2.png";
// import specFile from "../../assets/image/specindustrialbalance/";
import p1 from "../../assets/image/brandsale/48.png";

 
const products = [
  {
    id: 1,
    spec: "",
    lineid: "https://lin.ee/v7Kf7rD",
  },
];

const Plpbseries = () => {

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
            Precision Balance LPB-series
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
            Precision Balance
        </p>
      </div>

      {/* Back */}
      <div className="max-w-7xl mx-auto mb-4 flex justify-end">
        <Link
          to="/IndustrialBalance"
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
                  Precision Balance LPB-series
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
                  <li>ADAM LPB-series (Luna Precision Balances) เป็นเครื่องชั่งที่ออกแบบมาเพื่อการใช้งานในห้องปฏิบัติการ (Lab), การวิจัย และอุตสาหกรรมที่ต้องการความแม่นยำสูง ทนทาน และใช้งานง่าย</li>
                  <li>• ความละเอียดสูง: เหมาะสำหรับการชั่งน้ำหนักที่ต้องการความแม่นยำ โดยรุ่นยอดนิยมอย่าง LPB 423e มีความละเอียดถึง (0.001 g) (ทศนิยม 3 ตำแหน่ง)</li>
                  <li>• โครงสร้างทนทาน: จานชั่งทำจากสแตนเลสเกรด 304 ทำความสะอาดง่ายและทนทานต่อการกัดกร่อน</li>
                  <li>• ระบบกระจกกันลมพิเศษ: กระจกกันลมเคลือบโลหะนำไฟฟ้า ช่วยลดผลกระทบจากไฟฟ้าสถิตภายนอกได้ดี</li>
                  <li>• หน้าจอแสดงผลชัดเจน: หน้าจอ LCD Backlit เรืองแสง ตัวเลขขนาดใหญ่ 24 mm บนพื้นหลังสีดำ มองเห็นได้ชัดเจนในทุกสภาพแสง</li>
                  <li>• การเชื่อมต่อ: มีอินเตอร์เฟส USB และ RS-232 สำหรับเก็บข้อมูลและสื่อสารกับอุปกรณ์ภายนอก</li>
                  {/* <li>• เหมาะสำหรับ: งานในห้องปฏิบัติการวิจัย งานวิทยาศาสตร์ และการชั่งสารเคมีที่ต้องการความแม่นยำสูงมาก</li>
                  <li>• ข้อมูลการส่งออก: มีช่องส่งข้อมูล (Data output)</li>*/}
                </ul>
              </div>

              {/* Application */}
               <div className="mb-6">
                <h3 className="font-semibold text-[#003b6e] mb-2">ฟังก์ชันการใช้งาน: </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Parts Counting: ฟังก์ชันนับจำนวนชิ้นส่วน</li>
                  <li>• Percentage Weighing: ชั่งน้ำหนักแบบเปรียบเทียบเปอร์เซ็นต์</li>
                  <li>• Tare: หักค่าน้ำหนักภาชนะ</li>
                  <li>• Hold: ล็อคค่าน้ำหนัก</li>
                  <li>• Digital Filtering: มีระบบกรองสัญญาณดิจิตอลที่ปรับเลือกได้ ช่วยให้การชั่งนิ่งและแม่นยำ</li> 
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
                className="w-full object-contain block -mt-auto md:-mt-auto transition duration-500"
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

export default Plpbseries