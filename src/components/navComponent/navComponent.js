

export const navComponent = () => {

  const header = document.querySelector("header")

  header.innerHTML +=
    `
    <nav>
    <ul class="flex-around">
      <img class="logo" src="/assets/images/logo-pinterest.png" alt="pinterest-logo">
        <li>Inicio</li>
        <li>Hoy</li>
        <li class="hidden">Crear</li>
    </ul>
  </nav>
  `

}

