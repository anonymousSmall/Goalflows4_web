import React from 'react'
import company1 from "../assets/image/workservice/PAGE04.01.1.png";
import product1 from "../assets/image/workservice/PAGE04.01.2.png";
import bgSection from "../assets/image/workservice/BG04.01BG.png";

const LayoutWorkservice1 = () => {
  return (
    <section
      className="
        relative 
        pt-24 md:pt-32 lg:pt-40
        pb-12 md:pb-16
        bg-cover
      "
      style={{ 
        backgroundImage: `url(${bgSection})`,
        backgroundPosition: "30% center"
      }}
    >

      {/* ✅ Overlay: Mobile เข้ม / Desktop จาง */}
      <div className="
        absolute inset-0 
        bg-gradient-to-r 
        from-black/10 via-black/5 to-transparent   /* 📱 Mobile */
        md:from-black/10 md:via-black/5 md:to-transparent  /* 🖥 Desktop */
      "></div>

      <div className="
        relative 
        max-w-7xl mx-auto 
        px-4 md:px-8 
        grid md:grid-cols-2 
        gap-10 md:gap-16 
        items-center
      ">

        {/* LEFT SIDE */}
        <div className="relative flex justify-center">

          {/* Glow */}
          <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-400/20 blur-3xl rounded-full"></div>

          {/* Image */}
          <div className="
            relative 
            w-full 
            max-w-[320px]
            sm:max-w-[420px]
            md:max-w-[500px]
            lg:max-w-[550px]
          ">
            <img
              src={company1}
              alt="company"
              className="
                w-full h-auto
                object-contain
                hover:scale-105 
                transition duration-500 
                drop-shadow-2xl
              "
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="
          flex flex-col 
          items-center md:items-start
          px-2 sm:px-0
        ">

          {/* Title */}
          <h1 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-bold text-white 
            text-center md:text-left
            leading-tight tracking-wide
            drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]

            /* 📱 เพิ่มพื้นหลังเฉพาะ mobile */
            bg-black/40 md:bg-transparent
            backdrop-blur-sm md:backdrop-blur-0
            px-4 py-2 rounded-lg
          ">
            งานบริการ
          </h1>

          {/* Product Image */}
          <div className="
            mt-6
            w-full 
            max-w-[320px]
            sm:max-w-[420px]
            md:max-w-[500px]
            lg:max-w-[550px]
            mx-auto md:mx-0
          ">
            <img
              src={product1}
              alt="product1"
              className="
                w-full h-auto
                object-contain
                hover:scale-105 
                transition duration-500 
                drop-shadow-2xl
              "
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default LayoutWorkservice1
