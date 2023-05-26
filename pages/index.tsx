import type { NextPage } from "next";
import Head from "next/head";
import Experience from "../components/Experience";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-800 to-[#2a4745] snap-y snap-mandatory overflow-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500 z-0 animate-gradient-xy">
      <Head>
        <title>Caolán Hamilton</title>
      </Head>
      <Header></Header>
      <section id="hero">
        <Hero></Hero>
      </section>
      <section id="about" className="snap-start">
        <About></About>
      </section>
      <section id="experience" className="snap-start">
        <Experience></Experience>
      </section>
      <section id="skills" className="snap-start">
        <Skills></Skills>
      </section>
      <section id="projects" className="snap-start">
        <Projects></Projects>
      </section>
      <section id="contact" className="snap-start">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default Home;
