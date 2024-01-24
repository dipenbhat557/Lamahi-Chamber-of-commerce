import { president, viewBg } from "../assets";

const View = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${viewBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="h-[700px] w-full" style={backgroundImageStyle}>
      <div className="flex items-center justify-center gap-3 h-full">
        <img
          src={president}
          alt="president"
          className="w-[55%] h-[90%] object-contain"
        />
        <div className="w-[40%] h-[80%] flex flex-col justify-between">
          <p className="text-[50px] font-medium tracking-wider w-[80%] text-start pl-4 h-[15%]">
            View of President
          </p>
          <p className="pl-4 text-[22px] leading-relaxed font-medium w-[80%] h-[50%]">
            As President of Lamahi Chamber of Commerce, I extend my heartfelt
            gratitude to all contributors. Together, we build a thriving
            community. Your dedication propels Lamahi towards prosperity and
            success.
          </p>
          <p className="text-[#6D603F] font-[600] text-[32px] w-[80%] text-center h-[15%]">
            Mr Sital Bhusal
          </p>
        </div>
      </div>
    </div>
  );
};

export default View;
