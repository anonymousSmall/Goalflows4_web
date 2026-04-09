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
    <div className="bg-[#1f4a78] text-white">
      <div className="container mx-auto max-w-[1320px] px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Start Left */}
                <h1>123</h1>
            {/* End Left */}
            
            {/* Start Right */}
                <h1>123</h1>
            {/* End Right */}
        </div>
      </div>
    </div>
  )
}

export default Footers
