import React, { useContext, useRef } from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import OtpInput from "react-otp-input";
import pic from "../../assets/image/svg/standOut.svg";

import "react-toastify/dist/ReactToastify.css";
import Toastiy from "../toastfiy/Toastfiy";
import Loader from "../loader/Loader";
import { UserContext } from "../../context/UserContext";

export default function Login() {
  const { setToken } = useContext(UserContext);

  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const [levelLogin, setLevelLogin] = useState("MOBILE"); // check and switch between conatiner mobile and otp code
  const [mobileOk, setMobileOk] = useState(false); // check for regiex moile - true is ok number mobile
  const [data, setData] = useState({
    mobileNumber: "",
    otp: "",
    userName: "",
    token: "",
  }); // set mobiel and otp code

  const [touched, setTouched] = useState({});

  const countTimer = useRef();
  const agianCode = useRef();

  let intervalTimer = useRef();

  const verifyMobile = () => {
    if (mobileOk && data.mobileNumber.length !== 0) {
      setLoader(true);
      let formData = new FormData();
      formData.append("fun", "verifyMobile");
      formData.append("mobileNumber", data.mobileNumber);

      axios
        .post("php/api.php", formData)
        .then((response) => {
          switch (response.data) {
            case "insertOk":
              setLoader(false);
              setLevelLogin("OTP");
              code();
              timer();
              break;
            case "noInsert":
              Toastiy("Login error, please try again.", "in");
              setLoader(false);
              break;
            case "dataInvalied":
              Toastiy("The number entered is not correct", "er");
              setLoader(false);
              break;
            case "noData":
              Toastiy("An error has occurred, contact support", "in");
              setLoader(false);
              break;
            default:
              break;
          }
        })
        .catch((e) => console.log(e));
    } else {
      Toastiy("Enter your mobile number correctly", "wa");
    }
  };

  const verifyOtpCode = () => {
    if (data.otp.length === 4) {
      setLoader(true);
      let formData = new FormData();
      formData.append("fun", "verifyOtpCode");
      formData.append("mobileNumber", data.mobileNumber);
      formData.append("otp", data.otp);

      axios
        .post("php/api.php", formData)
        .then((response) => {
          response.data?.map((item) => {
            switch (item.msg) {
              case "insertOk":
                setData({ ...data, token: item.token });
                setLoader(false);
                clearInterval(intervalTimer.current);
                setLevelLogin("NAME");
                break;
              case "updateOk":
                setToken(item.token);
                setLoader(false);
                clearInterval(intervalTimer.current);
                navigate("/main");
                Toastiy("Welcome to Todo Application", "in");
                break;
              case "noInsert":
                break;
              case "otpNok":
                break;
              case "noFoundNum":
                break;
              case "noData":
                break;
              default:
                break;
            }
          });
        })
        .catch((e) => console.log(e));
    } else {
      Toastiy("The code is not correct", "wa");
    }
  };

  const timer = () => {
    let count = 1.5;
    count = count * 60;
    let min = Math.floor(count / 60);
    let second = Math.floor(count - min * 60);

    agianCode.current.style.opacity = "0";

    intervalTimer.current = setInterval(() => {
      second--;

      if (second === 0) {
        if (min === 0) {
          min = 0;
          clearInterval(intervalTimer.current);
        } else {
          second = min * 60;
          min--;
        }
      }

      second < 10 && (second = "0" + second);

      countTimer.current.innerText = "0" + min + ":" + second;

      if (second === 0 && min === 0) {
        agianCode.current.style.opacity = "1";
      }
    }, 1000);
    // return () => clearInterval(intervalTimer.current);

    // const startTimer = () => {

    // };
  };

  useEffect(() => {
    /^09[0-9]{9}$/g.test(data?.mobileNumber)
      ? setMobileOk(true)
      : setMobileOk(false);
  }, [data?.mobileNumber]);

  const verifyUsername = () => {
    if (data.userName.length !== 0) {
      setLoader(true);
      let formData = new FormData();
      formData.append("fun", "verifyUsername");
      formData.append("name", data.userName);
      formData.append("token", data?.token);

      axios
        .post("php/api.php", formData)
        .then((response) => {
          switch (response.data) {
            case "updateUser":
              setLoader(false);
              Toastiy("Welcome to Todo Application", "in");
              setToken(data?.token);
              navigate("/main");
              break;
            case "errUpdateUser":
              Toastiy("Login error, please try again.", "er");
              setLoader(false);
              break;
            case "noData":
              Toastiy("An error has occurred, contact support", "in");
              setLoader(false);
              break;
            default:
              break;
          }
        })
        .catch((e) => console.log(e));
    } else {
      Toastiy("Enter name correctly", "wa");
    }
  };

  const [helpOtp, setHelpOtp] = useState("");
  const code = () => {
    let formData = new FormData();
    formData.append("fun", "getcode");
    formData.append("mobileNumber", data.mobileNumber);

    axios.post("php/api.php", formData).then((response) => {
      // setO(response.data);
      setHelpOtp(response.data[0].otpCode);
    });
  };

  return (
    <>
      <main className="w-screen h-screen relative bg-gray-200/30 flex flex-row justify-center items-center">
        {/* image  */}
        <section className="w-1/2 flex flex-row justify-center items-center">
          <img src={pic} alt={pic} className="w-7/12 object-cover rounded-xl" />
        </section>

        {/* container mobile and otp code */}
        <section className="w-1/2 relative flex flex-row justify-start items-center">
          {/* get mobile */}
          <section
            className={
              levelLogin === "MOBILE"
                ? "w-10/12 p-16 bg-white translate-y-0 flex flex-col justify-center items-end gap-12 rounded-xl duration-1000 shadow-2xl shadow-slate-300"
                : "w-10/12 p-16 bg-white absolute -translate-y-full scale-0 flex flex-col justify-center items-end gap-12 rounded-xl duration-1000 overflow-hidden"
            }
          >
            <section className="w-full flex flex-col justify-center items-start gap-1">
              <p className="w-full text-blue-600 font-black text-3xl capitalize">
                Welcome Back
              </p>
              <p className="w-full text-slate-600 font-normal text-lg ">
                Enter your mobile number to log in or register.
              </p>
            </section>

            <section className="w-full relative flex flex-col justify-center items-end gap-2">
              <input
                type="number"
                name="mobile"
                placeholder="09xx xx xxx xx"
                className={
                  !mobileOk && touched.mobile
                    ? "w-full h-12 px-8 text-slate-600 font-black text-base tracking-widest rounded-xl placeholder:text-slate-300 border border-rose-500 focus:border-blue-500"
                    : "w-full h-12 px-8 text-slate-600 font-black text-base tracking-widest rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500"
                }
                value={data?.mobileNumber}
                onChange={(e) => {
                  setData({ ...data, mobileNumber: e.target.value });
                }}
                onFocus={(e) =>
                  setTouched({ ...touched, [e.target.name]: true })
                }
              />
              {!data.mobileNumber && touched.mobile && (
                <span className="w-full absolute -bottom-7 pl-8 text-rose-500 font-normal text-sm text-left">
                  The number entered is not correct.
                </span>
              )}
            </section>

            <button
              onClick={() => verifyMobile()}
              className="h-10 px-8 hover:px-10 bg-amber-200 text-amber-700 text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500"
            >
              verify number
            </button>
          </section>
          {/* get code */}
          <section
            className={
              levelLogin === "OTP"
                ? "w-10/12 p-16 bg-white translate-y-0 flex flex-col justify-center items-end gap-5 rounded-xl duration-1000 shadow-2xl shadow-slate-300"
                : "w-10/12 p-16 bg-white absolute bg-gray-200/50 translate-y-full scale-0 flex flex-col justify-center items-end gap-5 rounded-xl duration-1000 overflow-hidden"
            }
          >
            <i
              onClick={() => setLevelLogin("MOBILE")}
              className="fa fa-angle-left iconContainer absolute left-6 top-6 bg-gray-200/50 text-gray-400 text-sm"
            ></i>

            <section className="w-full mb-6 flex flex-col justify-center items-start gap-1">
              <p className="w-full text-blue-600 font-black text-3xl capitalize ">
                OTP code
              </p>
              <p className="w-full text-slate-600 font-normal text-lg">
                The login code has been sent to <b>{data.mobileNumber}</b>{" "}
                mobile number.
              </p>
            </section>

            <section className="w-full relative flex flex-col justify-center items-center gap-10">
              <OtpInput
                value={data?.otp}
                onChange={(value) => setData({ ...data, otp: value })}
                numInputs={4}
                inputType="tel"
                containerStyle="w-full flex justify-center items-start"
                inputStyle="!w-14 !h-14 bg-white border border-slate-300 text-slate-600 text-2xl font-black rounded-xl focus:border-blue-500"
                renderSeparator={<span className="px-2"></span>}
                renderInput={(props) => <input {...props} />}
              />

              <h4 className="w-full text-green-500 font-normal text-base">
                otp code for you : {helpOtp}
              </h4>

              <section className="absolute bottom-1.5 left-0 flex flex-row justify-center items-center gap-8">
                <i
                  ref={agianCode}
                  onClick={() => timer()}
                  className="fa fa-undo opacity-0 text-red-500 text-base rotate-45 cursor-pointer"
                ></i>
                <p
                  className="text-slate-600 text-base font-normal text-center tracking-widest"
                  ref={countTimer}
                ></p>
              </section>

              <button
                onClick={() => verifyOtpCode()}
                className="h-10 px-8 hover:px-10 bg-amber-200 text-amber-700 text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500"
              >
                verify code
              </button>
            </section>
          </section>
          {/* get name */}
          <section
            className={
              levelLogin === "NAME"
                ? "w-10/12 p-16 bg-white translate-y-0 flex flex-col justify-center items-end gap-12 rounded-xl duration-1000 shadow-2xl shadow-slate-300"
                : "w-10/12 p-16 bg-white absolute -translate-y-full scale-0 flex flex-col justify-center items-end gap-12 rounded-xl duration-1000 overflow-hidden"
            }
          >
            <section className="w-full flex flex-col justify-center items-start gap-1">
              <p className="w-full text-blue-600 font-black text-3xl capitalize">
                Register your username
              </p>
              <p className="w-full text-slate-600 font-normal text-lg ">
                this name will be displayed to other users.
              </p>
            </section>

            <section className="w-full relative flex flex-col justify-center items-end gap-2">
              <input
                type="text"
                name="userName"
                placeholder="ex : mohammad dosi"
                className={
                  !data.userName && touched.userName
                    ? "w-full h-12 px-8 text-slate-600 font-black text-base tracking-widest rounded-xl placeholder:text-slate-300 border border-rose-500 focus:border-blue-500"
                    : "w-full h-12 px-8 text-slate-600 font-black text-base tracking-widest rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500"
                }
                value={data.userName}
                onChange={(e) => {
                  setData({ ...data, userName: e.target.value });
                }}
                onFocus={(e) =>
                  setTouched({ ...touched, [e.target.name]: true })
                }
              />
              {!data.userName && touched.userName && (
                <span className="w-full absolute -bottom-7 pl-8 text-rose-500 font-normal text-sm text-left">
                  Register your username.
                </span>
              )}
            </section>

            <button
              onClick={() => verifyUsername()}
              className="h-10 px-8 hover:px-10 bg-amber-200 text-amber-700 text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl duration-500"
            >
              login
            </button>
          </section>
        </section>

        {loader && <Loader />}

        <h3 className="absolute bottom-5 z-30 text-slate-600 font-normal text-sm capitalize cursor-pointer">
          <Link to={"https://www.kaktusprog.ir/"}>
            develop and design by mohammad dosi
          </Link>
        </h3>
      </main>
    </>
  );
}
