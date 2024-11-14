import { inputComponent } from "../../components/inputComponent/inputComponent"
import { navComponent } from "../../components/navComponent/navComponent"
import { userComponent } from "../../components/userComponent/userComponent"


export const headerComponent = () => {
  const body = document.querySelector("body")

  body.innerHTML +=
    `
    <header class="flex-around">
  </header>
  `
  navComponent()
  inputComponent()
  userComponent()


}
