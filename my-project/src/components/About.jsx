import React from "react";
import aboutImg from "../assets/me11.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-5xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center pb-4">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 pt-6"
        >
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
            Skills and Expertise
          </span>
          <div className="flex lg:justify-start flex-col gap-4 pt-12">
            <p className="my-1 maxw-xl py-1 font-light text-xl"><span className="text-2xl font-medium">Web Development: </span> {ABOUT_TEXT.abtWebDev}</p>
            <p className="my-1 maxw-xl py-1 font-light text-xl"><span className="text-2xl font-medium">Desktop App Development: </span> {ABOUT_TEXT.abtDeskDev}</p>
            <p className="my-1 maxw-xl py-1 font-light text-xl"><span className="text-2xl font-medium">Version Control: </span> {ABOUT_TEXT.abtVerCon}</p>
            <p className="my-1 maxw-xl py-1 font-light text-xl"><span className="text-2xl font-medium">Learning Spirit: </span> {ABOUT_TEXT.abtLearnSpirit}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
