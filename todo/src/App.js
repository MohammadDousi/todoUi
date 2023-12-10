import { Route, Routes, Navigate } from "react-router-dom";

import Main from "./Main";
import Login from "./components/login/Login";
import useToken from "./components/login/useToken";
import NotFound from "./components/notFound/NotFound";
import pattern from "./assets/image/svg/pattern.svg";
import Loader from "./components/loader/Loader";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <>
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
    </>
  );
}

export default App;
