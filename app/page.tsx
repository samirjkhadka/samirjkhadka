import About from "@/components/about";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* <Header/> */}
      <Intro />
      <SectionDivider />
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <footer className="sticky w-full cursor-pointer bottom-5">
        <div>
          <Image
            src="/images/samirkhadka.png"
            alt="Samir Khadka"
            width={192}
            height={192}
            quality={95}
            priority={true}
            className="h-10 w-10 rounded-full cursor-pointer grayscale hover:grayscale-0"
          ></Image>
        </div>
      </footer>
    </main>
  );
}
