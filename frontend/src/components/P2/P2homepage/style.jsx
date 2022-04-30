import styled from "styled-components";
import marvelimg from "../../../assets/P2homepage/marvelP2.jpg";
import swimg from "../../../assets/P2homepage/starwarsP2.jpg";
import mangaimg from "../../../assets/P2homepage/mangaP2.jpg";
import dcimg from "../../../assets/P2homepage/dcP2.jpg";
import othersimg from "../../../assets/P2homepage/othersP2.jpeg";

export default styled.div`
  margin-top: 4vh;
  .marvel {
    background-image: url(${marvelimg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .starwars {
    background-image: url(${swimg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .manga {
    background-image: url(${mangaimg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .dccomics {
    background-image: url(${dcimg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .others {
    background-image: url(${othersimg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  ul {
    height: 70vh;
    display: flex;
    justify-content: space-evenly;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 5px solid black;
      width: 16vw;
      height: 100%;
      border-radius: 5%;
      img {
        display: none;
      }
    }
    li:hover {
      transform: scale(1.05);
      transition-duration: 1.3s;
      filter: sepia(40%);
      img {
        display: initial;
        width: 20em;
        height: auto;
      }
    }
  }
`;
