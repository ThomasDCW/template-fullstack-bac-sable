import styled from "styled-components";
import card from "@assets/flipflapcard/card.png";
import verso from "@assets/flipflapcard/verso.png";

export default styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .flip-card {
    background-color: transparent;
    width: 40em;
    height: 25em;
    cursor: pointer;
  }

  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  /*Horizontal flip*/
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  /* Position the front and back side */
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  /* Style the front side*/
  .flip-card-front {
    background-image: url(${card});
    background-size: cover;
  }

  /* Style the back side */
  .flip-card-back {
    background-image: url(${verso});
    transform: rotateY(180deg);
    background-size: cover;
  }
`;
