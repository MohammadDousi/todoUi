import React from "react";

import pic from "../../assets/image/pic/sign-pic.jpg";

export default function Login() {
  return (
    <main className="w-full h-screen fixed bg-white flex flex-row justify-center items-center gap-5">
      
      <img src={pic} alt={pic} className="w-4/12 rounded-xl" />

      <section className="w-4/12 p-16 bg-gray-200/50 flex flex-col justify-center items-end gap-5 rounded-xl">
        <section className="w-full mb-6 flex flex-col justify-center items-start gap-1">
          <p className="w-full text-blue-600 font-black text-2xl tracking-tighter">
            Welcome Back
          </p>
          <p className="w-full text-slate-500 font-normal text-base">
            Enter your mobile number to log in.
          </p>
        </section>

        <input
          type="number"
          placeholder="09xx xx xxx xx"
          className="w-full h-10 px-10 text-slate-600 font-bold text-base tracking-wider bg-white rounded-xl
        placeholder:text-slate-400/70 placeholder:font-normal"
        />
        <button className="h-10 px-10 hover:px-14 bg-blue-500 text-white text-xs font-bold uppercase cursor-pointer duration-300 rounded-xl">
          Login
        </button>
      </section>
    </main>
  );
}
