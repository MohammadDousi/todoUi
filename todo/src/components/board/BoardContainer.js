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
