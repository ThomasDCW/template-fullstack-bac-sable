import CountryCard from "../CountryCard";
import axios from "axios";
import { useEffect, useState } from "react";
import SCountries from "./style";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));
  }, []);
  return (
    <SCountries>
      <h1>COUNTRIES :</h1>
      <div className="countries">
        <ul>
          {countries.map((country, index) => {
            return <CountryCard key={index} country={country} />;
          })}
        </ul>
      </div>
    </SCountries>
  );
}
