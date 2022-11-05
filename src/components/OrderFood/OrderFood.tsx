import React from 'react';
import './OrderFood.css'

interface PropsOrder {
  count: number;
  name: string;
  price: number;
  delete: React.MouseEventHandler;
}

const OrderFood: React.FC<PropsOrder> = (props) => {
  const keyOrder = Math.random();
  return (
    <div className="orderDiv" key={keyOrder}>
      <div className="nameCount">
      <span className="orderName">{props.name}</span>
      <span className="orderCount">x {props.count}</span>
      </div>
      <div className="priceBtn">
      <span className="orderPrice">{props.price} KGS</span>
      <button className="btnDelete" onClick={props.delete}>Delete</button>
      </div>
    </div>
  );
};

export default OrderFood;