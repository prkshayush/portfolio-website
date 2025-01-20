import TechStack from "./components/techstack/Techstack";
import Navbar from "./components/navbar/Navbar";
import Socials from "./components/socials/Socials";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="bg-gradient-to-b min-h-screen from-gray-100 to-gray-200 flex flex-col lg:flex-row md:flex-row items-center justify-between pt-20 p-5 lg:py-20 lg:px-28">
        <div className="lg:flex-1 flex flex-col gap-5 overflow-hidden lg:p-5">
          <h1 className="text-3xl font-bold">hey there, I&apos;m Ayush</h1>
          <p>Engineer at heart, Software developer by profession. Love music, fav genre being Pop-rock/Indie-pop.
            <br />
            crafting digital experiences, building epic stuff and editing vids or exploring music when I&apos;m free.
            <br />
            Can talk about anything tech, interested in Neural networks, gearing up for AGI !!
          </p>
          <TechStack />
          <Socials />
        </div>
        <div id="experience" className="lg:flex-1 flex lg:flex-row flex-col items-center justify-center gap-5 pt-8 p-2 lg:p-5">
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-950">Experience</h2>
          <Experience />
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
