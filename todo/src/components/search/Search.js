import React, { useContext, useState } from "react";
import TitlePage from "../titlePage/TitlePage";
import { UserContext } from "../../context/UserContext";
import ItemListTask from "../board/listTask/ItemListTask";
import searchPic from "../../assets/image/svg/search.svg";

export default function Search() {
  const { search } = useContext(UserContext);

  return (
    <section className="w-full h-full relative">
      <section className="w-full h-full pt-[1.1rem] px-6 pb-4 absolute flex flex-col justify-start items-start gap-8">
        {/* title and btn create new task */}
        <section className="w-full flex flex-row justify-between items-center gap-4">
          <TitlePage title="search" />

          <div className="w-[29rem] h-12 px-6 bg-gray-200/50 flex justify-between items-center gap-4 rounded-xl ">
            <i className="fa fa-search text-slate-400/70"></i>
            <input
              type="text"
              onChange={(e) => search(e)}
              placeholder="Search subject, description, partners and date"
              className="w-full bg-transparent text-slate-800 text-sm font-bold text-left tracking-wide placeholder:text-slate-400/70 placeholder:font-normal"
            />
            <i className="fa fa-angle-right text-slate-400/70"></i>
          </div>
        </section>

        <section className="w-full h-5/6 pb-8 flex flex-col justify-start items-start gap-3">
          <table className="w-full h-full">
            <thead className="w-full flex bg-white rounded-t-xl border-b border-slate-300 shadow-md shadow-slate-200">
              <tr className="w-full py-5 px-4 flex justify-center items-start gap-3 uppercase">
                <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-start items-start">
                  <h3> status</h3>
                </th>
                <th className="w-2/12 text-sm font-black text-slate-400 tracking-wide flex justify-start items-start">
                  <h3> subject</h3>
                </th>
                <th className="w-3/12 text-sm font-black text-slate-400 tracking-wide flex justify-start items-start">
                  <h3> description</h3>
                </th>
                <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                  <h3> priority</h3>
                </th>
                <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                  <h3> deadline</h3>
                </th>
                <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                  <h3> Partners</h3>
                </th>
                <th className="w-2/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                  <h3> author</h3>
                </th>
              </tr>
            </thead>

            <tbody className="w-full max-h-full flex flex-col justify-start items-center bg-white divide-y divide-slate-200/50 rounded-b-xl shadow-md shadow-slate-200 overflow-x-hidden">
              {search?.length === 0 && (
                <tr className="w-full">
                  <th className="w-full px-5 py-10 flex flex-col justify-center items-center gap-5">
                    <img src={searchPic} alt="search" className="w-52" />
                    <h2 className="text-slate-600 text-lg font-black text-center capitalize">
                      Search for what you are looking for
                    </h2>
                  </th>
                </tr>
              )}

              {search?.map((item, index) => (
                <ItemListTask key={index} data={item} />
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </section>
  );
}
