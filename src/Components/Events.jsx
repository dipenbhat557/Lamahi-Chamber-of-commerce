import { eventElements } from "../constants";
import { styles } from "../styles";

const Events = () => {
  return (
    <div
      className={`${styles.padding} h-auto w-full flex flex-col items-center justify-between`}
    >
      <p className="w-full font-medium text-[#6D603F] text-[42.79px] h-[80px]">
        Events
      </p>

      <div className="flex flex-wrap justify-between items-start h-auto w-full">
        {eventElements.map((event, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-around h-[500px] w-[28%] rounded-lg hover:bg-[#6D603F] hover:text-white"
            >
              <div className="w-full h-[50%] relative">
                <img
                  src={event.img}
                  alt={`img-${index}`}
                  className="object-cover w-full h-full rounded-t-lg"
                />
                <p className="absolute bg-[#F1E8D7] text-slate-800 top-0 right-0 text-[14px] w-[27%] h-[13%] p-2 rounded-bl-md rounded-tr-lg">
                  {event.stat}
                </p>
              </div>
              <div className="w-[full] h-[50%] flex flex-col ">
                <p className="w-full h-[10%] pr-3 text-end mt-2">
                  {event.date}
                </p>
                <p className="w-full h-[90%] p-3 leading-loose text-[20px]">
                  {event.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="text-[23.42px] border-4 border-[#6D603F] px-5 rounded-xl py-1 w-[14%] h-[60px] mt-10">
        More
      </button>
    </div>
  );
};

export default Events;
