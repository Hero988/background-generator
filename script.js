// selects the h3 element from the index.html
var css = document.querySelector("h3");
// selects the color1 class
var color1 = document.querySelector(".color1");
// selects the color2 class
var color2 = document.querySelector(".color2");
// selects the body element by the gradient id
var body = document.getElementById("gradient");

function setGradient () {
   // changed the gradient of the background
   body.style.background = "linear-gradient(to right, " 
    + color1.value + ", " + color2.value + ")";
    // adds the name of the css background
    css.textContent = body.style.background + ";";
}

// adds an event listern so when the input changes a function happens
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);