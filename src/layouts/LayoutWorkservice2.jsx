import React from 'react'
import company1 from "../assets/image/workservice/PAGE04.02.1.png";
import company2 from "../assets/image/workservice/PAGE04.02.2.png";
import product1 from "../assets/image/workservice/PAGE04.02.3.png";
import bgSection from "../assets/image/workservice/PAGE04.02BG.png";

const LayoutWorkservice2 = () => {
    return (
        <section
            className="
                relative 
                pt-24 md:pt-32 lg:pt-40   /* ✅ ให้ spacing เหมือนตัวแรก */
                pb-12 md:pb-16
                bg-cover
            "
            style={{ 
                backgroundImage: `url(${bgSection})`,
                backgroundPosition: "30% center"   // ✅ ตรงกับ LayoutWorkservice1
            }}
        >

            {/* ✅ Overlay ให้โทนเดียวกัน */}
        <div className="
            absolute inset-0 
            bg-gradient-to-r 
            from-black/10 via-black/5 to-transparent   /* 📱 Mobile */
            md:from-black/10 md:via-black/5 md:to-transparent  /* 🖥 Desktop */
        "></div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE */}
                <div className="relative flex justify-center">

                    {/* Glow */}
                    <div className="absolute w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-blue-400/20 blur-3xl rounded-full"></div>

                    {/* Main */}
                    <div className="
                        relative 
                        w-full 
                        max-w-[320px]
                        sm:max-w-[420px]
                        md:max-w-[500px]
                        lg:max-w-[550px]
                    ">

                        {/* รูปหลัก */}
                        <img
                            src={company1}
                            alt="company"
                            className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition duration-500 drop-shadow-2xl"
                        />

                        {/* 🔥 รูปซ้าย */}
                        <img
                            src={company2}
                            alt="company2"
                            className="
                                absolute 
                                left-[-120px] md:left-[-200px]   /* ✅ ปรับให้ responsive */
                                bottom-[-60px] md:bottom-[-120px]
                                w-[70%] 
                                max-w-[250px] md:max-w-[300px]
                                hover:scale-105 
                                transition duration-500
                            "
                        />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col items-end text-right">

                    <h1 className="
                        mt-2 
                        text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                        font-bold 
                        text-white   /* ✅ เปลี่ยนเป็นขาวให้ match overlay */
                        leading-tight 
                        tracking-wide
                        space-y-2
                        drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]
                    ">
                        <div>ซ่อมบำรุงเครื่องมือ</div>
                        <div>บำรุงรักษาเครื่องมือ</div>
                        <div>อบรมการใช้งาน</div>
                    </h1>

                    {/* รูปขวา */}
                    <div className="
                        mt-6
                        w-full 
                        max-w-[320px]
                        sm:max-w-[420px]
                        md:max-w-[500px]
                        lg:max-w-[550px]
                    ">
                        <img
                            src={product1}
                            alt="product1"
                            className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition duration-500 drop-shadow-2xl"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default LayoutWorkservice2
