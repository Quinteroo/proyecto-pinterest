
import { accessKey, UNSPLASHAPI_URL } from "../../utils/api.js"


export const mainComponent = () => {
  const body = document.querySelector("body")

  body.innerHTML +=
    `
  <main>
    <section class="gallery">
    </section>
  </main>
  `


  fetch(`${UNSPLASHAPI_URL}?query=animales&client_id=${accessKey}`)
    .then((res) => res.json())
    .then((res) => console.log(res))


}