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
    moveUp();
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
        // mainContainerTransform[0].style.transform = `translateY(${
        //   index * -250
        // }px)`;
        mainContainerTransform[0].parentElement.scrollBy(0, 200);

        // console.log(index);
        navBar[index + 1].classList.add("show-box");
        mainContainer[index + 1].style.gap = "100px";

        break;
      }
    }
  }
}

function moveUp() {
  if (!isSeleted) {
    navBar[navBar.length - 1].classList.add("show-box");
    mainContainer[navBar.length - 1].style.gap = "0px";
    // mainContainerTransform[
    //   navBar.length - 1
    // ].style.transform = `translateY(0px)`;
    mainContainerTransform[0].parentElement.scrollTo(
      0,
      navBar.length - 1 - 200
    );

    isSeleted = false;
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
        // mainContainerTransform[0].style.transform = `translateY(${
        //   index * -50
        // }px)`;
        mainContainerTransform[0].parentElement.scrollBy(0, -200);

        // console.log(index);
        navBar[index - 1].classList.add("show-box");
        mainContainer[index - 1].style.gap = "100px";

        break;
      }
    }
  }
}

//
// function showCoords(event) {
//   var x = event.clientX;
//   var coor = "X coords: " + x + ", Y coords: " + y;
//   console.log(coor);
// }
//
// const NavBar = document.getElementById("row-container-1");
// const mainContainer1 = document.getElementById("main-container");
// const mainContainer2 = document.getElementById("main-container");

// // NavBar.addEventListener("mouseenter", function () {
// showCoords();

// console.log("scrolled");
// // });
// function showCoords(event) {
//   var x = event.clientX;
//   var y = event.clientY;
//   var coor = "X coords: " + x + ", Y coords: " + y;
//   console.log(coor);

//   console.log(y);
//   if (true) {
//     if (y > 400 && y < 410) {
//       console.log("scroll");
//       mainContainer1.scrollIntoView({
//         behavior: "smooth",
//         block: "end",
//         inline: "nearest",
//       });
//     }
//   }
//   // if (y > 720 && y < 730) {
//   //   console.log("scroll");
//   //   mainContainer1.scrollIntoView({
//   //     behavior: "smooth",
//   //     block: "end",
//   //     inline: "nearest",
//   //   });
//   // }
// }
const Wrapper = document.getElementById("wrapper");
Wrapper.addEventListener("scroll", () => {
  let NavBar = document.getElementById("row-container-1");
  let currentPosition = NavBar.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 20;
  console.log("screen", screenPosition);
  console.log("current", currentPosition);
  if (currentPosition < screenPosition) {
    // moveDown();
    // window.alert("scroll down");
  } else {
    // movdeUp();
  }
  // console.log(e);
});
