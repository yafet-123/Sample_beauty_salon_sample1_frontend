import React from "react";

export function Hero() {
  return (
    <div className="w-full h-full">
      <div className="hero-background w-full h-[50rem] relative">
        <div className="bg-transparent w-full lg:w-[40rem] h-96 p-10 absolute top-0 right-0 bottom-0 left-0 my-auto flex flex-col justify-center">
          <h1 className="text-indigo-900 text-8xl text-left font-bold uppercase mb-5 tracking-wide w-1/4">
            Rush hair & beauty
          </h1>
        </div>
      </div>

      <div className="bg-indigo-900 w-full h-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-36 py-20 px-28">
        <div className="flex flex-col">
          <h1 className="text-center text-white font-bold text-2xl mb-5 capitalize">
            About Salon
          </h1>
          <p className="text-center text-white font-normal text-xl mb-5 capitalize">
            We offer an extensive range of services including cutting, styling,
            blow drying, coloring
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-center text-white font-bold text-2xl mb-5 capitalize">
            our team
          </h1>
          <p className="text-center text-white font-normal text-xl mb-5 capitalize">
            our team of stylist and colourist are passionate about hair styling
            and are always happy
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-center text-white font-bold text-2xl mb-5 capitalize">
            Products
          </h1>
          <p className="text-center text-white font-normal text-xl mb-5 capitalize">
            we understood how important it is to feel and look your best, and
            our blend of service, expertice
          </p>
        </div>
      </div>
    </div>
  );
}
