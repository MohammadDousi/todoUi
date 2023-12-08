import React, { useEffect, useState } from "react";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";
import transition from "react-element-popper/animations/transition";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";

import avator from "../../assets/image/userAvator/profile (15).png";
import avator1 from "../../assets/image/userAvator/profile (11).png";
import avator2 from "../../assets/image/userAvator/profile (3).png";
import avator3 from "../../assets/image/userAvator/profile (1).png";
import avator4 from "../../assets/image/userAvator/profile (8).png";

import TitlePage from "../titlePage/TitlePage";

export default function CreateTask() {
  const [dataToSend, setDataToSend] = useState({
    subject: "",
    description: "",
    priority: "",
    deadline: "",
    group: "",
    image: "",
  });

  const [showHoverTagTeammate, setShowHoverTagTeammate] = useState(false); // show and hide hover person teammate
  const [selectedTeammate, setSelectedTeammate] = useState([]); // array teammate selected
  const [searchTeammate, setSearchTeammate] = useState(""); // search teammate
  const [filterSearchTeammate, setFilterSearchTeammate] = useState([]); // set data group and sort

  const [UploadImagesList, setUploadImagesList] = useState([
    { name: "a1", img: avator },
  ]); // get and save upload image in array

  let group = [
    { id: 1, name: "@ Dina Wangui", avator: avator },
    { id: 2, name: "@ Bud Choi", avator: avator1 },
    { id: 3, name: "@ Andreas Glover", avator: avator2 },
    { id: 4, name: "@ Rosemary Lane", avator: avator3 },
    { id: 5, name: "@ Ericka Drake", avator: avator4 },
  ];

  useEffect(() => {
    setFilterSearchTeammate(group);
  }, []);

  return (
    <section className="w-full h-full relative">
      <section className="w-full h-full pt-4 px-6 pb-4 absolute flex flex-col justify-start items-start gap-6 overflow-x-hidden">
        <section className="w-full flex flex-row justify-between items-center gap-4">
          <TitlePage title="create new task" />
          <button
            // onClick={() => navigate("/main/createTask")}
            className="h-8 px-8 hover:px-10 bg-blue-600 text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl"
          >
            add to list
          </button>
        </section>

        <section className="w-full flex flex-row justify-start items-start gap-4">
          <section className="w-1/2 flex flex-col justify-start items-start gap-1.5">
            <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
              subject
            </h4>
            <input
              type="text"
              placeholder="Description of the subject"
              className="w-full h-12 px-8 text-slate-600 font-normal text-base tracking-wide rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500"
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
                  name="option"
                  id="force"
                  value="force"
                  className="peer hidden"
                />
                <label
                  htmlFor="force"
                  className="w-full py-1 text-slate-600 font-normal text-sm text-center capitalize hover:bg-rose-100 hover:text-rose-600 cursor-pointer select-none rounded-full peer-checked:border peer-checked:border-rose-300 peer-checked:bg-rose-100 peer-checked:font-bold peer-checked:text-rose-600"
                >
                  force
                </label>
              </div>

              <div className="w-full flex justify-center items-center">
                <input
                  type="radio"
                  name="option"
                  id="high"
                  value="high"
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
                  name="option"
                  id="normal"
                  value="normal"
                  className="peer hidden"
                />
                <label
                  htmlFor="normal"
                  className="w-full py-1 text-slate-600 font-normal text-sm text-center capitalize cursor-pointer select-none rounded-full hover:bg-green-100 hover:text-green-600 peer-checked:border peer-checked:border-green-300 peer-checked:bg-green-100 peer-checked:font-bold peer-checked:text-green-600"
                >
                  normal
                </label>
              </div>

              <div className="w-full flex justify-center items-center">
                <input
                  type="radio"
                  name="option"
                  id="low"
                  value="low"
                  className="peer hidden"
                />
                <label
                  htmlFor="low"
                  className="w-full py-1 text-slate-500 font-normal text-sm text-center capitalize cursor-pointer select-none rounded-full hover:bg-blue-100 hover:text-blue-600 peer-checked:border peer-checked:border-blue-300 peer-checked:bg-blue-100 peer-checked:font-bold peer-checked:text-blue-600"
                >
                  low
                </label>
              </div>
            </div>
          </section>
        </section>

        <section className="w-full flex flex-col justify-start items-start gap-1.5">
          <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
            description
          </h4>

          <textarea
            type="text"
            placeholder="Write a few lines about what needs to be done"
            className="w-full h-32 px-8 py-4 text-slate-600 font-normal text-base tracking-wide rounded-xl border border-slate-300 placeholder:text-slate-300 focus:border-blue-500"
          />
        </section>

        <section className="w-full flex flex-row justify-start items-start gap-4">
          <section className="w-full flex flex-col justify-start items-start gap-1.5">
            <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
              tag teammate
            </h4>

            <section className="w-full flex flex-col items-center">
              <section className="w-full relative flex flex-col items-center">
                <section className="w-full min-h-fit h-auto flex justify-between gap-2 pl-8 pr-3 bg-white border border-slate-300 rounded-xl">
                  <div
                    className={
                      selectedTeammate.length === 0
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
                          group.filter((person) =>
                            person.name
                              .toLowerCase()
                              .includes(e.target.value.toLocaleLowerCase())
                          )
                        );
                      }}
                      value={searchTeammate}
                    />

                    {selectedTeammate &&
                      selectedTeammate.map((person) => (
                        <div
                          key={person.id}
                          className="px-3 py-0.5 text-slate-600 text-sm font-normal capitalize bg-amber-100 border border-amber-300 flex flex-row justify-center items-center gap-3 rounded-full"
                        >
                          {person.name}
                          <i
                            onClick={() => {
                              setSelectedTeammate(
                                selectedTeammate.filter(
                                  (item) => item.id !== person.id
                                )
                              );
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
                          const foundPerson = selectedTeammate.find(
                            (x) => x.id === person.id
                          );

                          !foundPerson &&
                            setSelectedTeammate([...selectedTeammate, person]);

                          !foundPerson && setSearchTeammate("");
                          !foundPerson && setFilterSearchTeammate(group);
                        }}
                        className="w-full h-10 py-1.5 px-8 flex flex-row justify-start items-center gap-3 cursor-pointer hover:bg-blue-50"
                      >
                        <img
                          src={person.avator}
                          alt={person.avator}
                          className="h-full rounded-full"
                        />
                        <h3 className="text-slate-600 text-sm font-normal tracking-wide capitalize">
                          {person.name}
                        </h3>

                        <h3 className="ml-14 text-slate-600 text-sm font-normal tracking-wide capitalize">
                          Editor
                        </h3>
                      </section>
                    ))}
                </div>
              </section>
            </section>

          </section>


          <section className="w-full relative flex flex-col justify-start items-start gap-1.5">
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
            />
          </section>
        </section>

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

            {UploadImagesList.map((image) => (
              <section
                key={image.name}
                className="w-2h-24 h-24 relative bg-white border border-slate-300 rounded-xl flex justify-center items-center overflow-hidden"
              >
                <img
                  src={image.img}
                  alt={image.img}
                  className="w-full h-full object-contain"
                />
                <i
                  onClick={() => {
                    setUploadImagesList(
                      UploadImagesList.filter((x) => x.name !== image.name)
                    );
                  }}
                  className="fas fa-times-circle absolute bottom-1 right-2 text-rose-300 hover:text-red-500 text-xl cursor-pointer"
                ></i>
              </section>
            ))}

            <input
              id="inputFile"
              className="absolute opacity-0 invisible w-0 h-0"
              type="file"
              accept="image/*"
              onChange={(event) => {
                // setDataToSend({ ...dataToSend, logo: event.target.files[0] });
                console.log(event.target.files);
              }}
            />
          </section>
          
        </section>
      </section>
    </section>
  );
}
