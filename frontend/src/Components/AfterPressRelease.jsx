import { Suspense, useRef, useState } from "react";
import { styles } from "../styles";
import Loading from "./Loading";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import Footer from "./Footer";
import HeroHeader from "./HeroHeader";
import Navbar from "./Navbar";
import { def } from "../assets";

const AfterPressRelease = () => {
  const location = useLocation();
  const pressElements = useFetch(
    `${import.meta.env.VITE_APP_LOCAL_ROOT}/press-releases`
  );

  console.log("press elements are ", pressElements);

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_htp2klw",
        "template_a9c3yzv",
        {
          from_name: form.name,
          to_name: "Dipendra",
          from_email: form.email,
          to_email: "bhattadipen557@gmail.com",
          message: form.message,
        },
        "70gtdMrv58XYFp0DP"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <>
      <div className="relative w-full h-[500px] sm:h-[880px]">
        <div className="absolute inset-0 z-[-2]">
          <img
            src={pressElements?.[location?.state?.id]?.imageUrl || def}
            alt={`press bg`}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <HeroHeader />
        <Navbar />
      </div>

      <div className={`${styles.padding} w-full h-auto flex flex-col gap-4`}>
        <div className="flex">
          <p className="text-[22px] sm:text-[35px] text-[#6D603F]">
            Press Release
          </p>
        </div>
        <p className="text-[14px] sm:text-[20px] leading-relaxed text-center">
          Lamahi Chamber of Commerce hosts a dazzling event, welcoming actors in
          vibrant attire. Amid cheers and awards, the night celebrates talent,
          fostering a vibrant arts community in Lamahi.
        </p>
      </div>

      <div className="w-full text-center">
        <button className="text-[14px] sm:text-[20px] h-[60px] w-[30%] sm:w-[15%] bg-[#6D603F] font-medium text-white rounded-lg p-1 sm:p-2">
          Register now
        </button>
      </div>
      <div className={`${styles.padding} gap-8 flex flex-col `}>
        <div className="flex w-full items-center gap-3">
          <p className="text-[14px] sm:text-[18px] font-medium text-[#6D603F]">
            Title :{" "}
          </p>
          <p>
            {pressElements?.[location?.state?.id]?.title?.rendered ||
              "Loading..."}{" "}
          </p>
        </div>

        <div className="flex w-full items-center gap-3">
          <p
            dangerouslySetInnerHTML={{
              __html:
                pressElements?.[location?.state?.id]?.["_press_content"] ||
                "Loading...",
            }}
          />
        </div>
      </div>

      <p className="ml-8 sm:ml-16 mt-8 sm:mt-16 font-medium text-[18px] sm:text-[25px] tracking-wider text-[#6D603F]">
        Advice
      </p>
      <div
        className={`${styles.padding} flex flex-col sm:flex-row jusitfy-around sm:justify-between items-start w-full h-auto`}
      >
        <div className=" flex w-[90%] sm:w-[50%] h-auto ml-0">
          {/* Contact form section */}
          <Suspense fallback={<Loading />}>
            <motion.div
              variants={slideIn("left", "tween", 0.2, 1)}
              className="flex-[0.75]  rounded-2xl"
            >
              {/* Contact form */}
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-12 flex flex-col gap-8"
              >
                <label className="flex flex-col">
                  <span className=" font-medium my-4">Name *</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    className=" py-4 px-6 placeholder:text-slate-400 bg-slate-100 rounded-lg  font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className=" font-medium my-4">Email *</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your web address?"
                    className=" py-4 px-6 placeholder:text-slate-400 bg-slate-100 rounded-lg  font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="font-medium my-4">Message *</span>
                  <textarea
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What you want to say?"
                    className=" py-4 px-6 placeholder:text-slate-400 rounded-lg bg-slate-100 font-medium"
                  />
                </label>

                {/* Submit button */}
                <button
                  type="submit"
                  className="py-3 px-8 rounded-xl w-full text-white font-bold shadow-lg bg-[#6D603F] shadow-black"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </motion.div>
          </Suspense>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1354202.6980213935!2d82.07730032212807!3d27.76189270619047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399799b1ea979477%3A0x66d23a10685e1572!2sUdyog%20Banijya%20Sangh%2C%20Deukhury!5e0!3m2!1sen!2sin!4v1706104388854!5m2!1sen!2sin"
          allowFullScreen=""
          id="location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full sm:w-[50%] h-[500px] mt-3 sm:mt-0 sm:my-auto"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};
export default AfterPressRelease;
