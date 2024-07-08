import React, { useEffect, useRef, useState } from "react";

import axios from "axios";

import TitlePage from "../titlePage/TitlePage";
import Loader from "../loader/Loader";

import { useNavigate, useParams } from "react-router-dom";

import defultAvator from "../../assets/image/userAvator/defultAvatorMen.png";

export default function DetailTask() {
  const params = useParams(); // get param from nav address

  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  const [dataTask, setDataTask] = useState([]); // get user from server and show for teammate

  const [date, setDate] = useState("");
  const [tag, setTag] = useState([]);
  const [history, setHistory] = useState([]);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    let formData = new FormData();
    formData.append("fun", "getSingleTask");
    formData.append("id", params.id);

    axios
      .post("php/api.php", formData)
      .then((response) => {
        setDataTask(response.data);
        setDate(JSON.parse(response.data.date));
        setTag(JSON.parse(response.data.tagPartners));

        formData.append("fun", "getAllFilesTask");
        formData.append("id", params.id);

        axios
          .post("php/api.php", formData)
          .then((response) => {
            setFiles(response.data);

            formData.append("fun", "getAllEditHistoryTask");
            formData.append("id", params.id);

            axios
              .post("php/api.php", formData)
              .then((response) => {
                setHistory(response.data);
                setLoader(false);
              })
              .catch((e) => console.log(e));
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <section className="w-full h-full pt-3 px-6 pb-40 lg:pb-4 absolute flex flex-col justify-start items-start gap-6">
        {/* title and btn create new task */}
        <section className="w-full flex flex-row justify-between items-center gap-4">
          <TitlePage title="detail & description task" />

          <button
            onClick={() => navigate(`/main/editTask/${dataTask.id}`)}
            className="h-10 px-8 hover:px-10 bg-blue-600 text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500"
          >
            Go to edit
          </button>
        </section>

        <section className="w-full h-full flex flex-col lg:flex-row justify-start items-start gap-4 overflow-x-hidden lg:overflow-hidden">
          <div className="w-full lg:w-3/4 h-auto lg:h-full flex flex-col justify-start items-start gap-8 lg:overflow-x-hidden">
            {/* subject and Priority */}
            <section className="w-full flex flex-row justify-start items-start gap-4">
              <section className="w-2/3 flex flex-col justify-start items-start gap-1.5">
                <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
                  subject
                </h4>

                <p className="w-full h-14 lg:h-12 px-8 bg-white text-slate-600 font-normal text-base tracking-wide rounded-xl border border-slate-300 flex justify-start items-center">
                  {dataTask?.subject}
                </p>
              </section>

              <section className="w-1/3 flex flex-col justify-start items-start gap-1.5 ">
                <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
                  Priority
                </h4>

                <div
                  className={
                    dataTask?.priority === "force"
                      ? "w-full h-14 lg:h-12 font-bold text-base text-center capitalize border border-red-300 bg-red-100 text-red-600 select-none rounded-xl flex flex-row justify-center items-center"
                      : dataTask?.priority === "high"
                      ? "w-full h-14 lg:h-12 font-bold text-base text-center capitalize border border-amber-300 bg-amber-100 text-amber-600 select-none rounded-xl flex flex-row justify-center items-center"
                      : dataTask?.priority === "normal"
                      ? "w-full h-14 lg:h-12 font-bold text-base text-center capitalize border border-lime-300 bg-lime-100 text-lime-600 select-none rounded-xl flex flex-row justify-center items-center"
                      : "w-full h-14 lg:h-12 font-bold text-base text-center capitalize border border-teal-300 bg-teal-100 text-teal-600 select-none rounded-xl flex flex-row justify-center items-center"
                  }
                >
                  {dataTask?.priority}
                </div>
              </section>
            </section>

            {/* description */}
            <section className="w-full flex flex-col justify-start items-start gap-1.5">
              <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
                description
              </h4>

              <p className="w-full minHeight h-auto px-8 py-3 bg-white text-slate-600 font-normal text-base tracking-wide rounded-xl border border-slate-300 flex justify-start items-start">
                {dataTask?.description}
              </p>
            </section>

            {/* tag teammate and deadline */}
            <section className="w-full flex flex-col lg:flex-row justify-start items-start gap-4">
              <section className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-1.5">
                <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
                  Partners of this task
                </h4>

                <section className="w-full flex flex-wrap flex-row justify-start items-start lg:items-center gap-3">
                  {!tag && (
                    <div className="w-full h-14 lg:h-12 px-8 bg-blue-50 border border-blue-300 text-slate-600 text-base tracking-wide rounded-xl flex justify-start items-center">
                      Cooperation is not selected for this task.
                    </div>
                  )}

                  {tag?.map((item) => (
                    <section
                      key={item.name + Math.random()}
                      className="px-5 h-14 lg:h-12 bg-blue-50 hover:bg-white border border-blue-300 flex flex-row justify-center items-center gap-3 rounded-xl duration-300"
                    >
                      <img
                        className="w-8 h-8 ring-2 ring-white rounded-full justify-self-start"
                        src={
                          item.avator
                            ? `${axios.defaults.baseURL}image/userAvator/${item.avator}`
                            : defultAvator
                        }
                        alt={
                          item.avator
                            ? `${axios.defaults.baseURL}image/userAvator/${item.avator}`
                            : defultAvator
                        }
                      />
                      <h2 className="text-slate-600 text-base font-normal capitalize">
                        {item.name}
                      </h2>
                    </section>
                  ))}
                </section>
              </section>

              <section className="w-full lg:w-1/2 relative flex flex-col justify-start items-start gap-1.5">
                <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
                  deadline
                </h4>

                <p className="w-full h-14 lg:h-12 px-8 bg-white text-slate-600 font-normal text-base tracking-wide rounded-xl border border-slate-300 flex justify-start items-center">
                  {`${date?.year}/${date?.month}/${date?.day} - ${date?.hour}:${date?.min}`}
                </p>
              </section>
            </section>

            {/* upload image  */}
            <section className="w-full flex flex-col justify-start items-start gap-1.5">
              <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
                Attached files
              </h4>

              <section className="w-full flex flex-row justify-start items-start gap-4">
                {files?.map((item) => (
                  <section
                    key={item.file + Math.random()}
                    className="w-24 h-24 relative bg-white border border-slate-300 rounded-xl flex justify-center items-center overflow-hidden"
                  >
                    <img
                      src={`${axios.defaults.baseURL}/file/${item.file}`}
                      alt={item.file}
                      className="w-full h-full object-contain cursor-pointer"
                    />
                  </section>
                ))}
              </section>
            </section>
          </div>

          {/* edit history container */}
          <section className="w-full lg:w-1/4 h-auto lg:max-h-full flex flex-col justify-start items-start gap-1.5 lg:overflow-hidden">
            <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
              edit history
            </h4>

            <div className="w-full h-auto max-h-full px-4 py-2 bg-gray-200/50 border border-slate-300 flex flex-col justify-start items-start rounded-xl overflow-auto">
              {history?.map((item, index) => (
                <section
                  key={item.id + Math.random()}
                  className={
                    index + Number(1) === history.length
                      ? "w-full py-2 flex flex-col justify-start items-start gap-1"
                      : "w-full py-2 border-b border-slate-300 flex flex-col justify-start items-start gap-1"
                  }
                >
                  <div className="w-full flex flex-col justify-start items-center">
                    <h3 className="w-full text-slate-400 font-normal text-sm capitalize">
                      {index + Number(1) === history.length
                        ? "Create by " + item.name
                        : "Edit by " + item.name}
                    </h3>

                    <div className="w-full flex flex-row justify-start items-center gap-1.5">
                      <i className="fas fa-calendar text-slate-300 text-xs"></i>
                      <h5 className="text-sm font-normal text-left text-slate-400 capitalize">
                        {item.date}
                      </h5>
                    </div>
                  </div>

                  <h3 className="w-full text-slate-600 font-normal text-sm capitalize">
                    {item.description}
                  </h3>
                </section>
              ))}
            </div>
          </section>
        </section>
      </section>
      {loader && <Loader />}
    </>
  );
}
