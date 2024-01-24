import {Suspense, useRef, useState} from "react";
import {FbLogo, aboutBg, facebook, img2, img3, instagram, logo, twitter} from "../assets";
import emailjs from "emailjs-com";
import Loading from "./Loading";
import {slideIn} from "../utils/motion";
import {motion} from "framer-motion"

const ContactUs = () => {

 const [scrolled, setScrolled] = useState(false);

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

	return (	 <>
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


      <div className="flex flex-col sm:flex-row justify-between items-start w-full h-auto sm:mx-8 pl-24">
        <div className=" flex w-full sm:w-[50%] h-auto ml-0  sm:ml-10">
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

        <Suspense fallback={<Loading />}>
          <div className="h-auto w-[80% ] sm:w-[35%] flex flex-col my-4 ">
            <p className="text-[18px] p-3">Lamahi Chamber of Commerce</p>
            <p className="text-[16px] text-slate-600 p-2">
              Lamahi-6, Dang, Nepal
            </p>
            <p className="text-[16px] text-slate-600 p-2">
              +977 98765789, 098769 , 098790
            </p>
            <p className="text-[16px] text-slate-600 p-2">
              lamahichamberofcommerce@gmail.com
            </p>
            <div className="flex items-start gap-5 justify-start m-4">
              <img
                src={instagram}
                alt="instagram"
                className="rounded-2xl cursor-pointer h-[50px]"
              />
              <img
                src={twitter}
                alt="twitter"
                className="rounded-2xl cursor-pointer h-[50px]"
              />
              <img
                src={facebook}
                alt="facebook"
                className="rounded-2xl cursor-pointer h-[50px]"
              />
            </div>
          </div>
        </Suspense>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1354202.6980213935!2d82.07730032212807!3d27.76189270619047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399799b1ea979477%3A0x66d23a10685e1572!2sUdyog%20Banijya%20Sangh%2C%20Deukhury!5e0!3m2!1sen!2sin!4v1706104388854!5m2!1sen!2sin"
        allowFullScreen=""
        id="location"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
       
        className="w-full h-[350px]  mt-4"

      ></iframe>

</>
	)

}

export default ContactUs;
