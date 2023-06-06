import React from "react";

interface PizzaProps {
  name: string;
  toppings: string[];
  onClick: () => void;
}

const Pizza = ({ name, toppings, onClick }: PizzaProps) => {
  return (
    <>
      <div>{name}</div>
      <ul>
        {toppings.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClick}>Add Cheese</button>
    </>
  );
};

export default Pizza;
