import { useState } from "react";
import { stringify } from "uuid";

const Comment = () => {
  const [name, setName] = useState();
  const [comment, setComment] = useState();

  //Object - Optimizing or Reducing the fields
  const [message, setMessage] = useState({ name: "", comment: "" });

  const [data, setData] = useState([]);
  console.log("Name:", name, "Comment:", comment);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <p>Comment Component</p>

        <div className=" flex flex-col w-[300px] py-5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="border border-red-500"
            onChange={(e) => {
              setName(e.target.value);
              setMessage((items) => {
                return { ...items, name: e.target.value };
              });
            }}
          />
        </div>

        <div className=" flex flex-col w-[300px] py-5">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            className="border border-red-500"
            onChange={(e) => {
              setComment(e.target.value);
              setMessage((items) => {
                return { ...items, comment: e.target.value };
              });
            }}
          ></textarea>
        </div>

        <button
          onClick={() => {
            return setData((items)=>[...items,message]);
          }}
          className="bg-red-500 text-white py-1 px-4 rounded-lg"
        >
          Submit
        </button>
        {JSON.stringify(message)}
        <br />
        {JSON.stringify(data)}
      </div>
    </>
  );
};
export default Comment;
