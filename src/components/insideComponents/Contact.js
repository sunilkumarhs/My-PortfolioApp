import React, { useContext, useEffect, useState } from "react";
import { BiMailSend } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import ThemesContext from "../../utils/ThemesContext";
import contactImage from "../../images/contactImage.png";

const Contact = ({ contactData }) => {
  const [hiddenElements, setHiddenElements] = useState(null);
  const [aniHead, setAniHead] = useState(false);
  const [aniCards, setAniCards] = useState(false);
  const { darkTheme } = useContext(ThemesContext);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "head5") setAniHead(true);
        if (entry.target.id === "cards5") setAniCards(true);
      }
    });
  });

  useEffect(() => {
    setHiddenElements(document.querySelectorAll(".animation"));
  }, []);
  hiddenElements?.forEach((el) => observer.observe(el));
  return (
    <div
      className={`md:px-10 px-5 pb-0 ${
        darkTheme ? "bg-slate-800 text-white" : "bg-white"
      }`}
      id="contact"
    >
      <div className="animation" id="head5">
        <h1
          className={`text-gray-400 font-mono [letter-spacing:0.3em] ${
            aniHead
              ? "animate-slideright opacity-0 [--slideright-delay:300ms]"
              : ""
          }`}
        >
          GET IN TOUCH
        </h1>
        <div
          className={`${
            aniHead ? "animate-slideup opacity-0 [--slideup-delay:300ms]" : ""
          }`}
        >
          <h1 className="font-bold text-xl font-serif [letter-spacing:0.3em] py-5 titleTag">
            CONTACT
          </h1>
        </div>
      </div>
      <div className="py-10">
        <div className="w-full xl:flex pb-10">
          <div
            className="xl:w-1/2 w-full xl:pb-0 max-md:pb-5 md:pb-10 animation"
            id="cards5"
          >
            <div
              className={`flex ${
                aniCards
                  ? "animate-slideright opacity-0 [--slideright-delay:1000ms]"
                  : ""
              }`}
            >
              <BiMailSend
                className={`text-5xl p-2 text-blue-500 ${
                  darkTheme ? "bg-slate-950" : "bg-slate-200"
                } rounded-md`}
              />
              <p className="md:px-5 px-3 text-lg text-blue-400 pt-2">
                {contactData?.mail}
              </p>
            </div>
            <div
              className={`flex py-5 ${
                aniCards
                  ? "animate-slideright opacity-0 [--slideright-delay:2000ms]"
                  : ""
              }`}
            >
              <GrMapLocation
                className={`text-5xl p-2 text-blue-500 ${
                  darkTheme ? "bg-slate-950" : "bg-slate-200"
                } rounded-md`}
              />
              <p className="md:px-5 px-3 pt-2">{contactData?.address}</p>
            </div>
            <div
              className={`flex ${
                aniCards
                  ? "animate-slideright opacity-0 [--slideright-delay:3000ms]"
                  : ""
              }`}
            >
              <HiMiniDevicePhoneMobile
                className={`text-5xl p-2 text-blue-500 ${
                  darkTheme ? "bg-slate-950" : "bg-slate-200"
                } rounded-md`}
              />
              <p className="md:px-5 px-3 text-blue-400 pt-2">
                {contactData?.num}
              </p>
            </div>
          </div>
          <div className="xl:w-1/2 w-full">
            <img
              src={contactImage}
              alt="contactImage"
              className="w-full h-full -mt-14 xl:-ml-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
