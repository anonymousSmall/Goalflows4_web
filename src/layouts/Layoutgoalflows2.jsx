import React from 'react'
import bg1 from "../assets/image/goalflows/PAGE02.03BG.png"
import left1 from "../assets/image/goalflows/PAGE02.03.1.png"
import right1 from "../assets/image/goalflows/PAGE02.03.2.png"
import hardness from "../assets/image/goalflows/hardness.png"
import balance from "../assets/image/goalflows/BALANCE.png"

const Layoutgoalflows2 = () => {
    return (
        <section className="pt-[2px]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-4 md:px-6 py-8 md:py-12">

                {/* 🔷 LEFT */}
                <div className="group relative overflow-hidden rounded-2xl">

                    {/* 🔷 IMAGE */}
                    <img
                        src={left1}
                        alt="left"
                        className="
      w-full 
      aspect-[4/3] md:aspect-[5/4] lg:aspect-[16/10]
      object-cover 
      transition duration-500 
    "
                    />

                    {/* 🔷 OVERLAY (พื้นดำโปร่ง) */}
                    <div className="absolute inset-0 transition duration-500" />

                    {/* 🔷 TEXT */}
                    <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-4 flex flex-col justify-center items-start p-4 md:p-6 ">

                        <div>
                            <img src={hardness} alt="hardness" className='w-full h-full object-cover' />
                        </div>

                        <div>
                            <h1 className='text-3xl text-center text-[#003b6e] font-bold'>เครื่องวัดความแข็ง</h1>
                            <p className="text-sm md:text-base max-w-[90%] text-[#003b6e] text-center mx-auto py-2 leading-tight tracking-wide">
                                เครื่องวัดความแข็งของเหล็ก(Hardness Tester) จำเป็นต่ออุตสาหกรรมการผลิตเพื่อควบคุมคุณภาพ(QC)ตรวจสอบความแข็งแรงทนทานต่อการสึกหรอและเสียรูปของชิ้นงานช่วยยืนยันว่าวัตถุดิบและผลิตภัณฑ์เป็นไปตามมาตรฐานที่กำหนดก่อนนำไปใช้งานจริงและช่วยพัฒนาปรับปรุงกระบวนการผลิตให้ได้มาตรฐานสูงสุด
                            </p>
                        </div>

                    </div>

                </div>

                {/* 🔷 RIGHT */}
                <div className="group relative overflow-hidden rounded-2xl">
                    <img
                        src={right1}
                        alt="right"
                        className="
          w-full 
          aspect-[4/3] md:aspect-[5/4] lg:aspect-[16/10]
          object-cover 
          transition duration-500 
        "
                    />
                    {/* 🔷 OVERLAY (พื้นดำโปร่ง) */}
                    <div className="absolute inset-0 transition duration-500" />

                    {/* 🔷 TEXT */}
                    <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-4 flex flex-col justify-center items-start p-4 md:p-6 ">

                        <div>
                            <img src={balance} alt="balance" className='w-full h-full object-cover' />
                        </div>

                        <div>
                            <h1 className='text-3xl text-center text-[#003b6e] font-bold'>เครื่องชั่งน้ำหนัก</h1>
                            <p className="text-sm md:text-base max-w-[90%] text-[#003b6e] text-center mx-auto py-2 leading-tight tracking-wide">
                                โรงงานต้องใช้เครื่องชั่งน้ำหนักเพื่อควบคุมคุณภาพการผลิต ลดของเสีย(Waste)ควบคุมต้นทุนวัตถุดิบและตรวจสอบความถูกต้องของสินค้าก่อนจัดส่ง
                                การชั่งที่แม่นยำช่วยป้องกันการปนเปื้อนในอุตสาหกรรมยา/อาหารและทำให้อุตสาหกรรมเคมีมีความปลอดภัยรวมถึงใช้ตรวจสอบสต๊อกและปฏิบัติตามมาตรฐานอุตสาหกรรม
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Layoutgoalflows2