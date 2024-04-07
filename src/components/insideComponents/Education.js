import React, { useContext, useEffect, useState } from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";
import ThemesContext from "../../utils/ThemesContext";

const Education = ({ educationData }) => {
  const [showIndex, setIndex] = useState(-1);
  const [visible, setVisible] = useState(false);
  const [hiddenElements, setHiddenElements] = useState(null);
  const [aniHead, setAniHead] = useState(false);
  const [aniCards, setAniCards] = useState(false);
  const { darkTheme } = useContext(ThemesContext);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "head2") setAniHead(true);
        if (entry.target.id === "cards2") setAniCards(true);
      }
    });
  });

  useEffect(() => {
    setHiddenElements(document.querySelectorAll(".animation"));
  }, []);
  hiddenElements?.forEach((el) => observer.observe(el));

  const handleClick = (index) => {
    if (index === showIndex) {
      setIndex(-1);
      setVisible(false);
    } else {
      setIndex(index);
      setVisible(true);
    }
  };
  return (
    <div
      className={`md:px-10 px-5 pb-36 ${
        darkTheme ? "bg-slate-800 text-white" : "bg-white"
      }`}
      id="education"
    >
      <div className="animation" id="head2">
        <h1
          className={`text-gray-400 font-mono [letter-spacing:0.3em] ${
            aniHead
              ? "animate-slideright opacity-0 [--slideright-delay:300ms]"
              : ""
          }`}
        >
          EDUCATION
        </h1>
        <div
          className={`${
            aniHead ? "animate-slideup opacity-0 [--slideup-delay:300ms]" : ""
          }`}
        >
          <h1 className="font-bold text-xl font-serif [letter-spacing:0.3em] py-5 titleTag">
            EDUCATION
          </h1>
        </div>
      </div>
      <div className="md:py-10 py-5 animation" id="cards2">
        {educationData?.map((edu, index) => (
          <div
            className={`pt-1 ${
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
            <button
              className={`w-full flex justify-between border-[1px] border-gray-300 ${
                darkTheme ? "bg-slate-900 text-white" : "bg-slate-200"
              }`}
              onClick={() => handleClick(index)}
            >
              <p className="px-5 py-4">{edu.title}</p>
              <p className="text-3xl hover:animate-bounce px-5 py-4">
                {visible && showIndex === index ? (
                  <TbSquareRoundedArrowUpFilled className="text-slate-500" />
                ) : (
                  <TbSquareRoundedArrowDownFilled className="text-slate-500" />
                )}
              </p>
            </button>
            <div className="pt-1"></div>
            <div
              className={`w-full md:px-5 px-2 md:py-4 py-3 border-[1px] border-gray-300 ${
                visible && showIndex === index ? "flex" : "hidden"
              }`}
            >
              <FaUserGraduate className="sm:text-6xl text-3xl text-blue-500 lg:mx-0 mx-2" />
              <div className="w-full flex flex-wrap justify-around">
                <p className="lg:w-2/5 w-full lg:py-2 pb-0">{edu.university}</p>
                <p className="lg:w-2/5 w-full lg:py-2 py-1">{edu.college}</p>
                <p className="lg:w-2/5 w-full lg:py-2 py-1">{edu.score}</p>
                <p className="lg:w-2/5 w-full lg:py-2 py-1">{edu.completed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
