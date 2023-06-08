"use client"
import navlogo from "/public/images/becu.png"
import Image from "next/image"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineSearch } from "react-icons/ai"
import { MdLocationOn } from "react-icons/md"
import { BsQuestionLg } from "react-icons/bs"

const Header = () => {
  return (
    <div className="w-full h-[80px] bgways lg:bg-white flex items-center justify-between lg:justify-start gap-5 px-4 lg:px-[120px]">
      <Image alt="logo" src={navlogo} className="w-[100px] lg:w-[120px]" />

      <div className="flex items-center ml-[80px] justify-center gap-6 ">
        <div className="hidden lg:flex items-center justify-center gap-2 cursor-pointer">
          <AiOutlineSearch color={"#d12a2e"} size={20} />
          <p className="text-lg text-gray-700 tracking-wide font-medium hover:text-gray-500">
            Search
          </p>
        </div>
        <div className="hidden lg:flex items-center justify-center gap-2 cursor-pointer">
          <MdLocationOn color={"#d12a2e"} size={20} />
          <p className="text-lg text-gray-700 tracking-wide font-medium hover:text-gray-500">
            Location
          </p>
        </div>
        <div className="hidden lg:flex items-center justify-center gap-2 cursor-pointer">
          <BsQuestionLg color={"#d12a2e"} size={20} />
          <p className="text-lg text-gray-700 tracking-wide font-medium hover:text-gray-500">
            Support
          </p>
        </div>

        <button className="block lg:hidden">
          <GiHamburgerMenu className="" size={30} color={"#fff"} />
        </button>
      </div>
    </div>
  )
}

export default Header
