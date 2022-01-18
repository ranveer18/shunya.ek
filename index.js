const navBar = document.querySelectorAll(".navbar>a>li");
const mainContainer = document.querySelectorAll(
  ".main-container>.row-container"
);
const mainContainerTransform = document.querySelectorAll(".main-container");
console.log(navBar);
let isSeleted = false;
let scrollPosition = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    moveDown();
  }
  if (e.key === "ArrowUp") {
    moveUp();
  }
});
//  Arrow down
function moveDown() {
  console.log("function call");
  if (!isSeleted) {
    navBar[0].classList.add("show-box");

    mainContainer[0].style.gap = "100px";
    scrollPosition = 0;
    isSeleted = true;
    return;
  } else {
    let isRemoved = false;

    for (let index = 0; index < navBar.length; index++) {
      if (navBar[index].classList.contains("show-box")) {
        if (navBar[navBar.length - 1].classList.contains("show-box")) {
          break;
        }

        navBar[index].classList.remove("show-box");
        mainContainer[index].style.gap = "0px";
        mainContainerTransform[0].parentElement.scrollBy(0, 200);
        scrollPosition += 200;
        navBar[index + 1].classList.add("show-box");
        mainContainer[index + 1].style.gap = "100px";

        break;
      }
    }
  }
}
// Arrow Up
function moveUp() {
  if (!isSeleted) {
    navBar[navBar.length - 1].classList.add("show-box");
    mainContainer[navBar.length - 1].style.gap = "100px";

    mainContainerTransform[0].parentElement.scrollTo(
      0,
      (navBar.length - 1) * 200
    );
    console.log(navBar.length);

    isSeleted = true;
    scrollPosition = (navBar.length - 1) * 200;

    return;
  } else {
    let isRemoved = false;

    for (let index = navBar.length - 1; index >= 0; index--) {
      if (navBar[index].classList.contains("show-box")) {
        if (navBar[0].classList.contains("show-box")) {
          break;
        }
        navBar[index].classList.remove("show-box");
        mainContainer[index].style.gap = "0px";

        mainContainerTransform[0].parentElement.scrollBy(0, -200);
        scrollPosition -= 200;

        navBar[index - 1].classList.add("show-box");
        mainContainer[index - 1].style.gap = "100px";

        break;
      }
    }
  }
}
// function show box
function showBox(currentIndex, otherindex1, otherindex2, otherindex3) {
  // currentIndex
  navBar[currentIndex].classList.add("show-box");
  mainContainer[currentIndex].style.gap = "100px";
  // Other indexes
  navBar[otherindex1].classList.remove("show-box");
  mainContainer[otherindex1].style.gap = "0px";
  navBar[otherindex2].classList.remove("show-box");
  mainContainer[otherindex2].style.gap = "0px";
  navBar[otherindex3].classList.remove("show-box");
  mainContainer[otherindex3].style.gap = "0px";
}

//  Mouse scroll
const Wrapper = document.getElementById("wrapper");
Wrapper.addEventListener("scroll", () => {
  let NavBar = document.getElementById("row-container-1");
  let currentPosition = (NavBar.getBoundingClientRect().top - 200) * -1;
  if ((currentPosition > 0 && currentPosition < 50) || currentPosition === 0) {
    showBox(0, 1, 2, 3);
  }
  if (
    (currentPosition < 300 && currentPosition >= 250) ||
    currentPosition === 200
  ) {
    showBox(1, 0, 2, 3);
  }
  if (
    (currentPosition > 410 && currentPosition <= 500) ||
    currentPosition === 400
  ) {
    showBox(2, 1, 0, 3);
  }
  if (currentPosition >= 511 || currentPosition === 600) {
    showBox(3, 1, 2, 0);
  }
});

// mouse movement

window.addEventListener("mousemove", function () {
  function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    console.log(coords);
    if (y > 0 && y <= 400) {
      scrollPosition = 0;

      showBox(0, 1, 2, 3);
      Wrapper.scrollBy(0, -200);
    }
    if (y > 401 && y <= 600) {
      scrollPosition = 0;

      showBox(1, 0, 2, 3);
      Wrapper.scrollBy(0, 0);
    }
    if (y > 601 && y <= 800) {
      scrollPosition = 0;

      showBox(2, 1, 0, 3);
      Wrapper.scrollBy(0, 200);
    }
    if (y >= 801) {
      scrollPosition = 0;

      showBox(3, 0, 2, 1);
      Wrapper.scrollBy(0, 400);
    }
  }
  showCoords(event);
});
