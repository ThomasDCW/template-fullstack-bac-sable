import styled from "styled-components";

export default styled.div`
  margin: 2vh 2vw ;
  display: flex;
  justify-content: center;
  align-items: center;
  .cardcontainer {
    display: flex ;
    flex-direction: column ;
    justify-content: flex-end ;
    justify-content: space-between ;
    background: url(${(props) => props.bg}), url('/imgages.sm');
    background-position: center ;
    background-size: cover;
    width: 20rem;
    height: 30rem;
    box-sizing: border-box;
    border: 15px solid white;
    border-radius: 20px;
    h1 {
      text-align: center ;
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
    justify-content: space-between ;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        li{
          display: flex ;
          justify-content: center;
          align-items: center ;
          height: 50px ;
          width: 50px;
          border-radius: 50% 50%;
          text-align: center ;
          color: white ;
          font-size: 1.5em ;
          font-weight: bold ;
          font-family : Verdana, Geneva, sans-serif;
        }
    li:first-child{
      background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);

    }
    li:nth-child(2){
      background-image: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);

    }
    li:nth-child(3){
      background-image: linear-gradient(-225deg, #b24585 0%, #d41818 52%, #ff0000 100%);
    }
  
`;
