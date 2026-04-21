import React from 'react'
import company1 from "../assets/image/workservice/PAGE04.01.1.png";
import product1 from "../assets/image/workservice/PAGE04.01.2.png";
import bgSection from "../assets/image/workservice/BG04.01BG.png";

const LayoutWorkservice1 = () => {
  return (
    <section
      className="
        relative 
        pt-24 md:pt-32 lg:pt-40   /* ✅ ดันลงจาก navbar */
        pb-12 md:pb-16
        bg-cover bg-center
      "
     style={{ 
    backgroundImage: `url(${bgSection})`,
    backgroundPosition: "30% center"  // ✅ ขยับไปซ้าย (ลอง 20% - 40%)
  }}
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

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
            w-[260px] h-[260px] 
            sm:w-[360px] sm:h-[360px] 
            md:w-[480px] md:h-[480px] 
            lg:w-[550px] lg:h-[550px]
          ">
            <img
              src={company1}
              alt="company"
              className="w-full h-full object-cover hover:scale-105 transition duration-500 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center md:items-start">

          <h1 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-bold text-white 
            text-center leading-tight tracking-wide
          ">
            สินค้าที่จำหน่าย
          </h1>

          <div className="
            mt-6
            w-[260px] h-[260px] 
            sm:w-[360px] sm:h-[360px] 
            md:w-[480px] md:h-[480px] 
            lg:w-[550px] lg:h-[550px]
          ">
            <img
              src={product1}
              alt="product1"
              className="w-full h-full object-cover hover:scale-105 transition duration-500 drop-shadow-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default LayoutWorkservice1
