import React from 'react';

interface PropsOrder {
  count: number;
  name: string;
  price: number;
  delete: React.MouseEventHandler;
}

const OrderFood: React.FC<PropsOrder> = (props) => {
  const keyOrder = Math.random();
  return (
    <div key={keyOrder}>
      <span>{props.name}</span>
      <span>x{props.count}</span>
      <span>{props.price} KGS</span>
      <button onClick={props.delete}>Delete</button>
    </div>
  );
};

export default OrderFood;