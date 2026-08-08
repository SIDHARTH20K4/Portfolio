import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { socials } from "../../constants/socials";

import { NetworkGlobeCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [socialsOpen, setSocialsOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none transition-shadow duration-300 focus:shadow-[0_0_0_2px_rgba(145,94,255,0.5)]"
                  {...(input === "message" && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_-4px_rgba(145,94,255,0.6)]"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <div className="mt-10">
          <button
            type="button"
            onClick={() => setSocialsOpen((prev) => !prev)}
            className="flex items-center gap-2 text-[14px] font-medium text-[#915EFF] transition-colors duration-300 hover:text-white"
          >
            <span>
              {socialsOpen
                ? "Hide socials"
                : "Prefer social media? Check out my socials"}
            </span>
            <motion.span
              animate={{ rotate: socialsOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▾
            </motion.span>
          </button>

          <AnimatePresence>
            {socialsOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="mt-6 flex flex-wrap gap-4">
                  {socials.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      title={social.name}
                      initial={{ opacity: 0, scale: 0, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.06,
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                      }}
                      className="bg-tertiary flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                    >
                      <img
                        src={social.icon}
                        alt={social.name}
                        className="h-5 w-5 object-contain"
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <NetworkGlobeCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");