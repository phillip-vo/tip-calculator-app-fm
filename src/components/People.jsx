import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const People = () => {
  const { numOfPeople, setNumOfPeople, isPeople, setIsPeople } =
    useContext(AppContext);

  return (
    <div>
      <div className="flex justify-between">
        <span className="text-dark-grayish-cyan">Number of People</span>
        {numOfPeople == 0 && isPeople && (
          <span className="text-tomato">Can't be zero</span>
        )}
      </div>
      <div className="relative pt-2">
        <input
          type="number"
          placeholder="0"
          value={numOfPeople > 0 && numOfPeople}
          onChange={(e) => setNumOfPeople(e.target.value)}
          onClick={() => setIsPeople(true)}
          className={`w-full rounded bg-very-light-grayish-cyan text-very-dark-cyan text-2xl text-right p-3 ${
            numOfPeople == 0
              ? "focus:outline-tomato"
              : "focus:outline-grayish-cyan"
          }`}
        />
        <img
          src="images/icon-person.svg"
          alt="dollar sign"
          className="absolute top-0 left-0 transform translate-x-4 translate-y-7"
        />
      </div>
    </div>
  );
};

export default People;
