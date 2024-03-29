import React, { useEffect, useState } from "react";

const Skills = ({ skillData }) => {
  const [hiddenElements, setHiddenElements] = useState(null);
  const [aniHead, setAniHead] = useState(false);
  const [aniContent, setAniContent] = useState(false);
  const [aniCards, setAniCards] = useState(false);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "head1") setAniHead(true);
        if (entry.target.id === "content1") setAniContent(true);
        if (entry.target.id === "cards1") setAniCards(true);
      }
    });
  });

  useEffect(() => {
    setHiddenElements(document.querySelectorAll(".animation"));
  }, []);

  hiddenElements?.forEach((el) => observer.observe(el));
  return (
    <div className="md:px-10 px-5 pb-36 bg-white" id="skills">
      <div className="animation" id="head1">
        <h1
          className={`text-gray-400 font-mono [letter-spacing:0.3em] ${
            aniHead
              ? "animate-slideright opacity-0 [--slideright-delay:300ms]"
              : ""
          }`}
        >
          MY SPECIALTY
        </h1>
        <div
          className={`${
            aniHead ? "animate-slideup opacity-0 [--slideup-delay:300ms]" : ""
          }`}
        >
          <h1
            className={`font-bold text-xl font-serif [letter-spacing:0.3em] py-5 titleTag`}
          >
            MY SKILLS
          </h1>
        </div>
      </div>
      <div
        className={`animation md:py-10 py-0 ${
          aniContent
            ? "animate-slideright opacity-0 [--slideright-delay:500ms]"
            : ""
        }`}
        id="content1"
      >
        <p className="leading-7 ">{skillData?.skillInfo1}</p>
        <p className="leading-7 md:py-5 py-3">{skillData?.skillInfo2}</p>
      </div>
      <div className="flex flex-wrap justify-between animation" id="cards1">
        {skillData?.logos?.map((logo, index) => (
          <div
            className={`w-[45%] py-5 ${
              aniCards && (index + 1) % 2 === 0
                ? "animate-slideleft opacity-0 [--slideleft-delay:1000ms]"
                : ""
            } ${
              aniCards && (index + 1) % 2 !== 0
                ? "animate-slideright opacity-0 [--slideright-delay:1000ms]"
                : ""
            }`}
            key={index}
          >
            <div>
              <img src={logo.tech} alt="logo" />
            </div>
            <div className={`relative ${logo.color} font-medium text-sm`}>
              {logo.current}
            </div>
            <div className="bg-gray-300 rounded-xl shadow-sm overflow-hidden ">
              <div className="relative h-2 flex items-center justify-center">
                <div
                  className={`absolute top-0 bottom-0 left-0 rounded-lg ${logo.bg}`}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
