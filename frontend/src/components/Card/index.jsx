import SCard from "./style";

export default function Card(props) {
  return (
    <SCard bg={props.bg}>
      <div className="cardcontainer">
        <h2>{props.id}</h2>
        <h1>{props.name}</h1>
        <ul className="statscontainer">
          <li>Speed : {props.speed}</li>
          <li>Strenght : {props.str}</li>
          <li>Intel : {props.intel}</li>
        </ul>
      </div>
    </SCard>
  );
}
