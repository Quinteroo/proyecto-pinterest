
import { fetchComponent } from "../../utils/fetchComponent.js"
import { printCards } from "../../utils/printCards.js"

export const mainComponent = () => {
  const body = document.querySelector("body")

  body.innerHTML +=
    `
  <main>
    <section class="gallery">
    </section>
  </main>
  `

  const images = fetchComponent("animales")
  console.log(images);

  printCards(images)

}
