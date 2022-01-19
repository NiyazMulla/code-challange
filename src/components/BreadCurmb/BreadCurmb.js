import React, { Component } from "react";

function BreadCurmb(props) {
  const { pageName } = props;
  return (
    <div className="text-base font-bold mb-2 bg-blue-100 px-1 md:px-4 flex items-center">
      {pageName}
    </div>
  );
}

export default BreadCurmb;
