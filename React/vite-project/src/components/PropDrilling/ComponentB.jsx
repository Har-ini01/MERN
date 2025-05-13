import React from "react";
import ComponentD from "./ComponentD";

export const ComponentB = (props) => {
  console.log(props);
  const { userData, handleChange } = props;
  //1 - onClick ==> no Arg ==> onClick = {handleChange}
  //2 - onClick ==> with Arg ==> onClick = {()=>handleChange("dfgc")}
  return (
    <div className="border border-red-500 py-5">
      <p>ComponentB</p>
      {userData}
      <div className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        <button onClick={() => handleChange("HI REACT")}>
          Update the State
        </button>
      </div>

      <ComponentD data={userData} />
    </div>
  );
};

export default ComponentB;
