import ContentDisplay from "./components/ContentDisplay";
import api from "./restApi/portfolio";
import About from "./components/insideComponents/About";
import Skills from "./components/insideComponents/Skills";
import Education from "./components/insideComponents/Education";
import Experience from "./components/insideComponents/Experience";
import Projects from "./components/insideComponents/Projects";
import Contact from "./components/insideComponents/Contact";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function Appjs() {
  const [mainData, setMainData] = useState({});
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
  return (
    <div className="xl:px-14 overflow-y-scroll overflow-x-hidden no-scrollbar">
      <Navbar />
      <ContentDisplay mainData={mainData} />
      <About aboutData={mainData.about} />
      <Skills skillData={mainData.skills} />
      <Education educationData={mainData.education} />
      <Experience experienceData={mainData.experience} />
      <Projects projectsData={mainData.projects} />
      <Contact contactData={mainData.contact} />
    </div>
  );
}

export default Appjs;
