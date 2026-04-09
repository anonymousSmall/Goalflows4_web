import React from 'react'
import services from '../assets/image/service-gf.png'
import bgImage from "../assets/image/new/03.1BG.png";

function Community() {
    return (
        <div
            className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
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
                     <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-10 text-center md:text-left leading-tight tracking-wide">
                        บริการ
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="text-3xl sm:text-3xl md:text-4xl font-bold text-white mb-10 text-center md:text-left leading-tight tracking-wide">
                        ● ซ่อม / สอบเทียบ <br/>
                        ● อบรมการใช้งาน <br/>
                        ● บำรุงรักษาเครื่องมือ เครื่องจักร<br/>
                        ● ด้วยทีมงานผู้เชี่ยวชาญด้านเครื่องมือเฉพาะทางสำหรับอุตสาหกรรม<br/>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Community
