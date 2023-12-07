import React from "react";

import pic from "../../../assets/image/pic/Image.png";

import avator3 from "../../../assets/image/userAvator/profile (6).png";
import avator4 from "../../../assets/image/userAvator/profile (5).png";
import avator5 from "../../../assets/image/userAvator/profile (4).png";
import avator6 from "../../../assets/image/userAvator/profile (16).png";

export default function ItemGridTask() {
  return (
    <section className="w-full p-3 bg-white flex flex-col justify-between items-center gap-4 shadow-md cursor-pointer rounded-xl">
      <img
        className="w-full max-h-32 rounded-xl object-cover shadow-md shadow-slate-200"
        src={pic}
        alt={pic}
      />

      <section className="w-full flex flex-col justify-center items-center gap-1">
        <section className="w-full mb-2 flex items-center justify-start gap-2">
          <i className="fas fa-pen-alt text-slate-300 text-sm"></i>
          <h5 className="text-sm font-normal text-left text-slate-400 capitalize">
            Bud Choi
          </h5>
        </section>

        <p className="w-full text-sm font-bold text-left text-slate-600">
          Space Tasks 3
        </p>
        <p className="w-full text-slate-500 text-sm font-normal tracking-wide text-left text-justify">
          Search Engine Optimization ...
        </p>
      </section>

      <section className="w-full flex flex-row justify-between items-center mt-2">
        <section className="w-full flex items-center justify-start gap-2">
          <i className="fas fa-clock text-slate-300 text-sm"></i>
          <span className="text-sm text-slate-400 font-normal capitalize">
            1 Days Left
          </span>
        </section>

        <section className="pr-2 hover:pr-0 grid grid-cols-[repeat(5,1rem)] hover:grid-cols-[repeat(5,1.7rem)]">
          <img
            className=" max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125"
            src={avator3}
            alt={avator3}
          />
          <img
            className=" max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125"
            src={avator4}
            alt={avator4}
          />
          <img
            className=" max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125"
            src={avator5}
            alt={avator5}
          />
          <img
            className=" max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125"
            src={avator6}
            alt={avator6}
          />
          <div className=" max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125 bg-sky-200 flex justify-center items-center text-xs font-medium">
            +2
          </div>
        </section>
      </section>
    </section>
  );
}
