import React, {useState} from 'react';
import './App.css';
import {FoodsPropsType} from "../types";
import drinksImage from "../assets/drinks.png";
import knifeSpoonImage from '../assets/knifeSpoon.png';
import Food from "../components/Food/Food";
import Orders from "../components/Orders/Orders";

const FOODS: FoodsPropsType[] = [
  {name: 'Hamburger', price: 100, image: knifeSpoonImage},
  {name: 'Coffee', price: 120, image: drinksImage},
  {name: 'Cheeseburger', price: 150, image: knifeSpoonImage},
  {name: 'Tea', price: 80, image: drinksImage},
  {name: 'Fries', price: 150, image: knifeSpoonImage},
  {name: 'Cola', price: 110, image: drinksImage}
];

function App() {

  const [foods, setFoods] = useState([
    {name: 'Hamburger', count: 0},
    {name: 'Coffee', count: 0},
    {name: 'Cheeseburger', count: 0},
    {name: 'Tea', count: 0},
    {name: 'Fries', count: 0},
    {name: 'Cola', count: 0},
  ]);


  const countPlus = (nameFood: string) => {
    setFoods(prev => prev.map(food => {
      if(food.name !== nameFood) return food;
      return {...food, count: food.count + 1};
    }))
  };

  const deleteFood = (nameFood: string) => {
    setFoods(prev => prev.map(food => {
      if(food.name !== nameFood) return food;
      return {...food, count: food.count = 0};
    }))
  }


  return (
    <div className="App">
      <div className='foods'>
        {/*<h3>Foods</h3>*/}
        {foods.map((item, index) => {
            let pic = (FOODS.filter(img => img.name === item.name))[0].image;
            let price = (FOODS.filter(el => el.name === item.name))[0].price
            return (
              <Food
                item={item}
                image={pic}
                price={price}
                addFood={() => countPlus(item.name)}
              />
            )
          })
        }
      </div>

      <div className='orders' >
        {/*{foods.map(elem => */}
        {/*<Orders name={} count={} price={} delete={})}*/}
      </div>
    </div>
  );
}

export default App;
