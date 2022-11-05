import React from "react";

interface PropsOneFood {
  name: string;
  count: number;
  price: number;
  delete: React.MouseEventHandler;
}

export interface PropsMain {
  item: FoodsTypeB;
  image: string;
  price: number;
  addFood: React.MouseEventHandler;
  // deleteFood: React.MouseEventHandler;
}

export interface FoodsPropsType {
  name: string,
  price: number,
  image: string,
}



export interface FoodsTypeB {
  name: string,
  count: number
}