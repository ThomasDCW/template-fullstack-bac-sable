import SCard from "./style";

export default function Card(props) {
  return (
    <SCard bg={props.bg}>
      <div className="cardcontainer">
        <h2>{props.id}</h2>
        <h1>{props.name}</h1>
        <ul className="statscontainer">
          <li>
            <span>{props.speed}</span>
          </li>
          <li>
            <span>{props.str}</span>
          </li>
          <li>
            <span>{props.intel}</span>
          </li>
        </ul>
      </div>
    </SCard>
  );
}
