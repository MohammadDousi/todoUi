import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/header/Header";
import Sidebar from "./components/sideBar/Sidebar";

import BoardContainer from "./components/board/BoardContainer";
import CreateTask from "./components/taskCreate/CreateTask";

import pattern from "./assets/image/pattern.svg";

import Login from "./components/login/Login";
import Main from "./Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/main/*" element={<Main />} />
        <Route path="/*" element={<Main />} />
        <Route path="/register" element={""} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
