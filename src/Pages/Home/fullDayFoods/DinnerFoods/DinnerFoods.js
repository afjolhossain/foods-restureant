import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import DinnerFood from "../DinnerFood/DinnerFood";

const DinnerFoods = () => {
  const [dinnerFoods, SetdinnerFoods] = useState([]);
  useEffect(() => {
    fetch("Dinner.JSON")
      .then((res) => res.json())
      .then((data) => SetdinnerFoods(data));
  }, []);
  return (
    <Row className="">
      <h1>DinnerFoods</h1>
      {dinnerFoods.map((dinnerFood) => (
        <DinnerFood dinnerFood={dinnerFood}></DinnerFood>
      ))}
    </Row>
  );
};

export default DinnerFoods;
