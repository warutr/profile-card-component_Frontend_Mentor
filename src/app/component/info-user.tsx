import React from "react";

const Info = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center pt-4">
        <h1 className="text-xl font-bold ">Victor Crest</h1>
        <p className="text-Dark-grayish-blue text-center text-xl ml-2">26</p>
      </div>
      <p className="text-center text-Dark-grayish-blue pb-6 pt-2">London</p>
      <hr className="mt-2" />
      <div className="flex justify-around px-4 py-6">
        <div>
          <h1 className="text-center text-xl font-bold">80K</h1>
          <p className="text-sm font-[500] text-center text-Darkg-rayish">
            Followers
          </p>
        </div>
        <div>
          <h1 className="text-center text-xl font-bold">803K</h1>
          <p className="text-sm font-[500] text-center text-Darkg-rayish">
            Likes
          </p>
        </div>
        <div>
          <h1 className="text-center text-xl font-bold">1.4K</h1>
          <p className="text-sm font-[500] text-center text-Darkg-rayish">
            Photos
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;
