import React from "react";

function BreadCurmb(props) {
  const { pageName } = props;
  return <div className="text-base font-bold mb-2 flex items-center border-b">{pageName}</div>;
}

export default BreadCurmb;
