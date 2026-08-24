const darkModeBtn = document.getElementById("darkModeBtn");
const colorBox = document.getElementById("colorBox");
const hexValue = document.getElementById("hexValue");
const copyBtn = document.getElementById("copyBtn");
const randomBtn = document.getElementById("randomBtn");

const rValue = document.getElementById("rValue");
const redSlider = document.getElementById("redSlider");

const gValue = document.getElementById("gValue");
const greenSlider = document.getElementById("greenSlider");

const bValue = document.getElementById("bValue");
const blueSlider = document.getElementById("blueSlider");

darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

function updateColor() {
  let red = Number(redSlider.value);
  let green = Number(greenSlider.value);
  let blue = Number(blueSlider.value);
  rValue.textContent = red;
  gValue.textContent = green;
  bValue.textContent = blue;
  let hex =
    red.toString(16).padStart(2, "0") +
    green.toString(16).padStart(2, "0") +
    blue.toString(16).padStart(2, "0");

  colorBox.style.backgroundColor = `#${hex}`;
  hexValue.textContent = `#${hex.toUpperCase()}`;
}

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(hexValue.textContent);
  copyBtn.textContent = "Copied!";
  setTimeout(function () {
    copyBtn.textContent = "Copy";
  }, 2000);
});

randomBtn.addEventListener("click", function () {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  redSlider.value = red;
  greenSlider.value = green;
  blueSlider.value = blue;

  updateColor();
});
updateColor();
//JS Completed