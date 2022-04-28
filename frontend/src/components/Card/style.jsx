import styled from "styled-components";
import img from "../../assets/imgcard/spider-man.jpg";

export default styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .cardcontainer {
    display: flex ;
    flex-direction: column ;
    justify-content: flex-end ;
    justify-content: space-between ;
    background-image: url(${img});
    width: 20rem;
    height: 30rem;
    box-sizing: border-box;
    border: 15px solid white;
    border-radius: 20px;
    h1 {
      padding-top: 5em ;
      text-shadow:#FFFEC8 0 -1px 0,
      #ff3a00 1px 1px 0,
      #c01c01 2px 2px 0,
      #bf1b01 3px 3px 0,
      #e90b20 4px 4px 0,
      #850103 5px 5px 0,
      #333 5px 5px 10px;color:#ffd000;
      font-size: 40px;
    }
    .idcontainer {
      position: absolute;
      border: 2px solid red;
      width: 4em;
      height: 4em;
      border-radius: 50%;
      }
      h2{
        font-size: 52px ;
        text-shadow:#e7f6ff 0 -1px 0,
    #a74a0c 1px 1px 0,
    #d97f32 2px 2px 0,
    #f5993d 3px 3px 0,
    #fec362 4px 4px 0,
    #ffe687 5px 5px 0,
    #333 5px 5px 10px;color:#F30034;
      }
    }
  }
  .statscontainer {
    display: flex ;
    padding-bottom:0.5em ;
    justify-content: space-evenly ;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    li:first-child{
      text-shadow:0 0 3px #65fe3f;
      color:#65fe3f;
      font-size: 24px;
    }
    li:nth-child(2){
      text-shadow:0 0 3px #FE0000;
      color:#FE0000;
      font-size: 24px;
    }
    li:nth-child(3){
      text-shadow:0 0 3px #D000FE;
      color:#D000FE;
      font-size: 24px;
    }
  
`;
