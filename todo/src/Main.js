import React from "react";

import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Sidebar from "./components/sideBar/Sidebar";

import BoardContainer from "./components/board/BoardContainer";
import CreateTask from "./components/taskCreate/CreateTask";

import pattern from "./assets/image/pattern.svg";

export default function Main() {
  return (
    <>
      <Header />

      <main className="w-screen h-full flex flex-row justify-start items-start">
        <Sidebar />

        <img
          src={pattern}
          alt="pattern background"
          className="w-full h-full absolute opacity-[15%] -z-20 object-cover bg-repeat"
        />
        <Routes>
          <Route path="/" element={<BoardContainer />} />
          <Route path="/board" element={<BoardContainer />} />
          <Route path="/createTask" element={<CreateTask />} />
        </Routes>
      </main>
    </>
  );
}
