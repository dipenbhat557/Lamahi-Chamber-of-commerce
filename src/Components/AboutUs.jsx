import {FbLogo, about1, about2, about3, aboutBg, img2, img3, logo, suitcase} from "../assets";
import {styles} from "../styles";
import AdvocacyAndPolicy from "./AdvocacyAndPolicy";
import Subscriptions from "./Subscriptions";

const AboutUs = () => {

	return (

		 <>
      <div className="relative w-full h-[500px] sm:h-[880px]">
        <div className="absolute inset-0 z-[-2]">
          <img src={aboutBg} alt={`about bg`} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="absolute top-2 left-10 flex items-center justify-start gap-1 z-2">
          <FbLogo />
          <img src={img2} alt="img2" className="w-[5%] h-full object-contain" />
          <img src={img3} alt="img3" className="w-[5%] h-full object-contain" />
        </div>

        <div className="absolute top-10 w-[70%] ml-80 flex items-start justify-around text-white font-semibold text-[25px]">
          <div className="flex items-center justify-around">
            <a href="#">Events</a>
            <a href="#">Committee</a>
            <div className="w-[9%] h-[12%] flex items-center justify-center">
              <img src={logo} alt="logo" className="object-contain rounded-xl" />
            </div>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
          </div>
        </div>
      </div>

      <div className={`${styles.padding} w-full h-auto flex flex-col gap-4`}>
        <p className="text-[35px] text-[#6D603F]">About us</p>
        <p className="text-[20px] leading-relaxed text-justify">

The Chamber of Commerce, since its inception, has played a pivotal and influential role in fostering the growth and economic prosperity of commercial and entrepreneurial endeavors. The Nepal Chamber of Commerce has consistently contributed to the development of the business landscape by offering suggestions and recommendations to the Nepalese government, particularly in the translation of policies and regulations pertaining to industry, commerce, and financial matters. Additionally, the chamber has undertaken a proactive role in promoting the "Chamber Movement" as a strategic campaign aimed at empowering the business sector through diverse activities. Facilitating coordination between the private and public sectors is another key aspect of the chamber's functions. The Lamahi Chamber of Commerce, established in 2075 B.S., operates within the nine wards of Lamahi Municipality, serving as a local hub for economic initiatives. Furthermore, the Nepal Chamber of Commerce acts as a representative body for regional, district, and municipal Chambers of Commerce, trade associations, and affiliated groups, both nationally and internationally. With affiliations with registered firms, industry organizations, and bilateral business associations, the chamber has established connections with 70 international Chambers of Commerce, contributing to the expansion of economic activities.
		</p>
      </div>

		<div className="w-full h-[900px] flex">
 <div className="w-[20%] mx-auto rounded-2xl h-[80%] flex flex-col justify-center items-center p-3 border-8 border-[#6D603F]">
        <div>
          <img src={about1} alt="mission-logo" />
        </div>
        <p className="text-[37.79px] font-semibold w-full text-center text-[#6D603F]">
          Mission
        </p>
        <p className="text-[16.79px] w-full p-3 opacity-[50%]  font-semibold tracking-widest leading-loose">
          The Chamber is dedicated to fostering collaboration and facilitating
          private and public sector partnerships, playing a pivotal role in
          bridging the gap between them. Additionally, the Chamber actively
          engages in initiatives aimed at strengthening the business sector and
          contributing to the overall economic development of the region.
        </p>
      </div>

 <div className="w-[20%] mx-auto rounded-2xl h-[80%] flex flex-col justify-center items-center p-3 mt-28 border-8 border-[#6D603F]">
        <div>
          <img src={about2} alt="mission-logo" />
        </div>
        <p className="text-[37.79px] font-semibold w-full text-center text-[#6D603F]">
          Mission
        </p>
        <p className="text-[16.79px] w-full p-3 opacity-[50%]  font-semibold tracking-widest leading-loose">
          The Chamber is dedicated to fostering collaboration and facilitating
          private and public sector partnerships, playing a pivotal role in
          bridging the gap between them. Additionally, the Chamber actively
          engages in initiatives aimed at strengthening the business sector and
          contributing to the overall economic development of the region.
        </p>
      </div>

 <div className="w-[20%] mx-auto rounded-2xl h-[80%] flex flex-col justify-center items-center p-3 border-8 border-[#6D603F]">
        <div>
          <img src={about3} alt="mission-logo" />
        </div>
        <p className="text-[37.79px] font-semibold w-full text-center text-[#6D603F]">
          Mission
        </p>
        <p className="text-[16.79px] w-full p-3 opacity-[50%]  font-semibold tracking-widest leading-loose">
          The Chamber is dedicated to fostering collaboration and facilitating
          private and public sector partnerships, playing a pivotal role in
          bridging the gap between them. Additionally, the Chamber actively
          engages in initiatives aimed at strengthening the business sector and
          contributing to the overall economic development of the region.
        </p>
      </div>



		</div>

		<div className="w-full h-auto flex flex-col">
 <div className={`${styles.padding} flex h-[150px] items-center gap-3`}>
		<p className="text-[26px] font-medium text-[#6D603F]">
Our Strategies
		</p>

<img src={suitcase} alt="Suitcase" className="w-[10%] h-full object-contain">
		</img>
		</div>

		<AdvocacyAndPolicy/>

		</div>

		

	  <Subscriptions/>
    </>
 
	)

}

export default AboutUs;
