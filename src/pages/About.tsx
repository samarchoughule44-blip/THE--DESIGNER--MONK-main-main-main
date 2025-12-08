import React from "react";

const About = () => {
  return (
    <div className="bg-[#f7f5f2] text-[#2f2a26] font-sans">

      {/* ---------------- HERO SECTION --------------- */}
      <section className="relative w-full">
        <img
          src="/assets/hero.jpg"
          className="w-full h-[550px] object-cover"
          alt="Hero"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-10 max-w-3xl text-white">
          <h1 className="text-4xl font-serif font-bold">
            McGee & Co. Winter is Here
          </h1>
          <p className="mt-4 text-lg">
            Join Shea as she takes you through the details of a beautifully
            styled living room, featuring pieces from the latest collection.
          </p>

          <button className="mt-6 border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition">
            WATCH NOW
          </button>
        </div>
      </section>

      {/* ------------ ROUND CATEGORY MENU ------------- */}
      <section className="py-12 bg-white rounded-b-[40px] shadow-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-6 text-center">

          {[
            ["Design Services", "/assets/circle1.jpg"],
            ["Recipes", "/assets/circle2.jpg"],
            ["McGee & Co.", "/assets/circle3.jpg"],
            ["10-Year Anniversary", "/assets/circle4.jpg"],
            ["Target", "/assets/circle5.jpg"],
            ["Studio McGee TV", "/assets/circle6.jpg"],
          ].map(([label, img], i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <img
                src={img}
                className="w-24 h-24 rounded-full object-cover shadow-md"
              />
              <p className="text-sm font-medium">{label}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ----------------- READ SECTION ---------------- */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 px-6">

          {/* Left side headline */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif font-semibold">Read</h2>
            <p className="text-xl mt-1 text-gray-600">
              The Latest
            </p>

            <div className="mt-10">
              <img
                src="/assets/read-main.jpg"
                className="w-full rounded-2xl shadow"
              />
            </div>

            <p className="text-sm text-gray-500 mt-6">02 October — Read, How-To</p>
            <h3 className="text-2xl font-serif mt-2">
              Restyling Your Shelves With Shea
            </h3>
          </div>

          {/* Right side info */}
          <div className="space-y-10">
            <div>
              <h4 className="text-sm font-semibold tracking-wider">ABOUT</h4>
              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                Studio McGee is a multidisciplinary interior design firm,
                lifestyle destination and design resource, and muse for
                furnishings and homewares shop, McGee & Co.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold tracking-wider">TOP STORIES</h4>
              <div className="mt-3 space-y-2">
                <p className="text-2xl font-serif">1</p>
                <img
                  src="/assets/story1.jpg"
                  className="w-full rounded-xl"
                />
                <p className="text-sm text-gray-600">30 September — Read</p>
                <p className="font-medium">Monthly Musings</p>
              </div>
            </div>

            <button className="border px-5 py-2 rounded-full text-sm hover:bg-black hover:text-white transition">
              VIEW ALL
            </button>

          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
