import { Suspense, useRef, useState } from "react";
import Loading from "./Loading";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

import emailjs from "emailjs-com";
import { styles } from "../styles";

const Contact = () => {
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
    <div
      className={`${styles.padding} flex flex-col sm:flex-row justify-between items-start w-full h-auto`}
    >
      <div className=" flex items-center justify-center sm:justify-normal  w-[80%] sm:w-[50%] h-auto ml-0">
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
                <span className="sm:ml-40 font-medium my-4">Name *</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="py-3 sm:py-4 px-3 sm:px-6 mx-auto placeholder:text-slate-400 bg-slate-100 rounded-lg  font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className=" sm:ml-40 font-medium my-4">Email *</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="py-3 sm:py-4 px-3 sm:px-6 mx-auto placeholder:text-slate-400 bg-slate-100 rounded-lg  font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="sm:ml-40 font-medium my-4">Message *</span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  className=" py-3 sm:py-4 px-2 sm:px-6 mx-auto placeholder:text-slate-400 rounded-lg bg-slate-100 font-medium"
                />
              </label>

              {/* Submit button */}
              <button
                type="submit"
                className="py-2 sm:py-3 px-3 sm:px-8 rounded-xl w-[80%] sm:w-full text-white font-bold shadow-lg bg-[#6D603F] shadow-black"
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
        className="w-full sm:w-[50%] h-[500px] my-3 sm:my-auto"
      ></iframe>
    </div>
  );
};

export default Contact;
