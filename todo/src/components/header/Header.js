import React, { useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { UserContext } from "../../context/UserContext";

import "./headerStyle.css";
export default function Header() {

  const navigate = useNavigate();

  return (
    <header className="w-full h-20 relative bg-white px-5 border-b border-slate-300 hidden lg:flex justify-between items-center">
      <i className="fa fa-bars iconContainer bg-gray-100 text-slate-400 text-sm"></i>

      <div className="hidden lg:flex justify-center items-center gap-14">
        <ul className="flex justify-start items-center gap-6">
          <li
            onClick={() => navigate("/main/board")}
            className="text-textColor font-bold text-sm hover:text-blue-600 duration-500 cursor-pointer"
          >
            Dashboard
          </li>
          <li className="text-textColor font-bold text-sm hover:text-blue-600 duration-500 cursor-pointer">
            <Link to={"https://www.kaktusprog.ir/"}>About Us</Link>
          </li>
          <li className="text-textColor font-bold text-sm hover:text-blue-600 duration-500">
            News
          </li>
          <li className="text-textColor font-bold text-sm hover:text-blue-600 duration-500">
            User Policy
          </li>
          <li className="text-textColor font-bold text-sm hover:text-blue-600 duration-500">
            Contacts
          </li>
        </ul>

        {/* <div className="w-[29rem] h-12 px-6 bg-gray-200/50 flex justify-between items-center gap-4 rounded-xl ">
          <i className="fa fa-search text-slate-400/70"></i>
          <input
            type="text"
            onFocus={() => navigate("/main/search")}
            onChange={(e) => search(e)}
            placeholder="Search subject, description, partners and date"
            className="w-full bg-transparent text-slate-800 text-sm font-bold text-left tracking-wide placeholder:text-slate-400/70 placeholder:font-normal"
          />
          <i className="fa fa-angle-right text-slate-400/70"></i>
        </div> */}
      </div>

      <div className="flex items-center justify-end gap-4">
        <i className="fa fa-bell iconContainer bg-amber-100 text-amber-600 text-sm"></i>
        <i className="fas fa-exclamation-triangle	iconContainer bg-slate-100 text-slate-400 hover:bg-rose-100 hover:text-rose-600 text-sm"></i>

        <Popup
          modal
          nested
          trigger={
            <i className="fas fa-times iconContainer bg-rose-100 text-rose-600 text-sm"></i>
          }
          position="right center"
        >
          {(close) => (
            <div className="p-10 flex flex-col justify-center items-center gap-8">
              <section className="w-full space-y-1">
                <p className="w-full text-left text-red-600 font-black text-xl capitalize">
                  exit
                </p>
                <p className="w-full text-left text-slate-600 font-normal text-base">
                  Do you want to exit ?
                </p>
              </section>
              <section className="flex flex-row justify-center items-center gap-4">
                <button
                  onClick={() => close()}
                  className="h-10 px-8 hover:px-10 hover:bg-slate-500 text-slate-700 hover:text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500"
                >
                  no care !
                </button>

                <button
                  onClick={() => {
                    sessionStorage.clear();
                    localStorage.clear();
                    navigate("/login");
                    close();
                  }}
                  className="h-10 px-8 hover:px-10 bg-red-200 hover:bg-red-500 text-red-700 hover:text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500"
                >
                  yes , exit
                </button>
              </section>
            </div>
          )}
        </Popup>
      </div>
    </header>
  );
}
