import React from "react";
import ItemListTask from "./listTask/ItemListTask";

import noData from "../../assets/image/svg/noData.svg";

export default function ListBoard({ allTask }) {
  console.log(allTask);

  return (
    <section className="w-full h-full px-6 absolute z-20 left-0 flex flex-col justify-start items-start gap-5">
      <section className="w-full h-5/6 pb-8 flex flex-col justify-start items-start gap-3">
        <table className="w-full h-full">
          <thead className="w-full px-6 flex bg-white rounded-t-xl border-b border-slate-300 shadow-md shadow-slate-200">
            <tr className="w-full py-5 flex justify-start items-start gap-5 uppercase">
              <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                <h3> status</h3>
              </th>
              <th className="w-2/12 text-sm font-black text-slate-400 tracking-wide flex justify-start items-start">
                <h3> subject</h3>
              </th>
              <th className="w-5/12 text-sm font-black text-slate-400 tracking-wide flex justify-start items-start">
                <h3> description</h3>
              </th>
              <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                <h3> priority</h3>
              </th>
              <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                <h3> deadline</h3>
              </th>
              <th className="w-/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                <h3> Partners</h3>
              </th>
              <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-start items-start">
                <h3> author</h3>
              </th>
              {/* <th className="w-1/12 text-slate-400 font-black text-sm flex justify-start items-start">
                <h3> details</h3>
              </th> */}
            </tr>
          </thead>

          <tbody className="w-full h-full max-h-full flex flex-col justify-start items-start bg-white divide-y divide-slate-200/50 rounded-b-xl shadow-md shadow-slate-200 overflow-x-hidden">
            {allTask.length === 0 && (
              <div className="w-3/5 p-10 bg-white rounded-xl flex flex-col justify-center items-center gap-4">
                <img src={noData} alt="no data" className="w-52 mb-6" />
                {/* <i className="fas fa-exclamation-circle text-8xl text-slate-400 mb-6"></i> */}
                <h2 className="text-slate-600 text-3xl font-black capitalize">
                  No task has been registered
                </h2>
                <p className="text-slate-600 text-base text-center">
                  Register a new task
                </p>
              </div>
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
