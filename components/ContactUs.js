import React from "react";

export function ContactUs() {
  return (
    <div className="bg-indigo-900 w-full h-screen p-20">
      <h1 className="text-center text-white font-light text-4xl mb-16 capitalize">
        Visit us or call us today
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div className="flex flex-col">
          <h1 className="text-center text-white font-light text-3xl mb-5 capitalize">
            Opening Hours
          </h1>

          <p className="text-center text-white font-normal text-lg mb-5 capitalize">
            Sat-Sun 2AM-3PM
          </p>
          <p className="text-center text-white font-normal text-lg mb-5 capitalize">
            Mon Closed
          </p>
          <p className="text-center text-white font-normal text-lg mb-5 capitalize">
            Tue-Fri 2AM-12PM
          </p>
          <p className="text-center text-white font-normal text-xl mb-5 capitalize">
            ContactUs@gmail.com
          </p>
        </div>

        <div className="flex flex-col">
          <input
            placeholder="Name"
            className="border-2 border-white rounded-lg p-3 bg-transparent placeholder:text-white w-1/2 mb-5"
          />

          <input
            placeholder="Email"
            className="border-2 border-white rounded-lg p-3 bg-transparent placeholder:text-white w-1/2 mb-5"
          />

          <input
            placeholder="Name"
            className="border-2 border-white rounded-lg px-3 pb-32 pt-3 bg-transparent placeholder:text-white w-1/2"
          />

          <button className="px-3 py-2 text-center bg-white capitalize text-lg w-32 my-5 rounded-lg">
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
