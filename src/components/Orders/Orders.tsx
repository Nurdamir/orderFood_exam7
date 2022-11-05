import React from 'react';
import {FoodsTypeB, PropsMain} from "../../types";

interface Props {
  name: string;
  count: number;
  price: number;
  delete: React.MouseEventHandler;
}

const Orders:React.FC<Props> = (props) => {

  return (
    <div>
      <span>{props.name}</span>
      <span>{props.count}</span>
      <span>{props.price}KGS</span>
      <button onClick={props.delete} ></button>
    </div>
  );
};

export default Orders;