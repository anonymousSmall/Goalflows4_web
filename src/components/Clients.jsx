import React from 'react'
import bgImage from "../assets/image/logocus/PAGE01.05BG.png";
import logo from "../assets/image/logocus/PAGE01.05.1.png";

// import รูปจาก assets
import 1 from "../assets/image/brandsale/1.png";
import 2 from "../assets/image/brandsale/2.png";
import 3 from "../assets/image/brandsale/3.png";
import 4 from "../assets/image/brandsale/4.png";
import 5 from "../assets/image/brandsale/5.png";
import 6 from "../assets/image/brandsale/6.png";
import 7 from "../assets/image/brandsale/7.png";
import 8 from "../assets/image/brandsale/8.png";
import 9 from "../assets/image/brandsale/9.png";
import 10 from "../assets/image/brandsale/10.png";
import 11 from "../assets/image/brandsale/11.png";
import 12 from "../assets/image/brandsale/12.png";
import 13 from "../assets/image/brandsale/13.png";
import 14 from "../assets/image/brandsale/14.png";
import 15 from "../assets/image/brandsale/15.png";
import 16 from "../assets/image/brandsale/16.png";
import 17 from "../assets/image/brandsale/17.png";
import 18 from "../assets/image/brandsale/18.png";
import 19 from "../assets/image/brandsale/19.png";
import 20 from "../assets/image/brandsale/20.png";
import 21 from "../assets/image/brandsale/21.png";
import 22 from "../assets/image/brandsale/22.png";
import 23 from "../assets/image/brandsale/23.png";
import 24 from "../assets/image/brandsale/24.png";
import 25 from "../assets/image/brandsale/25.png";
import 26 from "../assets/image/brandsale/26.png";
import 27 from "../assets/image/brandsale/27.png";
import 28 from "../assets/image/brandsale/28.png";
import 29 from "../assets/image/brandsale/29.png";
import 30 from "../assets/image/brandsale/30.png";
import 31 from "../assets/image/brandsale/31.png";
import 32 from "../assets/image/brandsale/32.png";
import 33 from "../assets/image/brandsale/33.png";
import 34 from "../assets/image/brandsale/34.png";
import 35 from "../assets/image/brandsale/35.png";
import 36 from "../assets/image/brandsale/36.png";
import 37 from "../assets/image/brandsale/37.png";
import 38 from "../assets/image/brandsale/38.png";
import 39 from "../assets/image/brandsale/39.png";
import 40 from "../assets/image/brandsale/40.png";
import 41 from "../assets/image/brandsale/41.png";
import 42 from "../assets/image/brandsale/42.png";
import 43 from "../assets/image/brandsale/43.png";
import 44 from "../assets/image/brandsale/44.png";
import 45 from "../assets/image/brandsale/45.png";
import 46 from "../assets/image/brandsale/46.png";
import 47 from "../assets/image/brandsale/47.png";
import 48 from "../assets/image/brandsale/48.png";
import 49 from "../assets/image/brandsale/49.png";
import 50 from "../assets/image/brandsale/50.png";
import 51 from "../assets/image/brandsale/51.png";
import 52 from "../assets/image/brandsale/52.png";
import 53 from "../assets/image/brandsale/53.png";
import 54 from "../assets/image/brandsale/54.png";
import 55 from "../assets/image/brandsale/55.png";
import 56 from "../assets/image/brandsale/56.png";
import 57 from "../assets/image/brandsale/57.png";
import 58 from "../assets/image/brandsale/58.png";
import 59 from "../assets/image/brandsale/59.png";
import 60 from "../assets/image/brandsale/60.png";
import 61 from "../assets/image/brandsale/61.png";
import 62 from "../assets/image/brandsale/62.png";
import 63 from "../assets/image/brandsale/63.png";
import 64 from "../assets/image/brandsale/64.png";
import 65 from "../assets/image/brandsale/65.png";
import 66 from "../assets/image/brandsale/66.png";
import 67 from "../assets/image/brandsale/67.png";
import 68 from "../assets/image/brandsale/68.png";
import 69 from "../assets/image/brandsale/69.png";


const clientsImgLogo = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,
    40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69
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
                                //className="h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition duration-300"
                                className="h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] object-contain hover:grayscale-0 opacity-80 hover:opacity-100 transition duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Clients
