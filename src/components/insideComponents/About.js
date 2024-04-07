import React, { useContext, useEffect, useState } from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { IoMail } from "react-icons/io5";
import ThemesContext from "../../utils/ThemesContext";

const About = ({ aboutData }) => {
  const [hiddenElements, setHiddenElements] = useState(null);
  const [aniHead, setAniHead] = useState(false);
  const [aniContent, setAniContent] = useState(false);
  const [aniCards, setAniCards] = useState(false);
  const [aniCard, setAniCard] = useState(false);
  const [aniNumbers, setAniNumbers] = useState(false);
  const { darkTheme } = useContext(ThemesContext);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "head") setAniHead(true);
        if (entry.target.id === "content") setAniContent(true);
        if (entry.target.id === "cards") setAniCards(true);
        if (entry.target.id === "card") setAniCard(true);
        if (entry.target.id === "numbers") setAniNumbers(true);
      }
    });
  });

  useEffect(() => {
    setHiddenElements(document.querySelectorAll(".animation"));
  }, []);

  hiddenElements?.forEach((el) => observer.observe(el));

  const increaseNumberAnimation = (elementId, endNumber, speed) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    const animationRunning = JSON.parse(
      element.dataset.animationRunning ?? false
    );
    if (animationRunning) return;
    element.dataset.animationRunning = true;
    incNbrRec(0, endNumber, element, speed);
  };

  const incNbrRec = (currentNumber, endNumber, element, speed) => {
    if (currentNumber <= endNumber) {
      element.innerHTML = currentNumber;
      setTimeout(function () {
        incNbrRec(currentNumber + 1, endNumber, element, speed);
      }, speed); //Delay a bit before calling the function again.
    } else {
      element.dataset.animationRunning = false;
    }
  };

  return (
    <div id="about">
      <div
        className={`md:px-10 px-5 ${
          darkTheme ? "bg-slate-800 text-white" : "bg-white"
        }`}
      >
        <div
          className={`animation ${
            aniHead
              ? "animate-slideright opacity-0 [--slideright-delay:300ms]"
              : ""
          }`}
          id="head"
        >
          <h1 className="text-gray-400 font-mono [letter-spacing:0.3em]">
            ABOUT ME
          </h1>
          <h1 className="titleTag font-bold text-xl font-serif [letter-spacing:0.3em] py-5">
            WHO AM I?
          </h1>
        </div>
        <div className="md:py-10 py-0">
          <div
            className={`animation ${
              aniContent
                ? "animate-slideright opacity-0 [--slideright-delay:300ms]"
                : ""
            }`}
            id="content"
          >
            <p className="leading-7 md:py-5 py-3">
              <b>{aboutData?.name}</b>
              {aboutData?.intro1}
            </p>
            <p className="leading-7">{aboutData?.intro2}</p>
            <p className="leading-7 md:py-5 py-3">{aboutData?.intro3}</p>
          </div>
          <div className="py-5"></div>
          <div
            className="flex flex-wrap lg:justify-between justify-around animation"
            id="cards"
          >
            <div
              className={`lg:w-1/5 w-2/5 px-2 boxshadow py-1 rounded-md lg:mb-0 mb-5 border-b-4 border-black cursor-pointer ${
                aniCards
                  ? "animate-slideright opacity-0 [--slideright-delay:500ms]"
                  : ""
              }`}
            >
              <a href="https://github.com/sunilkumarhs">
                <div className="flex justify-around">
                  <FaSquareGithub className="text-4xl text-black" />
                  <p className="font-bold pt-1">GitHub</p>
                </div>
              </a>
            </div>
            <div
              className={`lg:w-1/5 w-2/5 px-2 boxshadow py-1 rounded-md lg:mb-0 mb-5 border-b-4 border-blue-500 cursor-pointer ${
                aniCards
                  ? "animate-slideup opacity-0 [--slideup-delay:500ms]"
                  : ""
              }`}
            >
              <a href="https://www.linkedin.com/in/sunilkumarhs1718/">
                <div className="flex justify-around">
                  <FaLinkedin className="text-4xl text-blue-500" />
                  <p className="font-bold pt-1">LinkedIn</p>
                </div>
              </a>
            </div>
            <div
              className={`lg:w-1/5 w-2/5 px-2 boxshadow py-1 rounded-md lg:mb-0 mb-5 border-b-4 border-green-500 cursor-pointer ${
                aniCards
                  ? "animate-slidedown opacity-0 [--slidedown-delay:500ms]"
                  : ""
              }`}
            >
              <a href="https://linktr.ee/sunilkumarhs1718">
                <div className="flex justify-around">
                  <SiLinktree className="text-4xl text-green-500" />
                  <p className="font-bold pt-1">Linktree</p>
                </div>
              </a>
            </div>
            <div
              className={`lg:w-1/5 w-2/5 px-2 boxshadow py-1 rounded-md lg:mb-0 mb-5 border-b-4 border-red-500 cursor-pointer ${
                aniCards
                  ? "animate-slideleft opacity-0 [--slideleft-delay:500ms]"
                  : ""
              }`}
            >
              <a
                href="mailto:sunilkumarhs974117@gmail.com"
                rel="noopener noreferrer"
              >
                <div className="flex justify-around">
                  <IoMail className="text-4xl text-red-500" />
                  <p className="font-semibold pt-1">Mail</p>
                </div>
              </a>
            </div>
          </div>
          <div className="md:py-16 py-6">
            <div
              className={`${
                darkTheme ? "bg-amber-900" : "bg-amber-400"
              } w-full px-10 py-5 animation ${
                aniCard
                  ? "animate-slideright opacity-0 [--slideright-delay:500ms]"
                  : ""
              }`}
              id="card"
            >
              <p className="text-3xl font-serif w-3/4 leading-[3rem]">
                {aboutData?.projectNum}
              </p>
              <div className="pt-8">
                <a href="https://drive.google.com/file/d/14nl0JSMqrFwOAud_iBY3nOVtrLutI-WW/view?usp=sharing">
                  <button className="border-[1px] border-gray-400 px-2 tracking-widest">
                    RESUME
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-16 lg:flex lg:justify-around bg-transparent">
        {aboutData?.numDisplay?.map((dis) => (
          <div
            key={dis.key}
            className={`text-center animation ${
              aniNumbers
                ? "animate-slideup opacity-0 [--slideup-delay:500ms]"
                : ""
            } ${
              aniNumbers
                ? increaseNumberAnimation(dis.key, dis.value, dis.speed)
                : ""
            }`}
            id="numbers"
          >
            <p className="text-3xl font-bold text-white" id={dis.key}>
              0
            </p>
            <p className="text-white py-7 font-thin">{dis.key}</p>
          </div>
        ))}
      </div>
      <div
        className={`pb-36 ${
          darkTheme ? "bg-slate-800 text-white" : "bg-white"
        }`}
      ></div>
    </div>
  );
};

export default About;
