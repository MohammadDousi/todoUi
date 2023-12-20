import { Route, Routes, Navigate } from "react-router-dom";
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

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </UserProvider>
  );
}

export default App;
