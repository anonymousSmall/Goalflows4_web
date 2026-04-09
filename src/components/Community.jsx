import React from 'react'
import services from '../assets/image/service-gf.png'
import bgImage from "../assets/image/new/03.1BG.png";

function Community() {
    return (
        <section className="relative w-full bg-white py-14 md:py-20">
            <div className="relative max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-xl group">

                {/* Background */}
                <div className="h-[320px] sm:h-[380px] md:h-[460px]">
                    <img
                        src={bgImage}
                        alt="BGGF"
                        className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700"
                    />
                </div>
            </div>
        </section>
    )
}

export default Community
