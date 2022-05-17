import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import dataUnivers from "@components/P2/P2universdata";
import SP2univers from "./style";
import Card from "@components/Card";

export default function P2univers() {
  const { univers } = useParams();
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:6060/heroes").then(({ data }) => {
      setHeroes(data);
    });
  }, []);

  return (
    <SP2univers bg={dataUnivers[univers].bgheader}>
      <header>
        <img className="logo" src={dataUnivers[univers].logo} />
        <input />
      </header>
      <img className="image" src={dataUnivers[univers].image} />
      <section className="gallery">
        {heroes
          .filter((hero) => {
            const publisher = hero.biography.publisher || "";
            const categA = [
              "Marvel Comics",
              "DC Comics",
              "George Lucas",
              "Shueisha",
            ];
            if (dataUnivers[univers].categ === "autre") {
              return !categA.some((cat) => {
                return publisher === cat;
              });
            }
            return (
              publisher === dataUnivers[univers].categ ||
              publisher.toLowerCase().includes(dataUnivers[univers].categ)
            );
          })
          .slice(0, 36)

          .map((hero) => {
            return (
              <Card
                key={hero.id}
                id={hero.id}
                name={hero.name}
                speed={hero.powerstats.speed}
                str={hero.powerstats.strength}
                intel={hero.powerstats.intelligence}
                bg={hero.images.lg}
              />
            );
          })}
      </section>
    </SP2univers>
  );
}
