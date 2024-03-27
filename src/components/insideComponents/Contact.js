import React from "react";
import { BiMailSend } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";

const Contact = ({ contactData }) => {
  return (
    <div className="md:px-10 px-5 md:pt-36 pt-20 bg-white" id="contact">
      <h1 className="text-gray-400 font-mono [letter-spacing:0.3em]">
        GET IN TOUCH
      </h1>
      <h1 className="font-bold text-xl font-serif [letter-spacing:0.3em] py-5">
        CONTACT
      </h1>
      <div className="py-10">
        <div className="w-full xl:flex pb-10">
          <div className="xl:w-1/2 w-full">
            <div className="flex">
              <BiMailSend className="text-8xl p-6 bg-slate-200 text-blue-500" />
              <p className="md:px-5 px-3 sm:text-lg text-sm text-blue-400 pt-5">
                {contactData?.mail}
              </p>
            </div>
            <div className="flex py-10">
              <GrMapLocation className="text-8xl p-6 bg-slate-200 text-blue-500" />
              <p className="md:px-5 px-3 pt-5">{contactData?.address}</p>
            </div>
            <div className="flex">
              <HiMiniDevicePhoneMobile className="text-8xl p-6 bg-slate-200 text-blue-500" />
              <p className="md:px-5 px-3 text-blue-400 pt-8">
                {contactData?.num}
              </p>
            </div>
          </div>
          <div className="xl:w-1/2 w-full xl:py-0 py-10">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-slate-200 py-4 px-4"
              />
            </div>
            <div className="py-5">
              <input
                type="mail"
                placeholder="E-Mail"
                className="w-full bg-slate-200 py-4 px-4"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-slate-200 py-4 px-4"
              />
            </div>
            <div className="py-5">
              <textarea
                placeholder="Message"
                className="w-full bg-slate-200 py-4 px-4"
                rows={5}
              />
            </div>
            <button className="bg-blue-500 font-thin py-2 px-5 text-white text-sm">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
