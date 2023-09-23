import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Bill = () => {
  const { bill, setBill } = useContext(AppContext);

  return (
    <div>
      <span className="text-dark-grayish-cyan">Bill</span>
      <div className="relative pt-2">
        <input
          type="number"
          placeholder="0"
          value={bill > 0 && bill}
          onChange={(e) => setBill(e.target.value)}
          className="appearance-none w-full rounded bg-very-light-grayish-cyan text-very-dark-cyan text-2xl focus:outline-grayish-cyan text-right p-3"
        />
        <img
          src="images/icon-dollar.svg"
          alt="dollar sign"
          className="absolute top-0 left-0 transform translate-x-4 translate-y-7"
        />
      </div>
    </div>
  );
};

export default Bill;
