const pageSection = document.querySelector("section");
const pageScrolling = document.getElementsByClassName("pageScrolling")[0];
const progresseInPageAdvancement = document.getElementsByClassName(
  "progresseInPageAdvancement"
)[0];
let childPageScrolling;
let currentPage = 1;
const minimumPage = 1;
let isAnimationRunning = false;
let nameAnimationRunning = "";
let isScrollUp = false;
const animationEndUp = "animScrollUp";
const animationEndDown = "animScrollDown";
const animationStartUp = "animStartingUp";
const animationStartDown = "animStartingDown";
const pageContent = {
  1: {
    content: "<h2 class='title titleCenter'>Juice Farmacy</h2>",
    backgroundColor: "#eff3f0",
    pourcentageBar: "0%",
  },
  2: {
    content: "<h2 class='title titleRight'><p>100% </p> Natural</h2>",
    backgroundColor: "#f5f2f1",
    pourcentageBar: "25%",
  },
  3: {
    content: "<h2 class='title titleRight'><p>cold </p> Pressed</h2>",
    backgroundColor: "#f8f5f3",
    pourcentageBar: "50%",
  },
  4: {
    content: "<h2 class='title titleRight'><p>Unpasterised </p> no HHP</h2>",
    backgroundColor: "#f7f6f3",
    pourcentageBar: "75%",
  },
  5: {
    content: "<h2 class='title titleCenter'>Menu</h2>",
    backgroundColor: "#eff3f0",
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
    isScrollUp = event.deltaY < 0;
    if (isScrollUp) {
      if (currentPage !== minimumPage) {
        currentPage -= 1;
        childPageScrolling = pageScrolling.firstElementChild;
        startingAnimation(childPageScrolling, animationEndDown);
      }
      MoveProgressBarBottom();
    } else {
      if (currentPage !== numberPage) {
        currentPage += 1;
        childPageScrolling = pageScrolling.firstElementChild;
        startingAnimation(childPageScrolling, animationEndUp);
      }
      MoveProgressBarBottom();
    }
  }
};

const MoveProgressBarBottom = () => {
  progresseInPageAdvancement.style.width =
    pageContent[currentPage].pourcentageBar;
};

const startingAnimation = (elementHTML, animationClasse) => {
  elementHTML.classList.toggle(animationClasse);
  isAnimationRunning = true;
  elementHTML.addEventListener("animationend", () => {
    newPage();
  });
};

const newPage = () => {
  pageScrolling.innerHTML = pageContent[currentPage].content;
  childPageScrolling = pageScrolling.firstElementChild;
  if (childPageScrolling.classList[0] === animationEndUp) {
    nameAnimationRunning = animationStartUp;
  } else {
    nameAnimationRunning = animationStartDown;
  }
  // on change la coleur de fond
  pageSection.style.backgroundColor = pageContent[currentPage].backgroundColor;
  //on gere l'animation d'arrive
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
