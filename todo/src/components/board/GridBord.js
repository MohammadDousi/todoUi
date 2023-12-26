import HeaderGridTask from "./gridTask/HeaderGridTask.js";
import ItemGridTask from "./gridTask/ItemGridTask.js";
import noData from "../../assets/image/svg/noData.svg";

export default function GridBord({ allTask }) {
  const todo = allTask?.filter((item) => item.status === "todo");
  const done = allTask?.filter((item) => item.status === "done");
  const review = allTask?.filter((item) => item.status === "review");
  const inProgres = allTask?.filter((item) => item.status === "inProgres");

  return (
    <section className="w-full h-full pb-40 px-6 lg:pb-0 absolute z-20 left-0 flex flex-col lg:flex-row justify-start items-start gap-6 overflow-auto lg:overflow-hidden">
      <div className="w-full lg:w-1/4 h-auto lg:h-full flex flex-col justify-start items-start gap-3">
        <HeaderGridTask
          data={{
            title: "TO DO",
            countTask: todo?.length,
            color: "bg-slate-600",
          }}
        />

        <div className="w-full h-auto lg:h-full pb-2 lg:pb-4 flex flex-col justify-start items-start gap-5 lg:overflow-auto">
          {todo?.map((item, index) => (
            <ItemGridTask key={index} data={item} />
          ))}

          {done?.length === 0 &&
            review?.length === 0 &&
            inProgres?.length === 0 &&
            todo?.length === 0 && (
              <div className="w-full px-5 py-10 bg-white rounded-xl flex flex-col justify-center items-center gap-5 shadow-md duration-500">
                <img src={noData} alt="no data" className="w-20" />
                <h2 className="text-slate-600 text-lg font-black text-center capitalize">
                  No task has been registered
                </h2>
              </div>
            )}
        </div>
      </div>

      <div className="w-full lg:w-1/4 h-auto lg:h-full flex flex-col justify-start items-start gap-3">
        <HeaderGridTask
          data={{
            title: "in progres",
            countTask: inProgres?.length,
            color: "bg-blue-500",
          }}
        />

        <div className="w-full h-auto lg:h-full pb-2 lg:pb-4 flex flex-col justify-start items-start gap-5 lg:overflow-auto">
          {inProgres?.map((item) => (
            <ItemGridTask key={item.id} data={item} />
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/4 h-auto lg:h-full flex flex-col justify-start items-start gap-3">
        <HeaderGridTask
          data={{
            title: "REVIEW",
            countTask: review?.length,
            color: "bg-amber-400",
          }}
        />

        <div className="w-full h-auto lg:h-full pb-2 lg:pb-4 flex flex-col justify-start items-start gap-5 lg:overflow-auto">
          {review?.map((item) => (
            <ItemGridTask key={item.id} data={item} />
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/4 h-auto lg:h-full flex flex-col justify-start items-start gap-3">
        <HeaderGridTask
          data={{
            title: "DONE",
            countTask: done?.length,
            color: "bg-green-500",
          }}
        />

        <div className="w-full h-auto lg:h-full pb-2 lg:pb-4 flex flex-col justify-start items-start gap-5 lg:overflow-auto">
          {done?.map((item) => (
            <ItemGridTask key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
