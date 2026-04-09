import React from 'react'
import { FaRegPaperPlane, FaInstagram, FaDribbble, FaTwitter, FaYoutube } from 'react-icons/fa6'
import logoWhite from '../assets/img/logo-white.png'
import Logo from '../assets/image/new/01logo.png'
import { Link, NavLink } from "react-router-dom";
import qr from "../assets/image/new/icon/7.png";
import facebook from "../assets/image/new/icon/3.png";
import instagram from "../assets/image/new/icon/4.png";
import youtube from "../assets/image/new/icon/5.png";
import tiktok from "../assets/image/new/icon/2.png";
import telegram from "../assets/image/new/icon/6.png";

function Footers() {

    const socialIcons = [
    { img: tiktok, alt: "tiktok" },
    { img: facebook, alt: "facebook" },
    { img: instagram, alt: "instagram" },
    { img: youtube, alt: "youtube" },
    { img: telegram, alt: "telegram" },
  ];
  return (
     <div className="max-w-[1320px] mx-auto px-6 py-12">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* LEFT */}
          <div>
            <img src={logo} alt="logo" className="w-[180px] mb-4" />

            <p className="text-sm opacity-80 mb-4">
              Copyright © 2025 GoldFlow ltd. <br />
              All rights reserved
            </p>

            <div className="flex items-start gap-4">
              <img src={qr} alt="qr" className="w-[80px] h-[80px]" />
              <div className="text-sm leading-relaxed">
                <p className="font-semibold">
                  บริษัท โกลด์โฟล อินสตรูเมนท์ จำกัด
                </p>
                <p>
                  1/35 ซอยรังสิต-นครนายก 3/1 <br />
                  ต.ประชาธิปัตย์ อ.ธัญบุรี <br />
                  จ.ปทุมธานี 12130
                </p>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-6">
              {socialIcons.map((item, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:scale-110 transition"
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-5 h-5 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE */}
          <div className="lg:pl-10">
            <h3 className="text-lg font-semibold mb-4">เมนู</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="hover:translate-x-1 transition cursor-pointer">หน้าแรก</li>
              <li className="hover:translate-x-1 transition cursor-pointer">สินค้า</li>
              <li className="hover:translate-x-1 transition cursor-pointer">
                ดาวน์โหลดแคตตาล็อกบริษัท
              </li>
              <li className="hover:translate-x-1 transition cursor-pointer">
                ติดต่อโกลโฟล
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>

            <div className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-[320px]">
              <input
                type="email"
                placeholder="Your E-Mail"
                className="flex-1 px-4 py-2 text-black outline-none text-sm"
              />
              <button className="bg-blue-400 px-4 py-2 hover:bg-blue-500 transition">
                <img
                  src={telegram}
                  alt="send"
                  className="w-5 h-5"
                />
              </button>
            </div>

            <p className="text-xs opacity-70 mt-3">
              รับข่าวสารและโปรโมชั่นใหม่ก่อนใคร
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm opacity-70">
          © 2025 GoldFlow Instrument Co., Ltd.
        </div>
      </div>
    </div>
  )
}

export default Footers
