import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ItemGridTask(props) {
  const { data } = props;

  const [tagTeam, setTagTeam] = useState([]);
  let date = JSON.parse(data?.date); // get data from data
  let tag = JSON.parse(data.tagTeam);

  return (
    <section className="w-full p-5 bg-white flex flex-col justify-between items-center gap-4 shadow-md cursor-pointer rounded-xl">
      {/* <img
        className="w-full max-h-32 rounded-xl object-cover shadow-md shadow-slate-200"
        src={data}
        alt={data}
      /> */}

      <section className="w-full flex flex-col justify-center items-center gap-1">
        <section className="w-full mb-2 flex items-center justify-start gap-1.5">
          <i className="fas fa-pen-alt text-slate-300 text-xs"></i>
          <h5 className="text-sm font-normal text-left text-slate-400 capitalize">
            Bud Choi
          </h5>
        </section>

        <p className="w-full text-sm font-bold text-left text-slate-600">
          {data?.subject}
        </p>
        <p className="w-full text-slate-500 text-sm font-normal tracking-wide text-left text-justify">
          {data?.description}
        </p>
      </section>
      <section className="w-full flex flex-row justify-between items-center mt-2">
        <section className="w-full flex items-center justify-start gap-1.5">
          <i className="fas fa-calendar text-slate-300 text-xs"></i>
          <span className="text-sm text-slate-400 font-normal capitalize">
            {`${date.year}/${date.month}/${date.day}`}
          </span>
        </section>

        <section className="pr-2 hover:pr-0 grid grid-cols-[repeat(5,1rem)] hover:grid-cols-[repeat(5,1.7rem)]">
          {tag?.map((item) => (
            <img
              className="max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125"
              src={`${axios.defaults.baseURL}image/userAvator/${item.avator}`}
              alt={`${axios.defaults.baseURL}image/userAvator/${item.avator}`}
            />
          ))}

          <div className=" max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125 bg-sky-200 flex justify-center items-center text-xs font-medium">
            +2
          </div>
        </section>
      </section>
    </section>
  );
}
