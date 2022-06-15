import React from "react";

function Datetoday() {
  let today = new Date();
  let date =
    today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();

  return (
    <div className="w-full text-xl lg:text-3xl flex justify-center lg:justify-end items-center">
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold">
        {date}
      </p>
    </div>
  );
}

export default Datetoday;
