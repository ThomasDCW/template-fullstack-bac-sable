import Card from "@components/Card";
import SGallery from "./style";
import heros from "../../data";

export default function Gallery() {
  return (
    <SGallery>
      {heros.map((hero) => {
        return (
          <Card
            key={hero.id}
            id={hero.id}
            bg={hero.images.lg}
            name={hero.name}
            speed={hero.powerstats.speed}
            str={hero.powerstats.strength}
            intel={hero.powerstats.intelligence}
          />
        );
      })}
    </SGallery>
  );
}
