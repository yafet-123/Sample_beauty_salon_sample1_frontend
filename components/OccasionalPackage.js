import React from "react";

export function OccasionalPackage() {
  return (
    <div className="flex flex-col bg-white mt-10">
      <h1 className="text-center text-black font-bold text-2xl mb-5 capitalize">
        Occasional Package
      </h1>
      <p className="text-center text-black font-normal text-xl mb-5 capitalize max-w-5xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 mb-5 gap-10">
        <div className="occasionalpackage-background-one w-full h-[35rem] mt-10 relative">
          <h1 className="text-left text-white font-bold text-3xl capitalize absolute bottom-16 left-10">
            Nail Art
          </h1>

          <hr className=" w-full bg-white absolute bottom-12" />
          <p className="text-left text-white font-normal text-xl capitalize absolute bottom-3 left-10">
            Lorem ipsum dolor
          </p>
        </div>

        <div className="occasionalpackage-background-two w-full h-[35rem] mt-10 relative">
          <h1 className="text-left text-white font-bold text-3xl capitalize absolute bottom-16 left-10">
            Make up
          </h1>

          <hr className=" w-full bg-white absolute bottom-12" />
          <p className="text-left text-white font-normal text-xl capitalize absolute bottom-3 left-10">
            consectetur adipiscing
          </p>
        </div>

        <div className="occasionalpackage-background-three w-full h-[35rem] mt-10 relative">
          <h1 className="text-left text-white font-bold text-3xl capitalize absolute bottom-16 left-10">
            Hair Sallon
          </h1>

          <hr className=" w-full bg-white absolute bottom-12" />
          <p className="text-left text-white font-normal text-xl capitalize absolute bottom-3 left-10">
            et dolore magna
          </p>
        </div>

        <div className="occasionalpackage-background-four w-full h-[35rem] mt-10 relative">
          <h1 className="text-left text-white font-bold text-3xl capitalize absolute bottom-16 left-10">
            Beauty Therapy
          </h1>

          <hr className=" w-full bg-white absolute bottom-12" />
          <p className="text-left text-white font-normal text-xl capitalize absolute bottom-3 left-10">
            sed do eiusmod
          </p>
        </div>
      </div>
    </div>
  );
}
