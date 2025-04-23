import { useState } from "react";

const Counter = () => {
  let values = 10;

  //Create a Local State Variable
  let [value, setvalue] = useState(10)

  let [names, setNames] = useState("Sam")

  const [bool , setBool] = useState(true)
  return (
    <>
      <div className="border border-red-500 p-5">
      <div className="space-y-3">
          <p>Number Value</p>
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
      </div>

      <div className="border border-red-500 p-5">
      <div className="space-y-3">
          <p>String Value</p>
          <p>{names}</p>
        </div>

        <div className="space-x-2">
          <button
            onClick={() => {
              setNames("Ram")
            }}
            className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
          >
            Change Name
          </button>
        </div>
      </div>

      <div className="border *:border-red-500 p-5">
      <div className="space-y-3">
          <p>Boolean Value</p>
          <p>{bool ? "🚀":"❌"}</p>
        </div>

        <div className="space-x-2">
          <button
            onClick={() => {
              setBool(false)
            }}
            className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
          >
            Change State
          </button>
        </div>
      </div>
      
    </>
  );
};
export default Counter;
