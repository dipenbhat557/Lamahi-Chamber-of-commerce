
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
    const endIndex = startIndex + (window.innerWidth < 640 ? 1 : 2);
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
    <div className={`${styles.padding} h-auto w-full flex flex-col justify-around`}>
      <p className="w-full sm:w-[25%] h-[40px] sm:h-[70px] text-[#6D603F] text-[22px] sm:text-[40px]">
        Press Release
      </p>

       

        {window.innerWidth < 640 ? (

      <div className="w-full h-[300px] flex gap-4 sm:gap-24 items-center justify-center">
			 <MdArrowLeft
          size={50}
          onClick={handleAutoSwitch}
          className="cursor-pointer"
        />
          <div
            key={currentIndex}
            className=" w-[90%] h-full relative"
            style={{
              backgroundImage: `url(${pressElements[currentIndex]?.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="text-container absolute z-1 text-white w-full h-full flex flex-col justify-end items-end gap-3 p-6">
              <p className="text-[14px] w-[80%] font-medium">
                {pressElements[currentIndex]?.content}
              </p>
              <button className="bg-[#6D603F] text-[14px] rounded-lg w-[80%] h-[30px]">
                Read more
              </button>
            </div>
          </div>
			<MdArrowRight
          size={50}
          onClick={handleAutoSwitch}
          className="cursor-pointer"
        />
      </div>
        ) : (
           <div className="w-full h-[400px] flex gap-4 sm:gap-24 items-center justify-center">
			 <MdArrowLeft
          size={100}
          onClick={handleAutoSwitch}
          className="cursor-pointer"
        />

            {currentEvents.map((ele, index) => (
              <div
                key={index}
                className="sm:w-[35%] w-[40%] h-full relative"
                style={{
                  backgroundImage: `url(${ele.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="text-container absolute z-1 text-white w-full h-full flex flex-col justify-end items-end gap-3 p-6">
                  <p className="text-[14px] sm:text-[25px] w-[70%] font-medium">
                    {ele.content}
                  </p>
                  <button className="bg-[#6D603F] text-[14px] sm:text-[25px] rounded-lg w-[40%] h-[50px]">
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
        )}

      
      <div className="w-full flex items-center justify-center">
        <button className="w-[50%] sm:w-[20%] h-[40px] sm:h-[60px] bg-[#6D603F] p-2 text-[14px] sm:text-[30px] rounded-xl text-white mt-3">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Press;

