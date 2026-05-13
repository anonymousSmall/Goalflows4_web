import React, { useState } from 'react'
import { FaSearch, FaLine } from "react-icons/fa";
import { Link } from "react-router-dom";

import p1 from "../../assets/image/industrialbalance/BM-SERIES.png";
import p2 from "../../assets/image/industrialbalance/ap-w-series.png";
import p3 from "../../assets/image/industrialbalance/EHB-SERIES.png";
import p4 from "../../assets/image/industrialbalance/LPB-series.png";
import p5 from "../../assets/image/industrialbalance/BW-SERIES.png";
import p6 from "../../assets/image/industrialbalance/TWI-700C-SERIES.png";
import p7 from "../../assets/image/industrialbalance/T7E-SERIES.png";
import p8 from "../../assets/image/industrialbalance/TI01-SERIES.png";
import p9 from "../../assets/image/industrialbalance/TN-series.png";
import p10 from "../../assets/image/industrialbalance/THP03-SERIES.png";


import specFile from "../../assets/image/specindustrialbalance/BMSPEC.pdf";
import specFile1 from "../../assets/image/specindustrialbalance/APSPEC.pdf";
import specFile2 from "../../assets/image/specindustrialbalance/EHBSPEC.pdf";
// import specFile3 from "../../assets/image/specindustrialbalance/lp";
import specFile4 from "../../assets/image/specindustrialbalance/BWSPEC.pdf";
import specFile5 from "../../assets/image/specindustrialbalance/TWI-700C-SPEC.pdf";
import specFile6 from "../../assets/image/specindustrialbalance/T7E-spec.pdf";
import specFile7 from "../../assets/image/specindustrialbalance/TI01-SPEC.pdf";
import specFile8 from "../../assets/image/specindustrialbalance/TN LCD-sepec.pdf";
import specFile9 from "../../assets/image/specindustrialbalance/THP-SPEC.pdf";


const products = [
  {
    id: 1,
    name: "Analytical Balance BM-SERIES",
    img: p1,
    spec: specFile,
    lineid: "https://lin.ee/v7Kf7rD",
    url: "/Pbmseries"
  },
  {
    id: 2,
    name: "Analytical Balance AP-W-SERIES",
    img: p2,
    spec: specFile1,
    lineid: "https://lin.ee/v7Kf7rD",
    url: "/Papseries"
  },
  {
    id: 3,
    name: "Precision Balance EHB-SERIES",
    img: p3,
    spec: specFile2,
    lineid: "https://lin.ee/v7Kf7rD",
    url: "/Pehbseries"
  },
  {
    id: 4,
    name: "Precision Balance LPB-series",
    img: p4,
    spec: "",
    lineid: "https://lin.ee/v7Kf7rD",
    url: "/Plpbseries"
  },
  {
    id: 5,
    name: "Platform Balances BW-Series",
    img: p5,
    spec: specFile4,
    lineid: "https://lin.ee/v7Kf7rD",
    url: "/Pbwseries"
  },
  {
    id: 6,
    name: "COUNTING BALANCE TWI-700C-SERIES",
    img: p6,
    spec: specFile5,
    lineid: "https://lin.ee/v7Kf7rD",
    url: "/Ptwi700c"
  },
  {
    id: 7,
    name: "ELECTRONIC FLOOR SCALE T7E-SERIES",
    img: p7,
    spec: specFile6,
    lineid: "https://lin.ee/v7Kf7rD",
    url: "/Pt7eseries"
  },
  {
    id: 8,
    name: "ELECTRONIC FLOOR SCALE TI01-SERIES",
    img: p8,
    spec: specFile7,
    lineid: "https://lin.ee/v7Kf7rD",
    url: "/Pti01series"
  },
  {
    id: 9,
    name: "Crane Scale TN-SERIES",
    img: p9,
    spec: specFile8,
    lineid: "https://lin.ee/v7Kf7rD",
    url: "/Ptnseries"
  },
  {
    id: 10,
    name: "ELECTRONIC Hand Pallet THP-03-SERIES",
    img: p10,
    spec: specFile9,
    lineid: "https://lin.ee/v7Kf7rD",
    url: "/Pthp03series"
  },
];

const IndustrialBalance = () => {

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
          Industrial Balance
        </h1>
        <p className="text-gray-500 mt-2">
        เครื่องชั่งโรงงานอุตสาหกรรม
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

export default IndustrialBalance

