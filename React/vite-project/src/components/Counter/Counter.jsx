import { useState } from "react";

const Counter = () => {
  let values = 10;

  //Create a Local State Variable
  let [value, setvalue] = useState()
  return (
    <>
      <div className="space-y-3">
        <p>Counter</p>
        <p>{value}</p>
      </div>

      <div className="space-x-2">
        <button
          onClick={() => {
            setvalue(value = value + 1);
            console.log(value);
          }}
          className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
        >
          +
        </button>
        <button
          onClick={() => {
            setvalue(value = 0);
            console.log(value);
          }}
          className="inline-flex items-center rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800"
        >
          Reset
        </button>
        <button
          onClick={() => {
            setvalue(value = value - 1);
            console.log(value);
          }}
          className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
        >
          -
        </button>
      </div>
    </>
  );
};
export default Counter;
