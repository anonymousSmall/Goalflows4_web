import React, { useState } from 'react'
import { FaSearch, FaLine } from "react-icons/fa";
import { Link } from "react-router-dom";

import p1 from "../../assets/image/Productgoalflow/Coordinate Measuring Machines (CMMs).png"
// import p2 from "../../assets/image/Productgoalflow/Horizontal Measuring Profile Projector.png"
// import p3 from "../../assets/image/Productgoalflow/MVMM.png"

import specFile from "../../assets/image/spec/CoordinateMeasuringMachines(CMMs).pdf";

const products = [
  {
    id: 1,
    name: "Coordinate Measuring Machines (CMMs)",
    img: p1,
    spec: specFile,
    lineid: "https://lin.ee/v7Kf7rD",
    url: "/ProductCoordinate"
  },
];
const Pcoordinate = () => {

  const [open, setOpen] = useState(false);
  const [currentSpec, setCurrentSpec] = useState(null);

  const handlePreview = (spec) => {
    setCurrentSpec(spec);
    setOpen(true);
  };
  return (
    <section className="bg-gray-50 min-h-screen py-10 px-4 md:px-10">

      {/* 🔷 HEADER */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-[#003b6e]">
          Coordinate Measuring Machine (CMM)
        </h1>
        <p className="text-gray-500 mt-2">
          เครื่องมือวัดชิ้นงานด้านมิติ
        </p>
      </div>

      {/* 🔷 SEARCH */}
      <div className="relative w-[90%] sm:w-[70%] md:w-[400px] mx-auto mb-8">
        <input
          type="text"
          placeholder="ค้นหาสินค้า..."
          className="w-full pl-4 pr-12 py-2 border rounded-xl text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#003b6e]"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#003b6e]">
          <FaSearch />
        </button>
      </div>

      {/* 🔷 PRODUCT GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
          >

            {/* 🔷 IMAGE */}
            <div className="overflow-hidden">
              <Link to={item.url}>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
              </Link>
            </div>

            {/* 🔷 CONTENT */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-[#003b6e]">
                Product: {item.name}
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                เครื่องมือคุณภาพสูง
              </p>

              {/* 🔷 BUTTON */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4">

                {/* 🔍 PREVIEW */}
                <button
                  onClick={() => handlePreview(item.spec)}
                  className="w-[160px] bg-[#003b6e] text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800"
                >
                  Preview <br />
                  Specification
                </button>

                {/* ⬇️ DOWNLOAD */}
                <a
                  href={item.lineid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[160px] flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition">
                  <FaLine className="text-xl md:text-2xl" />

                  <span className="leading-tight text-center">
                    สนใจ<br />สอบถาม
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}

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

export default Pcoordinate
