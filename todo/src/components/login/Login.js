import React from "react";

import pic from "../../assets/image/pic/sign-pic.jpg";
import pattern from "../../assets/image/pattern.svg";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import OtpInput from "react-otp-input";

import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [levelLogin, setLevelLogin] = useState("MOBILE");

  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileOk, setMobileOk] = useState(false);

  const [otp, setOtp] = useState("");

  const checkedOTP = "1234";

  useEffect(() => {
    /^09[0-9]{9}$/g.test(mobileNumber) ? setMobileOk(true) : setMobileOk(false);
  }, [mobileNumber]);

  return (
    <main className="w-screen h-screen relative bg-gray-200/30 flex flex-row justify-center items-center gap-6">
      <img
        src={pattern}
        alt="pattern background"
        className="w-full h-full absolute opacity-30 -z-20 object-cover bg-repeat"
      />

      <section className="w-1/2 flex flex-row justify-end items-center">
        <img src={pic} alt={pic} className="w-10/12 object-cover rounded-xl" />
      </section>

      <section className="w-1/2 relative flex flex-row justify-start items-center">
        <section
          className={
            levelLogin === "MOBILE"
              ? "w-10/12 p-16 bg-white translate-y-0 flex flex-col justify-center items-end gap-5 rounded-xl duration-1000 shadow-2xl shadow-slate-300"
              : "w-10/12 p-16 bg-white absolute -translate-y-full scale-0 flex flex-col justify-center items-end gap-5 rounded-xl duration-1000 overflow-hidden"
          }
        >
          <section className="w-full mb-6 flex flex-col justify-center items-start gap-1">
            <p className="w-full text-blue-600 font-black text-3xl capitalize">
              Welcome Back
            </p>
            <p className="w-full text-slate-600 font-normal text-lg ">
              Enter your mobile number to log in or register.
            </p>
          </section>

          <section className="w-full flex flex-col justify-center items-end gap-10">
            <input
              type="number"
              placeholder="09xx xx xxx xx"
              className="w-full h-14 px-8 text-slate-600 font-black text-base tracking-widest rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />

            <button
              onClick={() => {
                setLevelLogin("OTP");
                if (mobileOk) {
                  // console.log(mobileNumber);
                  // let formData = new FormData();
                  // formData.append("fun", "verfiyMobile");
                  // formData.append("mobileNum", mobileNumber);
                  // axios.post("php/apiInvilla.php", formData).then((res) => {
                  //   switch (res.data) {
                  //     case "insertOk":
                  //       break;
                  //     case "noInsert":
                  //       break;
                  //     case "noData":
                  //       break;
                  //   }
                  //   console.log(res.data);
                  // });
                }
              }}
              className="h-10 px-10 hover:px-14 bg-amber-200  text-amber-700 text-xs font-bold uppercase cursor-pointer tracking-widest duration-300 rounded-xl"
            >
              verify number
            </button>
          </section>
        </section>

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
            <p className="w-full text-blue-600 font-black text-3xl capitalize duration-300">
              OTP code
            </p>
            <p className="w-full text-slate-600 font-normal text-lg">
              The login code has been sent to <b>{mobileNumber}</b> mobile
              number.
            </p>
            <p className=""></p>
          </section>

          <section className="w-full flex flex-col justify-center items-center gap-10">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              inputType="tel"
              containerStyle="w-full flex justify-center items-start"
              inputStyle="!w-14 !h-14 bg-white border border-slate-300 text-slate-600 text-base font-black rounded-xl duration-300 focus:border-blue-500"
              renderSeparator={<span className="px-2"></span>}
              renderInput={(props) => <input {...props} />}
            />

            <button
              onClick={() => {
                checkedOTP === otp && navigate("/main");
              }}
              className="h-10 px-10 hover:px-14 bg-amber-200  text-amber-700 text-xs font-bold uppercase cursor-pointer tracking-widest duration-300 rounded-xl"
            >
              check & Login
            </button>
          </section>
        </section>
      </section>

    </main>
  );
}
