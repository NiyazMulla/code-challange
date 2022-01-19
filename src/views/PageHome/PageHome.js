import React, { Component } from "react";
import BreadCurmb from "components/BreadCurmb";
import ProductCard from "components/ProductCard";
import { PRODUCT } from "util/Constant";
import SimpleDropDown from "components/SimpleDropDown/SimpleDropDown";
class PageHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [...PRODUCT.items],
      enrich10Category: [],
      sortFilter: [
        { name: "High to Low", value: 1 },
        { name: "Low to High", value: 0 },
      ],
    };
  }

  sortProduct = (value) => {
    const { productList } = this.state;
    let sortedProcutList = [];
    if (value === 1) {
      sortedProcutList = productList.sort((a, b) => b.price_rounded - a.price_rounded);
    } else {
      sortedProcutList = productList.sort((a, b) => a.price_rounded - b.price_rounded);
    }

    this.setState({
      productList: productList.sort((a, b) => b.price_rounded + a.price_rounded),
    });
  };

  renderProductCards = () => {
    const { productList } = this.state;
    return productList.length ? (
      productList.map((data, index) => {
        return (
          <div>
            <ProductCard
              name={data.name}
              price={data.price_rounded}
              baseImage={data.baseImage}
              category={data.categories}
              sku={data.sku}
            />
          </div>
        );
      })
    ) : (
      <>No Products found</>
    );
  };
  render() {
    return (
      <div className="mt-14 flex flex-col pt-2 md:pt-4">
        <div className="flex flex-col sm:flex-col lg:flex-row justify-between px-1 md:px-16 lg:px-32 mb-4 ">
          <div className="lg:w-3/4 w-full">
            <BreadCurmb pageName={"Home > Product List"} />
          </div>
          <div className="flex flex-row">
            <div className="w-full">
              <SimpleDropDown
                value={this.state.sortFilterValue}
                options={this.state.sortFilter}
                optionLabel="name"
                optionValue="value"
                onChange={(e) => {
                  this.setState(
                    {
                      sortFilterValue: e.value,
                    },
                    () => this.sortProduct(this.state.sortFilterValue)
                  );
                }}
              />
            </div>
            <div className="bg-red-600 ml-2 rounded-md w-20 text-white font-bold flex items-center cursor-pointer px-inputPaddingH ">
              Export
            </div>
          </div>
        </div>
        <div className="px-1 md:px-16 lg:px-32">{this.renderProductCards()}</div>
      </div>
    );
  }
}

export default PageHome;
