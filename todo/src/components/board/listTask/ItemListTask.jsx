import React from "react";

import axios from "axios";
export default function ItemListTask(props) {
  const { data } = props;

  let date = JSON.parse(data?.date); // get data from data
  let tag = JSON.parse(data?.tagTeam);

  return (
    <tr className="w-full py-4 px-6 flex jtify-center items-center gap-5 cursor-pointer hover:bg-amber-50">
      <th className="w-2/12 flex justify-start items-start">
        <p
          className={
            data?.status === "todo"
              ? "h-full py-1 px-5 bg-gray-100 text-sm font-medium text-center text-gray-600 rounded-full"
              : data?.status === "InProgres"
              ? "h-full py-1 px-5 bg-blue-100 text-sm font-medium text-center text-blue-600 rounded-full"
              : data?.status === "review"
              ? "h-full py-1 px-5 bg-amber-100 text-sm font-medium text-center text-amber-600 rounded-full"
              : "h-full py-1 px-5 bg-green-100 text-sm font-medium text-center text-green-600 rounded-full"
          }
        >
          {data?.status === "InProgres" ? "in progres" : data?.status}
        </p>
      </th>
      <th className="w-2/12 flex justify-start items-start">
        <p className="w-full text-sm font-bold text-left text-slate-600">
          {data?.subject}
        </p>
      </th>
      <th className="w-4/12 flex justify-start items-start">
        <p className="w-full text-slate-500 text-sm font-normal tracking-wide text-left text-justify">
          {data?.description}
        </p>
      </th>
      <th className="w-1/12 flex justify-center items-start">
        <p
          className={
            data?.priority === "force"
              ? "h-full py-1 px-5 bg-red-100 text-sm font-medium text-center text-red-600 rounded-full"
              : data?.priority === "high"
              ? "h-full py-1 px-5 bg-amber-100 text-sm font-medium text-center text-amber-600 rounded-full"
              : data?.priority === "normal"
              ? "h-full py-1 px-5 bg-lime-100 text-sm font-medium text-center text-lime-600 rounded-full"
              : "h-full py-1 px-5 bg-teal-100 text-sm font-medium text-center text-teal-600 rounded-full"
          }
        >
          {data?.priority}
        </p>
      </th>
      <th className="w-1/12 flex justify-center items-start">
        <p className="w-full text-sm text-slate-400 font-normal capitalize">
          {`${date?.year}/${date?.month}/${date?.day}`}
        </p>
      </th>
      <th className="w-2/12 flex justify-center items-start">
        <section className="flex justify-center items-center -space-x-2 hover:space-x-1 duration-1000">
          {tag?.map((item) => (
            <img
              key={item.avator}
              className="max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125 justify-self-start"
              src={`${axios.defaults.baseURL}image/userAvator/${item.avator}`}
              alt={`${axios.defaults.baseURL}image/userAvator/${item.avator}`}
            />
          ))}

          <div className=" max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125 bg-sky-200 flex justify-center items-center text-xs font-medium">
            +2
          </div>
        </section>
      </th>
      {/* <th className="w-1/12 flex justify-start items-start">
        <p className="w-full text-slate-400 font-normal text-left capitalize">
          {data?.author}
        </p>
      </th> */}

      {/* <th className="w-1/12 flex justify-center items-center">
        <i className="fa fa-angle-right w-8 h-8 text-gray-400 text-sm bg-gray-200/50 rounded-xl flex justify-center items-center"></i>
      </th> */}
    </tr>
  );
}
