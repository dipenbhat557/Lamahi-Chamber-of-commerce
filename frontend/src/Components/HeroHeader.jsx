import { PiYoutubeLogoDuotone } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

const HeroHeader = () => {
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
    <div className="w-full h-[7%] sm:h-[10%] flex items-center justify-start gap-1 absolute z-10 mt-2 ml-10">
      <a href="https://m.facebook.com/profile.php?id=1262596397101048">
        <FaFacebook
          size={40}
          className="text-white rounded-3xl bg-transparent"
        />
      </a>
      <button onClick={openGmailCompose}>
        <IoMdMail size={40} className="text-white bg-transparent rounded-3xl" />
      </button>
      <a href="#">
        <PiYoutubeLogoDuotone
          size={40}
          className="text-white bg-transparent rounded-3xl"
        />
      </a>
    </div>
  );
};

export default HeroHeader;
