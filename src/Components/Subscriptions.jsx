import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import {styles} from "../styles";
const Subscription = () => {
  const handleSubscribe = () => {};
  return (
    <motion.div
    variants={fadeIn("up", "spring", 0.5, 0.75)}
    className={`${styles.padding} flex flex-col w-[100%] h-[330px] sm:h-[340px] justify-center items-center bg-gradient-to-b from-[#6D603F] via-[#B09768] to-[#F1E8D7] pt-4`}
  >
      <div className="flex flex-row w-[25%] items-center justify-center mt-2">
        <div className="w-[8%] h-[5px] border-b-4 border-[#DEA71D]  mr-2 flex-grow" />
        <p className="font-extrabold text-xl sm:text-2xl">SUBSCRIPTION</p>
        <div className="w-[8%] h-[5px] border-b-4 ml-2 border-[#DEA71D] flex-grow" />
      </div>
      <p className="font-extrabold my-2 sm:my-3 text-[16px] sm:text-[20px]">
        Join our Newsletter
      </p>
      <p className="w-[40%] sm:w-[25%] text-center font-semibold text-[12px] md:text-[16px] md:leading-loose m-2">
        Subscribe to our Newsletter to get the latest news, updates delivered
        directly to your inbox.
      </p>
      <div className="my-2 mb-6 flex-wrap justify-center items-center flex flex-row">
        <input
          type="text"
          placeholder="Enter your mail address"
          className="p-2 w-[80%] px-4 sm:px-10 rounded-xl"
        />
        <button
          onClick={handleSubscribe}
          className="bg-[#6D603F] font-bold text-white  mt-2 hover:bg-[#6D602F] ml-3 p-2 px-4 shadow-lg shadow-black  rounded-xl"
        >
          Subscribe
        </button>
      </div>
    </motion.div>
  );
};
export default SectionWrapper(Subscription, "");
