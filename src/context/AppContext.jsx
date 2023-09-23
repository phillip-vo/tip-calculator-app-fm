import { useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

import React from "react";

const AppContextProvider = ({ children }) => {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numOfPeople, setNumOfPeople] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [isPeople, setIsPeople] = useState(false);

  return (
    <AppContext.Provider
      value={{
        bill,
        setBill,
        tipPercentage,
        setTipPercentage,
        numOfPeople,
        setNumOfPeople,
        customTip,
        setCustomTip,
        isPeople,
        setIsPeople,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
