import "./inputComponent.css"
import { fetchComponent } from "../../utils/fetchComponent"

export const inputComponent = async () => {
  const header = document.querySelector("header")

  const input = document.createElement("input")
  input.classList.add("search-input")
  input.placeholder = "🔎 Search"
  input.type = "text"

  header.appendChild(input)

  input.addEventListener("change", async (e) => {
    let inputValue = e.target.value;
    const images = await fetchComponent(inputValue)
    input.value = "";
  });
}
