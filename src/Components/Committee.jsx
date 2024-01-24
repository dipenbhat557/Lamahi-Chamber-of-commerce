import {FbLogo, aboutBg, img2, img3, logo} from "../assets";
import {commiteeImages} from "../constants";
import {styles} from "../styles";
import Subscriptions from "./Subscriptions";

const Committee = () => {

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
        <p className="text-[35px] text-[#6D603F]">Committee</p>
        <p className="text-[20px] leading-relaxed text-justify">
The Lamahi Chamber of Commerce is a vibrant organization dedicated to promoting and supporting local businesses in the Lamahi region. The committee members of this esteemed chamber play a crucial role in steering the organization towards its goals. Comprising individuals with diverse expertise and backgrounds, these committee members bring a wealth of knowledge in areas such as business management, finance, marketing, and community engagement. Through collaborative efforts, the committee members work tirelessly to address the needs and concerns of the local business community, foster economic growth, and create a conducive environment for entrepreneurial success in Lamahi. Their dedication and strategic vision contribute significantly to the overall prosperity and development of the business landscape in the region.
		</p>
      </div>

	<div className={`${styles.padding} flex flex-wrap justify-between h-auto w-full gap-3`}>

		{commiteeImages.map((ele,index)=>{

			return(
				<img src={ele} alt={`img-${index}`} key={index} className="w-[25%] h-[500px] object-cover"/>
			)

		})
		}

		</div>	

		<Subscriptions/>
</>

	)

}

export default Committee;
