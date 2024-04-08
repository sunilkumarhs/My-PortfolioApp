import React, { useContext, useEffect, useState } from "react";
import ThemesContext from "../utils/ThemesContext";

const ContentDisplay = ({ mainData }) => {
  const [show, setShow] = useState(true);
  const { darkTheme } = useContext(ThemesContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(!show);
    }, 10000);
    return () => clearInterval(interval);
  }, [show]);

  return (
    <div
      className={`relative md:pb-36 pb-20 ${
        darkTheme ? "bg-slate-800 text-white" : "bg-white"
      }`}
      id="home"
    >
      <div
        className={`h-screen xl:pr-14 -z-10 fixed ${
          darkTheme ? "bg-slate-800 text-white" : "bg-white"
        }`}
      >
        <img
          src={mainData.bgImg}
          className="h-full object-cover"
          alt="mainPhoto"
        />
      </div>
      <div>
        <div
          className={`h-screen w-full relative ${show ? "" : "hidden"} ${
            darkTheme ? "bg-slate-800" : "bg-white"
          }`}
        >
          <div className="absolute h-full w-full ">
            <div className="pl-14 md:mt-[12%] mt-[20%] w-[30rem] animate-slideup opacity-0 [--slideup-delay:300ms] ">
              <p className="text-5xl font-bold font-serif titleTag">
                {mainData.greet1Line1}
              </p>
              <p className="text-5xl py-10 font-bold font-serif titleTag">
                {mainData.greet1Line2}
              </p>
            </div>
            <div className="absolute bottom-14 px-10 backdrop-blur-sm animate-slideup opacity-0 [--slideup-delay:300ms]">
              <p className="text-xl text-slate-500 font-bold ">
                {mainData.des1}
              </p>
            </div>
          </div>
          {darkTheme ? (
            <img
              src={mainData.homeDarkImg1}
              className="h-full w-full object-cover"
              alt="homePhoto1"
            />
          ) : (
            <img
              src={mainData.homeImg1}
              className="h-full w-full object-cover"
              alt="homePhoto1"
            />
          )}
        </div>
        <div
          className={`h-screen w-full relative ${show ? "hidden" : ""} ${
            darkTheme ? "bg-slate-800" : "bg-white"
          }`}
        >
          <div className="absolute h-full w-full ">
            <div className="pl-14 md:mt-[12%] mt-[20%] w-[30rem]  text-slate-500 animate-slideup opacity-0 [--slideup-delay:300ms]">
              <p className="text-5xl  font-bold font-serif titleTag">
                {mainData.greet2Line1}
              </p>
              <p className="md:text-5xl text-4xl py-10 font-bold font-serif titleTag">
                {mainData.greet2Line2}
              </p>
            </div>
            <div className="absolute bottom-14 pl-10 backdrop-blur-sm w-[20rem] animate-slideup opacity-0 [--slideup-delay:300ms]">
              <p className="text-xl text-slate-500 font-bold">
                {mainData.des2}
              </p>
            </div>
          </div>
          {darkTheme ? (
            <img
              src={mainData.homeDarkImg2}
              className="h-full w-full object-cover"
              alt="homePhoto2"
            />
          ) : (
            <img
              src={mainData.homeImg2}
              className="h-full w-full object-cover"
              alt="homePhoto2"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentDisplay;
