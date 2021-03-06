import React from "react";
import Moment from "react-moment";
import "moment-timezone";
const Time = () => {
  let today = new Date();
  let Greetings = () => {
    if (today.getHours() >= 5 && today.getHours() < 12) {
      return "Good Morning....";
    } else if (today.getHours() >= 12 && today.getHours() < 17) {
      return "Good Afternoon....";
    } else if (today.getHours() >= 17 && today.getHours() < 24) {
      return "Good evening...";
    } else {
      return "what are you upto at this time";
    }
  };

  return (
    <div className=" w-full h-[100px]  md:h-[200px] flex flex-col justify-center items-center">
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold text-3xl lg:text-7xl flex justify-center items-center">
        <Moment format="LT"></Moment>
      </p>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold  text-3xl lg:text-7xl flex justify-center items-center pb-10">
        {Greetings()}
      </p>
    </div>
  );
};

export default Time;
