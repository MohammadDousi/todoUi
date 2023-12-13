import { createContext, useEffect, useState } from "react";

import axios from "axios";
import useToken from "../components/login/useToken";

import Login from "../components/login/Login";

// export const UserContext = createContext();

// export default function UserProvider({ children }) {

  // const { token, setToken } = useToken();
  // const [userData, setUserData] = useState({name : "ali"});

  // // useEffect(() => {
  // if (!token) {
  //   return <Login/>;
  // } else {
  //   let formData = new FormData();
  //   formData.append("fun", "getSingleUser");
  //   formData.append("token", token);

  //   axios
  //     .post("php/api.php", formData)
  //     .then((response) => {
  //       // setUserData(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((e) => console.log(e));

  //   for (let [key, value] of formData) {
  //     formData.delete(key, value);
  //   }
  // }
  // // }, []);

//   return (
//     <UserContext.Provider value={{ userData, setUserData , setToken }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
