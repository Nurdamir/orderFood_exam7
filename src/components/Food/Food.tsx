import React from 'react';
import {PropsMain} from "../../types";
import './Food.css'


const Food: React.FC<PropsMain> = (props) => {
  const keyForDiv = Math.random()
  return (
    <div key={keyForDiv} className="foods">
      <div className="imgFood" onClick={props.addFood}>
        <img src={props.image} alt={props.item.name}/>
      </div>
      <span className="namePrice">
        <h4>{props.item.name}</h4>
        <span>{props.price}KGS</span>
      </span>
    </div>
  );
};

export default Food;