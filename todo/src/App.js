import { useEffect, useState, createContext } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

//// components
import Main from "./Main";
import Login from "./components/login/Login";
import NotFound from "./components/notFound/NotFound";
import useToken from "./components/login/useToken";

//// image background
import pattern from "./assets/image/svg/pattern.svg";

//// context

import Toastiy from "./components/toastfiy/Toastfiy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext();

function App() {
  const { token, setToken } = useToken();
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return () => {
        <Navigate to="/login" replace />;
      };
    } else {
      let formData = new FormData();
      formData.append("fun", "getSingleUser");
      formData.append("token", token);

      axios
        .post("php/api.php", formData)
        .then((response) => {
          setUserData(response.data);

          if (response.data.name == "") {
            console.log(response.data.name == "");
            Toastiy("Please complete the profile information", "wa");
            navigate("/main/profile");
          }
        })
        .catch((e) => console.log(e));

      for (let [key, value] of formData) {
        formData.delete(key, value);
      }
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ userData, setUserData, token, setToken }}>
      <img
        src={pattern}
        alt="pattern background"
        className="w-full h-full absolute opacity-[15%] -z-20 object-cover bg-repeat"
      />
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<Main />} />
        <Route path="/main/*" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        limit={5}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </UserContext.Provider>
  );
}

export default App;
