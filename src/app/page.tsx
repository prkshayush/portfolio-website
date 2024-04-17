import Image from "next/image";
import About from "./components/about/About";
import Button from "./components/buttons/Buttons";
import TechStack from "./components/techstack/Techstack";
import styles from "./page.module.css"

export default function Home() {
  return (
    <main>
      <div className="flex-col md:flex lg:flex md:flex-row lg:flex-row items-center justify-between gap-x-32 my-14 gap-20 p-20">
        <div className="flex-1 flex items-center flex-col cursor-pointer gap-5 lg:gap-10">
          <h1 className="text-3xl lg:text-7xl font-bold bg-gradient-to-b from-[#a600ff] to-[#00c3ff] bg-clip-text text-transparent">Hello there! </h1>
          <h4 className="text-base lg:text-2xl font-normal text-justify">I&apos;m <span className="hover:text-light-blue transition-all delay-75">Ayush Prakash👋</span>. I am interested in Tech, Music, Sports & Adventure. I&apos;m a self-taught developer experienced with Front-End | Backend, learning & exploring Machine Learning & CI/CD.
            <br />Here is my Tech Stack 👇
          </h4>
          <TechStack />
          <Button text="See my work" url="/projects" />
        </div>

        <div className="flex-1 flex items-center flex-col cursor-pointer my-5 py-10">
          <div className={styles.imgContainer}><Image src='/image.jpg' alt='' width={420} height={420} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" className={styles.img} />
          </div>
        </div>
      </div>
      <div className="p-10"  id="about">
        <About />
      </div>
    </main>
  );
}
