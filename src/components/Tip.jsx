import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const tips = [5, 10, 15, 25, 50];

const Tip = () => {
  const { tipPercentage, setTipPercentage, customTip, setCustomTip } =
    useContext(AppContext);

  useEffect(() => {
    if (customTip > 0) {
      setTipPercentage(customTip);
    }
  }, [customTip]);

  return (
    <div>
      <span className="text-dark-grayish-cyan">Select Tip %</span>
      <div className="grid grid-cols-2 gap-4 pt-4 xl: grid-cols-3">
        {tips.map((tip, index) => (
          <div
            key={index}
            className={`text-2xl text-center py-2 rounded-md cursor-pointer active:bg-light-grayish-cyan hover:bg-strong-cyan hover:text-very-dark-cyan ${
              tipPercentage === tip
                ? "bg-strong-cyan text-very-dark-cyan"
                : "bg-very-dark-cyan text-white"
            }`}
            onClick={() => {
              setTipPercentage(tip);
              setCustomTip(0);
            }}
          >
            {tip}%
          </div>
        ))}
        <input
          id="tipInput"
          type="number"
          placeholder="Custom"
          value={customTip > 0 && customTip}
          onChange={(e) => {
            setCustomTip(e.target.value);
          }}
          className="bg-very-light-grayish-cyan text-2xl text-very-dark-cyan rounded-md focus:outline-grayish-cyan text-right pr-4 placeholder-dark-grayish-cyan xl:text-xl"
        />
      </div>
    </div>
  );
};

export default Tip;
