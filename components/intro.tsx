"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import {
  BsArrowRight,
  BsLinkedin,
  BsInstagram,
  BsDribbble,
  BsBehance,
  BsFacebook,
  BsMedium,
  BsGithub,
} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

function Intro() {
  const [text, count] = useTypewriter({
    words: ["Hi My name is Samir", "<I am Coffee and Code />"],
    loop: true,
    delaySpeed: 5000,
  });
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <Image
              src="/images/samirkhadka.png"
              alt="Samir Khadka"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover"
            ></Image>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col  space-y-16 items-center text-center overflow-hidden py-10 px-14">
        <div className="z-20">
          <h2 className="text-xl uppercase text-gray-500 pb-2 tracking-[15px]">
            <span className="text-4xl text-red-400">P</span>roject Management{" "}
            <span className="">|</span>{" "}
            <span className="text-4xl text-red-400">P</span>roduct Ownership{" "}
            <span className="">|</span> <br />
            <span className="text-4xl text-red-400">F</span>ront End Development
            <span className="">|</span>{" "}
            <span className="text-4xl text-red-400">U</span>I/{" "}
            <span className="text-4xl text-red-400">U</span>X Design{" "}
            <span className="">|</span>{" "}
            <span className="text-4xl text-red-400">M</span>obile App
            Development <span className="">|</span> <br />
            &nbsp; <span className="text-4xl text-red-400">F</span>intech 🚀
          </h2>

          <h1 className="text-5xl lg:text-6xl font-semibold px-10 py-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#dbd7fb"></Cursor>
          </h1>
        </div>
      </div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 
          rounded-full outline-none focus:scale-110 hover:bg-gray-950 active:scale-105
          transition"
        >
          {" "}
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>
        <a
          href="#"
          className="bg-white px-7 py-3 focus:scale-110 flex items-center gap-2 rounded-full cursor-pointer"
        >
          {" "}
          Download My CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/samirjkhadka/"
          target="_blank"
          className=" bg-white p-4 focus:scale-110 text-gray-700 items-center rounded-full cursor-pointer "
        >
          <BsLinkedin className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://github.com/samirjkhadka"
          target="_blank"
          className=" bg-white p-4 text-gray-700 items-center rounded-full cursor-pointer focus:scale-110"
        >
          <BsGithub className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        {/* <a className=" bg-white p-4 text-gray-700 items-center rounded-full cursor-pointer focus:scale-110" >
          <BsFacebook className="opacity-60 group-hover:translate-y-1 transition"/>
        </a> */}
        <a
          target="_blank"
          className="  bg-white p-4 text-gray-700 items-center rounded-full cursor-pointer focus:scale-110"
        >
          <BsInstagram className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.behance.net/samirjkhadka"
          target="_blank"
          className=" bg-white p-4 text-gray-700 items-center rounded-full cursor-pointer focus:scale-110"
        >
          <BsBehance className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://dribbble.com/findsamirkhadka"
          target="_blank"
          className=" bg-white p-4 text-gray-700 items-center rounded-full cursor-pointer focus:scale-110"
        >
          <BsDribbble className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        {/* <a className=" bg-white p-4 text-gray-700 items-center rounded-full">
          <BsMedium />
        </a> */}
      </motion.div>
    </section>
  );
}

export default Intro;
