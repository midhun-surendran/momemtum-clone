import React, { useState, useEffect } from "react";
import axios from "axios";
import { WiFahrenheit } from "react-icons/wi";
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=kochi&units=imperial&appid=09400f2d7b6545c02200d431b37675f3";

function Weather() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  if (!data) return null;

  return (
    <div className=" w-full h-[100px]  md:h-[150px] flex flex-col justify-center items-center">
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold text-lg lg:text-3xl flex justify-center items-center">
        {data.name}
      </p>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold text-lg lg:text-3xl flex justify-center items-center">
        {data.main.temp.toFixed(0)}
        <span className="text-white font-extrabold">
          <WiFahrenheit size={60}></WiFahrenheit>
        </span>
      </p>
    </div>
  );
}

export default Weather;
