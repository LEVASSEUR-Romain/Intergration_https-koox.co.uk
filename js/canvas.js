import { Placement } from "./Placement.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let Json = {};
let img = new Image();
let nameOnJson = "";
const defaultWidth = 1024;
const defaultHeight = 768;

//position start
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

fetch("./js/position.json")
  .then((blob) => blob.json())
  .then((result) => {
    callBackJson(result);
  });

const callBackJson = (result) => {
  Json = result;
  img.src = "./img/iconeSite.png";
  img.addEventListener("load", () => {
    putImage(result);
  });
};

const putImage = (json) => {
  const page = 1;
  if (window.innerWidth > defaultWidth || window.innerHeight > defaultHeight) {
    ctx.scale(pourcentageScale("x"), pourcentageScale("y"));
    for (const i in Placement[page]) {
      nameOnJson = Placement[page][i].name;
      ctx.drawImage(
        img,
        json[nameOnJson].x,
        json[nameOnJson].y,
        json[nameOnJson].w,
        json[nameOnJson].h,
        Placement[page][i].canvasX + calculAdd("x"),
        Placement[page][i].canvasY + calculAdd("y"),
        json[nameOnJson].w,
        json[nameOnJson].h
      );
    }
  } else {
    for (const i in Placement[page]) {
      nameOnJson = Placement[page][i].name;
      ctx.drawImage(
        img,
        json[nameOnJson].x,
        json[nameOnJson].y,
        json[nameOnJson].w,
        json[nameOnJson].h,
        Placement[page][i].canvasX - calculDifference("x"),
        Placement[page][i].canvasY - calculDifference("y"),
        json[nameOnJson].w,
        json[nameOnJson].h
      );
    }
  }
};

const changeSize = () => {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  putImage(Json);
};
window.addEventListener("resize", changeSize);

const calculDifference = (xOrY) => {
  if (xOrY === "x") {
    if (defaultWidth > window.innerWidth) {
      return (defaultWidth - window.innerWidth) / 2;
    } else {
      return 0;
    }
  } else {
    if (defaultHeight > window.innerHeight) {
      return (defaultHeight - window.innerHeight) / 2;
    } else {
      return 0;
    }
  }
};

const pourcentageScale = (xOrY) => {
  if (xOrY === "x") {
    if (window.innerWidth > defaultWidth) {
      return 1 + (window.innerWidth - defaultWidth) / window.innerWidth;
    } else {
      return 1;
    }
  } else {
    if (window.innerHeight > defaultHeight) {
      return 1 + (window.innerHeight - defaultHeight) / window.innerHeight;
    } else {
      return 1;
    }
  }
};

const calculAdd = (xOrY) => {
  if (xOrY === "x") {
    if (window.innerWidth > defaultWidth) {
      return (window.innerWidth - defaultWidth) / 6;
    } else {
      return 0;
    }
  } else {
    if (window.innerHeight > defaultHeight) {
      return -5;
    } else {
      return 0;
    }
  }
};
// timer requestID = window.requestAnimationFrame(callback);

/* let requestID = window.requestAnimationFrame(callback);

function callback() {
  console.log("coucou");
  requestID = window.requestAnimationFrame(callback);
} */

//window.cancelAnimationFrame(requestID);
