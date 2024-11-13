

export const headerComponent = (nav1, input, nav2) => {
  const body = document.querySelector("body")

  body.innerHTML +=
    `
    <header class="flex-around">
    ${nav1}
    ${input}
    ${nav2}
  </header>
  `
}
