import Countries from "./Countries";
import SFlags from "./style";
export default function Flags() {
  return (
    <SFlags>
      <div className="logo">
        <h1>Flags Api</h1>
      </div>
      <Countries />
    </SFlags>
  );
}
