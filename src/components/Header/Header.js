import React, { Component } from "react";
import SonyLogo from "assets/img/sony.png";
class Header extends Component {
  render() {
    return (
      <div className="fixed top-0 w-full h-14 bg-black text-white flex justify-between px-1  md:justify-start  items-center md:px-4 ">
        <div>
          <img src={SonyLogo} />{" "}
        </div>
        <div className="pl-2 md:pl-2">
          <span>Header</span>
        </div>
      </div>
    );
  }
}

export default Header;
