
import { about1, about2 } from "../assets/index.js";
import { styles } from "../styles.js";

const Welcome = () => {
  const clipPathStyle = {
    clipPath: 'polygon(23% 1%, 53% 4%, 48% 21%, 49% 89%, 60% 100%, 0 100%, 0 4%)',
  };

  return (
    <div className={`${styles.padding} w-full h-full flex items-center justify-between relative`}>
      {/* Background Wrapper with Clip Path */}
      <div style={clipPathStyle} className="bg-[#F1E8D7] w-full h-full absolute top-0 left-0 z-[-1]"></div>

      {/* Content Wrapper */}
      <div className="w-full h-full flex items-center justify-between relative">
        {/* Your Content Here */}
        <div className="w-[50%] h-full flex flex-col items-start justify-around p-7">
          <p className="text-[38.79px] font-medium text-[#6D603F] w-[60%] tracking-wide h-[20%]">
            Welcome to Lamahi Chamber of Commerce
          </p>
          <p className="w-[70%] text-start text-[24.79px] h-[70%] font-medium mt-2">
            The Lamahi Chamber of Commerce was established in the year 2075 (according to the Nepali calendar). Its operational area covers nine wards within the Lamahi Municipality. The Nepal Chamber of Commerce collaborates with various bilateral chambers of commerce, including those at the provincial, district, and municipal levels, as well as trade associations and industrial groups. It represents registered firms, trade and industry sector associations, and bilateral business and industry associations. The Nepal Chamber of Commerce has established relations with 70 international chambers of commerce to enhance economic activities through mutual understanding and cooperation.
          </p>
        </div>

        <div className="w-[20%] mx-auto rounded-2xl h-[60%] flex flex-col justify-center z-2 items-center p-3 border-8 border-[#6D603F]">
          <div>
            <img src={about1} alt="mission-logo" />
          </div>
          <p className="text-[37.79px] font-semibold w-full text-center text-[#6D603F]">
            Mission
          </p>
          <p className="text-[16.79px] w-full p-3 opacity-[50%] font-semibold tracking-widest leading-loose">
            The Chamber is dedicated to fostering collaboration and facilitating private and public sector partnerships, playing a pivotal role in bridging the gap between them. Additionally, the Chamber actively engages in initiatives aimed at strengthening the business sector and contributing to the overall economic development of the region.
          </p>
        </div>

        <div className="w-[20%] mx-auto rounded-2xl h-[60%] flex flex-col justify-center items-center z-2 p-3 border-8 border-[#6D603F]">
          <div>
            <img src={about2} alt="mission-logo" />
          </div>
          <p className="text-[37.79px] font-semibold w-full text-center text-[#6D603F]">
            Vision
          </p>
          <p className="text-[16.79px] w-full p-3 opacity-[50%] font-semibold tracking-widest leading-loose">
            The Chamber is dedicated to fostering collaboration and facilitating private and public sector partnerships, playing a pivotal role in bridging the gap between them. Additionally, the Chamber actively engages in initiatives aimed at strengthening the business sector and contributing to the overall economic development of the region.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

