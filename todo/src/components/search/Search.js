import React from "react";
import TitlePage from "../titlePage/TitlePage";

export default function Search() {
  return (
    <section className="w-full h-full relative">
      <section className="w-full h-full pt-[1.1rem] px-6 pb-4 absolute flex flex-col justify-start items-start gap-8">
        {/* title and btn create new task */}
        <section className="w-full flex flex-row justify-between items-center gap-4">
          <TitlePage title="search" />
        </section>

        <section className="w-full h-full overflow-x-hidden"></section>
      </section>
    </section>
  );
}
