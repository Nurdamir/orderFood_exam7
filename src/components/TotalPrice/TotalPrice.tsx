import React from 'react';
import './TotalPrice.css';

interface PriceProps {
  price: number;
}

const TotalPrice: React.FC<PriceProps> = (props) => {
  if (props.price > 0) {
    return (
      <div className="TotalPrice">
        <strong>
          Total price: {props.price}
        </strong>
      </div>
    )
  } else {
    return (
      <div>
        <span className="empty">
          Order is empty! Please add some items!
        </span>
      </div>
    )
  }


};

export default TotalPrice;