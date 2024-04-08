import ContentDisplay from "./components/ContentDisplay";
import api from "./restApi/portfolio";
import About from "./components/insideComponents/About";
import Skills from "./components/insideComponents/Skills";
import Education from "./components/insideComponents/Education";
import Experience from "./components/insideComponents/Experience";
import Projects from "./components/insideComponents/Projects";
import Contact from "./components/insideComponents/Contact";
import { useEffect, useState } from "react";
import ShimmerUI from "./components/insideComponents/ShimmerUi";
import { Element } from "react-scroll";
import ProfileInfo from "./components/ProfileInfo";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { VscCloseAll } from "react-icons/vsc";
import ThemesContext from "./utils/ThemesContext";

function Appjs() {
  const [mainData, setMainData] = useState(null);
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState(false);

  const getMainData = async () => {
    const response = await api.get("/home");
    setMainData(response.data);
    return response.data;
  };

  // const getMainData = async () => {
  //   const response = await fetch("https://json.abhishekshivale45.workers.dev");
  //   const data = await response.json();
  //   setMainData(data?.response?.home);
  // };

  // const getMainContent = async () => {
  //   const mainInfo = await getMainData();
  //   if (mainInfo) setMainData(mainInfo.home);
  // };

  useEffect(() => {
    // getMainContent();
    getMainData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    setShow(!show);
  };
  
  return (
    <ThemesContext.Provider value={{ darkTheme: theme, setTheme }}>
      <>
        {mainData ? (
          <div className="h-screen flex">
            <div
              className={`xl:px-8 ${theme ? "bg-slate-800" : "bg-white"}`}
            ></div>
            <div className="md:hidden fixed z-20 " onClick={handleClick}>
              {" "}
              {show ? (
                <VscCloseAll className="m-5 text-slate-600 text-5xl" />
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
        ) : (
          <ShimmerUI />
        )}
      </>
    </ThemesContext.Provider>
  );
}

export default Appjs;
