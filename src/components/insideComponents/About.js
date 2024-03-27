import React from "react";
import { MdGraphicEq } from "react-icons/md";
import { LiaFileCode } from "react-icons/lia";
import { BsDatabaseFillGear } from "react-icons/bs";
import { PiAppWindow } from "react-icons/pi";

const About = ({ aboutData }) => {
  return (
    <div id="about">
      <div className="md:px-10 px-5 md:pt-36 pt-20 bg-white">
        <h1 className="text-gray-400 font-mono [letter-spacing:0.3em]">
          ABOUT ME
        </h1>
        <h1 className="font-bold text-xl font-serif [letter-spacing:0.3em] py-5">
          WHO AM I?
        </h1>
        <div className="md:py-10 py-0">
          <p className="leading-7 md:py-5 py-3">
            <b>{aboutData?.name}</b>
            {aboutData?.intro1}
          </p>
          <p className="leading-7">{aboutData?.intro2}</p>
          <p className="leading-7 md:py-5 py-3">{aboutData?.intro3}</p>
          <div className="lg:flex justify-between py-5">
            <div className="lg:w-[22%] w-full px-5 boxshadow py-5 lg:mb-0 mb-5 border-b-4 border-blue-500">
              <MdGraphicEq className="text-4xl text-blue-500" />
              <p className="font-semibold py-5">Graphic Designe</p>
            </div>
            <div className="lg:w-[22%] w-full px-5 boxshadow py-5 lg:mb-0 mb-5 border-b-4 border-red-500">
              <LiaFileCode className="text-4xl text-red-500" />
              <p className="font-semibold py-5">Web Designe</p>
            </div>
            <div className="lg:w-[22%] w-full px-5 boxshadow py-5 lg:mb-0 mb-5 border-b-4 border-yellow-500">
              <BsDatabaseFillGear className="text-4xl text-yellow-500" />
              <p className="font-semibold py-5">Software</p>
            </div>
            <div className="lg:w-[22%] w-full px-5 boxshadow py-5 lg:mb-0 mb-5 border-b-4 border-green-500">
              <PiAppWindow className="text-4xl text-green-500" />
              <p className="font-semibold py-5">Application</p>
            </div>
          </div>
          <div className="md:py-16 py-6">
            <div className="bg-amber-400 w-full px-10 py-5">
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
          <div key={dis.key} className="text-center">
            <p className="text-3xl font-bold text-white">{dis.value}</p>
            <p className="text-white py-7 font-thin">{dis.key}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
