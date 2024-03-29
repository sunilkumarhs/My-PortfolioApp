import React, { useEffect, useState } from "react";
import { BiMailSend } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";

const Contact = ({ contactData }) => {
  const [hiddenElements, setHiddenElements] = useState(null);
  const [aniHead, setAniHead] = useState(false);
  const [aniCards, setAniCards] = useState(false);
  const [anicontent, setAniContent] = useState(false);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "head5") setAniHead(true);
        if (entry.target.id === "cards5") setAniCards(true);
        if (entry.target.id === "content5") setAniContent(true);
      }
    });
  });

  useEffect(() => {
    setHiddenElements(document.querySelectorAll(".animation"));
  }, []);
  hiddenElements?.forEach((el) => observer.observe(el));
  return (
    <div className="md:px-10 px-5 pb-36 bg-white" id="contact">
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
          <div className="xl:w-1/2 w-full animation" id="cards5">
            <div
              className={`flex ${
                aniCards
                  ? "animate-slideright opacity-0 [--slideright-delay:1000ms]"
                  : ""
              }`}
            >
              <BiMailSend className="text-8xl p-6 bg-slate-200 text-blue-500" />
              <p className="md:px-5 px-3 sm:text-lg text-sm text-blue-400 pt-5">
                {contactData?.mail}
              </p>
            </div>
            <div
              className={`flex py-10 ${
                aniCards
                  ? "animate-slideright opacity-0 [--slideright-delay:2000ms]"
                  : ""
              }`}
            >
              <GrMapLocation className="text-8xl p-6 bg-slate-200 text-blue-500" />
              <p className="md:px-5 px-3 pt-5">{contactData?.address}</p>
            </div>
            <div
              className={`flex ${
                aniCards
                  ? "animate-slideright opacity-0 [--slideright-delay:3000ms]"
                  : ""
              }`}
            >
              <HiMiniDevicePhoneMobile className="text-8xl p-6 bg-slate-200 text-blue-500" />
              <p className="md:px-5 px-3 text-blue-400 pt-8">
                {contactData?.num}
              </p>
            </div>
          </div>
          <div
            className="xl:w-1/2 w-full xl:py-0 py-10 animation"
            id="content5"
          >
            <div
              className={`${
                anicontent
                  ? "animate-slideleft opacity-0 [--slideleft-delay:1000ms]"
                  : ""
              }`}
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-slate-200 py-4 px-4"
              />
            </div>
            <div
              className={`py-5 ${
                anicontent
                  ? "animate-slideleft opacity-0 [--slideleft-delay:2000ms]"
                  : ""
              }`}
            >
              <input
                type="mail"
                placeholder="E-Mail"
                className="w-full bg-slate-200 py-4 px-4"
              />
            </div>
            <div
              className={`${
                anicontent
                  ? "animate-slideleft opacity-0 [--slideleft-delay:3000ms]"
                  : ""
              }`}
            >
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-slate-200 py-4 px-4"
              />
            </div>
            <div
              className={`py-5 ${
                anicontent
                  ? "animate-slideleft opacity-0 [--slideleft-delay:4000ms]"
                  : ""
              }`}
            >
              <textarea
                placeholder="Message"
                className="w-full bg-slate-200 py-4 px-4"
                rows={5}
              />
            </div>
            <button
              className={`bg-blue-500 font-thin py-2 px-5 text-white text-sm ${
                anicontent
                  ? "animate-slideup opacity-0 [--slideup-delay:4000ms]"
                  : ""
              }`}
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
