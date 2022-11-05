import React from "react";

export interface PropsMain {
  item: FoodsTypeB;
  image: string;
  price: number;
  addFood: React.MouseEventHandler;
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