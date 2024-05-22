import React from "react";
import Info from "./info-user";
import Avatar from "./avatar-user";

const Card = () => {
  return (
    <div className="max-w-[450px] mx-auto rounded-xl bg-white">
      <Avatar />
      <Info />
    </div>
  );
};

export default Card;
