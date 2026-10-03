import React from "react";

const note = (props) => {
  console.log(props.idx);

  return (
    <div>
      <div className="bg-[#f8ccaa] h-full px-2 py-2 wrap-break-word flex flex-col justify-between">
        <div>
          <div className="py-2 mb-5 bg-[#cd9fa0]">
            <p className="text-white text-center">Task # {props.idx + 1}</p>
          </div>
          <h4 className="my-2 text-xl font-semibold">{props.value.title}</h4>
          <p>{props.value.description}</p>
        </div>
        <div className="">
          <button
            onClick={() => {
              props.deleteNote(props.idx);
            }}
            className="w-full py-1 mt-20 bg-red-300 active:scale-95 text-center text-white"
          >
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default note;
