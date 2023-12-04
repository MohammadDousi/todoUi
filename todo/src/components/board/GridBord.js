import React from "react";

import HeaderGridTask from "./gridTask/HeaderGridTask.jsx";
import ItemGridTask from "./gridTask/ItemGridTask.jsx";

export default function GridBord() {
  return (
    <section className="w-full h-full px-6 absolute z-20 left-0 flex flex-row justify-start items-start gap-5">
      <div className="w-1/4 h-full flex flex-col justify-start items-start gap-3">
        <HeaderGridTask
          data={{
            title: "TO DO",
            countTask: "4",
            color: "bg-purple-500",
          }}
        />

        <div className="w-full h-5/6 pb-6 flex flex-col justify-start items-start gap-3 overflow-auto">
          <ItemGridTask />
          <ItemGridTask />
          <ItemGridTask />
          <ItemGridTask />
          <ItemGridTask />
          <ItemGridTask />
        </div>
      </div>

      <div className="w-1/4 h-full flex flex-col justify-start items-start gap-3">
        <HeaderGridTask
          data={{
            title: "in work",
            countTask: "2",
            color: "bg-sky-500",
          }}
        />

        <div className="w-full h-full flex flex-col justify-start items-start gap-3 overflow-auto">
          <ItemGridTask />
        </div>
      </div>

      <div className="w-1/4 h-full flex flex-col justify-start items-start gap-3">
        <HeaderGridTask
          data={{
            title: "REVIEW",
            countTask: "3",
            color: " bg-yellow-500",
          }}
        />

        <div className="w-full h-full flex flex-col justify-start items-start gap-3 overflow-auto">
          <ItemGridTask />
        </div>
      </div>

      <div className="w-1/4 h-full flex flex-col justify-start items-start gap-3">
        <HeaderGridTask
          data={{
            title: "DONE",
            countTask: "26",
            color: "bg-lime-500",
          }}
        />

        <div className="w-full h-full flex flex-col justify-start items-start gap-3 overflow-auto">
          <ItemGridTask />
        </div>
      </div>
    </section>
  );
}
