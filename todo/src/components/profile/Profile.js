import React, { useRef, useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import defultAvator from "../../assets/image/userAvator/defultAvatorMen.png";
import { UserContext } from "../../context/UserContext";

import TitlePage from "../titlePage/TitlePage";

import avator3 from "../../assets/image/userAvator/profile(1).png";
import avator4 from "../../assets/image/userAvator/profile(5).png";
import avator5 from "../../assets/image/userAvator/profile(4).png";
import avator6 from "../../assets/image/userAvator/profile(8).png";

export default function Profile() {
  const navigate = useNavigate();

  const editName = useRef("");
  const editMail = useRef("");
  const editJobPostion = useRef("");

  let formData = new FormData();
  const { userData } = useContext(UserContext);
  const { setUserData } = useContext(UserContext);
  const [user, setUser] = useState({});
  const [editButton, setEditButton] = useState(false);

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  return (
    <section className="w-full h-full relative overflow-x-hidden ">
      <section className="w-full absolute pt-4 px-6 pb-4 flex flex-col justify-start items-start gap-6 overflow-x-hidden">
        <section className="w-full flex flex-row justify-between items-center gap-4">
          <TitlePage title="profile" />
          <section className="flex flex-row justify-end items-center gap-4">
            <button
              onClick={() => {
                editName.current.disabled = true;
                editMail.current.disabled = true;
                editJobPostion.current.disabled = true;
                setEditButton(!editButton);
              }}
              className={
                editButton
                  ? "h-8 px-8 hover:px-10 bg-rose-200 hover:bg-rose-500 text-rose-700 hover:text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500"
                  : "hidden"
              }
            >
              cancel
            </button>
            <button
              onClick={() => {
                editName.current.disabled = true;
                editMail.current.disabled = true;
                editJobPostion.current.disabled = true;

                formData.append("fun", "updateUser");
                formData.append("name", user.name);
                formData.append("mail", user.mail);
                formData.append("jobPostion", user.jobPostion);
                formData.append("token", user?.token);

                axios
                  .post("php/api.php", formData)
                  .then((response) => {
                    console.log(response.data);
                    setUserData(response.data);
                    setEditButton(!editButton);
                  })
                  .catch((e) => console.log(e));

                for (let [key, value] of formData) {
                  formData.delete(key, value);
                }
              }}
              className={
                editButton
                  ? "h-8 px-8 hover:px-10 bg-green-200 hover:bg-green-500 text-green-700 hover:text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500"
                  : "hidden"
              }
            >
              update
            </button>
            <button
              onClick={() => {
                editName.current.disabled = false;
                editMail.current.disabled = false;
                editJobPostion.current.disabled = false;
                setEditButton(!editButton);
              }}
              className="h-8 px-8 hover:px-10 bg-blue-600 text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500"
            >
              edit profile
            </button>
          </section>
        </section>

        <section className="w-full flex flex-row justify-between items-stretch gap-8">
          <section className="w-40 h-40 flex flex-col justify-start items-start gap-1.5">
            <img
              src={
                user?.avator
                  ? `${axios.defaults.baseURL}image/userAvator/${user?.avator}`
                  : { defultAvator }
              }
              alt={user?.avator}
              className="w-36 h-36 ml-1 mt-4 rounded-xl ring-2 ring-amber-300 ring-offset-4 bg-white"
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
                  placeholder="first & last name"
                  disabled
                  ref={editName}
                  value={user?.name || ""}
                  onChange={(e) => {
                    !e.currentTarget.disabled &&
                      setUser({ ...user, name: e.target.value });
                  }}
                  className="w-full h-12 px-8 text-slate-600 font-normal text-base tracking-wide capitalize rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500 disabled:bg-slate-200/50 duration-500"
                />
              </section>

              <section className="w-1/3 flex flex-col justify-start items-start gap-1.5">
                <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
                  job position
                </h4>

                <input
                  type="text"
                  disabled
                  ref={editJobPostion}
                  value={user?.jobPostion || ""}
                  onChange={(e) => {
                    !e.currentTarget.disabled &&
                      setUser({ ...user, jobPostion: e.target.value });
                  }}
                  placeholder="ex: editor , designer or admin , ..."
                  className="w-full h-12 px-8 text-slate-600 font-normal text-base tracking-wide capitalize rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500 disabled:bg-slate-200/50 duration-500"
                />
              </section>

              <section className="w-1/3 flex flex-col justify-start items-start gap-1.5">
                <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
                  mobile number
                </h4>

                <input
                  type="text"
                  value={user?.mobile || ""}
                  disabled
                  placeholder="ex: editor , designer or admin , ..."
                  className="w-full h-12 px-8 text-slate-600 font-normal text-base tracking-wide capitalize rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500 disabled:bg-slate-200/50 duration-500"
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
                  disabled
                  ref={editMail}
                  value={user?.mail || ""}
                  onChange={(e) => {
                    !e.currentTarget.disabled &&
                      setUser({ ...user, mail: e.target.value });
                  }}
                  placeholder="ex: editor , designer or admin , ..."
                  className="w-full h-12 px-8 text-slate-600 font-normal text-base tracking-wide capitalize rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500 disabled:bg-slate-200/50 duration-500"
                />
              </section>

              <section className="w-1/3 flex flex-col justify-start items-start gap-1.5">
                <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
                  last login
                </h4>

                <input
                  type="text"
                  defaultValue={user?.lastLogin || ""}
                  disabled
                  placeholder="ex: editor , designer or admin , ..."
                  className="w-full h-12 px-8 text-slate-600 font-normal text-base tracking-wide capitalize rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500 disabled:bg-slate-200/50 duration-500"
                />
              </section>

              <section className="w-1/3 flex flex-col justify-start items-start gap-1.5">
                <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
                  status
                </h4>

                <input
                  type="text"
                  disabled
                  defaultValue={user?.status || ""}
                  className={
                    user?.status === "active"
                      ? "w-full h-12 px-8 bg-green-100 text-green-600 font-black text-base capitalize rounded-xl placeholder:text-slate-300 border border-green-300"
                      : user?.status === "deactive"
                      ? "w-full h-12 px-8 bg-rose-100 text-rose-600 font-black text-base capitalize rounded-xl placeholder:text-rose-300 border border-rose-300"
                      : user?.status === "ban"
                      ? "w-full h-12 px-8 bg-slate-100 text-slate-600 font-black text-base capitalize rounded-xl placeholder:text-slate-300 border border-slate-300"
                      : "w-full h-12 px-8 bg-slate-100 text-slate-600 font-black text-base capitalize rounded-xl placeholder:text-slate-300 border border-slate-300"
                  }
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
      </section>
    </section>
  );
}
