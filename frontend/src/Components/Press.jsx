import { useEffect, useState } from "react";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useFetch from "./UseFetch";
import { styles } from "../styles";
import { def } from "../assets";

const Press = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const pressElements = useFetch(
    `${import.meta.env.VITE_APP_API_ROOT}/press-releases?per_page=20`
  );

  const updateCurrentEvents = () => {
    let startIndex = currentIndex;
    let endIndex = startIndex + (window.innerWidth < 640 ? 1 : 2);
    let nextIndex =
      endIndex % pressElements?.length == undefined
        ? endIndex
        : endIndex % pressElements?.length;
    // console.log("next index is ", nextIndex, " and end is ", endIndex);
    if (endIndex > pressElements?.length - 1) {
      setCurrentEvents(
        pressElements
          ?.slice(startIndex, endIndex)
          .concat(pressElements.slice(0, nextIndex))
      );
    } else {
      setCurrentEvents(pressElements?.slice(startIndex, endIndex));
    }
  };

  const handleAutoSwitch = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + 1) % pressElements?.length || (prevIndex + 1) % 3
    );
  };

  useEffect(() => {
    updateCurrentEvents();
    // console.log("current index is ", currentIndex);
    // console.log(currentEvents);
    const interval = setInterval(handleAutoSwitch, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderPressElement = (element, index) => (
    <div
      key={index}
      className={`w-full h-full relative ${
        window.innerWidth < 640 ? "sm:w-[90%]" : "sm:w-[35%] w-[40%]"
      } `}
      style={{
        backgroundImage: `url(${element?.imageUrl || def} )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="text-container absolute z-1 text-white w-full h-full flex flex-col justify-end items-end gap-3 p-6">
        <p
          className={`text-[14px] ${
            window.innerWidth >= 640 ? "sm:text-[25px]" : ""
          } w-[70%] font-medium`}
          dangerouslySetInnerHTML={{ __html: element?.content?.rendered }}
        ></p>
        <button
          className={`bg-[#6D603F] text-[14px] ${
            window.innerWidth >= 640 ? "sm:text-[20px]" : ""
          } rounded-lg ${
            window.innerWidth < 640 ? "w-[80%] h-[30px]" : "w-[35%] h-[50px]"
          }`}
          onClick={() => navigate("/afterpress", { state: { id: index } })}
        >
          Read more
        </button>
      </div>
    </div>
  );

  return (
    <div
      className={`${styles.padding} h-auto w-full flex flex-col justify-around`}
    >
      <p className="w-full sm:w-[25%] h-[40px] sm:h-[70px] text-[#6D603F] text-[22px] sm:text-[40px]">
        Press Release
      </p>

      <div
        className={`w-full ${
          window.innerWidth < 640 ? "h-[300px]" : "h-[400px]"
        } flex gap-4 sm:gap-24 items-center justify-center`}
      >
        <MdArrowLeft
          size={window.innerWidth < 640 ? 50 : 100}
          onClick={handleAutoSwitch}
          className="cursor-pointer"
        />

        {window.innerWidth < 640
          ? renderPressElement(pressElements?.[currentIndex], currentIndex)
          : currentEvents?.map((ele, index) => renderPressElement(ele, index))}

        <MdArrowRight
          size={window.innerWidth < 640 ? 50 : 100}
          onClick={handleAutoSwitch}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Press;
