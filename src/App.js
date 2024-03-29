import ContentDisplay from "./components/ContentDisplay";
import ProfileInfo from "./components/ProfileInfo";
import api from "./restApi/portfolio";
// import About from "./components/insideComponents/About";
// import Skills from "./components/insideComponents/Skills";
// import Education from "./components/insideComponents/Education";
// import Experience from "./components/insideComponents/Experience";
// import Projects from "./components/insideComponents/Projects";
// import Contact from "./components/insideComponents/Contact";
import ShimmerUI from "./components/insideComponents/ShimmerUi";
import { lazy, useEffect, useState } from "react";
import { Element } from "react-scroll";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { VscCloseAll } from "react-icons/vsc";
import RenderOnViewportEntry from "./components/RenderOnViewportEntry";

// const ContentDisplay = lazy(() => import("./components/ContentDisplay"));
const About = lazy(() => import("./components/insideComponents/About"));
const Skills = lazy(() => import("./components/insideComponents/Skills"));
const Education = lazy(() => import("./components/insideComponents/Education"));
const Experience = lazy(() =>
  import("./components/insideComponents/Experience")
);
const Projects = lazy(() => import("./components/insideComponents/Projects"));
const Contact = lazy(() => import("./components/insideComponents/Contact"));

function App() {
  const [mainData, setMainData] = useState(null);
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
    <>
      {mainData ? (
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
              {/* <RenderOnViewportEntry
                threshold={0.25}
                className="widget-title-container"
                style={{ minHeight: "200px" }}
              > */}
              <ContentDisplay mainData={mainData} />
              {/* </RenderOnViewportEntry> */}
            </Element>
            <Element name="about">
              <RenderOnViewportEntry
                threshold={0.25}
                className="widget-title-container"
                style={{ minHeight: "245px" }}
              >
                <About aboutData={mainData.about} />
              </RenderOnViewportEntry>
            </Element>
            <Element name="skills">
              <RenderOnViewportEntry
                threshold={0.25}
                className="widget-title-container"
                style={{ minHeight: "220px" }}
              >
                <Skills skillData={mainData.skills} />
              </RenderOnViewportEntry>
            </Element>
            <Element name="education">
              <RenderOnViewportEntry
                threshold={0.25}
                className="widget-title-container"
                style={{ minHeight: "200px" }}
              >
                <Education educationData={mainData.education} />
              </RenderOnViewportEntry>
            </Element>
            <Element name="experience">
              <RenderOnViewportEntry
                threshold={0.25}
                className="widget-title-container"
                style={{ minHeight: "250px" }}
              >
                <Experience experienceData={mainData.experience} />
              </RenderOnViewportEntry>
            </Element>
            <Element name="work">
              <RenderOnViewportEntry
                threshold={0.25}
                className="widget-title-container"
                style={{ minHeight: "200px" }}
              >
                <Projects projectsData={mainData.projects} />
              </RenderOnViewportEntry>
            </Element>
            <Element name="contact">
              <RenderOnViewportEntry
                threshold={0.25}
                className="widget-title-container"
                style={{ minHeight: "290px" }}
              >
                <Contact contactData={mainData.contact} />
              </RenderOnViewportEntry>
            </Element>
          </div>
        </div>
      ) : (
        <ShimmerUI />
      )}
    </>
  );
}

export default App;
