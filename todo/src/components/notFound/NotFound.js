import React from "react";

import { Link } from "react-router-dom";

import pic from "../../assets/image/svg/notFound.svg";

export default function NotFound() {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="w-3/5 p-10 bg-white rounded-xl flex flex-col justify-center items-center gap-4 shadow-md">
        <img src={pic} alt="not found" className="w-52 mb-6" />
        {/* <i className="fas fa-exclamation-circle text-8xl text-slate-400 mb-6"></i> */}
        <h2 className="text-slate-600 text-3xl font-black capitalize">
          page Not found
        </h2>
        <p className="text-slate-600 text-base text-center">
          Maybe an error has occurred. Try again later.
        </p>
        <Link
          to="/"
          className="h-10 px-8 mt-4 hover:px-10 bg-amber-200 text-amber-700 text-xs font-bold uppercase cursor-pointer tracking-widest rounded-xl flex justify-center items-center duration-500"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
