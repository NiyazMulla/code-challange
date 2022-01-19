import { Sidebar } from "primereact/sidebar";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideNav extends Sidebar {}
class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { categoryList } = this.props;
    return (
      <div>
        <Sidebar visible={this.props.visible} baseZIndex={1000000} onHide={this.props.onToggle}>
          <div className="flex flex-col">
            <div className="flex flex-col font-medium text-base">
              {categoryList.map((data, index) => {
                return (
                  <span
                    key={index}
                    className="text-sm cursor-pointer opacity-70 hover:opacity-100 text-black mr-3 mb-4 border-b"
                  >
                    {data.name}
                  </span>
                );
              })}
            </div>
          </div>
        </Sidebar>
      </div>
    );
  }
}

export default SideBar;
