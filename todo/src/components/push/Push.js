import React from 'react'

import TitlePage from '../titlePage/TitlePage'

export default function Push() {
  return (
    <>
      <section className="w-full absolute pt-4 px-6 pb-4 flex flex-col justify-start items-start gap-6 overflow-x-hidden">
        
        <section className="w-full flex flex-col justify-start items-start gap-6">
          <section className="w-full flex flex-row justify-between items-center gap-4">
            <TitlePage title="push box" />
            <button
              // onClick={() => navigate("/main/createTask")}
              className="h-8 px-8 hover:px-10 bg-blue-600 text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl"
            >
              new push
            </button>
          </section>
          <section className="w-full h-auto max-h-96 flex flex-col justify-start items-start gap-3 rounded-xl border border-slate-300 overflow-hidden">
            <table className="w-full">
              <thead className="w-full px-8 flex bg-white rounded-t-xl border-b border-slate-300 shadow-md shadow-slate-200">
                <tr className="w-full py-5 flex justify-start items-start gap-6 uppercase">
                  <th className="w-1/12 text-slate-400 font-black text-sm flex justify-start items-start">
                    <h3> status</h3>
                  </th>
                  <th className="w-1/12 text-slate-400 font-black text-sm flex justify-start items-start">
                    <h3> sender</h3>
                  </th>
                  <th className="w-2/12 text-slate-400 font-black text-sm flex justify-start items-start">
                    <h3> subject</h3>
                  </th>
                  <th className="w-5/12 text-slate-400 font-black text-sm flex justify-start items-start">
                    <h3> message</h3>
                  </th>
                  <th className="w-1/12 text-slate-400 font-black text-sm flex justify-start items-start">
                    <h3> details</h3>
                  </th>
                </tr>
              </thead>

              <tbody className="w-full h-auto max-h-96 flex flex-col justify-start items-start bg-white divide-y divide-slate-200/50 rounded-b-xl shadow-md shadow-slate-200 overflow-x-hidden">
                <tr className="w-full py-4 px-8 text-slate-600 font-normal text-sm capitalize flex justify-start items-center gap-6 cursor-pointer hover:bg-amber-50">
                  <th className="w-1/12 flex justify-start items-start">
                    <p className="h-full py-1 px-5 bg-amber-100 font-bold text-center text-amber-600 rounded-full">
                      unread
                    </p>
                  </th>
                  <th className="w-1/12 flex justify-start items-start">
                    <p className="w-full text-left">Bud Choi</p>
                  </th>
                  <th className="w-2/12 flex justify-start items-start">
                    <p className="w-full text-left">Space Tasks 3</p>
                  </th>
                  <th className="w-5/12 flex justify-start items-start">
                    <p className="w-full text-left">
                      Search Engine Optimization ...
                    </p>
                  </th>
                  <th className="w-1/12 flex justify-start items-center">
                    <i className="fa fa-angle-right w-8 h-8 text-gray-400 text-sm bg-gray-200/50 rounded-xl flex justify-center items-center"></i>
                  </th>
                </tr>
              </tbody>
            </table>
          </section>
        </section>

      </section>
    </>
  )
}
