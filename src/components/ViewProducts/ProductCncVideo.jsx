import React, { useState } from 'react'
import { FaSearch, FaLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import product1 from "../../assets/image/Productgoalflow/auto.png"
import specvmm from "../../assets/image/spec/M-VMM-spec.png";
import specFile from "../../assets/image/spec/cnc-vmm-spec.pdf";
import p1 from "../../assets/image/brandsale/22.png"

const products = [
  {
    id: 1,
    spec: specFile,
    lineid: "https://lin.ee/v7Kf7rD",
  },
];

const ProductCncVideo = () => {

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
          Video Measuring Machine
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          High Precision Measurement Solution
        </p>
      </div>

      {/* Back */}
      <div className="max-w-7xl mx-auto mb-4 flex justify-end">
        <Link
          to="/Videomeasuring"
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
              <div>
                <h2 className="text-lg md:text-lg font-semibold text-gray-800 mb-4">
                  VMU CNC Automatic Video Measuring System
                </h2>
              </div>


              {/* Feature */}
              <div className="mb-4">
                <div className="flex items-center grid grid-cols-2 gap-2 mb-2">
                  <h3 className="font-semibold text-[#003b6e] mb-2">Product Feature</h3>
                  {/* <img src={p1} alt="Product Feature" className='w-auto h-32 justify-end' /> */}
                </div>
                <ul className="text-sm text-gray-600 space-y-1 leading-relaxed">
                  <li>• Automatic measurement capabilities</li>
                  <li>• High-precision imaging technology</li>
                  <li>• User-friendly interface</li>
                  <li>• ระบบ CNC อัตโนมัติ พร้อม Closed-loop Control</li>
                  <li>• โครงสร้างหินแกรนิต ลดการสั่นสะเทือน</li>
                  <li>• ความละเอียด 1 µm แม่นยำสูง</li>
                  <li>• กล้อง CCD + เลนส์ซูม</li>
                  <li>• LED Multi-zone + Contour LED 256 ระดับ</li>
                </ul>
              </div>

              {/* Application */}
              <div className="mb-6">
                <h3 className="font-semibold text-[#003b6e] mb-2">Application</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• เครื่องจักรกล / อิเล็กทรอนิกส์ / ยานยนต์</li>
                  <li>• ตรวจสอบชิ้นงาน (Inspection)</li>
                  <li>• Measurement & Process Control</li>
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
      <div className="max-w-6xl mx-auto mt-10">
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
      </div>

      {/* 🔷 MODAL PREVIEW */}
      {open && (
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
      )}
    </section>
  )
}

export default ProductCncVideo