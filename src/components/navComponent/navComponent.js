import { fetchComponent } from "../../utils/fetchComponent.js";



export const navComponent = async () => {
  const header = document.querySelector("header");


  const nav = document.createElement("nav");

  const ul = document.createElement("ul");
  ul.classList.add("flex-around");

  const logo = document.createElement("img");
  logo.classList.add("logo");
  logo.src = "/assets/images/logo-pinterest.png";
  logo.alt = "pinterest-logo";

  const liInicio = document.createElement("li");
  liInicio.textContent = "Inicio";

  liInicio.addEventListener("click", async () => {
    const images = await fetchComponent("things")
  })

  const liHoy = document.createElement("li");
  liHoy.textContent = "Hoy";

  const liCrear = document.createElement("li");
  liCrear.classList.add("hidden");
  liCrear.textContent = "Crear";

  ul.appendChild(logo);
  ul.appendChild(liInicio);
  ul.appendChild(liHoy);
  ul.appendChild(liCrear);

  nav.appendChild(ul);

  header.appendChild(nav);
};


