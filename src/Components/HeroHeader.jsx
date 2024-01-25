import {FbLogo, img2, img3} from "../assets";

const HeroHeader = () =>{

	return (

 <div className="w-full h-[7%] sm:h-[10%] flex items-center justify-start gap-1 absolute z-2 mt-2 ml-10">
            <FbLogo />
            <img src={img2} alt="img2" className="w-[10%] sm:w-[5%] h-full object-contain" />
            <img src={img3} alt="img3" className="w-[10%] sm:w-[5%] h-full object-contain" />
          </div>

	)

}

export default HeroHeader;
