import { FbLogo, aboutBg, img2, img3, logo } from "../assets";
// import { commiteeImages } from "../constants";
import { styles } from "../styles";
import Footer from "./Footer";
import HeroHeader from "./HeroHeader";
import Navbar from "./Navbar";
import Subscriptions from "./Subscriptions";
import useFetch from "./UseFetch";

const Committee = () => {
  const commiteeImages = useFetch(
    `${import.meta.env.VITE_APP_LOCAL_ROOT}/committees`
  );

  console.log("committee images are ", commiteeImages);

  return (
    <>
      <div className="relative w-full h-[500px] sm:h-[880px]">
        <div className="absolute inset-0 z-[-2]">
          <img src={committee} alt={`about bg`} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <HeroHeader />

        <Navbar />
      </div>

      <div className={`${styles.padding} w-[90%] h-auto flex flex-col gap-4`}>
        <p className="text-[24px] sm:text-[35px] text-[#6D603F]">Committee</p>
        <p className="text-[14px] sm:text-[20px] leading-relaxed text-justify">
          The Lamahi Chamber of Commerce is a vibrant organization dedicated to
          promoting and supporting local businesses in the Lamahi region. The
          committee members of this esteemed chamber play a crucial role in
          steering the organization towards its goals. Comprising individuals
          with diverse expertise and backgrounds, these committee members bring
          a wealth of knowledge in areas such as business management, finance,
          marketing, and community engagement. Through collaborative efforts,
          the committee members work tirelessly to address the needs and
          concerns of the local business community, foster economic growth, and
          create a conducive environment for entrepreneurial success in Lamahi.
          Their dedication and strategic vision contribute significantly to the
          overall prosperity and development of the business landscape in the
          region.
        </p>
      </div>

      <div
        className={`${styles.padding} flex flex-wrap justify-between h-auto w-full gap-3`}
      >
        {commiteeImages?.map((ele, index) => (
          <img
            src={ele?.imageUrl}
            alt={`img-${index}`}
            key={index}
            className="w-full sm:w-[25%] h-[400px] sm:h-[500px] object-cover"
          />
        ))}
      </div>

      <Subscriptions />
      <Footer />
    </>
  );
};

export default Committee;
