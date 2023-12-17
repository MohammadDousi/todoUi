import { createContext, useEffect, useState } from "react";

import axios from "axios";
import useToken from "../components/login/useToken";
import { useNavigate } from "react-router-dom";
import Toastiy from "../components/toastfiy/Toastfiy";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const { token, setToken } = useToken();
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");

      // return () => {
      //   <Navigate to="/login" replace />;
      // };
    } else {
      let formData = new FormData();
      formData.append("fun", "getSingleUser");
      formData.append("token", token);

      axios
        .post("php/api.php", formData)
        .then((response) => {
          setUserData(response.data);

          if (response.data) {
            if (response.data.name === "") {
              Toastiy("Please complete the profile information", "wa");
              navigate(`/main/profile/${response.data.token}`);
            }
          } else {
            Toastiy("Please enter the user panel", "in");
            sessionStorage.clear();
            localStorage.clear();
            navigate("/login");
            setUserData({});
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
      {children}
    </UserContext.Provider>
  );
}
