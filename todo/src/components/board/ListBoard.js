import React from "react";
import ItemListTask from "./listTask/ItemListTask";

export default function ListBoard({ allTask }) {
  return (
    <section className="w-full h-full px-6 absolute z-20 left-0 flex flex-col justify-start items-start gap-5">
      <section className="w-full h-5/6 pb-8 flex flex-col justify-start items-start gap-3">
        <table className="w-full h-full">
          <thead className="w-full px-6 flex bg-white rounded-t-xl border-b border-slate-300 shadow-md shadow-slate-200">
            <tr className="w-full py-5 flex justify-start items-start gap-6 uppercase">
              <th className="w-2/12 text-sm font-black text-slate-400 tracking-wide flex justify-start items-start">
                <h3> status</h3>
              </th>
              <th className="w-2/12 text-sm font-black text-slate-400 tracking-wide flex justify-start items-start">
                <h3> subject</h3>
              </th>
              <th className="w-4/12 text-sm font-black text-slate-400 tracking-wide flex justify-start items-start">
                <h3> task</h3>
              </th>
              <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                <h3> priority</h3>
              </th>
              <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                <h3> deadline</h3>
              </th>
              <th className="w-2/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                <h3> team</h3>
              </th>
              {/* <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-start items-start">
                <h3> author</h3>
              </th> */}
              {/* <th className="w-1/12 text-slate-400 font-black text-sm flex justify-start items-start">
                <h3> details</h3>
              </th> */}
            </tr>
          </thead>

          <tbody className="w-full h-full max-h-full flex flex-col justify-start items-start bg-white divide-y divide-slate-200/50 rounded-b-xl shadow-md shadow-slate-200 overflow-x-hidden">
            {allTask?.map((item) => (
              <ItemListTask key={item.id + Math.random()} data={item} />
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}
