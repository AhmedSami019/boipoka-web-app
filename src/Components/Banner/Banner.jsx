import React from "react";
import bannerImage from "../../assets/books.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-300 my-10 rounded-2xl p-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImage}
          className=" rounded-lg shadow-2xl"
        />
        <div className="space-y-5 text-center lg:text-start">
          <h1 className="text-5xl leading-14 font-extrabold">Books to freshen up your bookshelf</h1>
          <button className="btn bg-[#03C755] text-white px-10 py-5">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
