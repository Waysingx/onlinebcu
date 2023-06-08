import React from "react"
import icon1 from "/public/images/icon1.png"
import icon2 from "/public/images/icon2.png"
import Image from "next/image"

const Footer = () => {
  return (
    <div className="h-[120px] lg:h-[80px] w-full bg-[#eaebec] text-[#333]  flex flex-col lg:flex-row gap-2 items-center justify-center">
      <h1 className="text-xs font-light ">
        2023 BECU. ALL RIGHTS RESERVED. FEDERALLY INSURED BY NCUA. EQUAL HOUSING
        OPPORTUNITY LENDER
      </h1>
      <div className="flex items-center gap-4">
        <Image alt="icon1" src={icon1} className="w-[50px] lg:w-[50px]" />
        <Image alt="icon1" src={icon2} className="w-[50px] lg:w-[50px]" />
      </div>
    </div>
  )
}

export default Footer
