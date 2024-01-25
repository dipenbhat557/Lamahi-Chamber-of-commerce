import {useNavigate} from "react-router-dom";
import { eventElements } from "../constants";
import { styles } from "../styles";

const Events = () => {
	const navigate = useNavigate();
  return (
    <div
      className={`${styles.padding} h-auto w-full flex flex-col items-center justify-between`}
    >
      <p className="w-full font-medium text-[#6D603F] text-[20px] sm:text-[42.79px] h-[80px]">
        Events
      </p>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-3 items-start h-auto w-full">
        {eventElements.map((event, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-around h-[500px] w-full sm:w-[28%] rounded-lg hover:bg-[#6D603F] hover:text-white"
            >
              <div className="w-full h-[50%] relative">
                <img
                  src={event.img}
                  alt={`img-${index}`}
                  className="object-cover w-full h-full rounded-t-lg"
                />
                <p className="absolute bg-[#F1E8D7] text-slate-800 top-0 right-0 text-[11px] sm:text-[14px] w-[30%] h-[13%] p-1 sm:p-2 rounded-bl-md rounded-tr-lg">
                  {event.stat}
                </p>
              </div>
              <div className="w-[full] h-[50%] flex flex-col ">
                <p className="w-full h-[10%] pr-3 text-end mt-2">
                  {event.date}
                </p>
                <p className="w-full h-[90%] p-3 sm:leading-loose text-[14px] sm:text-[20px]">
                  {event.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="text-[18px] sm:text-[23.42px] border-4 border-[#6D603F] px-2 sm:px-5 rounded-xl py-1 w-[30%] sm:w-[14%] h-[50px] sm:h-[60px] mt-10" onClick={()=>{navigate("/events")}}>
        More
      </button>
    </div>
  );
};

export default Events;
