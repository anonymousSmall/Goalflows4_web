import React from "react";
import bg1 from "../assets/image/workservice/BG04.01BG.png";
import bg2 from "../assets/image/workservice/PAGE04.02BG.png";

const BackgroundStack = () => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">

            {/* ภาพบน */}
            <img
                src={bg1}
                alt=""
                className="
          w-full 
          h-auto 
          block
        "
            />

            {/* ภาพล่าง */}
            <img
                src={bg2}
                alt=""
                className="
          w-full 
          h-auto 
          block
          -mt-[-0px]   /* 🔥 ดันขึ้นนิดนึงให้เนียน */

    translate-x-[20px]   /* 👉 ขยับไปขวา */
    md:translate-x-[2px]  /* 👉 Desktop ขยับมากขึ้น */
        "
            />

        </div>
    );
};

export default BackgroundStack;