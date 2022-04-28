import styled from "styled-components";
import img from "../../assets/imgcard/spider-man.jpg";

export default styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .cardcontainer {
    background-image: url(${img});
    width: 20rem;
    height: 30rem;
    box-sizing: border-box;
    border: 12px solid white;
    border-radius: 20px;
    p {
      font-size: 32px;
    }
  }
`;
