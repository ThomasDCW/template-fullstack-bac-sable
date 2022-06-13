import styled from "styled-components";

export default styled.div`
  min-height: 200vh;
  background-image: linear-gradient(
    to right,
    ${(props) => props.bg} 0%,
    black 100%
  );

  header {
    height: 8vh;
    padding-left: 2vw;
    padding-right: 8vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${(props) => props.bg};
    input {
      height: 40%;
    }
    .logo {
      height: 100%;
    }
  }
  .head {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    height: 50vh;
    width: 100vw;
    p {
      margin-top: 8vh;
      margin-left: 2vw;
      width: 45%;
      text-align: justify;
      overflow: scroll;
      color: white;
      font-weight: bold;
      font-family: sans-serif;
      font-size: 20px;
    }
    .image {
      width: 50%;
      margin-right: 2vw;
    }
  }
  .searchbar {
    width: 100vw;
    margin-top: 4vh;
    margin-bottom: 4vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    input {
      border-radius: 15px;
      height: 4vh;
      width: 24%;
      margin-right: 4vw;
    }
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-evenly;
  }
`;
