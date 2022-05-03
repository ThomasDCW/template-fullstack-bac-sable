import styled from "styled-components";

export default styled.div`
  background-color: #dcd9d4;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    radial-gradient(
      at 50% 0%,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(0, 0, 0, 0.5) 50%
    );
  background-blend-mode: soft-light, screen;
  min-height: 100vh;
  header {
    height: 8vh;
    padding-left: 2vw;
    padding-right: 8vw;
    background: ${(props) => props.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      height: 40%;
    }
    .logo {
      height: 100%;
    }
  }
  .image {
    height: 92vh;
    width: 100%;
  }
`;
