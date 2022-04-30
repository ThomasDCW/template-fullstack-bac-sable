import styled from "styled-components";
import marvelimg from "../../../assets/P2homepage/marvelP2.jpg";
import swimg from "../../../assets/P2homepage/starwarsP2.jpg";
import mangaimg from "../../../assets/P2homepage/mangaP2.jpg";
import dcimg from "../../../assets/P2homepage/dcP2.jpg";
import othersimg from "../../../assets/P2homepage/othersP2.jpeg";

export default styled.div`
  margin-top: 4vh;
  min-height: 70vh;
  .marvel {
    background-image: url(${marvelimg});
    background-position: center;
    background-size: cover;
  }
  .starwars {
    background-image: url(${swimg});
    background-position: center;
    background-size: cover;
  }
  .manga {
    background-image: url(${mangaimg});
    background-position: center;
    background-size: cover;
  }
  .dccomics {
    background-image: url(${dcimg});
    background-position: center;
    background-size: cover;
  }
  .others {
    background-image: url(${othersimg});
    background-position: center;
    background-size: cover;
  }
  ul {
    height: 70vh;
    display: flex;
    justify-content: space-evenly;
    li {
      border: 5px solid black;
      width: 16vw;
      height: 100%;
      border-radius: 5%;
    }
  }
`;
