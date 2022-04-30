// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function Apipokemon() {
//   const [pokemon, setPokemon] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150")
//       .then(({ data }) => {
//         setPokemon(data);
//       });
//   }, []);
//   return (
//     <Apipokemon>
//       <ul>
//         {pokemon.slice(0, 50).map((item) => (
//           <li key={item.results.id}>
//             <p>{item.results.name}</p>
//           </li>
//         ))}
//       </ul>
//     </Apipokemon>
//   );
// }
