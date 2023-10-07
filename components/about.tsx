"use client";
import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import mypic from "../images/A4-1.png";
import SectionHeading from "./section-heading";

interface Props {}

export default function About({}: Props) {
  return (
    // <motion.div className="flex
    // flex-col
    // relative
    // h-screen
    // text-center
    // md:text-left
    // md:flex-row
    // max-w-7xl
    // px-10
    // justify-evenly
    // mx-auto
    // items-center">
    //   <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
    //     About
    //   </h3>
    //   <motion.img
    //     initial={{ x: -200, opacity: 0 }}
    //     transition={{ duration: 1.5 }}
    //     whileInView={{ opacity: 1, x: 0 }}
    //     viewport={{ once: true }}
    //     src="../favicon.ico"
    //     className="-mb-20
    //     md:mb-0
    //     flex-shrink-0
    //     w-56
    //     h-56
    //     rounded-full
    //     object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
    //   />

    //   <div className="space-y-10 px-0 md:px-10">
    //     <h4 className="text-4xl font-semibold">
    //       Here is a{" "}
    //       <span className="underline decoration-[#dbd7fb]/50">little</span>{" "}
    //       background
    //     </h4>
    //     <p className="text-base justify-center">
    //       Lorem Ipsum is simply dummy text of the printing and typesetting
    //       industry. Lorem Ipsum has been the industry standard dummy text ever
    //       since the 1500s, when an unknown printer took a galley of type and
    //       scrambled it to make a type specimen book.
    //     </p>
    //   </div>
    // </motion.div>

    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> About Me</SectionHeading>

      <h4 className="text-2xl font-semibold">
        Here is a{" "}
        <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
        background
      </h4>
      <p className="text-base justify-center">
        After graduating with a degree in{" "}
        <span className="font-medium">Business Information Systems</span>, I
        decided to pursue my passion for programming. I enrolled in a coding
        bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies, and playing with my dog. I also
        enjoy <span className="font-medium">learning new things</span>. I am
        currently learning about{" "}
        <span className="font-medium">history and philosophy</span>. I&apos;m
        also learning how to play the guitar.
      </p>
    </motion.section>
  );
}
