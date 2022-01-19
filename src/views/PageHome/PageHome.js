import React, { Component } from "react";
import BreadCurmb from "components/BreadCurmb";
import ProductCard from "components/ProductCard";
class Page404 extends Component {
  render() {
    return (
      <div className="mt-14 flex flex-col pt-2 md:pt-4">
        <BreadCurmb pageName={"Home > Product List"} />
        <ProductCard />
      </div>
    );
  }
}

export default Page404;
