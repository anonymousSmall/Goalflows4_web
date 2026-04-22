import React from 'react'
import company1 from "../assets/image/workservice/PAGE04.01.1.png";
import product1 from "../assets/image/workservice/PAGE04.01.2.png";
import bgSection from "../assets/image/workservice/BG04.01BG.png"; // ✅ พื้นหลังใหม่

const LayoutWorkservice1 = () => {
  return (
    <section

            >
                {/* Overlay */}
                <div className="absolute inset-0"></div>
    
                <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
    
                    {/* LEFT SIDE */}
                    <div className="relative flex justify-center">
    
                        {/* Glow effect */}
                        <div className="absolute w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-blue-400/20 blur-3xl rounded-full"></div>
    
                        {/* Circle Image */}
                        <div className="relative 
                                   w-[360px] h-[360px] 
                                   sm:w-[460px] sm:h-[460px] 
                                   md:w-[550px] md:h-[550px] 
                                   lg:w-[600px] lg:h-[600px]">
    
                            <img
                                src={company1}
                                alt="company"
                                className="w-full h-full object-cover hover:scale-105 transition duration-500 drop-shadow-2xl"
                            />
                        </div>
    
                        {/* Company Label */}
                        {/* <img
                                className="absolute bottom-4 left-6 w-[160px] sm:w-[200px] md:w-[300px] drop-shadow-lg"
                                src={logogf1}
                                alt="GF Instrument"
                            /> */}
                    </div>
    
                    {/* RIGHT SIDE */}
                    <div>
                        <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center md:text-center leading-tight tracking-wide">
                            สินค้าที่จำหน่าย
                        </h1>
                        {/* <p className="mt-6 text-7xl text-center sm:text-base md:text-lg lg:text-xl font-medium text-white leading-relaxed max-w-[600px]">
                            งานบริการ
                        </p> */}
                        <div className="relative 
                                   w-[360px] h-[360px] 
                                   sm:w-[460px] sm:h-[460px] 
                                   md:w-[550px] md:h-[550px] 
                                   lg:w-[600px] lg:h-[600px]">
    
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
