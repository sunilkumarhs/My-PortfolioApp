import React from "react";

const Skills = ({ skillData }) => {
  return (
    <div className="md:px-10 px-5 md:pt-36 pt-20 bg-white" id="skills">
      <h1 className="text-gray-400 font-mono [letter-spacing:0.3em]">
        MY SPECIALTY
      </h1>
      <h1 className="font-bold text-xl font-serif [letter-spacing:0.3em] py-5 ">
        MY SKILLS
      </h1>
      <div className="md:py-10 py-0">
        <p className="leading-7 ">{skillData?.skillInfo1}</p>
        <p className="leading-7 md:py-5 py-3">{skillData?.skillInfo2}</p>
      </div>
      <div className="flex flex-wrap justify-between">
        {skillData?.logos?.map((logo, index) => (
          <div className="w-[45%] py-5" key={index}>
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
