import React, { useEffect, useState, useContext } from "react";

import axios from "axios";

import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";
import transition from "react-element-popper/animations/transition";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";

import TitlePage from "../titlePage/TitlePage";
import Loader from "../loader/Loader";

import "react-toastify/dist/ReactToastify.css";
import Toastiy from "../toastfiy/Toastfiy";

import defultAvator from "../../assets/image/userAvator/defultAvatorMen.png";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function EditTask() {
  const params = useParams();

  const navigate = useNavigate();

  const { userData } = useContext(UserContext);

  const [loader, setLoader] = useState(true);
  let formData = new FormData();

  const [showHoverTagTeammate, setShowHoverTagTeammate] = useState(false); // show and hide hover person teammate
  const [searchTeammate, setSearchTeammate] = useState(""); // search teammate
  const [filterSearchTeammate, setFilterSearchTeammate] = useState([]); // set data group and sort

  const [dataToSend, setDataToSend] = useState({
    subject: "",
    description: "",
    priority: "",
    deadline: [],
    tagPartners: [],
    image: [],
  });

  const [user, setUser] = useState([]); // get user from server and show for teammate
  useEffect(() => {
    let formData = new FormData();
    formData.append("fun", "getAllUser");

    axios
      .post("php/api.php", formData)
      .then((response) => {
        setUser(response.data);
        setFilterSearchTeammate(response.data);
      })
      .catch((e) => console.log(e));

    for (let [key, value] of formData) {
      formData.delete(key, value);
    }
  }, []);

  useEffect(() => {
    formData.append("fun", "getSingleTask");
    formData.append("id", params.id);

    axios
      .post("php/api.php", formData)
      .then((responseTask) => {
        const date = JSON.parse(responseTask.data.date);
        const teg = JSON.parse(responseTask.data.tagPartners);

        formData.append("fun", "getAllFilesTask");
        formData.append("id", params.id);

        axios
          .post("php/api.php", formData)
          .then((response) => {
            setDataToSend({
              id: responseTask.data.id,
              status: responseTask.data.status,
              subject: responseTask.data.subject,
              description: responseTask.data.description,
              priority: responseTask.data.priority,
              deadline: date,
              tagPartners: teg,
              image: response.data,
            });
            setLoader(false);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }, []);

  const updateTask = () => {
    setLoader(true);

    if (
      dataToSend?.subject.trim() &&
      dataToSend?.description.trim() &&
      dataToSend?.priority.trim() &&
      dataToSend?.deadline &&
      dataToSend?.status &&
      dataToSend?.id
    ) {
      let formData = new FormData();
      formData.append("fun", "updateTask");
      formData.append("id", dataToSend?.id);
      formData.append("status", dataToSend?.status);
      formData.append("subject", dataToSend?.subject);
      formData.append("description", dataToSend?.description);
      formData.append("priority", dataToSend?.priority);
      formData.append("deadline", JSON.stringify(dataToSend?.deadline));
      formData.append("tagPartners", JSON.stringify(dataToSend?.tagPartners));
      formData.append("author", userData?.id);

      for (let i = 0; i < dataToSend?.image.length; i++) {
        formData.append("files[]", dataToSend?.image[i]);
      }

      axios
        .post("php/api.php", formData)
        .then((response) => {
          console.log(response.data);
          switch (response.data) {
            case "updateOk":
              Toastiy("edit task is successful", "su");
              break;
            case "errUpdate":
              Toastiy("The update was unsuccessful", "er");
              break;
            case "typeFileNotSupport":
            case "NoFileSelected":
              Toastiy("Error uploading images", "er");
              break;
            case "noData":
              Toastiy("Server error", "er");
              break;
            default:
              Toastiy("Error, Please contact support", "in");
              setLoader(false);
              break;
          }
          console.log(response.log);
          setLoader(false);
        })
        .catch((e) => console.log(e));
    } else {
      Toastiy("Enter the information task", "wa");
    }
  };

  const deleteTask = () => {
    setLoader(true);

    let formData = new FormData();
    formData.append("fun", "deleteTask");
    formData.append("id", dataToSend?.id);

    axios
      .post("php/api.php", formData)
      .then((response) => {
        switch (response.data) {
          case "isDelete":
            Toastiy("Delete is successful", "su");
            navigate("/main/board");
            break;
          case "errDelete":
            Toastiy("Delete failed", "er");
            break;
          case "noData":
            Toastiy("Error, Please contact support", "wa");
            break;
          default:
            Toastiy("Error, Please contact support", "wa");
            break;
        }
        setLoader(false);
        console.log(response);
      })
      .catch((e) => console.log(e));
  };

  return (
    <section className="w-full h-full relative">
      <section className="w-full h-full pt-3.5 px-6 pb-4 absolute flex flex-col justify-start items-start gap-8 overflow-x-hidden">
        {/* title and btn create new task */}
        <section className="w-full flex flex-row justify-between items-center gap-4">
          <TitlePage title="detail task > edit" />

          <section className="flex flex-row justify-end items-center gap-4">
            <Popup
              modal
              nested
              trigger={
                <button className="h-10 px-8 hover:px-10 bg-red-200 hover:bg-red-500 text-red-700 hover:text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500">
                  delete task
                </button>
              }
              position="right center"
            >
              {(close) => (
                <div className="p-10 flex flex-col justify-center items-center gap-8">
                  <section className="w-full space-y-1">
                    <p className="w-full text-left text-red-600 font-black text-xl capitalize">
                      Delete Task
                    </p>
                    <p className="w-full text-left text-slate-600 font-normal text-base">
                      Are you sure you want to delete ?
                    </p>
                  </section>
                  <section className="flex flex-row justify-center items-center gap-4">
                    <button
                      onClick={() => close()}
                      className="h-10 px-8 hover:px-10 hover:bg-slate-500 text-slate-700 hover:text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500"
                    >
                      no care !
                    </button>
                    <button
                      onClick={() => {
                        deleteTask();
                        close();
                      }}
                      className="h-10 px-8 hover:px-10 bg-red-200 hover:bg-red-500 text-red-700 hover:text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500"
                    >
                      delete task
                    </button>
                  </section>
                </div>
              )}
            </Popup>

            <button
              onClick={() => updateTask()}
              className="h-10 px-8 hover:px-10 bg-blue-600 text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500"
            >
              accept & edit
            </button>
          </section>
        </section>

        {/* subject and Priority */}
        <section className="w-full flex flex-row justify-start items-start gap-4">
          <section className="w-1/2 flex flex-col justify-start items-start gap-1.5">
            <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
              subject
            </h4>
            <input
              type="text"
              placeholder="Description of the subject"
              className="w-full h-12 px-8 text-slate-600 font-normal text-base tracking-wide rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500"
              value={dataToSend?.subject}
              onChange={(e) =>
                setDataToSend({ ...dataToSend, subject: e.target.value })
              }
            />
          </section>

          <section className="w-1/2 flex flex-col justify-start items-start gap-1.5 ">
            <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
              Priority
            </h4>

            <div className="w-full h-12 px-2 py-1 bg-white flex flex-row justify-center items-center gap-3 rounded-xl border border-slate-300">
              <div className="w-full flex justify-center items-center">
                <input
                  type="radio"
                  name="priority"
                  id="force"
                  value="force"
                  onChange={(e) =>
                    setDataToSend({ ...dataToSend, priority: e.target.id })
                  }
                  checked={dataToSend?.priority === "force" && true}
                  className="peer hidden"
                />
                <label
                  htmlFor="force"
                  className="w-full py-1 text-slate-600 font-normal text-sm text-center capitalize hover:bg-red-100 hover:text-red-600 cursor-pointer select-none rounded-full peer-checked:border peer-checked:border-red-300 peer-checked:bg-red-100 peer-checked:font-bold peer-checked:text-red-600"
                >
                  force
                </label>
              </div>

              <div className="w-full flex justify-center items-center">
                <input
                  type="radio"
                  name="priority"
                  id="high"
                  value="high"
                  checked={dataToSend?.priority === "high" && true}
                  onChange={(e) =>
                    setDataToSend({ ...dataToSend, priority: e.target.id })
                  }
                  className="peer hidden"
                />
                <label
                  htmlFor="high"
                  className="w-full py-1 text-slate-600 font-normal text-sm text-center capitalize cursor-pointer select-none rounded-full hover:bg-amber-100 hover:text-amber-600 peer-checked:border peer-checked:border-amber-300 peer-checked:bg-amber-100 peer-checked:font-bold peer-checked:text-amber-600"
                >
                  high
                </label>
              </div>

              <div className="w-full flex justify-center items-center">
                <input
                  type="radio"
                  name="priority"
                  id="normal"
                  value="normal"
                  checked={dataToSend?.priority === "normal" && true}
                  onChange={(e) =>
                    setDataToSend({ ...dataToSend, priority: e.target.id })
                  }
                  className="peer hidden"
                />
                <label
                  htmlFor="normal"
                  className="w-full py-1 text-slate-600 font-normal text-sm text-center capitalize cursor-pointer select-none rounded-full hover:bg-lime-100 hover:text-lime-600 peer-checked:border peer-checked:border-lime-300 peer-checked:bg-lime-100 peer-checked:font-bold peer-checked:text-lime-600"
                >
                  normal
                </label>
              </div>

              <div className="w-full flex justify-center items-center">
                <input
                  type="radio"
                  name="priority"
                  id="low"
                  value="low"
                  checked={dataToSend?.priority === "low" && true}
                  onChange={(e) =>
                    setDataToSend({ ...dataToSend, priority: e.target.id })
                  }
                  className="peer hidden"
                />
                <label
                  htmlFor="low"
                  className="w-full py-1 text-slate-600 font-normal text-sm text-center capitalize cursor-pointer select-none rounded-full hover:bg-teal-100 hover:text-teal-600 peer-checked:border peer-checked:border-teal-300 peer-checked:bg-teal-100 peer-checked:font-bold peer-checked:text-teal-600"
                >
                  low
                </label>
              </div>
            </div>
          </section>
        </section>

        {/* description */}
        <section className="w-full flex flex-col justify-start items-start gap-1.5">
          <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
            description
          </h4>

          <textarea
            type="text"
            placeholder="Write a few lines about what needs to be done"
            className="w-full minHeight h-auto px-8 py-4 text-slate-600 font-normal text-base tracking-wide rounded-xl border border-slate-300 placeholder:text-slate-300 focus:border-blue-500"
            value={dataToSend?.description}
            onChange={(e) =>
              setDataToSend({ ...dataToSend, description: e.target.value })
            }
          />
        </section>

        {/* change status  */}
        <section className="w-1/2 flex flex-col justify-start items-start gap-1.5 ">
          <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
            choose status
          </h4>

          <div className="w-full h-12 px-2 py-1 bg-white flex flex-row justify-center items-center gap-3 rounded-xl border border-slate-300">
            <div className="w-full flex justify-center items-center">
              <input
                type="radio"
                name="status"
                id="todo"
                value="todo"
                onChange={(e) =>
                  setDataToSend({ ...dataToSend, status: e.target.id })
                }
                checked={dataToSend?.status === "todo" && true}
                className="peer hidden"
              />
              <label
                htmlFor="todo"
                className="w-full py-1 text-slate-600 font-normal text-sm text-center uppercase hover:bg-slate-100 hover:text-slate-600 cursor-pointer select-none rounded-full peer-checked:border peer-checked:border-slate-300 peer-checked:bg-slate-100 peer-checked:font-bold peer-checked:text-slate-600"
              >
                to do
              </label>
            </div>

            <div className="w-full flex justify-center items-center">
              <input
                type="radio"
                name="status"
                id="inProgres"
                value="inProgres"
                checked={dataToSend?.status === "inProgres" && true}
                onChange={(e) =>
                  setDataToSend({ ...dataToSend, status: e.target.id })
                }
                className="peer hidden"
              />
              <label
                htmlFor="inProgres"
                className="w-full py-1 text-slate-600 font-normal text-sm text-center uppercase cursor-pointer select-none rounded-full hover:bg-blue-100 hover:text-blue-600 peer-checked:border peer-checked:border-blue-300 peer-checked:bg-blue-100 peer-checked:font-bold peer-checked:text-blue-600"
              >
                in Progres
              </label>
            </div>

            <div className="w-full flex justify-center items-center">
              <input
                type="radio"
                name="status"
                id="review"
                value="review"
                checked={dataToSend?.status === "review" && true}
                onChange={(e) =>
                  setDataToSend({ ...dataToSend, status: e.target.id })
                }
                className="peer hidden"
              />
              <label
                htmlFor="review"
                className="w-full py-1 text-slate-600 font-normal text-sm text-center uppercase cursor-pointer select-none rounded-full hover:bg-amber-100 hover:text-amber-600 peer-checked:border peer-checked:border-amber-300 peer-checked:bg-amber-100 peer-checked:font-bold peer-checked:text-amber-600"
              >
                review
              </label>
            </div>

            <div className="w-full flex justify-center items-center">
              <input
                type="radio"
                name="status"
                id="done"
                value="done"
                checked={dataToSend?.status === "done" && true}
                onChange={(e) =>
                  setDataToSend({ ...dataToSend, status: e.target.id })
                }
                className="peer hidden"
              />
              <label
                htmlFor="done"
                className="w-full py-1 text-slate-600 font-normal text-sm text-center uppercase cursor-pointer select-none rounded-full hover:bg-green-100 hover:text-green-600 peer-checked:border peer-checked:border-green-300 peer-checked:bg-green-100 peer-checked:font-bold peer-checked:text-green-600"
              >
                done
              </label>
            </div>
          </div>
        </section>

        {/* tag teammate and deadline */}
        <section className="w-full flex flex-row justify-start items-start gap-4">
          <section className="w-1/2 flex flex-col justify-start items-start gap-1.5">
            <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
              tag Partners
            </h4>

            <section className="w-full flex flex-col items-center">
              <section className="w-full relative flex flex-col items-center">
                <section className="w-full min-h-fit h-auto flex justify-between gap-2 pl-8 pr-3 bg-white border border-slate-300 rounded-xl">
                  <div
                    className={
                      dataToSend?.tagPartners?.length === 0
                        ? "w-full h-12 flex flex-row flex-wrap gap-2"
                        : "w-full py-2.5 flex flex-row flex-wrap gap-2"
                    }
                  >
                    <input
                      type="search"
                      placeholder="Search Person"
                      className="w-1/3 text-slate-600 font-normal text-base tracking-wide placeholder:text-slate-300"
                      onClick={() =>
                        setShowHoverTagTeammate(!showHoverTagTeammate)
                      }
                      onChange={(e) => {
                        setSearchTeammate(e.target.value);

                        setFilterSearchTeammate(
                          user.filter((person) =>
                            person.name
                              .toLowerCase()
                              .includes(e.target.value.toLocaleLowerCase())
                          )
                        );
                      }}
                      value={searchTeammate}
                    />

                    {dataToSend?.tagPartners &&
                      dataToSend?.tagPartners.map((person) => (
                        <div
                          key={person.id}
                          className="px-3 py-0.5 text-slate-600 text-sm font-normal capitalize bg-amber-100 border border-amber-300 flex flex-row justify-center items-center gap-3 rounded-full"
                        >
                          {person.name}
                          <i
                            onClick={() => {
                              setDataToSend({
                                ...dataToSend,
                                tagPartners: dataToSend.tagPartners.filter(
                                  (item) => item.id !== person.id
                                ),
                              });
                            }}
                            className="fa fa-times pt-0.5 !text-slate-400 hover:!text-red-500 cursor-pointer"
                          ></i>
                        </div>
                      ))}
                  </div>

                  <i
                    onClick={() =>
                      setShowHoverTagTeammate(!showHoverTagTeammate)
                    }
                    className={
                      showHoverTagTeammate
                        ? "fa fa-angle-up w-10 px-5 text-sm text-gray-600 border-l flex items-center border-slate-300 cursor-pointer"
                        : "fa fa-angle-down w-10 px-5 text-sm text-gray-600 border-l flex items-center border-slate-300 cursor-pointer"
                    }
                  ></i>
                </section>

                <div
                  onMouseLeave={() => setShowHoverTagTeammate(false)}
                  className={
                    showHoverTagTeammate
                      ? "w-full max-h-40 mt-1 bg-white flex flex-col justify-start items-start divide-y divide-slate-100 shadow rounded-xl overflow-y-auto"
                      : "h-0 overflow-hidden"
                  }
                >
                  {filterSearchTeammate &&
                    filterSearchTeammate.map((person) => (
                      <section
                        key={person.id}
                        onClick={() => {
                          const foundPerson = dataToSend.tagPartners.find(
                            (x) => x.id === person.id
                          );

                          !foundPerson &&
                            setDataToSend({
                              ...dataToSend,
                              tagPartners: [
                                ...dataToSend.tagPartners,
                                {
                                  id: person.id,
                                  name: person.name,
                                  avator: person.avator,
                                },
                              ],
                            });

                          !foundPerson && setSearchTeammate("");
                          !foundPerson && setFilterSearchTeammate(user);
                        }}
                        className="w-full h-12 py-1.5 px-8 flex flex-row justify-start items-center gap-4 cursor-pointer hover:bg-blue-50"
                      >
                        <img
                          src={
                            person.avator
                              ? `${axios.defaults.baseURL}image/userAvator/${person?.avator}`
                              : defultAvator
                          }
                          alt={person.avator}
                          className="h-full rounded-full"
                        />
                        <h3 className="text-slate-600 text-sm font-bold tracking-wide capitalize">
                          {person.name}
                        </h3>

                        <h3 className="ml-14 text-slate-600 text-sm font-normal tracking-wide capitalize">
                          {person.jobPostion}
                        </h3>
                      </section>
                    ))}
                </div>
              </section>
            </section>
          </section>

          <section className="w-1/2 relative flex flex-col justify-start items-start gap-1.5">
            <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
              deadline
            </h4>

            <DatePicker
              calendar={persian}
              plugins={[weekends()]}
              locale={persian_en}
              inputClass="w-full h-12 px-8 text-slate-600 font-normal text-base tracking-wide rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500"
              containerStyle={{
                width: "100%",
              }}
              minDate={new DateObject({ calendar: persian })}
              calendarPosition="bottom-center"
              numberOfMonths={2}
              animations={[transition({ duration: 500, from: 35 })]}
              editable={false}
              placeholder="click to open"
              format="YYYY/MM/DD - HH:mm"
              value={new DateObject({ calendar: persian }).set({
                year: dataToSend.deadline.year,
                month: dataToSend.deadline.month,
                day: dataToSend.deadline.day,
              })}
              onChange={(date) =>
                setDataToSend({
                  ...dataToSend,
                  deadline: {
                    year: date.year,
                    month: date.month.number,
                    day: date.day,
                    hour: date.hour,
                    min: date.minute,
                  },
                })
              }
            />
          </section>
        </section>

        <section className="w-full flex flex-col justify-start items-start gap-1.5">
          <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
            <h2 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
              select Image
              <span className="font-normal normal-case">
                {" "}
                - ( The size of the image should not be more than 500 KB )
              </span>
            </h2>
          </h4>

          <section className="w-full flex flex-row justify-start items-start gap-4">
            <section className="w-24 h-24 bg-white border-dotted border-2 border-slate-300 rounded-xl">
              <label
                htmlFor="inputFile"
                className="w-full h-full text-slate-300 font-normal text-base tracking-wide placeholder:text-slate-300 focus:border-blue-500 capitalize cursor-pointer flex flex-col justify-center items-center gap-1"
              >
                <i className="fas fa-upload text-base"></i>
                upload
              </label>
            </section>

            {dataToSend?.image.map((image, index) => (
              <section
                key={index + Math.random()}
                className="w-24 h-24 relative bg-white border border-slate-300 rounded-xl flex justify-center items-center overflow-hidden"
              >
                <img
                  src={
                    image.file
                      ? `${axios.defaults.baseURL}/file/${image.file}`
                      : URL.createObjectURL(image)
                  }
                  alt={image.file}
                  className="w-full h-full object-contain"
                />

                <Popup
                  modal
                  nested
                  trigger={
                    <i className="fas fa-times-circle absolute bottom-1 right-2 text-red-200 hover:text-red-500 text-xl cursor-pointer"></i>
                  }
                  position="right center"
                >
                  {(close) => (
                    <div className="p-10 flex flex-col justify-center items-center gap-8">
                      <section className="w-full space-y-1">
                        <p className="w-full text-left text-red-600 font-black text-xl capitalize">
                          Attached Files delete
                        </p>
                        <p className="w-full text-left text-slate-600 font-normal text-base">
                          Are you sure you want to delete file ?
                        </p>
                      </section>
                      <section className="flex flex-row justify-center items-center gap-4">
                        <button
                          onClick={() => close()}
                          className="h-10 px-8 hover:px-10 hover:bg-slate-500 text-slate-700 hover:text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500"
                        >
                          no care !
                        </button>
                        <button
                          onClick={() => {
                            setDataToSend({
                              ...dataToSend,
                              image: dataToSend.image.filter(
                                (x) => x.file !== image.file
                              ),
                            });

                            formData.append("fun", "deleteFile");
                            formData.append("id", image.id);
                            formData.append("idTask", params.id);

                            axios
                              .post("php/api.php", formData)
                              .then((response) => {
                                switch (response.data) {
                                  case "isDelete":
                                    Toastiy(
                                      "Delete file is successfully",
                                      "su"
                                    );
                                    break;
                                  case "errDelete":
                                    Toastiy("Error deleting file", "er");
                                    break;
                                  case "errNoSuchFile":
                                    Toastiy("File was not found", "er");
                                    break;
                                  case "noData":
                                    Toastiy("Server error", "er");
                                    break;
                                  default:
                                    break;
                                }
                              })
                              .catch((e) => console.log(e));
                            close();
                          }}
                          className="h-10 px-8 hover:px-10 bg-red-200 hover:bg-red-500 text-red-700 hover:text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500"
                        >
                          delete file
                        </button>
                      </section>
                    </div>
                  )}
                </Popup>
              </section>
            ))}

            <input
              id="inputFile"
              className="absolute opacity-0 invisible w-0 h-0"
              type="file"
              name="file[]"
              multiple
              accept="image/*"
              onChange={(event) => {
                setDataToSend({
                  ...dataToSend,
                  image: [...dataToSend.image, event.target.files[0]],
                });
              }}
            />
          </section>
        </section>
      </section>
      {loader && <Loader />}
    </section>
  );
}
