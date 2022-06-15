import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
function Quotes() {
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
    <div className="max-w-xl lg:max-w-5xl w-full h-auto  bg-black  flex flex-col justify-center items-center mt-16  shadow-xl bg-clip-padding backdrop-filter bg-opacity-10 backdrop-blur-md rounded-md ">
      <p className="leading 7 text-lg md:text-2xl">"{data.quotes[0].text}"</p>
      <p className="text-lg">-{data.quotes[0].author}</p>
    </div>
  );
}

export default Quotes;
