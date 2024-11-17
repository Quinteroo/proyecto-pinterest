import { cardComponent } from "../components/cardComponent/cardComponent.js"
import { fetchComponent } from "./fetchComponent.js";



export const printCards = async (array) => {

  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";


  if (array.length > 0) {
    array.forEach((obj) => {
      const card = cardComponent(obj)
      gallery.appendChild(card);
    });
  } else {
    const images = await fetchComponent("cats")
    alert("No se encontraron imágenes! 🥰 Prueba con otra palabra!")
  }
}
