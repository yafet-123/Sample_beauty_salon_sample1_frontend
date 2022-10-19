import React from "react";

export function Beauyreatment() {
  return (
    <div className="flex flex-col">
      <div className="beauytreatment-background-one w-full h-[50rem] relative">
        <div className="bg-transparent w-3/4 lg:w-[40rem] h-96 p-5 lg:p-10 absolute top-0 right-0 bottom-0 left-10 my-auto flex flex-col justify-center border-4 border-white">
          <h1 className="text-black text-4xl text-left font-bold uppercase mb-5 tracking-wide lg:w-1/2">
            Beauty treatment
          </h1>
          <hr className="h-1 w-full bg-white mb-5" />
          <p className="text-left text-black font-normal text-2xl capitalize">
            we offer treatment for nails, eyes , hair removal , tanning ,
            facials , massages , and more so let our expert therapist and
            stylist reveal your true eauty.
          </p>
        </div>
      </div>

      <div className="beauytreatment-background-two w-full h-[50rem] relative">
        <div className="bg-transparent w-3/4 lg:w-[40rem] h-96 p-5 lg:p-10 absolute top-0 right-10 bottom-0 my-auto flex flex-col justify-center">
          <h1 className="text-black text-5xl text-left font-bold uppercase mb-5 tracking-wide lg:w-1/2">
            Airbase Makeup
          </h1>
          <hr className="h-2 w-3/4 bg-indigo-300 mb-5" />
          <p className="text-left text-black font-normal text-2xl capitalize">
            Perfec for weeding, proms and other special ocassions this treatment
            will give you skin a truly flawless long-lasting look. with airbase
            make up treatment, your makeup will look amazing all day no
            touch-ups, regardless of he weather, and can even be used on
            sensetive or acne-prone-skin.
          </p>
          <button className="px-5 py-2 text-center bg-indigo-900 capitalize text-lg w-2/4 my-5 rounded-lg text-white">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
