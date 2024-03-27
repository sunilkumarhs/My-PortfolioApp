import React, { useState } from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";

const Education = ({ educationData }) => {
  const [showIndex, setIndex] = useState(-1);
  const [visible, setVisible] = useState(false);

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
    <div className="md:px-10 px-5 md:pt-36 pt-20 bg-white" id="education">
      <h1 className="text-gray-400 font-mono [letter-spacing:0.3em]">
        EDUCATION
      </h1>
      <h1 className="font-bold text-xl font-serif [letter-spacing:0.3em] py-5">
        EDUCATION
      </h1>
      <div className="md:py-10 py-5">
        {educationData?.map((edu, index) => (
          <div className="pt-1" key={index}>
            <button
              className="w-full  bg-slate-200 flex justify-between border-[1px] border-gray-300"
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
