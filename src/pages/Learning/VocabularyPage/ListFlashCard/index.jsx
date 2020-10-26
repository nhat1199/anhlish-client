import React from "react";
import FlashCard from "../FlashCard";
import { Container } from "@material-ui/core";

ListFlashCard.propTypes = {};

function ListFlashCard(props) {
  console.log("setsId:" + props);
  return (
    <Container maxWidth="lg">
      <FlashCard />
      <FlashCard />
      <FlashCard />
      <FlashCard />
    </Container>
  );
}

export default ListFlashCard;
