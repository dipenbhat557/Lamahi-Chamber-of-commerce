import {FbLogo, img2, img3} from "../assets";
import { PiYoutubeLogoDuotone } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
const HeroHeader = () =>{

	return (

 <div className="w-full h-[7%] sm:h-[10%] flex items-center justify-start gap-1 absolute z-10 mt-2 ml-10">
	
            <a href="#"><FaFacebook size={40} className="text-white rounded-3xl bg-transparent"/> </a>
		 <a href="#"><IoMdMail size={40} className="text-white bg-transparent rounded-3xl"/></a>
		 <a href="#"><PiYoutubeLogoDuotone size={40} className="text-white bg-transparent rounded-3xl"/></a>
          </div>

	)

}

export default HeroHeader;
