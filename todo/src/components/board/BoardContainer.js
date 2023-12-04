import React from "react";

import GridBord from "./GridBord";
import ListBoard from "./ListBoard";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function BoardContainer() {
  const [board, setBoard] = useState("Grid");

  return (
    <section className="w-full h-full pb-8 space-y-4 relative overflow-hidden duration-1000">
      <section className="w-full pt-4 px-6 flex flex-row justify-start items-center gap-8">
        <div className="flex flex-row justify-center items-start gap-2">
          <div
            onClick={() => setBoard("Grid")}
            className={
              board === "Grid"
                ? "w-8 h-8 flex justify-center items-center bg-white shadow-lg shadow-slate-200 duration-500 rounded-xl"
                : "w-8 h-8 flex justify-center items-center cursor-pointer duration-500 "
            }
          >
            <i className="fa fa-th-large text-slate-600 text-xs"></i>
          </div>

          <div
            onClick={() => setBoard("List")}
            className={
              board === "List"
                ? "w-8 h-8 flex justify-center items-center bg-white shadow-lg shadow-slate-200 duration-500 rounded-xl"
                : "w-8 h-8 flex justify-center items-center cursor-pointer duration-500 "
            }
          >
            <i className="fas fa-list-ul text-slate-600 text-xs"></i>
          </div>
        </div>

        <Link to="/createTask">
          <button className="h-8 px-4 bg-blue-500 hover:px-7 text-white text-xs font-semibold uppercase cursor-pointer duration-300 rounded-xl">
            + create task
          </button>
        </Link>
      </section>

      {board === "Grid" ? <GridBord /> : <ListBoard />}
    </section>
  );
}
