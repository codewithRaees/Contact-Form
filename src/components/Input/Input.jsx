import React from "react";

function Input({ labelText, name, htmlfor, type }) {
  return (
    <>
      <div className="relative flex flex-col form-container my-6">
        <label
          htmlFor={htmlfor}
          className="-top-3 left-5 absolute bg-white px-3"
        >
          {labelText}
        </label>
        <input
          type={type}
          className="px-2 border focus:border-black w-60 min-w-full min-h-10 text-[14px] outline-none"
          name={name}
        ></input>
      </div>
    </>
  );
}

export default Input;
