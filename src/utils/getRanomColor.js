export function getRandomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  while (randomColor.length < 6) {
    randomColor = "0" + randomColor;
  }

  return `#${randomColor}`;
}

