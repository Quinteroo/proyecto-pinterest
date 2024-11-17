import "./cardComponent.css"
import { getRandomColor } from "../../utils/getRanomColor.js";


export const cardComponent = (image) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const imgWrp = document.createElement("div")
  imgWrp.classList.add("img-wrp")

  const imgElement = document.createElement("img");
  imgElement.classList.add("photo")
  imgElement.src = image.urls.small;
  imgElement.alt = image.alt_description || "Imagen";
  imgElement.title = image.alt_description || "Imagen";

  const avatar = document.createElement("img")
  avatar.classList.add("avatar")
  avatar.src = image.user.profile_image.medium
  avatar.alt = image.user.first_name
  avatar.title = image.user.first_name

  avatar.style.borderColor = getRandomColor();

  const user = document.createElement("p");
  user.textContent = image.user.first_name || "Nombre usuario";

  imgWrp.appendChild(imgElement)
  card.appendChild(imgWrp);
  card.appendChild(avatar)
  card.appendChild(user);

  return card;
};