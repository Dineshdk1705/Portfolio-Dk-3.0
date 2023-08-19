import About from "@/components/About";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import type { NextPage } from "next";
import Head from "next/head";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap snap-y snap-mandatory overflow-scroll scrollbar-hide z-0 scroll-smooth">
      <Head>
        <title>{`Dinesh's Portfolio`}</title>
      </Head>

      <Header />

      <section id="profile" className="snap-start">
        <Profile />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
