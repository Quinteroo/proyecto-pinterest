

export const printCards = (array) => {

  const gallery = document.querySelector(".gallery");


  if (array.length > 0) {
    array.forEach((image) => {
      const card = cardComponent(image)
      gallery.appendChild(card);
    });
  } else {
    gallery.innerHTML = "<p>No se encontraron imágenes.</p>";
  }


}