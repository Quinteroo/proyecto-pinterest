import { fetchComponent } from "../../utils/fetchComponent"

export const inputComponent = async () => {
  const header = document.querySelector("header")

  header.innerHTML +=
    `
  <input id="input" class="search-input" placeholder="🔎 Search" type="text">
  `

  const input = document.querySelector("#input")

  input.addEventListener("change", async (e) => {
    inputValue = e.target.value
    const images = await fetchComponent(inputValue)
    console.log(images);
    let inputValue = ""
  })

}
