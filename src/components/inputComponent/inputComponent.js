import { fetchComponent } from "../../utils/fetchComponent"
import { printCards } from "../../utils/printCards"


export const inputComponent = async () => {
  const header = document.querySelector("header")

  header.innerHTML +=
    `
  <input id="input" class="search-input" placeholder="🔎 Search" type="text">
  `

  const input = document.querySelector("#input")
  let inputValue = ""

  input.addEventListener("change", (e) => {
    inputValue = e.target.value
  })

  const images = await fetchComponent(inputValue).catch((error) => {
    console.error("Error fetching images:", error)
    return []; // Return an empty array if fetch fails
  })

  printCards(images)


}