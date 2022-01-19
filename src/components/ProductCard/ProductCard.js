import React, { Component } from "react";

function ProductCard(props) {
  const { name, price, baseImage, category, sku } = props;
  return (
    <div className="flex flex-col md:flex-row shadow-md mb-2 p-4">
      <div className="w-full md:w-1/4 rounded-xl p-4 md:mr-2 border">
        <img src={baseImage} className="w-full object-cover h-full " />
      </div>
      <div className="flex flex-col justify-start md:py-4 py-2 items-start ">
        <div className="text-2xl font-bold">{name}</div>
        <div className=" flex flex-row text-sm items-center justify-start">
          <div>
            <i className="pi pi-tag mr-2 font-bold" />
          </div>
          <div>
            {category[0]?.name} - {sku}{" "}
          </div>
        </div>
        <div className="flex flex-row">
          <div>{price}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
