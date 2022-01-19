import React, { Component, useState } from "react";
import SonyLogo from "assets/img/sony.png";
import SideBar from "components/SideBar/SideBar";
function Header(props) {
  const { categoryList } = props;
  const [open, setOpen] = useState(false);
  const toggleSideNav = () => {
    setOpen(!open);
  };
  return (
    <div className="z-50 fixed top-0 w-full h-14 bg-black text-white flex justify-between px-1 md:px-16 lg:px-32 lg:justify-start items-center ">
      <SideBar visible={open} onToggle={toggleSideNav} categoryList={categoryList} />
      <div>
        <img src={SonyLogo} />{" "}
      </div>
      <div
        className="lg:hidden"
        onClick={() => {
          toggleSideNav();
        }}
      >
        <i className="pi pi-bars cursor-pointer" />
      </div>

      <div className="pl-2 md:pl-4 lg:flex hidden">
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
