const keyDisplay = document.getElementById("key");
const keyName = document.getElementById("keyName");
const code = document.getElementById("code");
const keyCode = document.getElementById("KeyCode");

document.addEventListener("keydown", function (event) {
  console.log(event);
  keyDisplay.textContent = event.key;
  keyName.textContent = `Key: ${event.key}`;
  code.textContent = `Code: ${event.code}`;
  keyCode.textContent = `KeyCode: ${event.keyCode}`;
  if (event.key.length > 3) {
    keyDisplay.style.fontSize = "25px";
  } else {
    keyDisplay.style.fontSize = "60px";
  }
});


//JS Completed