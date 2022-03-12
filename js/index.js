const pageSection = document.querySelector("section");
const pageScrolling = document.getElementsByClassName("pageScrolling")[0];
const progresseInPageAdvancement = document.getElementsByClassName(
  "progresseInPageAdvancement"
)[0];
let childPageScrolling;
const animationDurationInMs = 500;
let currentPage = 1;
let isAnimationRunning = false;
let nameAnimationRunning = "";
const animationEndUp = "animScrollUp";
const animationEndDown = "animScrollDown";
const animationStartUp = "animStartingUp";
const animationStartDown = "animStartingDown";
const pageContent = {
  1: {
    content: "<h2>Juice Farmacy</h2>",
    pourcentageBar: "0%",
  },
  2: {
    content: "<h2>100% Natural</h2>",
    pourcentageBar: "25%",
  },
  3: {
    content: "<h2>col Pressed</h2>",
    pourcentageBar: "50%",
  },
  4: {
    content: "<h2>Unpasterised no HHP</h2>",
    pourcentageBar: "75%",
  },
  5: {
    content: "<h2>Menu</h2>",
    pourcentageBar: "100%",
  },
};
const numberPage = Object.keys(pageContent).length;
const pourcentageAdvancement = Math.ceil(100 / (numberPage - 1));
window.addEventListener("wheel", (e) => {
  e.preventDefault();
  changePage(e);
});

const changePage = (event) => {
  if (!isAnimationRunning) {
    // scroll haut
    if (event.deltaY < 0) {
      if (currentPage !== 1) {
        currentPage -= 1;
        childPageScrolling = pageScrolling.firstElementChild;
        startingAnimation(childPageScrolling, animationEndDown);
      }
      progresseInPageAdvancement.style.width =
        pageContent[currentPage].pourcentageBar;
    }
    //scroll bas
    else {
      if (currentPage !== numberPage) {
        currentPage += 1;
        childPageScrolling = pageScrolling.firstElementChild;
        startingAnimation(childPageScrolling, animationEndUp);
      }
      progresseInPageAdvancement.style.width =
        pageContent[currentPage].pourcentageBar;
    }
  }
};

const startingAnimation = (elementHTML, animationClasse) => {
  elementHTML.classList.toggle(animationClasse);
  isAnimationRunning = true;
  setTimeout(newPage(animationClasse), animationDurationInMs);
};

const newPage = (classeSting) => {
  pageScrolling.innerHTML = pageContent[currentPage].content;
  childPageScrolling = pageScrolling.firstElementChild;
  if (classeSting === animationEndUp) {
    nameAnimationRunning = animationStartDown;
  } else {
    nameAnimationRunning = animationStartUp;
  }
  childPageScrolling.classList.toggle(nameAnimationRunning);
  childPageScrolling.addEventListener("animationend", () => {
    deleteClass(nameAnimationRunning);
  });
};

const deleteClass = (classeName) => {
  childPageScrolling = pageScrolling.firstElementChild;
  childPageScrolling.classList.remove(classeName);
  isAnimationRunning = false;
};
