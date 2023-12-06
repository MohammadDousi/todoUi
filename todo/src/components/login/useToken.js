
import { useState } from "react";

export default function useToken() {

  const getToken = () => {
    const tokenString = localStorage.getItem('token');

    // const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.mobileNumber;
  };

  const [token, setToken] = useState(getToken());
  
  const saveToken = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken));
    // sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.mobileNumber);
  };

  return {
    setToken: saveToken,
    token,
  };
}
