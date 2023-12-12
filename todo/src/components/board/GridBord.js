import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderGridTask from "./gridTask/HeaderGridTask.js";
import ItemGridTask from "./gridTask/ItemGridTask.js";

export default function GridBord({ allTask }) {
  const todo = allTask.filter((item) => item.status === "todo");
  const done = allTask.filter((item) => item.status === "done");
  const review = allTask.filter((item) => item.status === "review");
  const InProgres = allTask.filter((item) => item.status === "InProgres");

  return (
    <section className="w-full h-full px-6 absolute z-20 left-0 flex flex-row justify-start items-start gap-6">
      <div className="w-1/4 h-full flex flex-col justify-start items-start gap-3">
        <HeaderGridTask
          data={{
            title: "TO DO",
            countTask: todo.length,
            color: "bg-slate-600",
          }}
        />

        <div className="w-full h-5/6 pb-8 flex flex-col justify-start items-start gap-5 overflow-auto">
          {todo?.map((item) => (
            <ItemGridTask key={item.id} data={item} />
          ))}
        </div>
      </div>

      <div className="w-1/4 h-full flex flex-col justify-start items-start gap-3">
        <HeaderGridTask
          data={{
            title: "in progres",
            countTask: InProgres.length,
            color: "bg-blue-500",
          }}
        />

        <div className="w-full h-5/6 pb-8 flex flex-col justify-start items-start gap-5 overflow-auto">
          {InProgres?.map((item) => (
            <ItemGridTask key={item.id} data={item} />
          ))}
        </div>
      </div>

      <div className="w-1/4 h-full flex flex-col justify-start items-start gap-3">
        <HeaderGridTask
          data={{
            title: "REVIEW",
            countTask: review.length,
            color: "bg-amber-400",
          }}
        />

        <div className="w-full h-5/6 pb-8 flex flex-col justify-start items-start gap-5 overflow-auto">
          {review?.map((item) => (
            <ItemGridTask key={item.id} data={item} />
          ))}
        </div>
      </div>

      <div className="w-1/4 h-full flex flex-col justify-start items-start gap-3">
        <HeaderGridTask
          data={{
            title: "DONE",
            countTask: done.length,
            color: "bg-green-500",
          }}
        />

        <div className="w-full h-5/6 pb-8 flex flex-col justify-start items-start gap-5 overflow-auto">
          {done?.map((item) => (
            <ItemGridTask key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
