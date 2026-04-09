import React from 'react'
import { FaRegPaperPlane, FaInstagram, FaDribbble, FaTwitter, FaYoutube } from 'react-icons/fa6'
import logoWhite from '../assets/img/logo-white.png'
import Logo from '../assets/image/new/01logo.png'
import { Link, NavLink } from "react-router-dom";
import qr from "../assets/image/new/icon/7.png";
import facebook from "../assets/image/new/icon/3.png";
import instagram from "../assets/image/new/icon/ig.png";
import youtube from "../assets/image/new/icon/5.png";
import tiktok from "../assets/image/new/icon/2.png";
import telegram from "../assets/image/new/icon/6.png";

function Footers() {

    const socialIcons = [
      { img: tiktok, alt: "tiktok", name: "tiktok" },
      { img: facebook, alt: "facebook", name: "facebook" },
      { img: instagram, alt: "instagram", name: "instagram" }, // 👈 ต้องมี
      { img: youtube, alt: "youtube", name: "youtube" },
      { img: telegram, alt: "telegram", name: "telegram" },
      ];
  return (
    <div className="bg-gradient-to-br from-[#0f2f4a] via-[#123a5c] to-[#081f33] text-white border-t border-white/10">
      <div className="container mx-auto max-w-[1320px] px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Start Left */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[520px] w-full mx-auto md:mx-0">
                    <img
                      src={Logo}
                      alt="logo"
                      className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] object-contain mb-6"
                    />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Copyright © 2025 GoalFlow ltd. <br />
                      All rights reserved
                    </p>
                <div className="flex items-start gap-5 mt-4">
                  <img src={qr} alt="qr" className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] rounded-lg shadow-lg"/>
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
                        className={"w-12 h-12 flex items-center justify-center rounded-full transition hover:scale-110"}
                      >
                      <img
                        src={item.img}
                        alt={item.alt}
                        className="w-12 h-12 object-contain scale-110"
                      />
                    </div>
                  ))}
              </div>
            </div>
            {/* End Left */}
            
            {/* Start Right */}
<div className="w-full max-w-[520px] mx-auto md:mx-0">

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

    {/* SUBSCRIBE */}
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
      <h3 className="text-white font-semibold mb-3">สมัครรับข่าวสาร</h3>

      <form className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-[300px] shadow-md">
        <input
          type="email"
          placeholder="Your email address"
          className="text-black px-4 py-2 w-full text-sm focus:outline-none"
        />
        <button className="bg-blue-500 px-4 py-2 hover:bg-blue-600 transition flex items-center justify-center">
          <FaRegPaperPlane className="text-white" />
        </button>
      </form>

      <p className="text-gray-300 text-xs mt-2">
        รับข่าวสารและโปรโมชั่นก่อนใคร
      </p>
    </div>

    {/* MENU */}
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
      <h3 className="text-white font-semibold mb-3">เมนู</h3>

      <ul className="space-y-2">
        <li>
          <a href="/" className="text-gray-300 hover:text-white text-sm transition hover:translate-x-1 inline-block">
            หน้าแรก
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white text-sm transition hover:translate-x-1 inline-block">
            Catalog
          </a>
        </li>
        <li>
          <a href="/Catalog" className="text-gray-300 hover:text-white text-sm transition hover:translate-x-1 inline-block">
            ดาวน์โหลดแคตตาล็อก
          </a>
        </li>
        <li>
          <a href="/contact" className="text-gray-300 hover:text-white text-sm transition hover:translate-x-1 inline-block">
            ติดต่อเรา
          </a>
        </li>
      </ul>
    </div>

  </div>

</div>
{/* End Right */}
        </div>
      </div>
    </div>
  )
}

export default Footers
