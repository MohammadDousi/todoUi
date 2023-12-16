import { Route, Routes } from "react-router-dom";

/// components
import Header from "./components/header/Header";
import Sidebar from "./components/sideBar/Sidebar";
import BoardContainer from "./components/board/BoardContainer";
import CreateTask from "./components/task/CreateTask";
import NotFound from "./components/notFound/NotFound";
import Profile from "./components/profile/Profile";
import Push from "./components/push/Push";
import DetailTask from "./components/task/DetailTask";

import EditTask from "./components/task/EditTask";

export default function Main() {
  // const userData = useContext(UserContext);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!userData.name) {
  //     console.log("hi");
  //     Toastiy("Please complete the profile information", "wa");
  //     navigate(`/main/profile/${userData.token}`);
  //   } else {
  //     console.log(userData.name === "");
  //   }
  // }, []);

  return (
    <>
      <Header />

      <main className="w-full h-full flex flex-row justify-start items-start">
        <Sidebar />

        <Routes>
          <Route path="/" element={<BoardContainer />} />
          <Route path="/board" element={<BoardContainer />} />
          <Route path="/createTask" element={<CreateTask />} />
          <Route path="/detailTask/:id" element={<DetailTask />} />
          <Route path="/editTask/:id" element={<EditTask />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/pushBox" element={<Push />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
