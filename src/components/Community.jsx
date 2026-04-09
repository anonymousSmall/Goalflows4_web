import React from 'react'
import services from '../assets/image/service-gf.png'
import bgImage from "../assets/image/new/03.1BG.png";

function Community() {
    return (
        <div
            className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage1})` }}
        >
            {/* overlay */}
           {/* <div className="absolute inset-0 bg-black/35 opacity-50"></div> */}

            <div className="relative container mx-auto max-w-[1320px] px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

                {/* LEFT */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">

                    {/* LOGO */}
                    {/* <img
                        src={branner1}
                        alt="GOAL FLOW INSTRUMENT"
                        className="w-[220px] sm:w-[300px] md:w-[420px] lg:w-[500px] object-contain"
                    /> */}
                     <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d3f66] mb-10 text-center md:text-left leading-tight tracking-wide">
                        สินค้าที่จำหน่าย
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white leading-relaxed max-w-[600px]">
                        ● ซ่อม / สอบเทียบ <br/>
                        ● อบรมการใช้งาน <br/>
                        ● บำรุงรักษาเครื่องมือ เครื่องจักร<br/>
                        ● ด้วยทีมงานผู้เชี่ยวชาญด้านเครื่องมือเฉพาะทางสำหรับอุตสาหกรรม<br/>
                    </p>
                    <button className="mt-6 px-6 py-3 bg-[#003b6e] text-white rounded-lg hover:bg-[#002a4d] transition">
                        ติดต่อโกลโฟลฯ
                    </button>
                </div>

                {/* RIGHT (SLIDER) */}
                <div className="w-full md:w-[50%] flex justify-center">
                    <div className="w-[80%] sm:w-[70%] md:w-full">
                        <BrandSlider />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Community
