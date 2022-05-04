import logomarvel from "@assets/logoP2/logomarvelP2.png";
import logostarwars from "@assets/logoP2/logoswP2.png";
import logomanga from "@assets/logoP2/logomangaP2.png";
import logodc from "@assets/logoP2/logodcP2.png";
import logoothers from "@assets/logoP2/logoothersP2.png";
import imagemarvel from "@assets/P2homepage/marvelP2.jpg";
import imagestarwars from "@assets/P2homepage/starwars2P2.jpg";
import imagemanga from "@assets/P2homepage/mangaP2.jpg";
import imagedc from "@assets/P2homepage/dc2P2.jpg";
import imageothers from "@assets/P2homepage/others2P2.jpeg";

const dataUnivers = {
  marvel: {
    logo: logomarvel,
    bgheader: "#e00032",
    image: imagemarvel,
  },
  starwars: {
    logo: logostarwars,
    bgheader: "black",
    image: imagestarwars,
  },
  manga: {
    logo: logomanga,
    bgheader: "orange",
    image: imagemanga,
  },
  dc: {
    logo: logodc,
    bgheader: "#92aac0",
    image: imagedc,
  },
  others: {
    logo: logoothers,
    bgheader: "pink",
    image: imageothers,
  },
};

export default dataUnivers;
