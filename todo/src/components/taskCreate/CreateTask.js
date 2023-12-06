import React, { useEffect, useState } from "react";

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
    group: "",
    image: "",
  });

  const [showHoverTagTeammate, setShowHoverTagTeammate] = useState(false); // show and hide hover person teammate
  const [selectedTeammate, setSelectedTeammate] = useState([]); // array teammate selected
  const [searchTeammate, setSearchTeammate] = useState(""); // search teammate
  let [filterSearchTeammate, setFilterSearchTeammate] = useState([]); // set data group and sort

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
      <section className="w-full h-full pt-5 px-6 pb-4 absolute flex flex-col justify-start items-start gap-6 overflow-x-hidden">
        <TitlePage title="create new task" />
        <section className="w-1/2 flex flex-col justify-start items-start gap-6">
          <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
            subject
          </h4>
          <input
            type="text"
            placeholder="Description of the subject"
            className="w-full h-12 px-8 text-slate-600 font-normal text-base tracking-wide rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500"
          />
        </section>

        <section className="w-1/2 flex flex-col justify-start items-start gap-1.5">
          <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
            description
          </h4>

          <textarea
            type="text"
            placeholder="Write a few lines about what needs to be done"
            className="w-full h-32 px-8 py-4 text-slate-600 font-normal text-base tracking-wide rounded-xl border border-slate-300 placeholder:text-slate-300 focus:border-blue-500"
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
                className="w-full py-1 text-slate-600 font-normal text-sm text-center capitalize cursor-pointer select-none rounded-full peer-checked:border peer-checked:border-rose-300 peer-checked:bg-rose-100 peer-checked:font-bold peer-checked:text-rose-600"
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
                className="w-full py-1 text-slate-600 font-normal text-sm text-center capitalize cursor-pointer select-none rounded-full peer-checked:border peer-checked:border-amber-300 peer-checked:bg-amber-100 peer-checked:font-bold peer-checked:text-amber-600"
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
                className="w-full py-1 text-slate-600 font-normal text-sm text-center capitalize cursor-pointer select-none rounded-full peer-checked:border peer-checked:border-green-300 peer-checked:bg-green-100 peer-checked:font-bold peer-checked:text-green-600"
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
                className="w-full py-1 text-slate-500 font-normal text-sm text-center capitalize cursor-pointer select-none rounded-full peer-checked:border peer-checked:border-blue-300 peer-checked:bg-blue-100 peer-checked:font-bold peer-checked:text-blue-600"
              >
                low
              </label>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col justify-start items-start gap-1.5">
          <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
            tag teammate
          </h4>

          <section className="w-1/2 flex flex-col items-center">
            <section className="w-full flex flex-col items-center gap-0">
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
                        className="py-1 text-sm font-normal capitalize flex flex-row justify-center items-center gap-3 px-3 rounded-full text-slate-800 bg-slate-100 border border-slate-300"
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
                  onClick={() => setShowHoverTagTeammate(!showHoverTagTeammate)}
                  className="fa fa-angle-up w-10 px-5 text-sm text-gray-600 border-l flex items-center border-slate-300 cursor-pointer"
                ></i>
              </section>

              <div
                onMouseLeave={() => setShowHoverTagTeammate(false)}
                className={
                  showHoverTagTeammate
                    ? "w-full max-h-40 bg-white flex flex-col justify-start items-start divide-y divide-slate-100 shadow rounded-xl overflow-y-auto"
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

        <section className="w-1/2 flex flex-col justify-start items-start gap-1.5">
          <h4 className="w-full px-3 text-slate-600 font-bold text-sm capitalize">
            select Image
          </h4>

          <section className="w-full h-52 flex flex-col justify-start items-start gap-6">
            <section className="w-32 h-32 bg-white border-dotted border-2 border-slate-300 rounded-xl">
              <label
                htmlFor="inputFile"
                className="w-full h-full text-slate-300 font-normal text-base tracking-wide placeholder:text-slate-300 focus:border-blue-500 capitalize cursor-pointer flex flex-col justify-center items-center gap-1"
              >
                <i className="fas fa-upload text-xl"></i>
                upload
              </label>
            </section>

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

            {/* <div className="nameSize">
              <p className="nameText">
                نام تصویر : {dataToSend.logo && dataToSend.logo.name}
              </p>
              <div>
                <p className="sizeText">
                  حجم :
                  {dataToSend.logo &&
                    Math.floor(dataToSend.logo.size / 1024) + " KB"}
                </p>
                <p className="typeText">
                  نوع و پسوند : {dataToSend.logo && dataToSend.logo.type}
                </p>
              </div>
              {dataToSend.image.size > 2000000 && (
                <p className="warnText">
                  حجم تصویر باید کمتر از 300 کیلوبایت و با فرمت های png ، jpg ،
                  jpeg باشد .
                </p>
              )}
            </div> */}
          </section>
        </section>
      </section>
    </section>
  );
}
