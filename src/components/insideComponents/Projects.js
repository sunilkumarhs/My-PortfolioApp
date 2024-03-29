import React, { useEffect, useState } from "react";
import { BsGit } from "react-icons/bs";
import { LuView } from "react-icons/lu";
import { PiFlowArrowFill } from "react-icons/pi";

const Projects = ({ projectsData }) => {
  const [showIndex, setIndex] = useState(0);
  const [showContent, setContent] = useState(-1);
  const [hiddenElements, setHiddenElements] = useState(null);
  const [aniHead, setAniHead] = useState(false);
  const [aniCards, setAniCards] = useState(null);
  const [anicontent, setAniContent] = useState(false);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "head4") setAniHead(true);
        if (entry.target.id === "cards4") setAniCards("cards4");
        if (entry.target.id === "cards4.2") setAniCards("cards4.2");
        if (entry.target.id === "cards4.3") setAniCards("cards4.3");
        if (entry.target.id === "content4") setAniContent(true);
      }
    });
  });

  useEffect(() => {
    setHiddenElements(document.querySelectorAll(".animation"));
  }, []);
  hiddenElements?.forEach((el) => observer.observe(el));

  const handleClick = (index) => {
    setIndex(index);
  };

  const handleOver = (index) => {
    setContent(index);
  };

  const handleLeave = () => {
    setContent(-1);
  };

  return (
    <div className="md:px-10 px-5 pb-36 bg-white" id="work">
      <div className="animation" id="head4">
        <h1
          className={`text-gray-400 font-mono [letter-spacing:0.3em] ${
            aniHead
              ? "animate-slideright opacity-0 [--slideright-delay:300ms]"
              : ""
          }`}
        >
          MY PROJECTS
        </h1>
        <div
          className={`${
            aniHead ? "animate-slideup opacity-0 [--slideup-delay:300ms]" : ""
          }`}
        >
          <h1 className="font-bold text-xl font-serif [letter-spacing:0.3em] py-5 titleTag">
            RECENT PROJECTS
          </h1>
        </div>
      </div>
      <div className="py-10">
        <div className="flex animation" id="content4">
          {projectsData?.sections?.map((sec, index) => (
            <div
              className={`relative ${
                anicontent && (index + 1) % 2 === 0
                  ? "animate-slideup opacity-0 [--slideup-delay:1000ms]"
                  : ""
              } ${
                anicontent && (index + 1) % 2 !== 0
                  ? "animate-slidedown opacity-0 [--slidedown-delay:1000ms]"
                  : ""
              }`}
              key={index}
            >
              <p
                className={`mr-5 font-semibold cursor-pointer link ${
                  showIndex === index ? "text-blue-500" : "text-slate-600"
                }`}
                onClick={() => handleClick(index)}
              >
                {sec}
              </p>
              <div
                className={`absolute left-5 top-5 ${
                  showIndex === index ? "" : "hidden"
                }`}
              >
                <PiFlowArrowFill className="text-5xl text-blue-500 rotate-90" />
              </div>
            </div>
          ))}
        </div>
        <div className=" w-full py-5">
          <div
            className={`w-full py-2 ${
              showIndex === 0 ? "flex" : "hidden"
            } justify-between flex-wrap animation`}
            id="cards4"
          >
            {projectsData?.react?.map((pro, index) => (
              <div
                className={`xl:w-[48%] w-full xl:h-[25rem] min-h-[25rem] h-full cursor-pointer my-4 ${
                  pro.bgColor
                } ${
                  aniCards === "cards4" && (index + 1) % 2 === 0
                    ? "animate-slideleft opacity-0 [--slideleft-delay:1000ms]"
                    : ""
                } ${
                  aniCards === "cards4" && (index + 1) % 2 !== 0
                    ? "animate-slideright opacity-0 [--slideright-delay:1000ms]"
                    : ""
                }`}
                key={index}
                onMouseOver={() => handleOver(index)}
                onMouseLeave={() => handleLeave()}
              >
                <img
                  src={pro.imageurl}
                  alt="netfliximg"
                  className={`w-full h-[25rem]  ${
                    showContent === index ? "hidden" : ""
                  }`}
                />
                <div
                  className={`w-full h-full text-white md:px-6 px-4 md:py-3 py-2 relative ${
                    showContent !== index ? "hidden" : ""
                  }`}
                >
                  <p className="text-xl font-semibold">{pro.title}</p>
                  <ul className="pl-4 text-sm list-disc py-2">
                    {pro.description.map((des, index) => (
                      <li className="py-1" key={index}>
                        {des}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm">{pro.tagline}</p>
                  <div className="flex xl:absolute py-2 justify-around xl:bottom-1">
                    <div>
                      <a href={pro.siteLink}>
                        <div className="flex bg-gray-200 bg-opacity-50 rounded-lg px-2 py-1">
                          <LuView className="text-3xl" />
                          <p className="text-sm pt-1">View Live-Site</p>
                        </div>
                      </a>
                    </div>
                    <div className="px-3"></div>
                    <div>
                      <a href={pro.gitLink}>
                        <div className="flex bg-gray-200 bg-opacity-50 rounded-lg px-2 py-1">
                          <BsGit className="text-3xl" />
                          <p className="text-sm pt-1 px-1">Code Repository</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`w-full py-2 ${
              showIndex === 1 ? "flex" : "hidden"
            } justify-between flex-wrap animation`}
            id="cards4.2"
          >
            {projectsData?.js?.map((pro, index) => (
              <div
                className={`xl:w-[48%] w-full xl:h-[25rem] min-h-[25rem] h-full cursor-pointer my-4 ${
                  pro.bgColor
                } ${
                  aniCards === "cards4.2" && (index + 1) % 2 === 0
                    ? "animate-slideleft opacity-0 [--slideleft-delay:1000ms]"
                    : ""
                } ${
                  aniCards === "cards4.2" && (index + 1) % 2 !== 0
                    ? "animate-slideright opacity-0 [--slideright-delay:1000ms]"
                    : ""
                }`}
                key={index}
                onMouseOver={() => handleOver(index)}
                onMouseLeave={() => handleLeave()}
              >
                <img
                  src={pro.imageurl}
                  alt="netfliximg"
                  className={`w-full h-[25rem] ${
                    showContent === index ? "hidden" : ""
                  }`}
                />
                <div
                  className={`w-full h-full text-white md:px-6 px-4 md:py-3 py-2 relative ${
                    showContent !== index ? "hidden" : ""
                  }`}
                >
                  <p className="text-xl font-semibold">{pro.title}</p>
                  <ul className="pl-4 text-sm list-disc py-2">
                    {pro.description.map((des, index) => (
                      <li className="py-1" key={index}>
                        {des}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm">{pro.tagline}</p>
                  <div className="flex xl:absolute py-2 justify-around xl:bottom-1">
                    <div>
                      <a href={pro.siteLink}>
                        <div className="flex bg-gray-200 bg-opacity-50 rounded-lg px-2 py-1">
                          <LuView className="text-3xl" />
                          <p className="text-sm pt-1">View Live-Site</p>
                        </div>
                      </a>
                    </div>
                    <div className="px-3"></div>
                    <div>
                      <a href={pro.gitLink}>
                        <div className="flex bg-gray-200 bg-opacity-50 rounded-lg px-2 py-1">
                          <BsGit className="text-3xl" />
                          <p className="text-sm pt-1 px-1">Code Repository</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`w-full py-2 ${
              showIndex === 2 ? "flex" : "hidden"
            } justify-between flex-wrap animation`}
            id="cards4.3"
          >
            {projectsData?.web?.map((pro, index) => (
              <div
                className={`xl:w-[48%] w-full xl:h-[25rem] min-h-[25rem] h-full cursor-pointer my-4 ${
                  pro.bgColor
                } ${
                  aniCards === "cards4.3" && (index + 1) % 2 === 0
                    ? "animate-slideleft opacity-0 [--slideleft-delay:1000ms]"
                    : ""
                } ${
                  aniCards === "cards4.3" && (index + 1) % 2 !== 0
                    ? "animate-slideright opacity-0 [--slideright-delay:1000ms]"
                    : ""
                }`}
                key={index}
                onMouseOver={() => handleOver(index)}
                onMouseLeave={() => handleLeave()}
              >
                <img
                  src={pro.imageurl}
                  alt="netfliximg"
                  className={`w-full h-[25rem] ${
                    showContent === index ? "hidden" : ""
                  }`}
                />
                <div
                  className={`w-full h-full text-white md:px-6 px-4 md:py-3 py-2 relative ${
                    showContent !== index ? "hidden" : ""
                  }`}
                >
                  <p className="text-xl font-semibold">{pro.title}</p>
                  <ul className="pl-4 text-sm list-disc py-2">
                    {pro.description.map((des, index) => (
                      <li className="py-1" key={index}>
                        {des}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm">{pro.tagline}</p>
                  <div className="flex xl:absolute xl:py-2 justify-around xl:bottom-1">
                    <div>
                      <a href={pro.siteLink}>
                        <div className="flex bg-gray-200 bg-opacity-50 rounded-lg px-2 py-1">
                          <LuView className="text-3xl" />
                          <p className="text-sm pt-1">View Live-Site</p>
                        </div>
                      </a>
                    </div>
                    <div className="px-3"></div>
                    <div>
                      <a href={pro.gitLink}>
                        <div className="flex bg-gray-200 bg-opacity-50 rounded-lg px-2 py-1">
                          <BsGit className="text-3xl" />
                          <p className="text-sm pt-1 px-1">Code Repository</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
