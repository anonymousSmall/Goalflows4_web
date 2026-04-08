import React from 'react'
import { motion } from "framer-motion";

import accretech from "../assets/image/logo/accretech.png";
import accud from "../assets/image/logo/accud.png";
import aikoh from "../assets/image/logo/aikoh.png";
import carmar from "../assets/image/logo/carmar.png";
import carton from "../assets/image/logo/carton.png";
import chuer from "../assets/image/logo/chuer.png";
import digicon from "../assets/image/logo/digicon.png";
import eisen from "../assets/image/logo/eisen.png";
import fluk from "../assets/image/logo/fluk.png";
import gin from "../assets/image/logo/gin.png";
import hexagon from "../assets/image/logo/hexagon.png";
import imada from "../assets/image/logo/imada.png";
import insize from "../assets/image/logo/insize.png";
import jadever from "../assets/image/logo/jadever.png";
import mahr from "../assets/image/logo/mahr.png";
import mitutoyo from "../assets/image/logo/mitutoyo.png";
import ojiyas from "../assets/image/logo/ojiyas.png";
import peacock from "../assets/image/logo/peacock.png";
import shahe from "../assets/image/logo/shahe.png";
import shimadzu from "../assets/image/logo/shimadzu.png";
import zepper from "../assets/image/logo/zepper.png";
import tboss from "../assets/image/logo/t-boss.png";
import tanita from "../assets/image/logo/tanita.png";
import vertex from "../assets/image/logo/vertex.png";
import morewright from "../assets/image/logo/more&wright.png";
import mikrosize from "../assets/image/logo/mokrosize.png";

const OurCustomer = () => {
    const customers = [accretech,
        accud,
        aikoh,
        carmar,
        carton,
        chuer,
        digicon,
        eisen,
        fluk,
        gin,
        hexagon,
        imada,
        mikrosize,
        insize,
        jadever,
        mahr,
        mitutoyo,
        ojiyas,
        peacock,
        shahe,
        shimadzu,
        zepper,
        tboss,
        tanita,
        vertex,
        morewright,]; // สมมติว่ามีข้อมูลลูกค้าในรูปแบบอาร์เรย์
    return (
        <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
            <div className="max-w-[1320px] mx-auto px-6">

                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                        Our Customers
                    </h2>
                    <p className="mt-3 text-gray-500 text-sm md:text-base">
                        Trusted by leading brands and companies
                    </p>
                </div>

                {/* Grid Logo */}
                <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-6 
          gap-6 md:gap-8
        ">
                    {customers.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="
                flex items-center justify-center
                bg-white 
                rounded-2xl 
                p-4 md:p-6
                shadow-sm 
                hover:shadow-xl 
                transition-all duration-300
                hover:-translate-y-2
              "
                        >
                            <img
                                src={logo}
                                alt={`customer-${index}`}
                                className="
                  max-h-[40px] md:max-h-[60px]
                  object-contain
                  grayscale hover:grayscale-0
                  opacity-70 hover:opacity-100
                  transition duration-300
                "
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default OurCustomer