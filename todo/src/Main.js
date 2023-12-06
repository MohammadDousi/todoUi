import React from "react";

import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Sidebar from "./components/sideBar/Sidebar";

import BoardContainer from "./components/board/BoardContainer";
import CreateTask from "./components/taskCreate/CreateTask";
import NotFound from "./components/notFound/NotFound";

export default function Main() {
  return (
    <>
      <Header />

      <main className="w-screen h-full flex flex-row justify-start items-start">
        <Sidebar />

        <Routes>
          <Route path="/" element={<BoardContainer />} />
          <Route path="/board" element={<BoardContainer />} />
          <Route path="/createTask" element={<CreateTask />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
