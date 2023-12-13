import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";

import "./SidebarStyle.css";
import avator from "../../assets/image/userAvator/profile(1).png";
import avator4 from "../../assets/image/userAvator/profile(2).png";
import avator5 from "../../assets/image/userAvator/profile(9).png";
import avator6 from "../../assets/image/userAvator/profile(10).png";
import defaultAvator from "../../assets/image/userAvator/defultAvatorMen.png";

import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

export default function Sidebar() {
  const { userData } = useContext(UserContext);

  const [showSidebar, setShowSidebar] = useState("BIG");

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

  const sideTab = [
    {
      name: "Dashboard",
      path: "/main/board",
      path2: "/main",
      icon: "fas fa-map",
    },
    {
      name: "Create Task",
      path: "/main/createTask",
      path2: "/main/createTask",
      icon: "fas fa-plus",
    },
    {
      name: "Profile",
      path: "/main/profile",
      path2: "/main/profile",
      icon: "fas fa-user",
    },
    {
      name: "Push",
      path: "/main/pushBox",
      path2: "/main/pushBox",
      icon: "fas fa-envelope-open",
    },
    {
      name: "Edit Task",
      path: "/main/editTask",
      path2: "/main/editTask",
      icon: "fas fa-envelope-open",
    },
  ];

  return (
    <>
      {/* mini sidebar */}
      <section
        className={
          showSidebar === "MINI"
            ? "w-20 h-full py-4 bg-white flex flex-col justify-start  items-center gap-12 border-r border-gray-300 -translate-x-0 duration-1000 overflow-hidden"
            : "w-0 h-full py-4 bg-white flex flex-col justify-start items-center gap-12 -translate-x-20 duration-1000 overflow-hidden"
        }
      >
        <section className="w-full flex flex-col justify-center items-center gap-5">
          <i
            onClick={() => setShowSidebar("BIG")}
            className="fa fa-angle-right iconContainer bg-gray-100 text-slate-400 text-sm"
          ></i>

          <div className="w-full h-auto flex flex-col justify-center items-center gap-2">
            <img
              className="w-12 h-20 z-0 object-cover rounded-full ring-2 ring-blue-400 ring-offset-2"
              src={
                userData?.avator
                  ? `${axios.defaults.baseURL}image/userAvator/${userData?.avator}`
                  : defaultAvator
              }
              alt="profile pic"
            />
            <div className="w-6 h-6 text-white text-sm font-semibold flex justify-center items-center rounded-full bg-blue-600">
              2
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col justify-center items-center gap-3">
          {sideTab &&
            sideTab.map((tab) => (
              <Link key={tab.name} to={tab.path}>
                <section
                  className={
                    location.pathname === tab.path
                      ? "w-10 h-10 flex flex-col justify-center items-center gap-3 cursor-pointer duration-500 bg-amber-200 text-amber-700 shadow-xl rounded-xl"
                      : "w-10 h-10 flex flex-col justify-center items-center gap-3 cursor-pointer duration-500 hover:bg-blue-100 text-slate-400 hover:text-blue-600 hover:rounded-xl"
                  }
                >
                  <i className={`${tab.icon} text-sm`}></i>
                </section>
              </Link>
            ))}
        </section>
      </section>

      {/*  big sidebar */}
      <section
        className={
          showSidebar === "BIG"
            ? "w-80 h-full bg-white px-5 py-4 flex flex-col justify-between items-center gap-5 border-r border-gray-300 translate-x-0 duration-1000 overflow-hidden"
            : "w-0 h-full bg-white flex flex-col justify-between items-center gap-5 -translate-x-80 duration-1000 overflow-hidden"
        }
      >
        <section className="w-full flex flex-col justify-center items-center gap-4">
          <section className="w-full flex flex-row justify-start items-center">
            <i
              onClick={() => setShowSidebar("MINI")}
              className="fa fa-angle-left iconContainer bg-gray-100 text-slate-400 text-sm"
            ></i>
          </section>

          <div className="badge">
            <div ref={circle_progres} className="progress-circle">
              <img
                className="w-full h-full z-0 p-1.5 object-cover rounded-full"
                src={
                  userData?.avator
                    ? `${axios.defaults.baseURL}image/userAvator/${userData?.avator}`
                    : defaultAvator
                }
                alt={userData?.avator ? userData?.avator : defaultAvator}
              />
              <div
                ref={circle_count}
                className="w-32 h-32 z-10 absolute flex justify-center items-center rounded-full"
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
              Hello {userData?.name}
            </h4>
            <h5 className="text-slate-400 font-normal text-base">
              {userData?.mail}
            </h5>
          </div>
        </section>

        <section className="w-full grid grid-cols-2 justify-stretch justify-items-stretch content-stretch">
          {sideTab &&
            sideTab.map((tab) => (
              <Link key={tab.name} to={tab.path}>
                <section
                  className={
                    location.pathname === tab.path ||
                    location.pathname === tab.path2
                      ? "p-5 flex flex-col justify-center items-center gap-3 cursor-pointer duration-300 bg-amber-200 text-amber-700 shadow-2xl rounded-xl"
                      : "p-5 flex flex-col justify-center items-center gap-3 cursor-pointer duration-300 hover:bg-blue-100 text-slate-400 font-black hover:text-blue-600 hover:rounded-xl"
                  }
                >
                  <i className={tab.icon}></i>
                  <h3 className="text-xs font-black">{tab.name}</h3>
                </section>
              </Link>
            ))}
        </section>

        <section className="w-full bg-green-100 border border-green-300 p-3 rounded-xl flex flex-row justify-between items-center">
          <h3 className="text-green-600 font-bold text-xs pl-2 capitalize">
            is online :
          </h3>
          <section className="flex justify-end items-center -space-x-2 hover:space-x-1 duration-1000">
            <img
              className=" max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125"
              src={avator4}
              alt={avator4}
            />
            <img
              className=" max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125"
              src={avator5}
              alt={avator5}
            />
            <img
              className=" max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125"
              src={avator6}
              alt={avator6}
            />
            <div className=" max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125 bg-sky-200 flex justify-center items-center text-xs font-medium">
              +2
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
