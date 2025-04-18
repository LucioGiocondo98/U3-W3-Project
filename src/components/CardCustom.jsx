import React from "react";
import { Card, Button } from "react-bootstrap";

const CardCustom = ({ title, image, artist, link }) => {
  return (
    <Card className="mb-4" style={{ minHeight: "270px" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Artist: {artist}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardCustom;
