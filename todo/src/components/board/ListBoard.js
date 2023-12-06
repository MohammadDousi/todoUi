import React from "react";

import avator3 from "../../assets/image/userAvator/profile (6).png";
import avator4 from "../../assets/image/userAvator/profile (5).png";
import avator5 from "../../assets/image/userAvator/profile (4).png";
import avator6 from "../../assets/image/userAvator/profile (16).png";

export default function ListBoard() {
  return (
    <section className="w-full h-full px-6 absolute z-20 left-0 flex flex-col justify-start items-start gap-5">
      <section className="w-full h-5/6 pb-8 flex flex-col justify-start items-start gap-3">
        <table className="w-full h-full">
          <thead className="w-full px-8 flex bg-white rounded-t-xl border-b border-slate-300 shadow-md shadow-slate-200">
            <tr className="w-full py-5 flex justify-start items-start gap-6 uppercase">
              <th className="w-2/12 text-slate-400 font-black text-sm flex justify-start items-start">
                <h3> status</h3>
              </th>
              <th className="w-2/12 text-slate-400 font-black text-sm flex justify-start items-start">
                <h3> subject</h3>
              </th>
              <th className="w-3/12 text-slate-400 font-black text-sm flex justify-start items-start">
                <h3> task</h3>
              </th>
              <th className="w-1/12 text-slate-400 font-black text-sm flex justify-start items-start">
                <h3> deadline</h3>
              </th>
              <th className="w-2/12 text-slate-400 font-black text-sm flex justify-start items-start">
                <h3> team</h3>
              </th>
              <th className="w-1/12 text-slate-400 font-black text-sm flex justify-start items-start">
                <h3> owner</h3>
              </th>
              <th className="w-1/12 text-slate-400 font-black text-sm flex justify-start items-start">
                <h3> details</h3>
              </th>
            </tr>
          </thead>

          <tbody className="w-full h-full flex flex-col justify-start items-start bg-white divide-y divide-slate-200/50 rounded-b-xl shadow-md shadow-slate-200 overflow-x-hidden">
            <tr className="w-full py-4 px-8 text-slate-600 font-normal text-sm capitalize flex justify-center items-center gap-6 cursor-pointer hover:bg-amber-50">
              <th className="w-2/12 flex justify-start items-start">
                <p className="h-full py-1 px-5 bg-green-100 font-bold text-center text-green-600 rounded-full">
                  In Work
                </p>
              </th>
              <th className="w-2/12 flex justify-start items-start">
                <p className="w-full text-left">Space Tasks 3</p>
              </th>
              <th className="w-3/12 flex justify-start items-start">
                <p className="w-full text-left">
                  Search Engine Optimization ...
                </p>
              </th>
              <th className="w-1/12 flex justify-start items-start">
                <p className="w-full text-left">1 Days Left</p>
              </th>
              <th className="w-2/12 flex justify-start items-start">
                <section className="w-full pr-2 hover:pr-0 grid grid-cols-[repeat(5,1rem)] hover:grid-cols-[repeat(5,1.7rem)]">
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
              </th>
              <th className="w-1/12 flex justify-start items-start">
                <p className="w-full text-left">Bud Choi</p>
              </th>

              <th className="w-1/12 flex justify-center items-center">
                <i className="fa fa-angle-right w-8 h-8 text-gray-400 text-sm bg-gray-200/50 rounded-xl flex justify-center items-center"></i>
              </th>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
}
