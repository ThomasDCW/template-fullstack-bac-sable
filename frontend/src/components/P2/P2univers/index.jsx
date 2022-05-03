import { useParams } from "react-router-dom";
import SP2univers from "./style";
import dataUnivers from "@components/P2/P2universdata";

export default function P2univers() {
  const { univers } = useParams();
  return (
    <SP2univers bg={dataUnivers[univers].bgheader}>
      <header>
        <p>MENU BURGER</p>
        <img className="logo" src={dataUnivers[univers].logo} />
        <input />
      </header>
      <img className="image" src={dataUnivers[univers].image} />
    </SP2univers>
  );
}
