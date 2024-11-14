import { accessKey, UNSPLASHAPI_URL } from "./api.js";




export const fetchComponent = async (value) => {
  try {
    const response = await fetch(`${UNSPLASHAPI_URL}?query=${value}&client_id=${accessKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return [];
  }
};