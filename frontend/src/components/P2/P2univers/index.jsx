import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import dataUnivers from "@components/P2/P2universdata";
import SP2univers from "./style";
import Card from "@components/Card";
import searchlogo from "@assets/P2search/search.png";

export default function P2univers() {
  const { univers } = useParams();
  const [heroes, setHeroes] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get("http://localhost:6060/heroes").then(({ data }) => {
      setHeroes(data);
    });
  }, []);
  const handleSearch = (e) => {
    let value = e.target.value;
    setSearch(value);
  };
  return (
    <SP2univers bg={dataUnivers[univers].bgheader}>
      <header>
        <img className="logo" src={dataUnivers[univers].logo} />
      </header>
      <div className="head">
        <img className="image" src={dataUnivers[univers].image} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quaerat
          obcaecati recusandae numquam sapiente fuga exercitationem quibusdam
          nulla. Reprehenderit ab totam aspernatur illo neque maiores quisquam,
          culpa id eius assumenda. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quo quaerat obcaecati recusandae numquam sapiente
          fuga exercitationem quibusdam nulla. Reprehenderit ab totam aspernatur
          illo neque maiores quisquam, culpa id eius assumenda. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quo quaerat obcaecati
          recusandae numquam sapiente fuga exercitationem quibusdam nulla.
          Reprehenderit ab totam aspernatur illo neque maiores quisquam, culpa
          id eius assumenda.
        </p>
      </div>
      <div className="searchbar">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Search a hero here"
          onChange={handleSearch}
        />
      </div>
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
          .slice(0, 60)
          .filter((val) => {
            return val.name.toLowerCase().includes(search);
          })

          .map((val) => {
            return (
              <Card
                key={val.id}
                id={val.id}
                name={val.name}
                speed={val.powerstats.speed}
                str={val.powerstats.strength}
                intel={val.powerstats.intelligence}
                bg={val.images.lg}
              />
            );
          })}
      </section>
    </SP2univers>
  );
}
