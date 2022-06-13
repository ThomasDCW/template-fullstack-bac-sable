import styled from "styled-components";

export default styled.div`
  font-weight: bold;
  h1 {
    margin-top: 4vh;
    margin-bottom: 4vh;
    text-align: center;
    font-size: 32px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .radio-container {
    margin-top: 4vh;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    background: #34464e;
    border-radius: 20px;
    padding: 10px;
    color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.452);
    input {
      cursor: pointer;
      transform: translateY(1px);
    }
    label {
      margin-left: 10px;
      cursor: pointer;
    }
  }
  .button {
    display: flex;
    justify-content: center;
    button {
      color: #60bef9db;
      margin: 0 auto 20px;
      background: none;
      border: 2px solid #60bef9db;
      padding: 4px 10px;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        color: white;
        background: #60bef9db;
      }
    }
  }
`;
