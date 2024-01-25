import { president, viewBg } from "../assets";
import {styles} from "../styles";

const View = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${viewBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className={`${styles.padding} h-auto sm:h-[700px] w-full`} style={backgroundImageStyle}>
      <div className="flex flex-col sm:flex-row items-center justify-around sm:justify-center gap-3 h-full">
        <img
          src={president}
          alt="president"
          className="w-[90%] sm:w-[55%] sm:h-[45%] object-contain"
        />
        <div className="w-[90%] sm:w-[40%] h-[45%] sm:h-[80%] flex flex-col justify-between">
          <p className="text-[24px] sm:text-[50px] font-medium sm:tracking-wider w-full sm:w-[80%] text-start pl-4 h-[15%]">
            View of President
          </p>
          <p className="pl-4 text-[14px] sm:text-[22px] sm:leading-relaxed font-medium text-justify w-full sm:w-[80%] h-[50%]">
            As President of Lamahi Chamber of Commerce, I extend my heartfelt
            gratitude to all contributors. Together, we build a thriving
            community. Your dedication propels Lamahi towards prosperity and
            success.
          </p>
          <p className="text-[#6D603F] font-[600] text-[20px] sm:text-[32px] w-[80%] text-center h-[15%]">
            Mr Sital Bhusal
          </p>
        </div>
      </div>
    </div>
  );
};

export default View;
