import axios from "axios";
import defultAvator from "../../../assets/image/userAvator/defultAvatorMen.png";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";

export default function ItemListTask(props) {
  const { data } = props;

  let date = JSON.parse(data?.date); // get data from data
  let tag = JSON.parse(data?.tagPartners);

  const navigate = useNavigate();

  return (
    <tr
      onClick={() => navigate(`/main/detailTask/${data?.id}`)}
      className="w-full py-5 px-4 bg-white flex justify-center items-center gap-3 cursor-pointer duration-300 hover:bg-amber-50"
    >
      <th className="w-1/12 flex justify-start items-start">
        <p
          className={
            data?.status === "todo"
              ? "h-full py-1 px-3 bg-gray-100 text-sm font-medium text-center text-gray-600 rounded-full"
              : data?.status === "InProgres"
              ? "h-full py-1 px-3 bg-blue-100 text-sm font-medium text-center text-blue-600 rounded-full"
              : data?.status === "review"
              ? "h-full py-1 px-3 bg-amber-100 text-sm font-medium text-center text-amber-600 rounded-full"
              : "h-full py-1 px-3 bg-green-100 text-sm font-medium text-center text-green-600 rounded-full"
          }
        >
          {data?.status === "inProgres" ? "in progres" : data?.status}
        </p>
      </th>
      <th className="w-2/12 flex justify-start items-start">
        <p className="w-full text-sm font-bold text-left text-slate-600">
          {data?.subject}
        </p>
      </th>
      <th className="w-3/12 flex justify-start items-start">
        <p className="w-full text-slate-500 text-sm font-normal tracking-wide text-left text-justify">
          {data?.description.length >= 50
            ? `${data?.description.slice(0, 35)}...`
            : data?.description}
        </p>
      </th>
      <th className="w-1/12 flex justify-center items-start">
        <p
          className={
            data?.priority === "force"
              ? "h-full py-1 px-3 bg-red-100 text-sm font-medium text-center text-red-600 rounded-full"
              : data?.priority === "high"
              ? "h-full py-1 px-3 bg-amber-100 text-sm font-medium text-center text-amber-600 rounded-full"
              : data?.priority === "normal"
              ? "h-full py-1 px-3 bg-lime-100 text-sm font-medium text-center text-lime-600 rounded-full"
              : "h-full py-1 px-3 bg-teal-100 text-sm font-medium text-center text-teal-600 rounded-full"
          }
        >
          {data?.priority}
        </p>
      </th>
      <th className="w-1/12 flex justify-center items-start">
        <p className="text-sm text-slate-400 font-normal capitalize">
          {`${date?.year}/${date?.month}/${date?.day}`}
        </p>
      </th>
      <th className="w-1/12 flex justify-center items-start">
        <section className="flex justify-center items-center -space-x-2 hover:space-x-1 duration-1000">
          {tag?.map((item, index) => (
            <Popup
              key={index}
              closeOnDocumentClick
              on={["hover"]}
              position="bottom center"
              arrow={"center bottom"}
              contentStyle={{
                width: "auto",
                padding: "4px 10px",
                backgroundColor: "#475569",
                color: "#fff",
                fontSize: "12px",
              }}
              trigger={
                index <= 1 && (
                  <img
                    className="max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125 justify-self-start"
                    loading="lazy"
                    src={
                      item.avator
                        ? `${axios.defaults.baseURL}image/userAvator/${item.avator}`
                        : defultAvator
                    }
                    alt={
                      item.avator
                        ? `${axios.defaults.baseURL}image/userAvator/${item.avator}`
                        : defultAvator
                    }
                  />
                )
              }
            >
              <div>{item.name}</div>
            </Popup>
          ))}
          {tag?.length > 2 && (
            <div className="max-w-none w-6 h-6 ring-2 ring-white duration-300 rounded-full hover:scale-125 bg-sky-200 flex justify-center items-center text-xs font-medium">
              +{Number(tag.length - 2)}
            </div>
          )}
        </section>
      </th>
      <th className="w-2/12 flex justify-center items-start">
        <p className="text-slate-400 text-sm font-normal text-left capitalize">
          {data?.name} {/* author name  */}
        </p>
      </th>
    </tr>
  );
}
