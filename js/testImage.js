fetch("./js/position.json")
  .then((blob) => blob.json())
  .then((result) => {
    callBackJson(result);
  });

const callBackJson = (result) => {
  //je parcout le json
  for (const i in result) {
    console.log(result[i]);
    creatDiv(result[i], i);
  }
};

const creatDiv = (obj, name) => {
  const divElement = document.createElement("div");
  document.body.appendChild(divElement);
  divElement.innerHTML = "<p>" + name + "</p>";
  divElement.innerHTML += `<img src='./img/iconeSite.png' style='object-position:-${obj.x}px -${obj.y}px;' width='${obj.w}px' height='${obj.h}px'>`;
};
