import React, { useRef, useContext, useEffect, useState } from "react";
import axios from "axios";

import defultAvator from "../../assets/image/userAvator/defultAvatorMen.png";
import noData from "../../assets/image/svg/noData.svg";

import TitlePage from "../titlePage/TitlePage";
import ItemListTask from "../board/listTask/ItemListTask";
import Toastiy from "../toastfiy/Toastfiy";
import Loader from "../loader/Loader";

import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Popup from "reactjs-popup";

export default function Profile() {
  const [loader, setLoader] = useState(true);

  const editName = useRef("");
  const editMail = useRef("");
  const editJobPostion = useRef("");

  let formData = new FormData();
  const { userData } = useContext(UserContext); // profile user get from token
  const { setUserData } = useContext(UserContext); // change userData from token
  const [user, setUser] = useState(userData); // get data from userData and user for edit profile
  const [editButton, setEditButton] = useState(false); // show or hide button cancel & update
  const [changeAvator, setChangeAvator] = useState(false);

  const [allTask, setAllTask] = useState([]); // show all task for user private

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  const params = useParams(); // get param from nav address

  useEffect(() => {
    let formData = new FormData();
    formData.append("fun", "getAllTaskForSingleUser");
    formData.append("id", user.id);

    axios
      .post("php/api.php", formData)
      .then((response) => {
        setAllTask(response.data);
        setLoader(false);
      })
      .catch((e) => console.log(e));

    for (let [key, value] of formData) {
      formData.delete(key, value);
    }
  }, [params, userData]);

  const updateProfile = () => {
    setLoader(true);
    editName.current.disabled = true;
    editMail.current.disabled = true;
    editJobPostion.current.disabled = true;

    formData.append("fun", "updateUser");
    formData.append("name", user?.name);
    formData.append("mail", user?.mail);
    formData.append("jobPostion", user?.jobPostion);
    formData.append("avator", user?.avator);
    formData.append("token", user?.token);

    axios
      .post("php/api.php", formData)
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
        setEditButton(!editButton);
        setChangeAvator(false);
        setLoader(false);

        switch (response.data) {
          case "typeFileNotSupport":
            Toastiy("The image format is not correct", "er");
            break;
          case "noData":
            Toastiy("Error in receiving information", "er");
            break;
          default:
            break;
        }

        console.log(response.data);

        // Toastiy("Edit profile successfully", "su");
      })
      .catch((e) => console.log(e));

    for (let [key, value] of formData) {
      formData.delete(key, value);
    }
  };

  return (
    <section className="w-full h-full relative overflow-x-hidden">
      <section className="w-full absolute pt-3.5 px-6 pb-4 flex flex-col justify-start items-start gap-6 overflow-x-hidden">
        <section className="w-full flex flex-row justify-between items-center gap-4">
          <TitlePage title="profile" />
          <section className="flex flex-row justify-end items-center gap-4">
            <button
              onClick={() => {
                editName.current.disabled = true;
                editMail.current.disabled = true;
                editJobPostion.current.disabled = true;
                setEditButton(!editButton);
                Toastiy("Profile edit cancelled", "wa");
              }}
              className={
                editButton
                  ? "h-10 px-8 hover:px-10 bg-red-200 hover:bg-red-500 text-red-700 hover:text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500"
                  : "hidden"
              }
            >
              cancel
            </button>

            <Popup
              modal
              nested
              trigger={
                <button
                  className={
                    editButton
                      ? "h-10 px-8 hover:px-10 bg-green-200 hover:bg-green-500 text-green-700 hover:text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500"
                      : "hidden"
                  }
                >
                  update
                </button>
              }
              position="right center"
            >
              {(close) => (
                <div className="p-10 flex flex-col justify-center items-center gap-8">
                  <section className="w-full space-y-2">
                    <p className="w-full text-left text-green-600 font-black text-xl capitalize">
                      update Profile
                    </p>
                    <p className="w-full text-left text-slate-600 font-normal text-base">
                      Are you sure you want to update your profile ?
                    </p>
                  </section>
                  <section className="flex flex-row justify-center items-center gap-4">
                    <button
                      onClick={() => close()}
                      className="h-10 px-8 hover:px-10 hover:bg-slate-500 text-slate-700 hover:text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-300"
                    >
                      no care !
                    </button>
                    <button
                      onClick={() => {
                        updateProfile();
                        close();
                      }}
                      className="h-10 px-8 hover:px-10 bg-green-200 hover:bg-green-600 text-green-700 hover:text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-300"
                    >
                      yes, update
                    </button>
                  </section>
                </div>
              )}
            </Popup>

            <button
              onClick={() => {
                if (editButton) {
                  editName.current.disabled = true;
                  editMail.current.disabled = true;
                  editJobPostion.current.disabled = true;
                  setEditButton(!editButton);
                } else {
                  editName.current.disabled = false;
                  editMail.current.disabled = false;
                  editJobPostion.current.disabled = false;
                  setEditButton(!editButton);
                }
              }}
              className="h-10 px-8 hover:px-10 bg-blue-600 text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500"
            >
              edit profile
            </button>
          </section>
        </section>

        <section className="w-full flex flex-row justify-start items-stretch gap-4">
          <section className="w-2/12 h-40 relative flex flex-col justify-start items-center gap-3">
            <img
              src={
                user.avator && changeAvator
                  ? URL.createObjectURL(user.avator)
                  : user.avator
                  ? `${axios.defaults.baseURL}image/userAvator/${user?.avator}`
                  : defultAvator
              }
              alt={user?.avator}
              className="w-36 h-36 ml-1 mt-4 rounded-xl ring-2 ring-amber-300 ring-offset-4 bg-white"
            />

            <input
              id="inputFile"
              className="absolute opacity-0 invisible w-0 h-0"
              type="file"
              name="file"
              multiple
              accept="image/*"
              onChange={(e) => {
                setChangeAvator(true);
                !e.currentTarget.disabled &&
                  setUser({ ...user, avator: e.target.files[0] });
              }}
            />

            <label
              htmlFor="inputFile"
              className={
                editButton
                  ? "absolute -bottom-8 pl-2 text-red-500 text-sm font-bold capitalize cursor-pointer"
                  : "hidden"
              }
            >
              change avator
            </label>

            {/* <i className="fa fa-image iconContainer absolute bottom-1 right-2 text-white text-sm bg-red-500 shadow-lg"></i> */}
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
                  className="w-full h-12 px-8 text-slate-600 font-normal text-base tracking-wide rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500 disabled:bg-slate-200/50 duration-500"
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
                      ? "w-full h-12 px-8 bg-red-100 text-red-600 font-black text-base capitalize rounded-xl placeholder:text-red-300 border border-red-300"
                      : user?.status === "ban"
                      ? "w-full h-12 px-8 bg-slate-100 text-slate-600 font-black text-base capitalize rounded-xl placeholder:text-slate-300 border border-slate-300"
                      : "w-full h-12 px-8 bg-slate-100 text-slate-600 font-black text-base capitalize rounded-xl placeholder:text-slate-300 border border-slate-300"
                  }
                />
              </section>
            </section>
          </section>
        </section>

        {/* container task for user */}
        <section className="w-full mt-6 flex flex-col justify-start items-start gap-6">
          <TitlePage title="task for you" />

          <section className="w-full h-auto max-h-96 flex flex-col justify-start items-start gap-3 rounded-xl border border-slate-300 overflow-hidden">
            <table className="w-full h-full">
              <thead className="w-full flex bg-white rounded-t-xl border-b border-slate-300 shadow-md shadow-slate-200">
                <tr className="w-full py-5 px-4 flex justify-center items-start gap-3 uppercase">
                  <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-start items-start">
                    <h3> status</h3>
                  </th>
                  <th className="w-2/12 text-sm font-black text-slate-400 tracking-wide flex justify-start items-start">
                    <h3> subject</h3>
                  </th>
                  <th className="w-3/12 text-sm font-black text-slate-400 tracking-wide flex justify-start items-start">
                    <h3> description</h3>
                  </th>
                  <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                    <h3> priority</h3>
                  </th>
                  <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                    <h3> deadline</h3>
                  </th>
                  <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                    <h3> Partners</h3>
                  </th>
                  <th className="w-2/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                    <h3> author</h3>
                  </th>
                </tr>
              </thead>

              <tbody className="w-full h-fit max-h-96 flex flex-col justify-start items-start bg-white divide-y divide-slate-200/50 rounded-b-xl shadow-md shadow-slate-200 overflow-x-hidden">
                {allTask?.map((item) => (
                  <ItemListTask key={item.id + Math.random()} data={item} />
                ))}
                {allTask?.length === 0 && (
                  <tr className="w-full">
                    <th className="w-full px-5 py-10 flex flex-col justify-center items-center gap-5">
                      <img src={noData} alt="no data" className="w-20" />
                      <h2 className="text-slate-600 text-lg font-black text-center capitalize">
                        You are not tagged in Tesk yet.
                      </h2>
                    </th>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
        </section>

        {loader && <Loader />}
      </section>
    </section>
  );
}
