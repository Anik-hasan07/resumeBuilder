/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function InputControl({ label, ...props }) {
  return (
    <div className="flex flex-col gap-5">
      {label && <label className="font-medium text-base">{label}</label>}
      <input
        className="border border-gray-300 outline-none rounded-md px-4 py-3 text-base 
          hover:border-gray-400 focus:border-blue-500"
        type="text"
        {...props}
      />
    </div>
  );
}

export default InputControl;
