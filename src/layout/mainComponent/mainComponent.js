import { fetchComponent } from "../../utils/fetchComponent.js";

export const mainComponent = async () => {
  const body = document.querySelector("body")

  body.innerHTML +=
    `
  <main>
    <section class="gallery">
    </section>
  </main>
  `


  const images = await fetchComponent("things");
  console.log(images);

}
