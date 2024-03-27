import ContentDisplay from "./components/ContentDisplay";
import ProfileInfo from "./components/ProfileInfo";
import api from "./restApi/portfolio";
import About from "./components/insideComponents/About";
import Skills from "./components/insideComponents/Skills";
import Education from "./components/insideComponents/Education";
import Experience from "./components/insideComponents/Experience";
import Projects from "./components/insideComponents/Projects";
import Contact from "./components/insideComponents/Contact";
import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { VscCloseAll } from "react-icons/vsc";

function App() {
  const [mainData, setMainData] = useState({});
  const [show, setShow] = useState(false);
  const getMainData = async () => {
    const response = await api.get("/home");
    return response.data;
  };

  const getMainContent = async () => {
    const mainInfo = await getMainData();
    if (mainInfo) setMainData(mainInfo);
  };

  useEffect(() => {
    getMainContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="xl:px-14 h-screen flex">
      <div className="md:hidden fixed z-20 " onClick={handleClick}>
        {" "}
        {show ? (
          <VscCloseAll className="m-2 text-slate-600 text-5xl" />
        ) : (
          <BsFillMenuButtonWideFill className="m-5 text-slate-600 text-4xl" />
        )}
      </div>
      <div
        className={`md:w-[25rem] w-4/5 max-md:absolute navActive  ${
          show ? "left-0" : "max-md:-left-full"
        }`}
      >
        <ProfileInfo setShow={setShow} show={show} />
      </div>
      <div
        className="h-full w-full overflow-y-scroll overflow-x-hidden no-scrollbar"
        id="containerElement"
      >
        <Element name="home">
          <ContentDisplay mainData={mainData} />
        </Element>
        <Element name="about">
          <About aboutData={mainData.about} />
        </Element>
        <Element name="skills">
          <Skills skillData={mainData.skills} />
        </Element>
        <Element name="education">
          <Education educationData={mainData.education} />
        </Element>
        <Element name="experience">
          <Experience experienceData={mainData.experience} />
        </Element>
        <Element name="work">
          <Projects projectsData={mainData.projects} />
        </Element>
        <Element name="contact">
          <Contact contactData={mainData.contact} />
        </Element>
      </div>
    </div>
  );
}

export default App;
