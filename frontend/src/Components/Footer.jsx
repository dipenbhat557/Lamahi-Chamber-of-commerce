import { useNavigate } from "react-router-dom";
import { facebook, instagram, logo, twitter } from "../assets";
import { styles } from "../styles";

const Footer = () => {
  const navigate = useNavigate();

  // const handleReadMore = () => {};

  const openGmailCompose = () => {
    const email = "lamahicoc557@gmail.com";
    const subject = "Subject of the email";
    const body = "Body of the email";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div
      className={`${styles.paddingX} w-full h-[420px] flex flex-col sm:h-[400px] bg-[#F1E8D7] pt-2`}
    >
      <div className="flex w-full h-[40%] items-center justify-between">
        <img
          src={logo}
          onClick={() => navigate("/")}
          alt="lamahiChamberOfCommerce logo"
          className="w-[30%] h-full cursor-pointer object-contain"
        />
        <p
          className={`md:text-[25px] sm:text-[20px]  xs:text-[15px] text-[10px] italic text-opacity-80 w-[80%]  text-[#FF0000] `}
        >
          "Fostering Prosperity, Connecting Businesses, Building Futures."
        </p>
      </div>
      <div className="w-full h-[45%] text-white flex justify-between items-center mb-8">
        <div className="h-full w-[50%] sm:w-[35%] flex flex-col items-start justify-around">
          <p className="text-[16px] sm:text-[18px]  tracking-wider text-[#000000]  text-opacity-90">
            Lamahi chamber of commerce
          </p>
          <p className="text-[14px] sm:text-[16px] text-slate-500">
            Lamahi-5, Dang, Nepal
          </p>
          <p className="text-[14px] sm:text-[16px] text-slate-500">
            +977 98765789, 098769 , 098790
          </p>
          <p
            onClick={openGmailCompose}
            className="hidden cursor-pointer sm:flex text-[14px] sm:text-[16px] text-slate-500 "
          >
            lamahicoc557@gmail.com
          </p>
        </div>
        <div className="h-full w-[30%] sm:w-[20%] flex flex-col items-start justify-around">
          <p className="text-[16px] sm:text-[18px]  text-opacity-90 tracking-wider text-black">
            Other Links
          </p>
          <a
            href="/events"
            className="text-[14px] sm:text-[16px] text-slate-500 cursor-pointer"
          >
            Event
          </a>
          <a
            href="/aboutus"
            className="text-[14px] sm:text-[16px] text-slate-500 cursor-pointer"
          >
            Gallery
          </a>
          <a
            href="/committee"
            className="text-[14px] sm:text-[16px] text-slate-500 cursor-pointer"
          >
            Committee members
          </a>
        </div>
        <div className="h-full w-[35%] hidden sm:flex flex-col items-center justify-around">
          <p className="text-[18px]  text-opacity-90 tracking-wider text-black">
            {" "}
            Social Links
          </p>
          <div className="flex items-start gap-5 justify-start">
            <img
              src={instagram}
              alt="instagram"
              className="rounded-2xl cursor-pointer"
            />
            <img
              src={twitter}
              alt="twitter"
              className="rounded-2xl cursor-pointer"
            />
            <img
              src={facebook}
              alt="facebook"
              className="rounded-2xl cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="w-full border-b-2 border-slate-600 border-opacity-50" />{" "}
      <div className=" w-full  flex items-center justify-center text-center">
        <p className=" text-[12px] sm:text-[17px] text-black leading-loose p-2 rounded-t-md">
          Copyright &copy;2023-24 Lamahi chamber of commerce
        </p>
      </div>
    </div>
  );
};
export default Footer;
