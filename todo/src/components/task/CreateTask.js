import React, { useEffect, useState ,useContext } from "react";

import axios from "axios";

import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";
import transition from "react-element-popper/animations/transition";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";

import TitlePage from "../titlePage/TitlePage";
import Loader from "../loader/Loader";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toastiy from "../toastfiy/Toastfiy";

import defultAvator from "../../assets/image/userAvator/defultAvatorMen.png";
import { UserContext } from "../../App";


export default function CreateTask() {
  const { userData } = useContext(UserContext);

  const [loader, setLoader] = useState(false);

  const [showHoverTagTeammate, setShowHoverTagTeammate] = useState(false); // show and hide hover person teammate
  const [searchTeammate, setSearchTeammate] = useState(""); // search teammate
  const [filterSearchTeammate, setFilterSearchTeammate] = useState([]); // set data group and sort

  const [dataToSend, setDataToSend] = useState({
    subject: "",
    description: "",
    priority: "",
    deadline: new DateObject("YYYY/MM/DD HH:mm"),
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

  const sendData = () => {
    setLoader(true);
    if (
      dataToSend.subject &&
      dataToSend.description &&
      dataToSend.deadline &&
      dataToSend.priority
    ) {
      let formData = new FormData();
      formData.append("fun", "createNewTask");
      formData.append("token", userData?.token);
      formData.append("subject", dataToSend.subject);
      formData.append("description", dataToSend.description);
      formData.append("priority", dataToSend.priority);
      formData.append("deadline", JSON.stringify(dataToSend.deadline));

      formData.append(
        "tagPartners",
        JSON.stringify(dataToSend.tagPartners)
      );

      for (let i = 0; i < dataToSend.image.length; i++) {
        formData.append("files[]", dataToSend.image[i]);
      }

      axios
        .post("php/api.php", formData)
        .then((response) => {
          switch (response.data) {
            case "insertOk":
              Toastiy("Create new task is successful.", "su");
              setLoader(false);
              break;
            default:
              Toastiy("Error, Please contact support.", "wa");
              setLoader(false);
              break;
          }
        })
        .catch((e) => console.log(e));
    } else {
      Toastiy("Enter the information task", "wa");
    }
  };

  return (
    <section className="w-full h-full relative">
      <section className="w-full h-full pt-4 px-6 pb-4 absolute flex flex-col justify-start items-start gap-8 overflow-x-hidden">
        {/* title and btn create new task */}
        <section className="w-full flex flex-row justify-between items-center gap-4">
          <TitlePage title="create new task" />
          <button
            onClick={() => sendData()}
            className="h-8 px-8 hover:px-10 bg-blue-600 text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl"
          >
            add to list
          </button>
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
              value={dataToSend.subject}
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
            className="w-full h-32 px-8 py-4 text-slate-600 font-normal text-base tracking-wide rounded-xl border border-slate-300 placeholder:text-slate-300 focus:border-blue-500"
            value={dataToSend.description}
            onChange={(e) =>
              setDataToSend({ ...dataToSend, description: e.target.value })
            }
          />
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
                      dataToSend.tagPartners.length === 0
                        ? "w-full py-2 h-12 flex flex-row flex-wrap gap-2"
                        : "w-full py-2 flex flex-row flex-wrap gap-2"
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

                    {dataToSend.tagPartners &&
                      dataToSend.tagPartners.map((person) => (
                        <div
                          key={person.id}
                          className="px-3 py-0.5 text-slate-600 text-sm font-normal capitalize bg-amber-100 border border-amber-300 flex flex-row justify-center items-center gap-3 rounded-full"
                        >
                          {person.name}
                          <i
                            onClick={() => {
                              setDataToSend({
                                ...dataToSend,
                                tagPartners:
                                  dataToSend.tagPartners.filter(
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
                    className="fa fa-angle-up w-10 px-5 text-sm text-gray-600 border-l flex items-center border-slate-300 cursor-pointer"
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
                              : { defultAvator }
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
              calendarPosition="bottom-center"
              numberOfMonths={2}
              animations={[transition({ duration: 800, from: 35 })]}
              editable={false}
              placeholder="click to open"
              format="YYYY/MM/DD - HH:mm"
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

        {/* upload image  */}
        <section className="w-full flex flex-col justify-start items-start gap-1.5">
          <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
            select Image
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

            {dataToSend.image.map((image) => (
              <section
                key={image.size + Math.random()}
                className="w-24 h-24 relative bg-white border border-slate-300 rounded-xl flex justify-center items-center overflow-hidden"
              >
                <img
                  src={image && URL.createObjectURL(image)}
                  alt={image.name}
                  className="w-full h-full object-contain"
                />
                <i
                  onClick={() => {
                    setDataToSend({
                      ...dataToSend,
                      image: dataToSend.image.filter(
                        (x) => x.name !== image.name
                      ),
                    });
                  }}
                  className="fas fa-times-circle absolute bottom-1 right-2 text-red-200 hover:text-red-500 text-xl cursor-pointer"
                ></i>
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

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          limit={5}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </section>
      {loader && <Loader />}
    </section>
  );
}
