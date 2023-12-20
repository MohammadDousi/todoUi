import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
//// components
import Main from "./Main";
import Login from "./components/login/Login";
import NotFound from "./components/notFound/NotFound";

//// image background
import pattern from "./assets/image/svg/pattern.svg";

//// context

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./context/UserContext";
import { SWRConfig } from "swr";

function App() {
  return (
    <UserProvider>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: (url) => axios(url).then((res) => res.data),
        }}
      >
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
      </SWRConfig>
    </UserProvider>
  );
}

export default App;
