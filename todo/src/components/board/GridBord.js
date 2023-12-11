import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderGridTask from "./gridTask/HeaderGridTask.js";
import ItemGridTask from "./gridTask/ItemGridTask.js";

export default function GridBord() {
  const [allTask, setAllTask] = useState([]);

  useEffect(() => {
    let formData = new FormData();
    formData.append("fun", "getAllTask");

    axios
      .post("php/api.php", formData)
      .then((response) => setAllTask(response.data))
      .catch((e) => console.log(e));

    for (let [key, value] of formData) {
      formData.delete(key, value);
    }
  }, []);

  const todo = allTask.filter((item) => item.status === "todo");

  return (
    <section className="w-full h-full px-6 absolute z-20 left-0 flex flex-row justify-start items-start gap-6">
      <div className="w-1/4 h-full flex flex-col justify-start items-start gap-3">
        <HeaderGridTask
          data={{
            title: "TO DO",
            countTask: "4",
            color: "bg-purple-500",
          }}
        />

        <div className="w-full h-5/6 pb-6 flex flex-col justify-start items-start gap-3 overflow-auto">
          {todo?.map((item) => (
            <ItemGridTask key={item.id} data={item} />
          ))}
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

        <div className="w-full h-full flex flex-col justify-start items-start gap-3 overflow-auto"></div>
      </div>

      <div className="w-1/4 h-full flex flex-col justify-start items-start gap-3">
        <HeaderGridTask
          data={{
            title: "REVIEW",
            countTask: "3",
            color: " bg-yellow-500",
          }}
        />

        <div className="w-full h-full flex flex-col justify-start items-start gap-3 overflow-auto"></div>
      </div>

      <div className="w-1/4 h-full flex flex-col justify-start items-start gap-3">
        <HeaderGridTask
          data={{
            title: "DONE",
            countTask: "26",
            color: "bg-lime-500",
          }}
        />

        <div className="w-full h-full flex flex-col justify-start items-start gap-3 overflow-auto"></div>
      </div>
    </section>
  );
}
