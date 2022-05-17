import styled from "styled-components";
import logo from "@assets/Flags/main.jpg";
export default styled.div`
  min-height: 100vh;
  padding-top: 4vh;
  background: white;
  font-family: sans-serif;

  .logo {
    display: flex;
    justify-content: center;
  }
  h1 {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    font-size: 24px;
    font-weight: bold;
    width: 224px;
    height: 124px;
    color: #62c5f7;
    background-image: url(${logo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
