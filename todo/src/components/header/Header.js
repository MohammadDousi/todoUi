import React from "react";

export default function Header() {
  return (
    <header className="w-full h-20 relative bg-white px-5 border-b border-slate-300 flex justify-between items-center">
      <div className="iconContainer bg-gray-200/50">
        <i className="fa fa-bars text-gray-400 text-sm"></i>
      </div>

      <div className="flex justify-center items-center gap-14">
        <ul className="flex justify-start items-center gap-6">
          <li className="text-textColor font-bold hover:font-black text-[13px] hover:text-blue-600 duration-500 cursor-pointer">
            Dashboard
          </li>
          <li className="text-textColor font-bold hover:font-black text-[13px] hover:text-blue-600 duration-500 cursor-pointer">
            About Us
          </li>
          <li className="text-textColor font-bold hover:font-black text-[13px] hover:text-blue-600 duration-500 cursor-pointer">
            News
          </li>
          <li className="text-textColor font-bold hover:font-black text-[13px] hover:text-blue-600 duration-500 cursor-pointer">
            User Policy
          </li>
          <li className="text-textColor font-bold hover:font-black text-[13px] hover:text-blue-600 duration-500 cursor-pointer">
            Contacts
          </li>
        </ul>

        <div className="w-[29rem] px-6 py-2 bg-gray-200/50 flex justify-between items-center gap-4 rounded-xl ">
          <i className="fa fa-search text-slate-400/70"></i>
          <input
            type="text"
            placeholder="Search Products, Orders and Clients"
            className="w-full bg-transparent text-slate-800 text-sm font-bold text-left tracking-wide placeholder:text-slate-400/70 placeholder:font-normal"
          />
          <i className="fa fa-angle-right text-slate-400/70"></i>
        </div>
      </div>

      <div className="flex items-center justify-end gap-4">
        <div className="iconContainer relative bg-amber-100 ">
          {/* <div className="w-2 h-2 absolute top-0.5 left-0.5 rounded-full bg-pink-500 animate-pulse"></div> */}
          <i className="fa fa-bell text-amber-600 text-sm"></i>
        </div>

        <div className="iconContainer bg-rose-100 ">
          <i className="fas fa-times text-rose-600 text-sm"></i>
        </div>
      </div>
    </header>
  );
}
