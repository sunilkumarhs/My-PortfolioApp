import React, { useEffect, useState } from "react";
import { MdGraphicEq } from "react-icons/md";
import { LiaFileCode } from "react-icons/lia";
import { BsDatabaseFillGear } from "react-icons/bs";
import { PiAppWindow } from "react-icons/pi";

const About = ({ aboutData }) => {
  const [hiddenElements, setHiddenElements] = useState(null);
  const [aniHead, setAniHead] = useState(false);
  const [aniContent, setAniContent] = useState(false);
  const [aniCards, setAniCards] = useState(false);
  const [aniCard, setAniCard] = useState(false);
  const [aniNumbers, setAniNumbers] = useState(false);

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
      <div className="md:px-10 px-5 bg-white">
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
          <div className="lg:flex justify-between animation" id="cards">
            <div
              className={`lg:w-[22%] w-full px-5 boxshadow py-5 lg:mb-0 mb-5 border-b-4 border-blue-500  ${
                aniCards
                  ? "animate-slideright opacity-0 [--slideright-delay:500ms]"
                  : ""
              }`}
            >
              <MdGraphicEq className="text-4xl text-blue-500" />
              <p className="font-semibold py-5">Graphic Designe</p>
            </div>
            <div
              className={`lg:w-[22%] w-full px-5 boxshadow py-5 lg:mb-0 mb-5 border-b-4 border-red-500 ${
                aniCards
                  ? "animate-slideleft opacity-0 [--slideleft-delay:500ms]"
                  : ""
              }`}
            >
              <LiaFileCode className="text-4xl text-red-500" />
              <p className="font-semibold py-5">Web Designe</p>
            </div>
            <div
              className={`lg:w-[22%] w-full px-5 boxshadow py-5 lg:mb-0 mb-5 border-b-4 border-yellow-500 ${
                aniCards
                  ? "animate-slideup opacity-0 [--slideup-delay:500ms]"
                  : ""
              }`}
            >
              <BsDatabaseFillGear className="text-4xl text-yellow-500" />
              <p className="font-semibold py-5">Software</p>
            </div>
            <div
              className={`lg:w-[22%] w-full px-5 boxshadow py-5 lg:mb-0 mb-5 border-b-4 border-green-500  ${
                aniCards
                  ? "animate-slidedown opacity-0 [--slidedown-delay:500ms]"
                  : ""
              }`}
            >
              <PiAppWindow className="text-4xl text-green-500" />
              <p className="font-semibold py-5">Application</p>
            </div>
          </div>
          <div className="md:py-16 py-6">
            <div
              className={`bg-amber-400 w-full px-10 py-5 animation ${
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
                <button className="border-[1px] border-black px-2 tracking-widest">
                  HIRE ME
                </button>
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
      <div className="pb-36 bg-white"></div>
    </div>
  );
};

export default About;
