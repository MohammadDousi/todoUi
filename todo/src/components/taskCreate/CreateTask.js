import React, { useState } from "react";

import avator from "../../assets/image/userAvator/profile (15).png";

export default function CreateTask() {
  const [showTagTeammate, setShowTagTeammate] = useState(false);

  return (
    <section className="w-full h-full relative">
      <section className="w-full h-full pt-5 px-6 pb-4 absolute flex flex-col justify-start items-start gap-6 overflow-x-hidden">
        <section className="w-full mb-4 flex flex-row justify-start items-center gap-4">
          <hr className="w-1 h-4 bg-blue-500 rounded-full" />

          <h2 className="text-blue-600 font-black text-xl capitalize">
            create new task
          </h2>
        </section>
        <section className="w-full flex flex-col justify-start items-start gap-1.5">
          <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
            subject
          </h4>
          <input
            type="text"
            placeholder="Description of the subject"
            className="w-1/2 h-10 px-8 text-slate-600 font-normal text-base tracking-wide rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500"
          />
        </section>
        <section className="w-full flex flex-col justify-start items-start gap-1.5">
          <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
            description
          </h4>

          <textarea
            type="text"
            placeholder="Write a few lines about what needs to be done"
            className="w-1/2 h-32 px-8 py-4 text-slate-600 font-normal text-base tracking-wide rounded-xl border border-slate-300 placeholder:text-slate-300 focus:border-blue-500"
          />
        </section>
        <section className="w-2/5 flex flex-col justify-start items-start gap-1.5 ">
          <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
            Priority
          </h4>

          <div className="w-full h-12 px-2 py-1 bg-white flex flex-row justify-center items-center gap-3 rounded-xl border border-slate-300">
            <div className="w-full flex justify-center items-center">
              <input
                type="radio"
                name="option"
                id="force"
                value="force"
                className="peer hidden"
              />
              <label
                for="force"
                className="w-full py-1 text-slate-600 font-normal text-sm text-center capitalize cursor-pointer select-none rounded-full peer-checked:border peer-checked:border-rose-300 peer-checked:bg-rose-100 peer-checked:font-bold peer-checked:text-rose-600"
              >
                force
              </label>
            </div>

            <div className="w-full flex justify-center items-center">
              <input
                type="radio"
                name="option"
                id="high"
                value="high"
                className="peer hidden"
              />
              <label
                for="high"
                className="w-full py-1 text-slate-600 font-normal text-sm text-center capitalize cursor-pointer select-none rounded-full peer-checked:border peer-checked:border-amber-300 peer-checked:bg-amber-100 peer-checked:font-bold peer-checked:text-amber-600"
              >
                high
              </label>
            </div>

            <div className="w-full flex justify-center items-center">
              <input
                type="radio"
                name="option"
                id="normal"
                value="normal"
                className="peer hidden"
              />
              <label
                for="normal"
                className="w-full py-1 text-slate-600 font-normal text-sm text-center capitalize cursor-pointer select-none rounded-full peer-checked:border peer-checked:border-green-300 peer-checked:bg-green-100 peer-checked:font-bold peer-checked:text-green-600"
              >
                normal
              </label>
            </div>

            <div className="w-full flex justify-center items-center">
              <input
                type="radio"
                name="option"
                id="low"
                value="low"
                className="peer hidden"
              />
              <label
                for="low"
                className="w-full py-1 text-slate-500 font-normal text-sm text-center capitalize cursor-pointer select-none rounded-full peer-checked:border peer-checked:border-blue-300 peer-checked:bg-blue-100 peer-checked:font-bold peer-checked:text-blue-600"
              >
                low
              </label>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col justify-start items-start gap-1.5">
          <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
            tag teammate
          </h4>

          <section className="w-1/2 flex flex-col items-center">
            <section className="w-full flex flex-col items-center gap-0">
              <section className="w-full min-h-fit h-auto flex justify-between gap-2 pl-8 pr-3 bg-white border border-slate-300 rounded-xl">
                <div className="py-2 flex flex-row flex-wrap gap-2">
                  <div className="py-1 text-sm font-normal capitalize flex flex-row justify-center items-center gap-3 px-3 rounded-full text-slate-800 bg-slate-100 border border-slate-300">
                    @ Dina Wangui
                    <i className="fa fa-times pt-0.5 !text-slate-400 hover:!text-red-500 cursor-pointer"></i>
                  </div>
                  <div className="py-1 text-sm font-normal capitalize flex flex-row justify-center items-center gap-3 px-3 rounded-full text-slate-800 bg-slate-100 border border-slate-300">
                    @ Bud Choi
                    <i className="fa fa-times pt-0.5 !text-slate-400 hover:!text-red-500 cursor-pointer"></i>
                  </div>
                  <div className="py-1 text-sm font-normal capitalize flex flex-row justify-center items-center gap-3 px-3 rounded-full text-slate-800 bg-slate-100 border border-slate-300">
                    @ Andreas Glover
                    <i className="fa fa-times pt-0.5 !text-slate-400 hover:!text-red-500 cursor-pointer"></i>
                  </div>
                  <div className="py-1 text-sm font-normal capitalize flex flex-row justify-center items-center gap-3 px-3 rounded-full text-slate-800 bg-slate-100 border border-slate-300">
                    @ Rosemary Lane
                    <i className="fa fa-times pt-0.5 !text-slate-400 hover:!text-red-500 cursor-pointer"></i>
                  </div>
                  <div className="py-1 text-sm font-normal capitalize flex flex-row justify-center items-center gap-3 px-3 rounded-full text-slate-800 bg-slate-100 border border-slate-300">
                    @ Ericka Drake
                    <i className="fa fa-times pt-0.5 !text-slate-400 hover:!text-red-500 cursor-pointer"></i>
                  </div>
                </div>

                <i
                  onClick={() => setShowTagTeammate(!showTagTeammate)}
                  className="fa fa-angle-up w-10 px-5 text-sm text-gray-600 border-l flex items-center border-slate-300 cursor-pointer"
                ></i>
              </section>

              <div
                className={
                  showTagTeammate
                    ? "w-full max-h-40 bg-white flex flex-col justify-start items-start divide-y divide-slate-100 shadow rounded-xl overflow-y-auto"
                    : "h-0 overflow-hidden"
                }
              >
                <section className="w-full h-10 py-1.5 px-8 flex flex-row justify-start items-center gap-3 cursor-pointer hover:bg-blue-50">
                  <img src={avator} alt={avator} className="h-full" />
                  <h3 className="text-slate-600 text-sm font-normal tracking-wide capitalize">
                    @ Bud Choi
                  </h3>

                  <h3 className="ml-14 text-slate-600 text-sm font-normal tracking-wide capitalize">
                    Editor
                  </h3>
                </section>
                <section className="w-full h-10 py-1.5 px-8 flex flex-row justify-start items-center gap-3 cursor-pointer hover:bg-blue-50">
                  <img src={avator} alt={avator} className="h-full" />
                  <h3 className="text-slate-600 text-sm font-normal tracking-wide capitalize">
                    @ Bud Choi
                  </h3>

                  <h3 className="ml-14 text-slate-600 text-sm font-normal tracking-wide capitalize">
                    Editor
                  </h3>
                </section>
                <section className="w-full h-10 py-1.5 px-8 flex flex-row justify-start items-center gap-3 cursor-pointer hover:bg-blue-50">
                  <img src={avator} alt={avator} className="h-full" />
                  <h3 className="text-slate-600 text-sm font-normal tracking-wide capitalize">
                    @ Bud Choi
                  </h3>

                  <h3 className="ml-14 text-slate-600 text-sm font-normal tracking-wide capitalize">
                    Editor
                  </h3>
                </section>
                <section className="w-full h-10 py-1.5 px-8 flex flex-row justify-start items-center gap-3 cursor-pointer hover:bg-blue-50">
                  <img src={avator} alt={avator} className="h-full" />
                  <h3 className="text-slate-600 text-sm font-normal tracking-wide capitalize">
                    @ Bud Choi
                  </h3>

                  <h3 className="ml-14 text-slate-600 text-sm font-normal tracking-wide capitalize">
                    Editor
                  </h3>
                </section>
                <section className="w-full h-10 py-1.5 px-8 flex flex-row justify-start items-center gap-3 cursor-pointer hover:bg-blue-50">
                  <img src={avator} alt={avator} className="h-full" />
                  <h3 className="text-slate-600 text-sm font-normal tracking-wide capitalize">
                    @ Bud Choi
                  </h3>

                  <h3 className="ml-14 text-slate-600 text-sm font-normal tracking-wide capitalize">
                    Editor
                  </h3>
                </section>
                <section className="w-full h-10 py-1.5 px-8 flex flex-row justify-start items-center gap-3 cursor-pointer hover:bg-blue-50">
                  <img src={avator} alt={avator} className="h-full" />
                  <h3 className="text-slate-600 text-sm font-normal tracking-wide capitalize">
                    @ Bud Choi
                  </h3>

                  <h3 className="ml-14 text-slate-600 text-sm font-normal tracking-wide capitalize">
                    Editor
                  </h3>
                </section>
              </div>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}