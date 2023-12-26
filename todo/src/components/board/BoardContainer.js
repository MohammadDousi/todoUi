import React, { useEffect } from "react";
import axios from "axios";

import GridBord from "./GridBord";
import ListBoard from "./ListBoard";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import TitlePage from "../titlePage/TitlePage";

export default function BoardContainer() {
  const navigate = useNavigate();

  const [board, setBoard] = useState(); // change between board grid or list
  const [loader, setLoader] = useState(false);
  const [allTask, setAllTask] = useState([]); // get all task from server

  let formData = new FormData();
  formData.append("fun", "getAllTask");

  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: ["getAllTask"],
    queryFn: () =>
      axios
        .post("https://todoui.kaktusprog.ir/assets/php/api.php", formData)
        .then((response) => response.data),
    refetchInterval: 2000,
  });

  // const mutation = useMutation({
  //   mutationFn: ["getAllTask"],
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ["getAllTask"] });
  //   },
  // });

  useEffect(() => {
    setLoader(false);
    setAllTask(data);
    // mutation.mutate(data);
  }, [data]);

  useEffect(() => {
    setBoard(localStorage.getItem("board"));
    if (!localStorage.getItem("board")) {
      localStorage.setItem("board", "grid");
    }
  }, [board]);

  return (
    <section className="w-full h-full relative overflow-x-hidden">
      <section className="w-full h-full absolute pt-4 duration-1000 flex flex-col justify-start items-start gap-6 overflow-x-hidden">

        {/* title and btn create new task */}
        <section className="w-full px-6 flex flex-row justify-between items-center gap-4">
          <TitlePage title="dashboard" />

          <section className="w-1/2 hidden lg:flex flex-row justify-end items-center gap-8">
            <div className="flex flex-row justify-center items-start gap-2">
              <i
                onClick={() => {
                  localStorage.setItem("board", "grid");
                  setBoard("Grid");
                }}
                className={
                  board === "grid"
                    ? "fa fa-th-large iconContainer text-slate-500 text-xs bg-white shadow-lg duration-500"
                    : "fa fa-th-large iconContainer text-slate-500 text-xs duration-500"
                }
              ></i>

              <i
                onClick={() => {
                  localStorage.setItem("board", "list");
                  setBoard("List");
                }}
                className={
                  board === "list"
                    ? "fas fa-list-ul iconContainer text-slate-500 text-xs bg-white shadow-lg duration-500"
                    : "fas fa-list-ul iconContainer text-slate-500 text-xs duration-500"
                }
              ></i>
            </div>
          </section>
        </section>

        <section className="w-full h-full relative overflow-hidden duration-1000">
          {board === "grid" ? (
            <GridBord allTask={allTask} />
          ) : (
            <ListBoard allTask={allTask} />
          )}
        </section>

        {loader && <Loader />}
      </section>
    </section>
  );
}
