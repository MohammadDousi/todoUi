import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";

import Popup from "reactjs-popup";

import "./SidebarStyle.css";
import avator4 from "../../assets/image/userAvator/profile(3).png";
import avator5 from "../../assets/image/userAvator/profile(8).png";
import avator6 from "../../assets/image/userAvator/profile(10).png";
import defaultAvator from "../../assets/image/userAvator/defultAvatorMen.png";
import logo from "../../assets/image/svg/logo.png";

import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Toastiy from "../toastfiy/Toastfiy";

export default function Sidebar() {
  const { userData } = useContext(UserContext);

  const location = useLocation();
  let formData = new FormData();

  const [showSidebar, setShowSidebar] = useState("BIG");
  const circle_progres = useRef();
  const circle_count = useRef();
  const countDoneBig = useRef();
  const countDoneMini = useRef();
  const countAllBig = useRef();
  const countAllMini = useRef();

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(userData);

    if (user?.id) {
      formData.append("fun", "countTaskForUser");
      formData.append("id", user.id);

      axios
        .post("php/api.php", formData)
        .then((response) => {
          // array item 0 -> count task for user is not done - all task
          // array item 1 -> count task for user is done

          if (response.data[1] === 0 || response.data[1] === response.data[0]) {
            countDoneBig.current.style.display = "none";
          } else {
            countDoneBig.current.style.display = "flex";
          }

          countAllBig.current.innerText = response.data[0];
          countAllMini.current.innerText = response.data[0];
          countDoneBig.current.innerText = response.data[1];
          countDoneMini.current.innerText = response.data[1];
          let allTask = Number(response.data[0]),
            doneTask = Number(response.data[1]),
            progressStartValue = 100,
            progressEndValue = 0,
            speed = 10;

          allTask = 360 / allTask;
          doneTask === 0 ? (doneTask = 0) : (doneTask = allTask * doneTask);
          progressEndValue = 360 - doneTask;

          if (
            localStorage.getItem("countTaskForUser") ===
            String(response.data[0])
          ) {
          } else if (
            localStorage.getItem("countTaskForUser") > String(response.data[0])
          ) {
            Toastiy("You have been eliminated in a task", "in");
            localStorage.setItem("countTaskForUser", response.data[0]);
          } else if (
            localStorage.getItem("countTaskForUser") < String(response.data[0])
          ) {
            Toastiy("You have been tagged in a new task", "in");
            localStorage.setItem("countTaskForUser", response.data[0]);
          }

          let progress = setInterval(() => {
            progressStartValue--;
            circle_progres.current.style.background = `conic-gradient(#fff ${
              progressStartValue * 3.6
            }deg , #2563eb 0deg)`;
            circle_count.current.style.transform = `rotate(${
              progressStartValue * 3.6
            }deg)`;
            countDoneBig.current.style.transform = `rotate(${
              progressStartValue * -3.6
            }deg)`;

            if (Math.floor(progressStartValue * 3.6) <= progressEndValue) {
              clearInterval(progress);
            }
          }, speed);

          for (let [key, value] of formData) {
            formData.delete(key, value);
          }
        })

        .catch((e) => console.log(e));
    }
  }, [userData, location.pathname]);

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
      icon: "fas fa-plus",
    },
    {
      name: "Profile",
      path: `/main/profile/${userData.token}`,
      icon: "fas fa-user",
    },
    {
      name: "Push",
      path: "/main/pushBox",
      icon: "fas fa-envelope-open",
    },
    {
      name: "search",
      path: "/main/search",
      icon: "fas fa-search",
    },
  ];

  return (
    <>
      {/* mini sidebar */}
      <section
        className={
          showSidebar === "MINI"
            ? "w-20 h-full py-4 bg-white flex flex-col justify-start  items-center gap-12 border-r border-gray-300 -translate-x-0 duration-1000 overflow-hidden"
            : "w-0 h-full py-4 bg-white flex flex-col justify-start items-center gap-0 -translate-x-20 duration-1000 overflow-hidden"
        }
      >
        <section className="w-full flex flex-col justify-center items-center gap-6">
          <i
            onClick={() => setShowSidebar("BIG")}
            className="fa fa-angle-right iconContainer bg-gray-100 text-slate-400 text-sm"
          ></i>

          <div className="w-full h-auto flex flex-col justify-center items-center gap-3">
            <div
              ref={countAllMini}
              className="w-7 h-7 bg-amber-200 text-amber-700 text-sm font-bold flex justify-center items-center rounded-full"
            ></div>
            <img
              className="w-12 h-20 z-0 object-cover rounded-full ring-2 ring-blue-400 ring-offset-2"
              src={
                userData?.avator
                  ? `${axios.defaults.baseURL}image/userAvator/${userData?.avator}`
                  : defaultAvator
              }
              alt="profile pic"
            />
            <div
              ref={countDoneMini}
              className="w-6 h-6 text-white text-sm font-bold flex justify-center items-center rounded-full bg-blue-600"
            ></div>
          </div>
        </section>

        <section className="w-full flex flex-col justify-center items-center gap-3">
          {sideTab &&
            sideTab.map((tab) => (
              <Popup
                key={tab.name}
                closeOnDocumentClick
                on={["hover", "focus"]}
                arrow={"center center"}
                position="right center"
                contentStyle={{
                  width: "auto",
                  marginLeft: "4px",
                  padding: "4px 14px",
                  backgroundColor: "#bfdbfe",
                  color: "#1d4ed8",
                }}
                trigger={
                  <Link to={tab.path}>
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
                }
              >
                <div>{tab.name}</div>
              </Popup>
            ))}
        </section>
      </section>
      {/*  big sidebar */}

      <section
        className={
          showSidebar === "BIG"
            ? "w-80 h-full bg-white px-5 py-4 flex flex-col justify-between items-center gap-0 border-r border-gray-300 translate-x-0 duration-1000 overflow-hidden"
            : "w-0 h-auto bg-white px-0 py-4 flex flex-col justify-start items-center gap-0 -translate-x-80 duration-1000"
        }
      >
        <section className="w-full relative flex flex-col justify-center items-center gap-4">
          <div className="w-full flex justify-end items-center">
            <i
              onClick={() => setShowSidebar("MINI")}
              className="fa fa-angle-left iconContainer bg-gray-100 text-slate-400 text-sm flex justify-center items-center"
            ></i>
          </div>

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
                ref={countAllBig}
                className="w-7 h-7 absolute -top-8 bg-amber-200 text-amber-700 text-sm font-bold flex justify-center items-center rounded-full"
              ></div>
              <div
                ref={circle_count}
                className="w-32 h-32 z-10 absolute flex justify-center items-center rounded-full"
              >
                <div
                  ref={countDoneBig}
                  className="w-7 h-7 hidden absolute -top-2.5 text-white text-sm font-bold bg-blue-600 flex justify-center items-center rounded-full"
                ></div>
              </div>
            </div>
          </div>

          <div className="">
            <h4 className="w-full text-center text-slate-500 font-black text-base capitalize tracking-tight">
              Hello {userData?.name}
            </h4>
          </div>
        </section>

        <section className="w-full grid grid-cols-2 justify-stretch justify-items-stretch content-stretch">
          {sideTab &&
            sideTab.map((tab) => (
              <Link key={tab.name} to={tab.path}>
                <section
                  className={
                    location.pathname === tab.path ||
                    location.pathname === tab.path1 ||
                    location.pathname === tab.path2
                      ? "p-5 flex flex-col justify-center items-center gap-3 cursor-pointer duration-300 bg-amber-200 text-amber-700 shadow-2xl rounded-xl"
                      : "p-5 flex flex-col justify-center items-center gap-3 cursor-pointer duration-300 hover:bg-blue-100 text-slate-400 font-black hover:text-blue-600 hover:rounded-xl"
                  }
                >
                  <i className={tab.icon}></i>
                  <h3 className="text-xs font-black capitalize">{tab.name}</h3>
                </section>
              </Link>
            ))}
        </section>

        <div className="w-full flex flex-col justify-center items-center gap-1">
          <section className="w-full bg-green-100 border border-green-300 p-3 rounded-xl flex flex-row justify-between items-center">
            <h3 className="text-green-600 font-bold text-xs capitalize">
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

          <Link
            to={"https://private-site-next.vercel.app/"}
            className="mt-2 flex flex-row justify-center items-center gap-2 cursor-pointer"
          >
            <img src={logo} alt="logo" className="h-4" />
            <h3 className="w-full text-center text-blue-400 font-black text-xs capitalize">
              dev. by mohammad dosi
            </h3>
          </Link>
        </div>
      </section>
    </>
  );
}
