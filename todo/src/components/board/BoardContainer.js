import React, { useEffect } from "react";
import axios from "axios";

import GridBord from "./GridBord";
import ListBoard from "./ListBoard";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function BoardContainer() {
  const [board, setBoard] = useState("Grid");
  
  const navigate = useNavigate();

  return (
    <section className="w-full h-full pb-8 space-y-4 relative overflow-hidden duration-1000">
      <section className="w-full pt-4 px-6 flex flex-row justify-between items-center gap-8">
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
          className="h-8 px-8 hover:px-10 bg-blue-600 text-white text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl"
        >
          + create task
        </button>
      </section>

      {board === "Grid" ? <GridBord /> : <ListBoard />}
    </section>
  );
}
