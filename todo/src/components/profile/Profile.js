import React from "react";

import TitlePage from "../titlePage/TitlePage";

import avator3 from "../../assets/image/userAvator/profile (6).png";
import avator4 from "../../assets/image/userAvator/profile (5).png";
import avator5 from "../../assets/image/userAvator/profile (4).png";
import avator6 from "../../assets/image/userAvator/profile (16).png";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <section className="w-full h-full relative  overflow-x-hidden">
      <section className="w-full absolute pt-5 px-6 pb-4 flex flex-col justify-start items-start gap-6 overflow-x-hidden">
        <section className="w-full flex flex-row justify-between items-center gap-4">
          <TitlePage title="profile" />
          <button
            // onClick={() => navigate("/main/createTask")}
            className="h-8 px-8 hover:px-10 bg-blue-600 text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl"
          >
            edit profile
          </button>
        </section>

        <section className="w-full flex flex-row justify-center items-center gap-4">
          <section className="w-1/6 flex flex-col justify-center items-start gap-1.5">
            <img
              src={avator5}
              alt={avator5}
              className="w-36 h-36 mt-1 rounded-xl ring-2 ring-amber-300 ring-offset-8"
            />
          </section>

          <section className="w-full flex flex-col justify-start items-start gap-4">
            <section className="w-full flex flex-row justify-start items-start gap-4">
              <section className="w-1/3 flex flex-col justify-start items-start gap-1.5">
                <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
                  first & last name
                </h4>
                <input
                  type="text"
                  disabled
                  placeholder="first & last name"
                  value={"Alfred Bryant"}
                  className="w-full h-12 px-8 text-slate-600 font-normal text-base tracking-wide capitalize rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500 disabled:bg-white"
                />
              </section>

              <section className="w-1/3 flex flex-col justify-start items-start gap-1.5">
                <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
                  job position
                </h4>

                <input
                  type="text"
                  value={"Editor"}
                  disabled
                  placeholder="ex: editor , designer or admin , ..."
                  className="w-full h-12 px-8 text-slate-600 font-normal text-base tracking-wide capitalize rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500 disabled:bg-white"
                />
              </section>

              <section className="w-1/3 flex flex-col justify-start items-start gap-1.5">
                <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
                  mobile number
                </h4>

                <input
                  type="text"
                  value={"09301214567"}
                  disabled
                  placeholder="ex: editor , designer or admin , ..."
                  className="w-full h-12 px-8 text-slate-600 font-normal text-base tracking-wide capitalize rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500 disabled:bg-white"
                />
              </section>
            </section>

            <section className="w-full flex flex-row justify-start items-start gap-4">
              <section className="w-1/3 flex flex-col justify-start items-start gap-1.5">
                <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
                  email
                </h4>

                <input
                  type="text"
                  value={"AlfredBryant@yahoo.com"}
                  disabled
                  placeholder="ex: editor , designer or admin , ..."
                  className="w-full h-12 px-8 text-slate-600 font-normal text-base tracking-wide capitalize rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500 disabled:bg-white"
                />
              </section>

              <section className="w-1/3 flex flex-col justify-start items-start gap-1.5">
                <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
                  last seen
                </h4>

                <input
                  type="text"
                  value={"1402/09/16 - 21:01"}
                  disabled
                  placeholder="ex: editor , designer or admin , ..."
                  className="w-full h-12 px-8 text-slate-600 font-normal text-base tracking-wide capitalize rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500 disabled:bg-white"
                />
              </section>

              <section className="w-1/3 flex flex-col justify-start items-start gap-1.5">
                <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
                  status
                </h4>

                <input
                  type="text"
                  value={"active"}
                  className="w-full h-12 px-8 bg-green-100 text-green-600 font-black text-base capitalize rounded-xl placeholder:text-slate-300 border border-green-300 disabled:bg-white"
                />
              </section>
            </section>
          </section>

        </section>

        <section className="w-full mt-6 flex flex-col justify-start items-start gap-6">
          <TitlePage title="task for you" />

          <section className="w-full h-auto max-h-96 flex flex-col justify-start items-start gap-3 rounded-xl border border-slate-300 overflow-hidden">
            <table className="w-full">
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

              <tbody className="w-full h-auto max-h-96 flex flex-col justify-start items-start bg-white divide-y divide-slate-200/50 rounded-b-xl shadow-md shadow-slate-200 overflow-x-hidden">
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

        <section className="w-full mt-6 flex flex-col justify-start items-start gap-6">
          <section className="w-full flex flex-row justify-between items-center gap-4">
            <TitlePage title="ticket box" />
            <button
              // onClick={() => navigate("/main/createTask")}
              className="h-8 px-8 hover:px-10 bg-blue-600 text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl"
            >
              new ticket
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
    </section>
  );
}
