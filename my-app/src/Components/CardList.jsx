import React from "react";
import { Row } from "react-bootstrap";
import CardNetflix from "./CardNetflix";

const CardList = () => (
  <>
    <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
      <CardNetflix />
      <CardNetflix />
      <CardNetflix />
      <CardNetflix />
      <CardNetflix />
      <CardNetflix />
    </Row>
  </>
);

export default CardList;
