
import { FbLogo, eventBg, img2, img3, logo } from "../assets";
import { styles } from "../styles";
import { eventElements } from "../constants"; // Assuming you have an array named eventElements
import Subscriptions from "./Subscriptions";
import {useNavigate} from "react-router-dom";
import Footer from "./Footer";
import HeroHeader from "./HeroHeader";
import Navbar from "./Navbar";

const EventPage = () => {

	const navigate = useNavigate();

  return (
    <>
      <div className="relative w-full h-[500px] sm:h-[880px]">
        <div className="absolute inset-0 z-[-2]">
          <img src={eventBg} alt={`event bg`} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

      <HeroHeader/> 
         <Navbar/>
	  </div>

      <div className={`${styles.padding} w-full h-auto flex flex-col gap-4`}>
        <p className="text-[35px] text-[#6D603F]">Events</p>
        <p className="text-[14px] sm:text-[20px] leading-relaxed text-justify">
          Join us for an exciting and informative event hosted by the Lamahi Chamber of Commerce! We are thrilled to bring together local businesses, entrepreneurs, and community members to foster collaboration and economic growth in Lamahi. The event will feature engaging discussions on current business trends, networking opportunities, and presentations from industry leaders. Whether you are a seasoned professional or just starting your entrepreneurial journey, this event offers a unique platform to connect, learn, and share ideas. Come be a part of this vibrant gathering that aims to strengthen the business community in Lamahi. Mark your calendars for an enriching experience that promises valuable insights and connections for the growth of your business.
        </p>
      </div>

      <div className={`${styles.padding} h-auto w-full flex flex-col items-center justify-between`}>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-start gap-4 h-auto w-full">
          {eventElements.map((event, index) => {
            return (
				<div key={index} className="h-[600px] w-full sm:w-[28%] flex flex-col justify-between items-center">
              <div

                className="flex flex-col justify-around h-[80%] w-full rounded-lg hover:bg-[#6D603F] hover:text-white"
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

	  <button className="border-4 h-[7%] sm:h-[10%] w-[100px] sm:w-[200px] border-[#6D603F] text-[16px] rounded-lg " onClick={()=>navigate("/afterevent")}>Know more</button>
				</div>
            );
          })}
        </div>



      </div>

	  <Subscriptions/>
	  <Footer/>
    </>
  );
};

export default EventPage;

