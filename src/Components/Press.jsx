import { useEffect, useState } from "react";
import { pressElements } from "../constants";
import { styles } from "../styles";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";

const Press = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to update the current events based on the currentIndex
  const updateCurrentEvents = () => {
    const startIndex = currentIndex;
    const endIndex = startIndex + 2;
    const nextIndex = endIndex % pressElements.length;
    if (endIndex !== pressElements.length - 1) {
      setCurrentEvents(
        pressElements
          .slice(startIndex, endIndex)
          .concat(pressElements.slice(0, nextIndex)),
      );
    } else {
      setCurrentEvents(pressElements.slice(startIndex, endIndex));
    }
  };

  // Function to handle automatic switching of events
  const handleAutoSwitch = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pressElements.length);
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
      className={`${styles.padding} h-auto w-full flex flex-col justify-between`}
    >
      <p className="w-[25%] h-[70px] text-[#6D603F] text-[40px]">
        Press Release
      </p>
      <div className="w-full h-[400px] flex flex-wrap gap-24 items-center justify-center">
        <MdArrowLeft
          size={100}
          onClick={handleAutoSwitch}
          className="cursor-pointer"
        />
        {currentEvents.map((ele, index) => (
          <div
            key={index}
            className="w-[35%] h-full relative"
            style={{
              backgroundImage: `url(${ele.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="text-container absolute z-1 text-white w-full h-full flex flex-col justify-end items-end gap-3 p-6">
              <p className="text-[25px] w-[70%] font-medium">{ele.content}</p>
              <button className="bg-[#6D603F] text-[25px] rounded-lg w-[40%] h-[50px]">
                Read more
              </button>
            </div>
          </div>
        ))}
        <MdArrowRight
          size={100}
          onClick={handleAutoSwitch}
          className="cursor-pointer"
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="w-[20%] h-[60px] bg-[#6D603F] p-2 text-[30px] rounded-xl text-white mt-3">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Press;
