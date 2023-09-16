const lightbulbSwitch = document.querySelector("#lightbulb-switch");
const lightbulbImage = document.querySelector("#lightbulb-image");

let isLightbulb = false;

lightbulbSwitch.addEventListener("click", function () {
  if (isLightbulb) {
    isLightbulb = false;
    lightbulbImage.src = "off.png";
  } else {
    isLightbulb = true;
    lightbulbImage.src = "on.png";
  }
});
