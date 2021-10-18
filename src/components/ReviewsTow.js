import React from "react";

function ReviewsTow({ recomande, summary, body }) {
  
    if (recomande === true) {
      return (
        <div>
          <p className="font-bold">{summary}</p>
          <p className="font-thin"> {body} </p>
          <div className="flex flex-row ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-thin ">I recommand this product</p>
          </div>
          <br />
        </div>
      );
    } else {
      return (
        <div>
          <p className="font-bold">Don't chocolate bar pudding</p>
          <p className="font-thin"> ..line if necessary </p>
          <div className="flex flex-row ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <br />
        </div>
      );
    }
  
}

export default ReviewsTow;
