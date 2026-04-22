import React from 'react'
import company1 from "../assets/image/workservice/PAGE04.01.1.png";
import product1 from "../assets/image/workservice/PAGE04.01.2.png";

const LayoutWorkservice1 = () => {
  return (
    <section
      className="
        relative
        pt-24 md:pt-32 lg:pt-32
        pb-12 md:pb-16
      "
    >

      <div className="
        relative 
        max-w-7xl mx-auto 
        px-4 md:px-8 
        grid grid-cols-1 md:grid-cols-2   /* ✅ Responsive layout */
        gap-10 md:gap-16 
        items-center
      ">

        {/* LEFT SIDE */}
        <div className="relative flex justify-center">

          {/* Glow */}
          <div className="
            absolute 
            w-[300px] h-[300px] 
            sm:w-[400px] sm:h-[400px]
            md:w-[500px] md:h-[500px] 
            bg-blue-400/20 blur-3xl rounded-full
          "></div>

          {/* Image */}
          <div className="
            relative 
            w-full 
            max-w-[280px] 
            sm:max-w-[360px] 
            md:max-w-[480px] 
            lg:max-w-[550px]
            aspect-square   /* ✅ สำคัญ: ทำให้ responsive */
          ">
            <img
              src={company1}
              alt="company"
              className="
                w-full h-full
                object-cover
                rounded-xl
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
          items-center md:items-center
          text-center
        ">

          {/* Title */}
          <h1 className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-bold text-white
            leading-tight tracking-wide
          ">
            บริการ
          </h1>

          {/* Product Image */}
          <div className="
            mt-6
            w-full 
            max-w-[280px] 
            sm:max-w-[360px] 
            md:max-w-[480px] 
            lg:max-w-[550px]
            aspect-square
          ">
            <img
              src={product1}
              alt="product1"
              className="
                w-full h-full
                object-cover
                rounded-xl
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
