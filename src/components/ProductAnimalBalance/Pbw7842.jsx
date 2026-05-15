import React, { useState } from 'react'
import { FaSearch, FaLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import product1 from "../../assets/image/animalbalance/BW-7842.png"
import specvmm from "../../assets/image/specanimalbalance/be7842spce01.png";
import Stand from "../../assets/image/specanimalbalance/bw-7842spec.pdf";
import specFile from "../../assets/image/specanimalbalance/bw-7842spec.pdf";
import p1 from "../../assets/image/brandsale/44.png";

 
const products = [
  {
    id: 1,
    spec: specFile,
    lineid: "https://lin.ee/v7Kf7rD",
  },
];

const Pbw7842 = () => {

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
            DIGITAL ANIMAL WEIGHING SCALE BW-7842
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
            เครื่องชั่งน้ำหนักสัตว์เลี้ยงดิจิทัล
        </p>
      </div>

      {/* Back */}
      <div className="max-w-7xl mx-auto mb-4 flex justify-end">
        <Link
          to="/AnimalBalance"
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
                  DIGITAL ANIMAL WEIGHING SCALE BW-7842
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
                  <li>NAGATA รุ่น BW-7842 เป็นเครื่องชั่งน้ำหนักสัตว์เลี้ยงดิจิทัลเกรดพรีเมียมจากไต้หวัน พิกัดสูงสุด 300 กก. ความละเอียด 50 กรัม โดดเด่นด้วยฟังก์ชันล็อกน้ำหนักอัตโนมัติ (Hold) ภายใน 2 วินาที แท่นชั่งสแตนเลสขนาดกว้าง 55 x 90 ซม. พร้อมยางกันลื่น เหมาะสำหรับโรงพยาบาลสัตว์และคลินิก</li>
                  <li>• เครื่องชั่งรุ่นนี้เหมาะอย่างยิ่งสำหรับการชั่งน้ำหนักสุนัข แมว หรือสัตว์เลี้ยงขนาดกลางถึงขนาดใหญ่ โดยเน้นความสะดวกในการใช้งานและความปลอดภัยของสัตว์เลี้ยงเป็นหลัก</li>
                  {/* <li>• การปรับตั้งค่า (Calibration): มีระบบ PSC (Perfect Self-Calibration) ปรับค่าอัตโนมัติเมื่ออุณหภูมิเปลี่ยน</li>
                  <li>• หน้าจอแสดงผล: OEL Display (Dot matrix) สว่างชัดเจน</li>
                  <li>• การเชื่อมต่อ:</li>
                  <li>- USB และ RS232C (สำหรับส่งข้อมูลเข้าคอมพิวเตอร์)</li>
                  <li>- Windows Direct Function: ส่งข้อมูลเข้า Excel โดยไม่ต้องลงซอฟต์แวร์เพิ่ม</li>
                  <li>• ฟังก์ชันพิเศษ:</li>
                  <li>- มีระบบควบคุม AP-i (Intelligent-Advanced Processing System)</li>
                  <li>- รองรับฟังก์ชันชั่งน้ำหนักต่ำกว่าฐาน (Under-weighing)</li>
                  <li>- บางรุ่นรองรับการใช้ร่วมกับ Ionizer (STABLO-AP) เพื่อลดไฟฟ้าสถิต</li>
                  <li>• พลังงาน: ใช้ AC Adapter</li>
                  <li>• การรับรอง: ผลิตจากโรงงานที่ได้รับมาตรฐาน ISO 9001</li> */}
                </ul>
              </div>

              {/* Application */}
               {/*<div className="mb-6">
                <h3 className="font-semibold text-[#003b6e] mb-2">การใช้งาน: </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• เหมาะสำหรับเครื่องกลึงทั่วไป, เครื่องแบ่ง (Dividing Head), และโต๊ะหมุน (Rotary Table)</li>
                  <li>• การตั้งค่าอุปกรณ์ประกอบ (Fixture Setup)</li>
                  <li>• การวัดชิ้นงานขนาดใหญ่หรือชิ้นงานที่ไม่สามารถเคลื่อนย้ายได้</li>
                  <li>Absolute Arm 7-Axis 83 series เหมาะสำหรับงานอุตสาหกรรมที่ต้องการทั้งความเร็วในการเก็บข้อมูลผ่านเลเซอร์สแกนเนอร์และความแม่นยำในการสัมผัสชิ้นงาน</li>
                  <li>• ความแม่นยำทางคอนทัวร์: มาตรฐานความแม่นยำ ±(1.2+|2H|/100) µm</li>
                  <li>• ซอฟต์แวร์ ACCETee: ใช้งานง่าย พร้อมฟังก์ชัน teach-in programming สำหรับ CNC</li> 
                </ul>
              </div>*/}

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

export default Pbw7842