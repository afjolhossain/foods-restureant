import React from "react";

const DinnerFood = ({ dinnerFood }) => {
  const { Name } = dinnerFood;
  return (
    <div>
      <h1>name:{Name}</h1>
    </div>
  );
};

export default DinnerFood;
