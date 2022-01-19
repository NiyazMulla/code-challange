import React, { Component } from "react";
import BreadCurmb from "components/BreadCurmb";
import ProductCard from "components/ProductCard";
import { PRODUCT } from "util/Constant";
class PageHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [...PRODUCT.items],
    };
  }

  componentDidMount() {}

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
        <BreadCurmb pageName={"Home > Product List"} />
        {this.renderProductCards()}
      </div>
    );
  }
}

export default PageHome;
