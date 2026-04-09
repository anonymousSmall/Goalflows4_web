import React from 'react'
import Logo from '../assets/image/new/01logo.png'
import qr from '../assets/image/new/qr.png'

// 🔹 import icon images
import facebook from "../assets/image/new/icon/3.png";
import instagram from "../assets/image/new/icon/4.png";
import youtube from "../assets/image/new/icon/5.png";
import tiktok from "../assets/image/new/icon/2.png";
import telegram from "../assets/image/new/icon/6.png";

import { Link } from "react-router-dom";

function Footers() {

  const socialIcons = [
    { img: tiktok, alt: "tiktok" },
    { img: facebook, alt: "facebook" },
    { img: instagram, alt: "instagram" },
    { img: youtube, alt: "youtube" },
  ];

  return (
    <div className="bg-[#263238] py-16 text-white">
      <div className="container mx-auto max-w-[1320px] px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[520px] w-full mx-auto md:mx-0">

            <img
              src={Logo}
              alt="logo"
              className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] object-contain mb-6"
            />

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Copyright © 2025 GoldFlow ltd. <br />
              All rights reserved
            </p>

            {/* QR + ADDRESS */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
              <img src={qr} alt="qr" className="w-[80px] h-[80px]" />

              <div className="text-sm text-gray-300 leading-relaxed text-center sm:text-left">
                <p className="font-semibold text-white">
                  บริษัท โกลด์โฟล อินสตรูเมนท์ จำกัด
                </p>
                <p>
                  1/35 ซอยรังสิต-นครนายก 3/1 <br />
                  ต.ประชาธิปัตย์ อ.ธัญบุรี <br />
                  จ.ปทุมธานี 12130
                </p>
              </div>
            </div>

            {/* SOCIAL */}
            <ul className="flex gap-3 justify-center md:justify-start">
              {socialIcons.map((item, i) => (
                <li key={i}>
                  <a className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:scale-110 transition">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-5 h-5 object-contain"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-[520px] w-full mx-auto md:mx-0">

            {/* MENU */}
            <div>
              <h3 className="text-white font-semibold mb-4">เมนู</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white text-md transition">
                    หน้าแรก
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-300 hover:text-white text-md transition">
                    Catalog
                  </Link>
                </li>
                <li>
                  <Link to="/Catalog" className="text-gray-300 hover:text-white text-md transition">
                    ดาวน์โหลดแคตตาล็อก
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white text-md transition">
                    ติดต่อเรา
                  </Link>
                </li>
              </ul>
            </div>

            {/* SUBSCRIBE */}
            <div>
              <h3 className="text-white font-semibold mb-4">สมัครรับข่าวสาร</h3>

              <form className="flex items-center bg-white rounded-full overflow-hidden max-w-[320px]">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="text-black px-4 py-2 w-full text-sm focus:outline-none"
                />
                <button className="bg-blue-400 px-4 py-2 hover:bg-blue-500 transition">
                  <img src={telegram} alt="send" className="w-5 h-5" />
                </button>
              </form>
            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">
          © 2025 GoldFlow Instrument Co., Ltd.
        </div>

      </div>
    </div>
  )
}

export default Footers
