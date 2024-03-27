import React, { useEffect, useState } from "react";

const ContentDisplay = ({ mainData }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(!show);
    }, 5000);
    return () => clearInterval(interval);
  }, [show]);

  return (
    <div className="relative" id="home">
      <div className="h-screen xl:pr-14 -z-10 fixed">
        <img
          src={mainData.bgImg}
          className="h-full object-cover"
          alt="mainPhoto"
        />
      </div>
      <div>
        <div
          className={`h-screen w-full relative bg-white ${
            show ? "" : "hidden"
          }`}
        >
          <div className="absolute h-full w-full ">
            <div className="pl-14 md:mt-[12%] mt-[20%] w-[30rem] ">
              <p className="text-5xl font-bold font-serif">
                {mainData.greet1Line1}
              </p>
              <p className="text-5xl py-10 font-bold font-serif">
                {mainData.greet1Line2}
              </p>
            </div>
            <div className="absolute bottom-14 px-10">
              <p className="text-xl text-slate-500">{mainData.des1}</p>
            </div>
          </div>
          <img
            src={mainData.homeImg1}
            className="h-full w-full"
            alt="homePhoto1"
          />
        </div>
        <div className={`h-screen w-full relative ${show ? "hidden" : ""}`}>
          <div className="absolute h-full w-full ">
            <div className="pl-14 md:mt-[12%] mt-[20%] w-[30rem] backdrop-blur-sm  text-slate-500">
              <p className="text-5xl  font-bold font-serif">
                {mainData.greet2Line1}
              </p>
              <p className="text-5xl py-10 font-bold font-serif">
                {mainData.greet2Line2}
              </p>
            </div>
            <div className="absolute bottom-14 pl-10 backdrop-blur-sm w-[20rem]">
              <p className="text-xl text-slate-500 font-semibold">
                {mainData.des2}
              </p>
            </div>
          </div>
          <img
            src={mainData.homeImg2}
            className="h-full w-full"
            alt="homePhoto2"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentDisplay;
