import axios from "axios";
import { Link } from "react-router-dom";

export default function ItemGridTask(props) {
  const { data } = props;

  let date = JSON.parse(data?.date); // get data from data
  let tag = JSON.parse(data.tagPartners);

  return (
    <Link
      to={`/main/editTask/${data?.id}`}
      className="w-full p-5 bg-white flex flex-col justify-between items-center gap-4 shadow-md cursor-pointer rounded-xl"
    >
      {/* <img
        className="w-full max-h-32 rounded-xl object-cover shadow-md shadow-slate-200"
        src={data}
        alt={data}
      /> */}

      <section className="w-full flex flex-col justify-center items-center gap-3">
        <section className="w-full mb-2 flex flex-row justify-between items-center gap-1.5">
          <section className="w-full flex items-center justify-start gap-1.5">
            <i className="fas fa-calendar text-slate-300 text-xs"></i>
            <span className="text-sm text-slate-400 font-normal capitalize">
              {`${date.year}/${date.month}/${date.day}`}
            </span>
          </section>

          <p
            className={
              data?.priority === "force"
                ? "h-full px-3 bg-red-100 text-sm font-medium text-center text-red-600 rounded-full"
                : data?.priority === "high"
                ? "h-full px-3 bg-amber-100 text-sm font-medium text-center text-amber-600 rounded-full"
                : data?.priority === "normal"
                ? "h-full px-3 bg-lime-100 text-sm font-medium text-center text-lime-600 rounded-full"
                : "h-full px-3 bg-teal-100 text-sm font-medium text-center text-teal-600 rounded-full"
            }
          >
            {data?.priority}
          </p>
        </section>

        <section className="w-full mb-2 flex flex-col justify-start items-start gap-1.5">
          <p className="w-full text-sm font-bold text-left text-slate-600">
            {data?.subject}
          </p>
          <p className="w-full text-slate-500 text-sm font-normal tracking-wide text-left">
            {data?.description}
          </p>
        </section>
      </section>

      <section className="w-full flex flex-row justify-between items-center">
        <div className="w-full flex items-center justify-start gap-1.5">
          <i className="fas fa-pen-alt text-slate-300 text-xs"></i>
          <h5 className="text-sm font-normal text-left text-slate-400 capitalize">
            {data?.author ? data?.author : "unknow"}
          </h5>
        </div>

        <section className="flex justify-end items-center -space-x-2 hover:space-x-1 duration-1000">
          {tag?.map((item) => (
            <img
              key={item.avator}
              className="max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125 justify-self-start"
              src={`${axios.defaults.baseURL}image/userAvator/${item.avator}`}
              alt={`${axios.defaults.baseURL}image/userAvator/${item.avator}`}
            />
          ))}

          <div className=" max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125 bg-sky-200 flex justify-center items-center text-xs font-medium">
            +2
          </div>
        </section>
      </section>
    </Link>
  );
}
