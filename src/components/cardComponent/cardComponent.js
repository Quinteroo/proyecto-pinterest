import "./cardComponent.css"


const cardComponent = (image) => {
  const imgElement = document.createElement("img");
  imgElement.src = image.urls.small;
  imgElement.alt = image.alt_description || "Imagen";
  return imgElement;


};

// ahora tengo que mejorarlo, creando divs y metiendo cada info dentro de cada parte
const createCard = (image) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const imgElement = document.createElement("img");
  imgElement.src = image.urls.small;
  imgElement.alt = image.alt_description || "Imagen";

  const caption = document.createElement("p");
  caption.textContent = image.alt_description || "Sin descripción";

  card.appendChild(imgElement);
  card.appendChild(caption);

  return card;
};