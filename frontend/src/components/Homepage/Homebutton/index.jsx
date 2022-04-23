import { Link } from "react-router-dom";
import SHomebutton from "./style";

export default function Homebutton() {
  return (
    <SHomebutton>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
    </SHomebutton>
  );
}
