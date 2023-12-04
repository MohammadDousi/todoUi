import React from "react";

import avator3 from "../../assets/image/userAvator/profile (8).png";
import avator4 from "../../assets/image/userAvator/profile (5).png";
import avator5 from "../../assets/image/userAvator/profile (4).png";
import avator6 from "../../assets/image/userAvator/profile (16).png";

export default function Navbar() {
  return (
    <section className="w-20 flex flex-col justify-between items-start border-r-2 border-slate-200/80">
      <section className="flex flex-col justify-center items-center gap-3">
        <section className="iconContainer">
          <i className="fas fa-compass"></i>
        </section>
        <section className="iconContainer">
          <i className="fas fa-star"></i>
        </section>
        <section className="iconContainer">
          <i className="fas fa-comment"></i>
        </section>
        <section className="iconContainer">
          <i className="fas fa-globe-americas"></i>
        </section>
        <section className="iconContainer">
          <i className="fas fa-building"></i>
        </section>
      </section>

      <div className="flex flex-col justify-center items-stretch gap-3">
        <img
          className="w-10 h-10 cursor-pointer rounded-full duration-300 hover:scale-110"
          src={avator3}
          alt="Avatar4"
        />
        <img
          className="w-10 h-10 cursor-pointer rounded-full duration-300 hover:scale-110"
          src={avator4}
          alt="Avatar4"
        />
        <img
          className="w-10 h-10 cursor-pointer rounded-full duration-300 hover:scale-110"
          src={avator5}
          alt="Avatar4"
        />
        <img
          className="w-10 h-10 cursor-pointer rounded-full duration-300 hover:scale-110"
          src={avator6}
          alt="Avatar4"
        />
        <div className="iconContainer">
          <i className="fa fa-plus"></i>
        </div>
      </div>
    </section>
  );
}
