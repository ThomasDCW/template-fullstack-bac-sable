import styled from "styled-components";

export default styled.nav`
  font-family: sans-serif;
  background-color: purple;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: fixed;
  min-height: 75px;
  background-color: black;
  color: white;

  .navbar_links {
    display: flex;
  }
  .navbar_link {
    padding: 0 0.3rem;
    color: inherit;
    text-decoration: none;
  }
  .navbar_burger {
    width: 40px;
    height: 40px;
    background: transparent;
    color: inherit;
    display: none;
  }
  @media screen and (max-width: 767px) {
    .navbar_links {
      flex-direction: column;
      justify-content: center;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100vh;
      padding: 2rem;
      background-color: black;
      align-items: center;
    }
    .navbar_link {
      display: block;
      padding: 1.5rem;
      font-size: 5vw;
    }
    .navbar_burger {
      display: block;
      position: fixed;
      top: 1rem;
      right: 1rem;
      border: none;
    }
    .navbar_burger:hover {
      cursor: pointer;
    }
    .burger-bar,
    .burger-bar::before,
    .burger-bar::after {
      display: block;
      width: 40px;
      height: 3px;
      position: relative;
      border-radius: 3px;
      background: white;
    }
    .burger-bar::before,
    .burger-bar::after {
      content: "";
      position: absolute;
      left: 0;
    }
    .burger-bar::before {
      transform: translateY(-12px);
    }
    .burger-bar::after {
      transform: translateY(12px);
    }
  }
`;
