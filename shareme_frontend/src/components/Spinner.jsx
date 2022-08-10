import React from "react";
import Loader from "react-js-loader";
const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Loader
        type="heart"
        bgColor={"#ed4956"}
        title={message}
        color={"#ed4956"}
        size={100}
      />
    </div>
  );
};

export default Spinner;
