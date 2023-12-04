import React from "react";

export default function HeaderListTask() {
  return (
    <section className="w-full py-3 pr-8 bg-white flex flex-row justify-between items-center gap-4 rounded-xl shadow-md shadow-slate-200">
      <section className="w-1/12 h-full flex flex-row justify-start items-center gap-4">
        <hr className={`w-1 h-full rounded-full bg-white`} />

        <p className="w-1/2 text-sm font-black text-left text-slate-600 uppercase">
          Status
        </p>
      </section>

      <section className="w-9/12 pl-2 flex flex-row justify-start items-center gap-24">
        <p className="w-2/12 text-sm font-black text-left text-slate-600 uppercase">
          time left
        </p>
        <p className="w-2/12 text-sm font-black text-left text-slate-600 uppercase">
          Subject
        </p>
        <p className="w-8/12 text-sm font-black text-left text-slate-600 uppercase">
          task
        </p>
      </section>

      <section className="w-2/12 flex flex-row justify-start items-center gap-7">
        <p className="text-sm font-black text-left text-slate-600 uppercase">
          Team in task
        </p>
      </section>
    </section>
  );
}
