import React, { useEffect, useRef, useState } from "react";

import "./SidebarStyle.css";
import avator from "../../assets/image/userAvator/profile (4).png";
import avator3 from "../../assets/image/userAvator/profile (7).png";
import avator4 from "../../assets/image/userAvator/profile (11).png";
import avator5 from "../../assets/image/userAvator/profile (14).png";
import avator6 from "../../assets/image/userAvator/profile (15).png";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("B");

  const circle_progres = useRef();
  const circle_count = useRef();
  const count = useRef();

  useEffect(() => {
    let all_task = 5,
      ok_task = 2,
      progressStartValue = 100,
      progressEndValue = 0,
      speed = 15;

    all_task = 360 / all_task;
    ok_task = all_task * ok_task;
    progressEndValue = 360 - ok_task;

    let progress = setInterval(() => {
      progressStartValue--;
      circle_progres.current.style.background = `conic-gradient(#fff ${
        progressStartValue * 3.6
      }deg , #2563eb 0deg)`;
      circle_count.current.style.transform = `rotate(${
        progressStartValue * 3.6
      }deg)`;
      count.current.style.transform = `rotate(${progressStartValue * -3.6}deg)`;

      if (Math.floor(progressStartValue * 3.6) <= progressEndValue) {
        clearInterval(progress);
      }
    }, speed);
  }, []);

  let location = useLocation();

  return (
    <>
      {/* mini sidebar */}
      <section
        className={
          showSidebar === "M"
            ? "w-20 h-full py-4 bg-white flex flex-col justify-between items-center gap-5 border-r border-gray-300 -translate-x-0 duration-1000 overflow-hidden"
            : "w-0 h-full py-4 bg-white flex flex-col justify-between items-center gap-5 -translate-x-20 duration-1000 overflow-hidden"
        }
      >
        <section className="w-full flex flex-col justify-center items-center gap-10">
          <section className="w-full flex flex-col-reverse justify-between items-center gap-3">
            <i className="fa fa-user iconContainer bg-blue-100 text-blue-500/80 text-sm"></i>

            <i
              onClick={() => setShowSidebar("B")}
              className="fa fa-angle-right iconContainer bg-gray-200/50 text-gray-400 text-sm"
            ></i>
          </section>

          <div className="w-full h-auto flex flex-col justify-center items-center gap-2">
            <img
              className="w-12 h-20 z-0 object-cover rounded-full ring-2 ring-blue-400 ring-offset-2"
              src={avator}
              alt="profile pic"
            />
            <div className="w-6 h-6 text-white text-sm font-semibold flex justify-center items-center rounded-full bg-blue-600">
              2
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col justify-center items-center gap-3">
          <Link to="/main/board">
            <section
              className={
                location.pathname === "/" || location.pathname === "/main/board"
                  ? "w-10 h-10 flex flex-col justify-center items-center gap-3 cursor-pointer duration-500 bg-amber-200 text-amber-700 shadow-xl rounded-xl"
                  : "w-10 h-10 flex flex-col justify-center items-center gap-3 cursor-pointer duration-500 hover:bg-blue-100 text-slate-400 hover:text-blue-600 hover:scale-105 hover:rounded-xl"
              }
            >
              <i className="fas fa-map text-sm"></i>
            </section>
          </Link>
          <Link to="/main/createTask">
            <section
              className={
                location.pathname === "/main/createTask"
                  ? "w-10 h-10 flex flex-col justify-center items-center gap-3 cursor-pointer duration-500 bg-amber-200 text-amber-700 shadow-xl rounded-xl"
                  : "w-10 h-10 flex flex-col justify-center items-center gap-3 cursor-pointer duration-500 hover:bg-blue-100 text-slate-400 hover:text-blue-600 hover:scale-105 hover:rounded-xl"
              }
            >
              <i className="fas fa-plus text-sm"></i>
            </section>
          </Link>
        </section>

        <section className="bg-white border border-slate-300 px-3 pt-3 pb-0.5 rounded-full flex flex-row justify-between items-center">
          <section className="grid grid-rows-[repeat(6,1.2rem)]">
            <img
              className="max-h-none w-7 h-7 ring-2 ring-white rounded-full hover:scale-110 hover:-translate-y-2 hover:scale-125 duration-300 "
              src={avator3}
              alt={avator3}
            />
            <img
              className="max-h-none w-7 h-7 ring-2 ring-white rounded-full hover:scale-110 hover:-translate-y-2 hover:scale-125 duration-300 "
              src={avator4}
              alt={avator4}
            />
            <img
              className="max-h-none w-7 h-7 ring-2 ring-white rounded-full hover:scale-110 hover:-translate-y-2 hover:scale-125 duration-300 "
              src={avator5}
              alt={avator5}
            />
            <img
              className="max-h-none w-7 h-7 ring-2 ring-white rounded-full hover:scale-110 hover:-translate-y-2 hover:scale-125 duration-300 "
              src={avator6}
              alt={avator6}
            />
            <div className="max-h-none w-7 h-7 ring-2 ring-white rounded-full hover:scale-110 hover:-translate-y-2 hover:scale-125 duration-300  bg-green-100  flex justify-center items-center text-xs font-medium">
              +2
            </div>
          </section>
        </section>
      </section>

      {/*  big sidebar */}
      <section
        className={
          showSidebar === "B"
            ? "w-80 h-full bg-white px-5 py-4 flex flex-col justify-between items-center gap-5 border-r border-gray-300 translate-x-0 duration-1000 overflow-hidden"
            : "w-0 h-full bg-white flex flex-col justify-between items-center gap-5 -translate-x-80 duration-1000 overflow-hidden"
        }
      >
        <section className="w-full flex flex-col justify-center items-center gap-4">
          <section className="w-full flex flex-row justify-between items-center">
            <i className="fa fa-user iconContainer bg-blue-100 text-blue-500/80 text-sm"></i>

            <i
              onClick={() => setShowSidebar("M")}
              className="fa fa-angle-left iconContainer bg-gray-200/50 text-gray-400 text-sm"
            ></i>
          </section>

          <div className="badge">
            <div ref={circle_progres} className="progress-circle">
              <img
                className="w-full h-full z-0 p-1.5 object-cover rounded-full"
                src={avator}
                alt="profile pic"
              />
              <div
                ref={circle_count}
                className="w-28 h-28 z-10 absolute flex justify-center items-center rounded-full"
              >
                <div
                  ref={count}
                  className="w-7 h-7 absolute -top-2.5 flex justify-center items-center rounded-full bg-blue-600"
                >
                  <p className="text-white text-sm font-semibold">2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full text-center">
            <h4 className="text-slate-500 font-black text-base capitalize tracking-tight">
              Hello Alfred Bryant
            </h4>
            <h5 className="text-slate-400 font-normal text-sm">
              adrain.nader@yahoo.com
            </h5>
          </div>
        </section>

        <section className="w-full grid grid-cols-2 justify-stretch justify-items-stretch content-stretch">
          <Link to="/main/board">
            <section
              className={
                location.pathname === "/" || location.pathname === "/main/board"
                  ? "p-5 flex flex-col justify-center items-center gap-3 cursor-pointer duration-300 bg-amber-200 text-amber-700 shadow-2xl rounded-xl"
                  : "p-5 flex flex-col justify-center items-center gap-3 cursor-pointer duration-300 hover:bg-blue-100 text-slate-400 font-black hover:text-blue-600 hover:scale-105 hover:rounded-xl"
              }
            >
              <i className="fas fa-map"></i>
              <h3 className="text-xs font-black">Dashboard</h3>
            </section>
          </Link>
          <Link to="/main/createTask">
            <section
              className={
                location.pathname === "/main/createTask"
                  ? "p-5 flex flex-col justify-center items-center gap-3 cursor-pointer duration-300 bg-amber-200 text-amber-700 shadow-2xl rounded-xl"
                  : "p-5 flex flex-col justify-center items-center gap-3 cursor-pointer duration-300 hover:bg-blue-100 text-slate-400 font-black hover:text-blue-600 hover:scale-105 hover:rounded-xl"
              }
            >
              <i className="fas fa-plus"></i>
              <h3 className="text-xs font-black">Create Task</h3>
            </section>
          </Link>
        </section>

        <section className="w-full bg-green-100 border border-green-300 p-3 rounded-xl flex flex-row justify-between items-center">
          <h3 className="text-green-600 font-bold text-xs pl-2 capitalize">
            is online :
          </h3>
          <section className="grid grid-cols-[repeat(6,1rem)]">
            <img
              className="max-w-none w-7 h-7 ring-2 ring-white rounded-full hover:scale-110 hover:-translate-y-2 hover:scale-125 duration-300 "
              src={avator3}
              alt={avator3}
            />
            <img
              className="max-w-none w-7 h-7 ring-2 ring-white rounded-full hover:scale-110 hover:-translate-y-2 hover:scale-125 duration-300 "
              src={avator4}
              alt={avator4}
            />
            <img
              className="max-w-none w-7 h-7 ring-2 ring-white rounded-full hover:scale-110 hover:-translate-y-2 hover:scale-125 duration-300 "
              src={avator5}
              alt={avator5}
            />
            <img
              className="max-w-none w-7 h-7 ring-2 ring-white rounded-full hover:scale-110 hover:-translate-y-2 hover:scale-125 duration-300 "
              src={avator6}
              alt={avator6}
            />
            <div className="max-w-none w-7 h-7 ring-2 ring-white rounded-full hover:scale-110 hover:-translate-y-2 hover:scale-125 duration-300  bg-white  flex justify-center items-center text-xs font-medium">
              +2
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
