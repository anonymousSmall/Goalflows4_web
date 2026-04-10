import React from 'react'
import bgImage from "../assets/image/logocus/PAGE01.05BG.png";
import logo from "../assets/image/logocus/PAGE01.05.1.png";

// import รูปจาก assets
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

const clientsImgLogo = [
    accretech,
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
    morewright,
]


function Clients() {
    return (
        <div
            className="relative w-full min-h-[200px] md:min-h-[300px] lg:min-h-[400px] flex items-center justify-start bg-cover bg-center bg-no-repeat md:bg-[length:50%_auto]"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* overlay */}
            <div className="absolute inset-0 opacity-50"></div>

            <div className="absolute top-1 left-1 md:top-2 md:left-1 z-20 ">
                <img
                    src={logo}
                    alt="Product 1"
                    className="w-[95%] sm:w-[85%] md:w-[40%] object-contain transition duration-500 group-hover:scale-110 group-hover:drop-shadow-2xl"
                />
            </div>
            {/* Slider */}
            {/* Slider */}
            <div className="relative w-full overflow-hidden mt-20 md:mt-24 lg:mt-28">
                <div className="flex w-max animate-scroll gap-10 md:gap-14">

                    {/* LOOP 1 */}
                    {clientsImgLogo.map((client, index) => (
                        <div key={`1-${index}`} className="flex items-center justify-center min-w-[100px] sm:min-w-[120px]">
                            <img
                                src={client}
                                alt="brand"
                                className="h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Clients
