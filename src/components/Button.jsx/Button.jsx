import React, { Children } from "react";

const Button = ({ text, icon, isbgcolor, children }) => {
  return (
    <>
      <button
        className={`flex justify-center items-center gap-2 my-1 md:mr-1  w-full md:w-[300px]  ${
          isbgcolor ? "bg-white text-black py-2" : "bg-black py-3 text-white"
        }    w-60 `}
      >
        <span className="text-xl">{icon}</span>
        {children}
      </button>
    </>
  );
};

export default Button;
