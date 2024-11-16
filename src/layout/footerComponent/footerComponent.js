import "./footerComponent.css"

export const footerComponent = () => {
  const body = document.querySelector("body")

  body.innerHTML += `
    <footer>
     <p>Proyecto galería Pinterest con unsPlashAPI</p>
    </footer>
  `
}