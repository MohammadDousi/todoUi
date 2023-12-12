import { createContext, useEffect, useState } from "react";

import axios from "axios";
import useToken from "../components/login/useToken";

import Login from "../components/login/Login";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const { token, setToken } = useToken();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (!token) {
      return <Login setToken={setToken} />;
    } else {
      let formData = new FormData();
      formData.append("fun", "getSingleUser");
      formData.append("token", token);

      axios
        .post("php/api.php", formData)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((e) => console.log(e));

      for (let [key, value] of formData) {
        formData.delete(key, value);
      }
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
