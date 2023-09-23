import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-light-grayish-cyan xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-16 xl:py-12">
      {children}
    </div>
  );
};

export default Layout;
