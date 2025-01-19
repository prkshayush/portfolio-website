import TechStack from "./components/techstack/Techstack";
import Navbar from "./components/navbar/Navbar";
import Socials from "./components/socials/Socials";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col lg:flex-row md:flex-row items-center justify-between pt-20 p-5 lg:py-20 lg:px-28">
        <div className="lg:flex-1 flex flex-col gap-5 overflow-hidden lg:p-5">
          <h1 className="text-3xl font-bold">hey there, I am Ayush</h1>
          <p>Software developer, crafting digital experiences, building epic stuff and gearing up for AGI...
            <br />
            Engineer at heart, editing vids or exploring music when I&apos;m free.
            <br />
            Can talk about anything tech, interested in Neural networks!
          </p>
          <TechStack />
          <Socials />
        </div>
        <div id="experience" className="lg:flex-1">
          <h2>
            Experience
          </h2>
        </div>
      </div>
      <div className="bg-gradient-to-b from-gray-200 to-gray-300" id="projects">
        <Projects />
      </div>
      <div className="bg-gradient-to-b from-gray-300 to-gray-400" id="contact">
        <Contact />
      </div>
    </main>
  );
}
