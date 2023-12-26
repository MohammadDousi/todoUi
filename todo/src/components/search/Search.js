import React, { useState } from "react";
import axios from "axios";
import TitlePage from "../titlePage/TitlePage";
import ItemListTask from "../board/listTask/ItemListTask";
import searchPic from "../../assets/image/svg/search.svg";

export default function Search() {
  const [search, setSearch] = useState([]);

  const searchHandler = (e) => {
    if (e.target.value) {
      let formData = new FormData();
      formData.append("fun", "searchTask");
      formData.append("search", e.target.value);

      axios
        .post("php/api.php", formData)
        .then((response) => {
          console.log(response.data);
          setSearch(response.data);
        })
        .catch((e) => console.log(e));

      for (let [key, value] of formData) {
        formData.delete(key, value);
      }
    } else {
      setSearch([]);
    }
  };

  return (
    <section className="w-full h-full pt-3 px-6 pb-40 lg:pb-4 absolute flex flex-col justify-start items-start gap-8">
      {/* title and btn create new task */}
      <section className="w-full flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-4">
        <TitlePage title="search" />

        <input
          type="search"
          autoFocus
          placeholder="Search subject, description, partners and date"
          className="w-full lg:w-1/2 h-14 lg:h-10 px-8 text-slate-600 font-normal text-base tracking-wide rounded-xl placeholder:text-slate-300 border border-slate-300 focus:border-blue-500 duration-500"
          onChange={(e) => searchHandler(e)}
        />
      </section>

      <section className="w-full h-5/6 pb-8 flex flex-col justify-start items-start gap-3">
        <table className="w-full h-full">
          <thead className="w-full flex bg-white rounded-t-xl border-b border-slate-300 shadow-md shadow-slate-200">
            <tr className="w-full py-5 px-4 flex justify-center items-start gap-3 uppercase">
              <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-start items-start">
                <h3> status</h3>
              </th>
              <th className="w-2/12 text-sm font-black text-slate-400 tracking-wide flex justify-start items-start">
                <h3> subject</h3>
              </th>
              <th className="w-3/12 text-sm font-black text-slate-400 tracking-wide flex justify-start items-start">
                <h3> description</h3>
              </th>
              <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                <h3> priority</h3>
              </th>
              <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                <h3> deadline</h3>
              </th>
              <th className="w-1/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                <h3> Partners</h3>
              </th>
              <th className="w-2/12 text-sm font-black text-slate-400 tracking-wide flex justify-center items-start">
                <h3> author</h3>
              </th>
            </tr>
          </thead>

          <tbody className="w-full max-h-full flex flex-col justify-start items-center bg-white divide-y divide-slate-200/50 rounded-b-xl shadow-md shadow-slate-200 overflow-x-hidden">
            {search?.length === 0 && (
              <tr className="w-full">
                <th className="w-full px-5 py-10 flex flex-col justify-center items-center gap-5">
                  <img src={searchPic} alt="search" className="w-52" />
                  <h2 className="text-slate-600 text-lg font-black text-center capitalize">
                    Search for what you are looking for
                  </h2>
                </th>
              </tr>
            )}

            {search?.map((item, index) => (
              <ItemListTask key={index} data={item} />
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}
