import React from "react";

import avator3 from "../../../assets/image/userAvator/profile (6).png";
import avator4 from "../../../assets/image/userAvator/profile (5).png";
import avator5 from "../../../assets/image/userAvator/profile (4).png";
import avator6 from "../../../assets/image/userAvator/profile (16).png";

export default function ItemListTask() {
  return (
    <section className="w-full py-3 pr-8 bg-white flex flex-row justify-between items-center gap-4 rounded-xl shadow-md shadow-slate-200">
      <section className="w-1/12 h-full flex flex-row justify-start items-center gap-4">
        <hr className={`w-1 h-full rounded-full bg-green-500`} />

        <p className="text-sm font-bold text-left text-green-500">In Work</p>
      </section>

      <section className="w-9/12 pl-2 flex flex-row justify-start items-center gap-24">
        <section className="w-2/12 flex items-center justify-start gap-1.5">
          <i className="fas fa-clock text-slate-300 text-sm"></i>
          <span className="text-xs text-slate-400 font-normal">
            1 Days Left
          </span>
        </section>

        <p className="w-2/12 text-sm font-bold text-left text-slate-600">
          Space Tasks 3
        </p>
        <p className="w-8/12 text-xs font-normal tracking-wide text-left text-justify">
          Search Engine Optimization ...
        </p>
      </section>

      <section className="w-2/12 flex flex-row justify-start items-center">
        <section className="flex flex-row justify-start items-center gap-1">
          <div className="max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125 bg-sky-200 flex justify-center items-center text-xs font-medium">
            +2
          </div>
          <img
            className="max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125"
            src={avator3}
            alt={avator3}
          />
          <img
            className="max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125"
            src={avator4}
            alt={avator4}
          />
          <img
            className="max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125"
            src={avator5}
            alt={avator5}
          />
          <img
            className="max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125"
            src={avator6}
            alt={avator6}
          />
        </section>
      </section>
    </section>
  );
}
