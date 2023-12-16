import React, { useEffect } from "react";
import axios from "axios";

import GridBord from "./GridBord";
import ListBoard from "./ListBoard";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";

export default function BoardContainer() {
  const [board, setBoard] = useState("Grid");

  const [loader, setLoader] = useState(true);

  const navigate = useNavigate();

  const [allTask, setAllTask] = useState([]);

  useEffect(() => {
    let formData = new FormData();
    formData.append("fun", "getAllTask");

    axios
      .post("php/api.php", formData)
      .then((response) => {
        setAllTask(response.data);
        setLoader(false);
      })
      .catch((e) => console.log(e));

    for (let [key, value] of formData) {
      formData.delete(key, value);
    }
  }, []);

  return (
    <section className="w-full h-full pb-8 space-y-4 relative overflow-hidden duration-1000">
      <section className="w-full pt-3 px-6 flex flex-row justify-between items-center gap-8">
        <div className="flex flex-row justify-center items-start gap-2">
          <i
            onClick={() => setBoard("Grid")}
            className={
              board === "Grid"
                ? "fa fa-th-large iconContainer text-slate-500 text-xs bg-white shadow-lg"
                : "fa fa-th-large iconContainer text-slate-500 text-xs "
            }
          ></i>

          <i
            onClick={() => setBoard("List")}
            className={
              board === "List"
                ? "fas fa-list-ul iconContainer text-slate-500 text-xs bg-white shadow-lg"
                : "fas fa-list-ul iconContainer text-slate-500 text-xs"
            }
          ></i>
        </div>

        <button
          onClick={() => navigate("/main/createTask")}
          className="h-10 px-8 hover:px-10 bg-blue-600 text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500"
        >
          + create task
        </button>
      </section>

      {board === "Grid" ? (
        <GridBord allTask={allTask} />
      ) : (
        <ListBoard allTask={allTask} />
      )}

      {loader && <Loader />}
    </section>
  );
}
