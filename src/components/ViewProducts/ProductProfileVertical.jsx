import React, { useState } from 'react'
import { FaSearch, FaLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import product1 from "../../assets/image/Productgoalflow/Vertical Measuring Profile Projector.png"
import spec from "../../assets/image/spec/VerticalMeasuringProfileProjectorspec01.png";
import Stand from "../../assets/image/spec/VerticalMeasuringProfileProjectorspec02.png";
import specFile from "../../assets/image/spec/cnc-vmm-spec.pdf";
import p1 from "../../assets/image/brandsale/22.png";



const products = [
  {
    id: 1,
    spec: "",
    lineid: "https://lin.ee/v7Kf7rD",
  },
];

const ProductProfileVertical = () => {

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
              Profile Projecter Vertical Measuring
            </h1>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              High Precision Measurement Solution
            </p>
          </div>
    
          {/* Back */}
          <div className="max-w-7xl mx-auto mb-4 flex justify-end">
            <Link
              to="/Pprofileprojecter"
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
                  {/*  <h2 className="text-lg md:text-lg font-semibold text-gray-800 mb-4">
                    VMU CNC Automatic Video Measuring System
                  </h2>
                  <div className="flex items-start justify-end gap-4 flex-wrap">
                    <div className="flex-shrink-0">
                      <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] 
          bg-gradient-to-br from-[#003b6e] to-blue-500 
          rounded-xl flex flex-col items-center justify-center 
          text-white shadow-md">
    
                        <span className="text-xs">GF</span>
                        <span className="text-lg font-bold leading-none">TECH</span>
                        <span className="text-[10px] opacity-80">MEASURE</span>
                      </div>
                    </div>
                  </div> */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
    
                    {/* 🔷 TITLE */}
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 leading-tight">
                      Profile Projecter Vertical Measuring
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
                      <li>• ระบบออปติคอลความแม่นยำสูงมาพร้อมเลนส์คุณภาพสูง ให้ภาพคมชัด รายละเอียดครบถ้วน ภายใต้แสงส่องผ่าน ค่าความคลาดเคลื่อนของการวัดขอบ (Contour) ต่ำกว่า 0.08% และอัตราขยายมีความแม่นยำเชื่อถือได้</li>
                      <li>• การวัดพิกัดที่แม่นยำ ความละเอียดการแสดงผลแกน X และ Y สูงถึง 0.0005 มม.</li>
                      <li>• ค่าความคลาดเคลื่อนอยู่ที่เพียง (3 + L/200) ไมครอน (L = ความยาวที่วัด)ช่วยให้ได้ผลการวัดที่แม่นยำสูง</li>
                      <li>• โครงสร้างแกน Z เสถียร ระบบยกแกน Z แบบรางนำ (Guide Rail) เพิ่มความนิ่ง แข็งแรง และทนทานของตัวเครื่องขณะวัดไม่มีอาการสั่นไหว</li>
                      <li>• หน้าจอฉายคุณภาพสูง หน้าจอขนาด Φ312 มม. ใช้งานจริงมากกว่า Φ300 มม. มีเส้น Crosshair และหมุนได้ 0–360° ช่วยให้จัดตำแหน่งและวัดได้หลายมุมอย่างสะดวก</li>
                      <li>• ระบบแสงคุณภาพสูง ใช้หลอดฮาโลเจน 24V/150W ทั้งแสงส่องผ่านและแสงสะท้อน พร้อมระบบระบายความร้อนด้วยพัดลม ให้แสงสม่ำเสมอ และควบคุมอุณหภูมิได้ดี เพื่อความเสถียรในการวัด</li>
                      {/* <li>• -----</li> */}
                      {/* <li>• -----</li> */}
                    </ul>
                  </div>
    
                  {/* Application */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-[#003b6e] mb-2">Application</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• เหมาะสำหรับอุตสาหกรรมหลากหลาย เช่น เครื่องจักรกล อิเล็กทรอนิกส์ ยานยนต์ ฮาร์ดแวร์ พลาสติก และงานแม่พิมพ์</li>
                      <li>• สามารถวัดขนาด รูปร่าง และค่าความคลาดเคลื่อนของตำแหน่ง (Position Tolerance) ได้อย่างแม่นยำ</li>
                      <li>• รองรับงานตรวจสอบชิ้นส่วน (Inspection) การวัดรูปทรง (Measurement) และควบคุมกระบวนการผลิต (Process Control) ได้อย่างมีประสิทธิภาพ</li>
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
    
          {/* 🔷 SPEC */}
          {/* <div className="max-w-6xl mx-auto mt-10">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
              Specification
            </h2>
    
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src={specvmm}
                alt="Specification"
                className="w-full object-contain transition duration-500"
              />
            </div>
          </div> */}
    
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
                    src={spec}
                    alt="Specification"
                    className="w-full object-contain block -mt-8 md:-mt-0 transition duration-500"
                  />
                </div>
              )}
    
              {/* 🟩 DELIVERY TAB */}
              {activeTab === "delivery" && (
                <div className="overflow-x-auto">
                  <img
                    src={Stand}
                    alt="Specification"
                    className="w-full object-contain block -mt-8 md:-mt-0 transition duration-500"
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

export default ProductProfileVertical