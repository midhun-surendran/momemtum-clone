import React from "react";

function Wrapper(props) {
  return (
    <div className="max-w-xl lg:max-w-5xl w-full h-auto mb-5 bg-black  flex flex-col justify-center items-center mt-20  shadow-xl bg-clip-padding backdrop-filter bg-opacity-5 backdrop-blur-sm rounded-md">
      {props.children}
    </div>
  );
}

export default Wrapper;
