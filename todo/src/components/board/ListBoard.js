import React from "react";
import ItemListTask from "./listTask/ItemListTask";
import HeaderListTask from "./listTask/HeaderListTask";

export default function ListBoard() {
  return (
    <section className="w-full h-full px-6 absolute z-20 left-0 flex flex-col justify-start items-start gap-5">
      <HeaderListTask />
      <section className="w-full h-5/6 pb-8 flex flex-col justify-start items-start gap-3 overflow-auto">
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
        <ItemListTask />
      </section>
    </section>
  );
}
