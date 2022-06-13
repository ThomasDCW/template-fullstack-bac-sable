import CountryCard from "../CountryCard";
import axios from "axios";
import { useEffect, useState } from "react";
import SCountries from "./style";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [rangeValue, setRangeValue] = useState(1);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <SCountries>
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => {
            setRangeValue(e.target.value);
          }}
        />
        {radios.map((continent) => {
          return (
            <li>
              <input
                type="radio"
                id={continent}
                name="contientRadio"
                onChange={(e) => setSelectedRadio(e.target.id)}
              />
              <label htmlFor={continent}>{continent}</label>
            </li>
          );
        })}
      </ul>
      <div className="button">
        {selectedRadio && (
          <button type="button" onClick={() => setSelectedRadio("")}>
            Annuler la recherche
          </button>
        )}
      </div>
      <ul>
        {countries
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => {
            return <CountryCard key={index} country={country} />;
          })}
      </ul>
    </SCountries>
  );
}
