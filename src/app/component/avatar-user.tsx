import React from "react";

const Avatar = () => {
  return (
    <>
      <img
        src={"/images/bg-pattern-card.svg"}
        alt="card"
        className="rounded-t-xl"
      />
      <div className="mx-auto w-32 h-32 relative -mt-16 border-[6px] border-white rounded-full overflow-hidden">
        <img
          src="/images/image-victor.jpg"
          alt="Victor"
          className="object-cover object-center h-full"
        />
      </div>
    </>
  );
};

export default Avatar;
