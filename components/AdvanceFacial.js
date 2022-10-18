import React from "react";
import Image from "next/image";
export function AdvanceFacial() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-20">
      <div className="flex flex-col just">
        <h1 className="text-left text-black font-light text-4xl mb-5 capitalize">
          Advance Facials
        </h1>
        <div className="bg-transparent lg:bg-indigo-900 w-full h-64 relative ">
          <div className="hero-background w-full lg:w-3/4 h-96 mt-10 absolute top-0 bottom-0 left-0 right-0 m-auto"></div>
        </div>

        <p className="text-black font-normal text-xl mt-64 capitalize text-center">
          Get in touch today to book and we will be happy to help
        </p>
      </div>

      <div className="flex flex-col px-10">
        <Image
          src="/images/bgImage2.avif"
          width={250}
          height={250}
          alt="Advance facials image"
          className=""
        />

        <p className="text-center lg:text-left text-black font-normal text-xl my-10 capitalize">
          We advance facial offers the ultimate indulgence for ani-aging
          acne-control, skin calming and toning. Our advanced facials target
          problem areas to nourish regenerate and energise.we use botanical
          extracts to help treat and improve overall skin health.
        </p>
      </div>
    </div>
  );
}
