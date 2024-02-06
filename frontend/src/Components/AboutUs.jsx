import React from "react";
import {
  FbLogo,
  about1,
  about2,
  about3,
  aboutBg,
  img2,
  img3,
  logo,
  suitcase,
} from "../assets";
import { styles } from "../styles";
import AdvocacyAndPolicy from "./AdvocacyAndPolicy";
import Footer from "./Footer";
import HeroHeader from "./HeroHeader";
import Navbar from "./Navbar";
import Subscriptions from "./Subscriptions";

const AboutUs = () => {
  return (
    <>
      <div className="relative w-full h-[500px] sm:h-[880px] top-0">
        <div className="absolute inset-0 z-[-2]">
          <img
            src={aboutBg}
            alt={`about bg`}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <HeroHeader />

        <Navbar />
      </div>

      <div className={`${styles.padding} w-full h-auto flex flex-col gap-4`}>
        <p className="text-[22px] sm:text-[35px] text-[#6D603F]">About us</p>
        <p className="text-[14px] sm:text-[20px] sm:leading-relaxed text-justify">
          The Chamber of Commerce, since its inception, has played a pivotal and
          influential role in fostering the growth and economic prosperity of
          commercial and entrepreneurial endeavors. The Nepal Chamber of
          Commerce has consistently contributed to the development of the
          business landscape by offering suggestions and recommendations to the
          Nepalese government, particularly in the translation of policies and
          regulations pertaining to industry, commerce, and financial matters.
          Additionally, the chamber has undertaken a proactive role in promoting
          the "Chamber Movement" as a strategic campaign aimed at empowering the
          business sector through diverse activities. Facilitating coordination
          between the private and public sectors is another key aspect of the
          chamber's functions. The Lamahi Chamber of Commerce, established in
          2075 B.S., operates within the nine wards of Lamahi Municipality,
          serving as a local hub for economic initiatives. Furthermore, the
          Nepal Chamber of Commerce acts as a representative body for regional,
          district, and municipal Chambers of Commerce, trade associations, and
          affiliated groups, both nationally and internationally. With
          affiliations with registered firms, industry organizations, and
          bilateral business associations, the chamber has established
          connections with 70 international Chambers of Commerce, contributing
          to the expansion of economic activities.
        </p>
      </div>

      <div className={`${styles.padding} w-full sm:flex gap-4`}>
        {[about1, about2, about3].map((image, index) => (
          <div
            key={index}
            className={`w-full sm:w-[25%] mx-auto rounded-2xl h-[60%] flex flex-col justify-center z-2 items-center p-3 border-8 border-[#6D603F] mt-2 sm:${
              index === 1 ? "mt-4 sm:mt-0" : ""
            }`}
          >
            <div>
              <img src={image} alt={`mission-logo-${index + 1}`} />
            </div>
            <p className="text-[20px] sm:text-[37.79px] font-semibold w-full text-center text-[#6D603F]">
              Mission/Vision
            </p>
            <p className="text-[12px] sm:text-[16.79px] w-full p-3 opacity-[50%] font-semibold sm:tracking-widest sm:leading-loose">
              The Chamber is dedicated to fostering collaboration and
              facilitating private and public sector partnerships, playing a
              pivotal role in bridging the gap between them. Additionally, the
              Chamber actively engages in initiatives aimed at strengthening the
              business sector and contributing to the overall economic
              development of the region.
            </p>
          </div>
        ))}
      </div>

      <div className="w-full h-auto flex flex-col">
        <div
          className={`${styles.padding} flex h-[100px] sm:h-[150px] items-center gap-3`}
        >
          <p className="text-[18px] sm:text-[26px] font-medium text-[#6D603F]">
            Our Strategies
          </p>
          <img
            src={suitcase}
            alt="Suitcase"
            className="w-[10%] h-full object-contain"
          />
        </div>

        <AdvocacyAndPolicy />
      </div>

      <Subscriptions />
      <Footer />
    </>
  );
};

export default AboutUs;
