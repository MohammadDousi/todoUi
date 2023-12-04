import React from "react";

export default function HeaderGridTask({ data }) {
  return (
    <section
      className={`w-full relative bg-white flex flex-row justify-between items-center shadow-lg shadow-slate-200 rounded-xl overflow-hidden`}
    >
      <span
        className={`w-full h-full absolute ${data.color} opacity-25 z-10`}
      ></span>
      <hr className={`w-1 h-1/2 rounded-full ${data.color}`} />

      <div className="w-full py-2.5 px-3 flex flex-row justify-between items-center z-20">
        <p className="text-[13px] font-black text-slate-600 uppercase">
          {data.title}
        </p>

        <div
          className={`w-7 h-7 z-20 ${data.color} bg-opacity-30 text-xs font-bold text-slate-800/70 flex justify-center items-center rounded-xl`}
        >
          {data.countTask}
        </div>
      </div>
    </section>
  );
}