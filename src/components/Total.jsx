import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const formatNumberToCurrency = (number) => {
  const currency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
  }).format(number);
  return currency;
};

const Total = () => {
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const {
    bill,
    numOfPeople,
    tipPercentage,
    setBill,
    setNumOfPeople,
    setTipPercentage,
    setCustomTip,
    setIsPeople,
  } = useContext(AppContext);
  const reset = bill === 0 || tipPercentage === 0 || numOfPeople === 0;

  useEffect(() => {
    if (bill > 0 && numOfPeople > 0) {
      setTipPerPerson((bill * (tipPercentage / 100)) / numOfPeople);
    } else {
      setTipPerPerson(0);
    }
  }, [bill, tipPercentage, numOfPeople]);

  useEffect(() => {
    if (bill > 0 && numOfPeople > 0 && tipPerPerson > 0) {
      setTotalPerPerson(bill / numOfPeople + tipPerPerson);
    } else {
      setTotalPerPerson(0);
    }
  }, [bill, numOfPeople, tipPerPerson]);

  return (
    <div className="bg-very-dark-cyan rounded-xl p-6 flex flex-col gap-6 xl:rounded-2xl xl:justify-between xl:p-8">
      <div className="flex flex-col gap-6 xl:gap-12">
        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col">
            <span className="text-white">Tip Amount</span>
            <span className="text-grayish-cyan text-xs">/ person</span>
          </div>
          <span className="text-3xl text-strong-cyan xl:text-5xl">
            {formatNumberToCurrency(tipPerPerson)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-white">Total</span>
            <span className="text-grayish-cyan text-xs">/ person</span>
          </div>
          <span className="text-3xl text-strong-cyan xl:text-5xl">
            {formatNumberToCurrency(totalPerPerson)}
          </span>
        </div>
      </div>

      <button
        className={`py-3 rounded-md text-xl text-very-dark-cyan ${
          reset
            ? "cursor-not-allowed bg-strong-cyan opacity-25"
            : "bg-strong-cyan"
        }`}
        onClick={() => {
          setBill(0);
          setTipPercentage(0);
          setNumOfPeople(0);
          setCustomTip(0);
          setIsPeople(false);
        }}
      >
        RESET
      </button>
    </div>
  );
};

export default Total;
