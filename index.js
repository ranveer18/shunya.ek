const navBar = document.querySelectorAll(".navbar>a>li");
const mainContainer = document.querySelectorAll(
  ".main-container>.row-container"
);
const mainContainerTransform = document.querySelectorAll(".main-container");
// console.log(mainContainer);
console.log(navBar);
let isSeleted = false;
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    moveDown();
  }

  //
  if (e.key === "ArrowUp") {
    movdeUp();
  }
});

// functions declartion

function moveDown() {
  if (!isSeleted) {
    navBar[0].classList.add("show-box");

    mainContainer[0].style.gap = "100px";
    mainContainerTransform[0].style.transform = `translateY(0px)`;
    isSeleted = true;
    return;
  } else {
    let isRemoved = false;

    for (let index = 0; index < navBar.length; index++) {
      // const element = array[index];
      if (navBar[index].classList.contains("show-box")) {
        if (navBar[navBar.length - 1].classList.contains("show-box")) {
          break;
        }

        // console.log(navBar[index]);
        navBar[index].classList.remove("show-box");
        mainContainer[index].style.gap = "0px";
        mainContainerTransform[0].style.transform = `translateY(${
          index * -250
        }px)`;

        // console.log(index);
        navBar[index + 1].classList.add("show-box");
        mainContainer[index + 1].style.gap = "100px";

        break;
      }
    }
  }
}

function movdeUp() {
  if (!isSeleted) {
    navBar[navBar.length - 1].classList.add("show-box");
    mainContainer[navBar.length - 1].style.gap = "00px";
    mainContainerTransform[
      navBar.length - 1
    ].style.transform = `translateY(0px)`;

    isSeleted = true;
    return;
  } else {
    let isRemoved = false;

    for (let index = navBar.length - 1; index >= 0; index--) {
      // const element = array[index];
      if (navBar[index].classList.contains("show-box")) {
        if (navBar[0].classList.contains("show-box")) {
          break;
        }

        // console.log(navBar[index]);
        navBar[index].classList.remove("show-box");
        mainContainer[index].style.gap = "0px";
        mainContainerTransform[0].style.transform = `translateY(${
          index * -50
        }px)`;

        // console.log(index);
        navBar[index - 1].classList.add("show-box");
        mainContainer[index - 1].style.gap = "100px";

        break;
      }
    }
  }
}
