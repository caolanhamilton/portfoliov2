import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import About from "../components/About";
import Experience from "../components/Experience";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-purple-800 to-purple-500 snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Caolán Hamilton</title>
      </Head>
      <Header></Header>
      <Hero></Hero>
      <section id="about" className="snap-center">
        <About></About>
      </section>
      <section id="experience" className="snap-center">
        <Experience></Experience>
      </section>
      <section id="skills">
        <h3>Skills</h3>
      </section>
      <section id="projects">
        <h3>Projects</h3>
      </section>
    </div>
  );
};

export default Home;
