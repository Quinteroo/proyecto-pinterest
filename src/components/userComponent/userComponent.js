

export const userComponent = () => {
  const header = document.querySelector("header");

  // Crear el contenedor <nav> para los elementos del usuario
  const nav = document.createElement("nav");
  nav.classList.add("hidden");

  // Crear el contenedor <ul> para los iconos
  const ul = document.createElement("ul");
  ul.classList.add("flex-around");

  // Crear los elementos de la lista
  const iconNotification = document.createElement("li");
  const imgNotification = document.createElement("img");
  imgNotification.src = "/assets/images/icono-notification.png";
  imgNotification.alt = "icono-notification";
  iconNotification.appendChild(imgNotification);

  const iconMessage = document.createElement("li");
  const imgMessage = document.createElement("img");
  imgMessage.src = "/assets/images/icono-mensaje.png";
  imgMessage.alt = "icono-message";
  iconMessage.appendChild(imgMessage);

  const iconProfile = document.createElement("li");
  const imgProfile = document.createElement("img");
  imgProfile.src = "/assets/images/boton-perfil.png";
  imgProfile.alt = "user-icon";
  iconProfile.appendChild(imgProfile);

  // Agregar los iconos a <ul>
  ul.appendChild(iconNotification);
  ul.appendChild(iconMessage);
  ul.appendChild(iconProfile);

  // Agregar <ul> a <nav>
  nav.appendChild(ul);

  // Finalmente, agregar <nav> al header
  header.appendChild(nav);
};
