import React from 'react'
import services from '../assets/image/service-gf.png'
import bgImage from "../assets/image/new/03.1BG.png";

function Community() {
    return (
        <div
  className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="relative container mx-auto px-6 py-12 flex justify-center">

    {/* จำกัดความกว้าง */}
    <div className="max-w-[700px] w-full flex flex-col items-center md:items-start text-center md:text-left">

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-wide">
        บริการ
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-relaxed space-y-2">
        ● ซ่อม / สอบเทียบ <br />
        ● อบรมการใช้งาน <br />
        ● บำรุงรักษาเครื่องมือ เครื่องจักร <br />
        ด้วยทีมงานผู้เชี่ยวชาญด้านเครื่องมือเฉพาะทางสำหรับอุตสาหกรรม
      </p>

    </div>
  </div>
</div>
    )
}

export default Community
