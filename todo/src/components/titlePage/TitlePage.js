import React from "react";

export default function TitlePage({title}) {
  return (
    <section className="w-full mb-4 flex flex-row justify-start items-center gap-4">
      <hr className="w-1 h-4 bg-blue-500 rounded-full" />
      <h2 className="text-blue-600 font-black text-xl capitalize tracking-wide">{title}</h2>
    </section>
  );
}
