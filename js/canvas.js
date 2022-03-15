const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const conteneurCanvas = document.getElementById("conteneurCanvas");
canvas.width = conteneurCanvas.clientWidth;
canvas.height = conteneurCanvas.clientHeight;
let img = new Image(); // Crée un nouvel élément Image
img.src = "./img/iconeSite.png"; // Définit le chemin vers sa source

//  ctx.drawImage(image, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur);
// sx sy sur l'image , slargeur  image source
//dx dy c'est sur le canvas avec une hauteur et largueur
img.addEventListener("load", function () {
  //ctx.drawImage(img, 1156, 380, 212, 156);
  ctx.drawImage(img, 0, 588, 228, 197, 114, 98, 256, 197);
  // test 1
  ctx.drawImage(
    img,
    positionImg[1].test.x,
    positionImg[1].test.y,
    positionImg[1].test.w,
    positionImg[1].test.l,
    0,
    0,
    positionImg[1].test.w,
    positionImg[1].test.l
  );
  //test2
  ctx.drawImage(
    img,
    positionImg[1].test2.x,
    positionImg[1].test2.y,
    positionImg[1].test2.w,
    positionImg[1].test2.l,
    0,
    0,
    positionImg[1].test2.w,
    positionImg[1].test2.l
  );
});

// timer requestID = window.requestAnimationFrame(callback);

/* let requestID = window.requestAnimationFrame(callback);

function callback() {
  console.log("coucou");
  requestID = window.requestAnimationFrame(callback);
} */

//window.cancelAnimationFrame(requestID);
