import { toast } from "react-toastify";

export default function Toastiy(message, typeNotif) {
  const position = "bottom-right";
  const autoClose = 5000;
  const theme = "light";

  switch (typeNotif) {
    case "er": // error
      toast.error(message, {
        position: position,
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
      });
      break;
    case "wa": // warning
      toast.warn(message, {
        position: position,
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
      });
      break;
    case "su": // success
      toast.success(message, {
        position: position,
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
      });
      break;
    case "in": // info
      toast.info(message, {
        position: position,
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
      });
      break;
    default:
      break;
  }
}
