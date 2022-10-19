import React from "react";

export function AdvanceFacialOne() {
  return (
    <div className="w-full h-full">
      <div className="advancefacialone-background w-full h-[35rem]"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10 lg:px-20 w-full h-full lg:h-screen bg-slate-100">
        <div className="lg:relative">
          <div className="advancefacialone-background-one w-full h-96 lg:h-[30rem] lg:absolute lg:-top-20 z-10"></div>
          <div className="hidden lg:block lg:bg-indigo-900 w-full h-96 lg:h-[45rem] lg:absolute lg:top-40 lg:left-20"></div>
          <div className="advancefacialone-background-two w-full lg:w-3/4 h-96 lg:h-[30rem] lg:absolute lg:top-56 lg:left-44 z-50"></div>
        </div>
        <div className="relative mb-5 lg:mb-0">
          <div className="border-0 lg:border-2 border-white w-full h-full lg:h-96 lg:absolute lg:-top-[30rem]">
            <div className="advancefacialone-background-three w-full lg:w-3/4 h-96 lg:h-[60rem] lg:absolute lg:top-1 lg:left-1/4"></div>
            <div className="flex flex-col lg:absolute lg:top-[70rem] lg:left-1/4 p-20 lg:p-20">
              <h1 className="text-left text-indigo-800 font-light text-4xl mb-5 capitalize">
                welcome offers
              </h1>
              <p className="text-black font-normal text-xl capitalize text-left">
                sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
