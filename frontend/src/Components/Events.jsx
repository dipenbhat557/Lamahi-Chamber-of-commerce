import { useNavigate } from "react-router-dom";
// import { eventElements } from "../constants";
import { styles } from "../styles";
import useFetch from "./UseFetch";
import { def } from "../assets";
import { useEffect, useState } from "react";

const Events = () => {
  const navigate = useNavigate();

  const eventsItems = useFetch(
    `${import.meta.env.VITE_APP_API_ROOT}/events?per_page=20`
  );

  // console.log("event elements are ", eventsItems);

  const [currentEvents, setCurrentEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to update the current events based on the currentIndex
  const updateCurrentEvents = () => {
    const startIndex = currentIndex;
    const endIndex = startIndex + 3;
    let nextIndex =
      endIndex % eventsItems?.length == undefined
        ? endIndex
        : endIndex % eventsItems?.length;

    // console.log(
    //   "curent index is ",
    //   currentIndex,
    //   " start index is ",
    //   startIndex,
    //   " end index is ",
    //   endIndex,
    //   " nexrt index is ",
    //   nextIndex
    // );
    if (endIndex > eventsItems?.length - 1) {
      setCurrentEvents(
        eventsItems
          ?.slice(startIndex, endIndex)
          .concat(eventsItems?.slice(0, nextIndex))
      );
      // console.log("Current events : ", currentEvents);
    } else {
      setCurrentEvents(eventsItems?.slice(startIndex, endIndex));
    }
  };

  // Function to handle automatic switching of events
  const handleAutoSwitch = () => {
    setCurrentIndex((prevIndex) => {
      // console.log("prev index is ", prevIndex);
      const newIndex = (prevIndex + 1) % eventsItems?.length;
      console.log("new index is ", newIndex);
      // return newIndex || (prevIndex + 1) % 3;
    });
  };

  useEffect(() => {
    // Initialize current events
    updateCurrentEvents();

    // Set up automatic switching every 5 seconds (adjust as needed)
    const interval = setInterval(handleAutoSwitch, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className={`${styles.padding} h-auto w-full flex flex-col items-center justify-between`}
    >
      <p className="w-full font-medium text-[#6D603F] text-[20px] sm:text-[42.79px] h-[80px]">
        Events
      </p>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-3 items-start h-auto w-full">
        {currentEvents?.map((event, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-around h-[500px] sm:h-[650px] w-full sm:w-[28%] rounded-lg hover:bg-[#6D603F] hover:text-white"
            >
              <div className="w-full h-[50%] relative">
                <img
                  src={event?.imageUrl || def}
                  alt={`img-${index}`}
                  className="object-cover w-full h-full rounded-t-lg"
                />
                <p className="absolute bg-[#F1E8D7] text-slate-800 top-0 right-0 text-[11px] sm:text-[14px] w-[30%] h-[13%] p-1 sm:p-2 rounded-bl-md rounded-tr-lg">
                  {`#${event?.["_event_stat"] || "Loading.."}`}
                </p>
              </div>
              <div className="w-[full] h-[50%] flex flex-col ">
                <p className="w-full h-[10%] pr-3 text-end mt-2">
                  {event?.["_event_date"] || "Loading..."}
                </p>
                <p className="w-full h-[80%] p-3 sm:leading-loose text-[14px] sm:text-[20px] line-clamp-6">
                  {`${event?.["_event_content"] || "Loading..."}`}
                </p>
                <button
                  className="h-[10%] rounded-md w-[30%] text-[10px] sm:text-[14px] text-white bg-[#6D505F] mx-auto"
                  onClick={() => navigate("/events")}
                >
                  Read more...
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="text-[18px] sm:text-[23.42px] border-4 border-[#6D603F] px-2 sm:px-5 rounded-xl py-1 w-[30%] sm:w-[14%] h-[50px] sm:h-[60px] mt-10"
        onClick={() => {
          navigate("/events");
        }}
      >
        More
      </button>
    </div>
  );
};

export default Events;
