import React from 'react';

interface PriceProps {
  price: number;
}

const TotalPrice: React.FC<PriceProps> = (props) => {
  return (
    <div className="">
      <strong>
        Total price: {props.price}
      </strong>
    </div>
  );
};

export default TotalPrice;