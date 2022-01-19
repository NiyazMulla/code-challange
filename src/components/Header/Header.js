import React, { Component } from "react";
import SonyLogo from "assets/img/sony.png";
function Header(props) {
  const { categoryList } = props;
  return (
    <div className="z-50 fixed top-0 w-full h-14 bg-black text-white flex justify-between px-1 md:px-16 lg:px-32 md:justify-start items-center ">
      <div>
        <img src={SonyLogo} />{" "}
      </div>
      <div className="pl-2 md:pl-4 lg:flex hidden">
        <div className="lg:hidden block">
          {" "}
          <i className="" />
        </div>
        {categoryList.length ? (
          categoryList.map((data, index) => {
            return (
              <span
                key={index}
                className="text-sm cursor-pointer opacity-70 hover:opacity-100 text-white mr-3"
              >
                {data.name}
              </span>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Header;
