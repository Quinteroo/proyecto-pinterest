import "./cardComponent.css"


export const cardComponent = (image) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const imgElement = document.createElement("img");
  imgElement.src = image.urls.small;
  imgElement.alt = image.alt_description || "Imagen";
  imgElement.title = image.alt_description || "Imagen";

  const avatar = document.createElement("img")
  avatar.src = image.user.profile_image.medium
  avatar.alt = image.user.first_name
  avatar.title = image.user.first_name

  const user = document.createElement("p");
  user.textContent = image.user.first_name || "Nombre usuario";

  card.appendChild(imgElement);
  card.appendChild(avatar)
  card.appendChild(user);

  return card;
};