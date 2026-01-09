const end = "-------------END--------------"
console.log(end);


  //Cambiar de imagen con un click
let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "/JS/IMG/SlickoLogoColoresName.svg") {
    miImage.setAttribute("src", "/JS/IMG/SlickoLogoName.svg");
  } else {
    miImage.setAttribute("src", "/JS/IMG/SlickoLogoName.svg");
  }
};

const imagen = document.querySelector("img");

imagen.style.margin = "0 auto";
imagen.style.borderRadius = "50px";
imagen.style.padding = "10px";
imagen.style.fontSize = "15px";
imagen.style.fontFamily = "ui";
imagen.style.display = "flex";
imagen.style.justifyContent = "center";
imagen.style.alignItems = "center";


  //Cambiar el diseño de un boton de css desde JS
const element = document.querySelector("button"); 
element.style.border = "2px";
element.style.borderRadius = "50px";
element.style.padding = "10px";
element.style.fontSize = "15px";
element.style.fontFamily = "ui";
element.style.display = "flex";
element.style.justifyContent = "center";
element.style.alignItems = "center";
element.style.margin = "0 auto";
element.style.background = "black";
element.style.color = "white";

element.addEventListener("mouseover", () => {
  element.style.backgroundColor = "white";
  element.style.color = "black";
  element.style.transition = "0.1s";
  element.style.cursor = "pointer";
});

element.addEventListener("mouseout", () => {
  element.style.border = "2px";
  element.style.borderRadius = "50px";
  element.style.padding = "10px";
  element.style.fontSize = "15px";
  element.style.fontFamily = "ui";
  element.style.display = "flex";
  element.style.justifyContent = "center";
  element.style.alignItems = "center";
  element.style.margin = "0 auto";
  element.style.background = "black";
  element.style.color = "white";
});

  //Element a (link)
var link = document.getElementById("myLink");
  link.style.textDecoration = "none";