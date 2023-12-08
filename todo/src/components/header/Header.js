import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full h-20 relative bg-white px-5 border-b border-slate-300 flex justify-between items-center">
      <i className="fa fa-bars iconContainer bg-gray-100 text-slate-400 text-sm"></i>

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
        <i className="fa fa-bell iconContainer bg-amber-100 text-amber-600 text-sm"></i>
        <i className="fas fa-exclamation-triangle	iconContainer bg-slate-100 text-slate-400 hover:bg-rose-100 hover:text-rose-600 text-sm"></i>

        <i
          onClick={() => {
            sessionStorage.clear();
            localStorage.clear();
            navigate("/login");
          }}
          className="fas fa-times iconContainer bg-rose-100 text-rose-600 text-sm"
        ></i>
      </div>
    </header>
  );
}
