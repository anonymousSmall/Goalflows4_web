import React from "react";
import { motion } from "framer-motion";
import company1 from "../assets/image/workservice/PAGE04.01.1.png";
import product1 from "../assets/image/workservice/PAGE04.01.2.png";
import bgSection from "../assets/image/workservice/BG04.01BG.png";

const LayoutWorkservice1 = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 🔥 Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url(${bgSection})`,
          backgroundPosition: "30% center",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT (Image Focus) */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={company1}
            alt="company"
            className="
              w-full max-w-[320px]
              sm:max-w-[420px]
              md:max-w-[520px]
              lg:max-w-[600px]
              object-contain
              drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]
            "
          />
        </motion.div>

        {/* RIGHT (Text + Product) */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >

          {/* Apple Style Heading */}
          <h1 className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            font-semibold text-white
            leading-tight tracking-tight
          ">
            สินค้าที่จำหน่าย
          </h1>

          <p className="mt-4 text-white/70 text-base sm:text-lg md:text-xl max-w-[500px]">
            โซลูชันเครื่องมือวัดคุณภาพสูง สำหรับงานอุตสาหกรรมระดับมืออาชีพ
          </p>

          {/* Product Image */}
          <div className="mt-10 w-full flex justify-center md:justify-start">
            <img
              src={product1}
              alt="product"
              className="
                w-full max-w-[300px]
                sm:max-w-[400px]
                md:max-w-[450px]
                lg:max-w-[500px]
                object-contain
                drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]
                hover:scale-105 transition duration-500
              "
            />
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="
              px-6 py-3
              bg-white text-black
              rounded-full
              text-sm md:text-base
              font-medium
              hover:bg-gray-200
              transition
            ">
              ดูสินค้าเพิ่มเติม
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default LayoutWorkservice1;
