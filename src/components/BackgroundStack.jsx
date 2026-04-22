import React from "react";
import bg1 from "../assets/image/workservice/BG04.01BG.png";
import bg2 from "../assets/image/workservice/PAGE04.02BG.png";

const BackgroundStack = () => {
  return (
    <div className="
      absolute top-0 left-0 w-full 
      min-h-full   /* ✅ สำคัญ: ให้สูงตาม parent */
      -z-10 
      overflow-hidden
    ">

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
          -mt-[2px]

          translate-x-[10px] 
          md:translate-x-[2px]
        "
      />

      {/* ✅ กันพื้นขาว (fallback) */}
      <div className="w-full h-[200px] bg-[#0b1c3d]" />
    </div>
  );
};

export default BackgroundStack;
