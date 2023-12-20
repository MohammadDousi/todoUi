import React from "react";
import ItemListTask from "./listTask/ItemListTask";

import noData from "../../assets/image/svg/noData.svg";

export default function ListBoard({ allTask }) {

  return (
    <section className="w-full h-full px-6 absolute z-20 left-0 flex flex-col justify-start items-start gap-5">
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
            {allTask?.length === 0 && (
              <tr className="w-full">
                <th className="w-full px-5 py-10 flex flex-col justify-center items-center gap-5">
                  <img src={noData} alt="no data" className="w-20" />
                  <h2 className="text-slate-600 text-lg font-black text-center capitalize">
                    You are not tagged in Tesk yet.
                  </h2>
                </th>
              </tr>
            )}

            {allTask?.map((item) => (
              <ItemListTask key={item.id + Math.random()} data={item} />
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}
