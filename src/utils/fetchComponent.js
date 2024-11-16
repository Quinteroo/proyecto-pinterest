import { accessKey, UNSPLASHAPI_URL } from "./api.js";
import { printCards } from "./printCards.js"


export const fetchComponent = async (string) => {
  try {
    const response = await fetch(`${UNSPLASHAPI_URL}?query=${string}&client_id=${accessKey}`);
    const data = await response.json();
    console.log(data);

    printCards(data.results)

  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return [];
  }
};
