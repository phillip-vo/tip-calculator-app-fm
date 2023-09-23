import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Bill from "./Bill";
import Tip from "./Tip";
import People from "./People";
import Total from "./Total";

const Calculator = () => {
  return (
    <div className="min-h-screen bg-white p-8 flex flex-col gap-8 rounded-t-3xl xl:w-4/6 xl:rounded-2xl xl:grid xl:grid-cols-2 xl:gap-10 xl:min-h-0">
      <div className="grid grid-cols-1 gap-6 xl:gap-8">
        <Bill />
        <Tip />
        <People />
      </div>
      <Total />
    </div>
  );
};

export default Calculator;
