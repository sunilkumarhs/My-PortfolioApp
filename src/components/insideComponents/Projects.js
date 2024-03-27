import React, { useState } from "react";
import { BsGit } from "react-icons/bs";
import { LuView } from "react-icons/lu";
import { PiFlowArrowFill } from "react-icons/pi";

const Projects = ({ projectsData }) => {
  const [showIndex, setIndex] = useState(0);
  const [showContent, setContent] = useState(-1);

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
    <div className="md:px-10 px-5 md:pt-36 pt-20 bg-white" id="work">
      <h1 className="text-gray-400 font-mono [letter-spacing:0.3em]">
        MY PROJECTS
      </h1>
      <h1 className="font-bold text-xl font-serif [letter-spacing:0.3em] py-5">
        RECENT PROJECTS
      </h1>
      <div className="py-10">
        <div className="flex">
          {projectsData?.sections?.map((sec, index) => (
            <div className="relative" key={index}>
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
            } justify-between flex-wrap`}
          >
            {projectsData?.react?.map((pro, index) => (
              <div
                className={`xl:w-[48%] w-full xl:h-[25rem] min-h-[25rem] h-full cursor-pointer my-4 ${pro.bgColor}`}
                key={index}
                onMouseOver={() => handleOver(index)}
                onMouseLeave={() => handleLeave()}
              >
                <img
                  src={pro.imageurl}
                  alt="netfliximg"
                  className={`w-full min-h-[25rem] h-full ${
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
            } justify-between flex-wrap`}
          >
            {projectsData?.js?.map((pro, index) => (
              <div
                className={`xl:w-[48%] w-full xl:h-[25rem] min-h-[25rem] h-full cursor-pointer my-4 ${pro.bgColor}`}
                key={index}
                onMouseOver={() => handleOver(index)}
                onMouseLeave={() => handleLeave()}
              >
                <img
                  src={pro.imageurl}
                  alt="netfliximg"
                  className={`w-full min-h-[25rem] h-full ${
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
            } justify-between flex-wrap`}
          >
            {projectsData?.web?.map((pro, index) => (
              <div
                className={`xl:w-[48%] w-full xl:h-[25rem] min-h-[25rem] h-full cursor-pointer my-4 ${pro.bgColor}`}
                key={index}
                onMouseOver={() => handleOver(index)}
                onMouseLeave={() => handleLeave()}
              >
                <img
                  src={pro.imageurl}
                  alt="netfliximg"
                  className={`w-full min-h-[25rem] h-full ${
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
