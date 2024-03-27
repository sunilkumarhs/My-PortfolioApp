import React from "react";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { BiSolidLeftArrow } from "react-icons/bi";
import { ImOffice } from "react-icons/im";

const Experience = ({ experienceData }) => {
  return (
    <div className="md:px-10 px-5 md:pt-36 pt-20 bg-white" id="experience">
      <h1 className="text-gray-400 font-mono [letter-spacing:0.3em]">
        EXPERIENCE
      </h1>
      <h1 className="font-bold text-xl font-serif [letter-spacing:0.3em] py-5">
        WORK EXPERIENCE
      </h1>
      <div className="py-10">
        {experienceData?.map((exp, index) => (
          <div className="flex" key={index}>
            <MdOutlineWorkspacePremium className="text-5xl text-white bg-red-500 rounded-full lg:p-2 p-1 border-4 border-slate-200" />
            <div className="flex w-full">
              <BiSolidLeftArrow className="text-xl my-3 p-0 mx-0 text-slate-200" />
              <div className="w-full -ml-1 md:px-5 px-2  py-3 md:py-5 bg-slate-200">
                <div className="lg:flex ">
                  <p className="text-xl font-semibold">{exp.title}</p>
                  <p className="text-slate-400 px-2 py-1">{exp.year}</p>
                </div>
                <div className="flex py-2">
                  <ImOffice className="text-2xl rounded-full p-1 bg-slate-400 text-slate-200 mx-2 " />
                  <p className="font-semibold">{exp.company}</p>
                  <p className="px-2 text-slate-400">{exp.location}</p>
                </div>
                <div className="md:py-4 py-2">
                  <ul>
                    {exp.content.map((con, index) => (
                      <li className="font-thin py-1" key={index}>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
