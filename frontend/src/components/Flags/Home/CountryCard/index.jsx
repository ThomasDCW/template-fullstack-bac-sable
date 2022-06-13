import SCountryCard from "./style";

export default function CountryCard({ country }) {
  return (
    <SCountryCard>
      <li className="card">
        <img
          src={country.flags.svg}
          alt={"drapeau" + country.translations.fra.common}
        />
        <div className="infos">
          <h2>{country.translations.fra.common}</h2>
          <h4>{country.capital}</h4>
          <p>Pop. {country.population}</p>
        </div>
      </li>
    </SCountryCard>
  );
}
