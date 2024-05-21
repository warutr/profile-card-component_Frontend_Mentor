import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="max-w-[450px] mx-auto rounded-xl bg-white ">
      <div>
        <img
          src={"/images/bg-pattern-card.svg"}
          alt="card"
          className="rounded-t-xl"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          src="/images/image-victor.jpg"
          alt="Victor"
          className="object-cover object-center h-32"
        />
      </div>
      <div className="flex flex-row items-center justify-center pt-4">
        <h1 className="text-xl font-bold ">Victor Crest</h1>
        <p className="text-Dark-grayish-blue text-center text-xl  ml-2">26</p>
      </div>
      <p className="text-center text-Dark-grayish-blue pb-6 pt-2">London</p>
      <hr className="" />
      <div className="flex justify-around px-4 py-6">
        <div>
          <h1 className="text-center text-2xl font-bold">80K</h1>
          <p className="text-sm font-[500] text-center text-Darkg-rayish">
            Followers
          </p>
        </div>
        <div>
          <h1 className="text-center text-2xl font-bold">803K</h1>
          <p className="text-sm font-[500] text-center text-Darkg-rayish">
            Likes
          </p>
        </div>
        <div>
          <h1 className="text-center text-2xl font-bold">1.4K</h1>
          <p className="text-sm font-[500] text-center text-Darkg-rayish">
            Photos
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
