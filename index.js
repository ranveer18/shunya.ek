const navBar = document.querySelectorAll(".navbar>a>li");
const mainContainer = document.querySelectorAll(
  ".main-container>.row-container"
);
const mainContainerTransform = document.querySelectorAll(".main-container");
// console.log(mainContainer);
console.log(navBar);
let isSeleted = false;
let scrollPosition = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    moveDown();
  }

  //
  if (e.key === "ArrowUp") {
    moveUp();
  }
});

// const mainContainer1 = document.getElementById("row-container-1");
// const mainContainer2 = document.getElementById("row-container-2");
// const mainContainer3 = document.getElementById("row-container-3");
// const mainContainer4 = document.getElementById("row-container-4");

// mainContainer1.addEventListener("mouseenter", () => {
//   moveDown();
// });
// mainContainer2.addEventListener("mouseenter", () => {
//   moveDown();
// });
// mainContainer3.addEventListener("mouseenter", () => {
//   moveDown();
//   // moveUp();
// });
// mainContainer4.addEventListener("mouseenter", () => {
//   moveDown();
//   // moveUp();
// });

// functions declartion

function moveDown() {
  console.log("function call");
  if (!isSeleted) {
    navBar[0].classList.add("show-box");

    mainContainer[0].style.gap = "100px";
    // mainContainerTransform[0].style.transform = `translateY(0px)`;
    scrollPosition = 0;
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
        scrollPosition += 200;

        // console.log(scrollPosition);
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
    mainContainer[navBar.length - 1].style.gap = "100px";
    // mainContainerTransform[
    //   navBar.length - 1
    // ].style.transform = `translateY(0px)`;
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
        scrollPosition -= 200;
        // console.log(scrollPosition);
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
// if (Wrapper.scrollTop === 0) {
//   console.log("move");
//   moveDown();
// }
// const container = document.querySelector(". container");
// console.log(Wrapper.scrollTop);
// container.scrollLeft;
let flag = false;
let oldScroll = 0;

Wrapper.addEventListener("scroll", () => {
  let NavBar = document.getElementById("row-container-1");
  let currentPosition = (NavBar.getBoundingClientRect().top - 200) * -1;
  let screenPosition = window.innerHeight / 20;

  console.log("screen", screenPosition);
  console.log("current", currentPosition);
  if (
    currentPosition >= 5 &&
    currentPosition <= 20 &&
    flag == false &&
    currentPosition - oldScroll
  ) {
    moveDown();
    console.log("call function");

    flag = true;
  } else if (
    currentPosition >= 205 &&
    currentPosition <= 220 &&
    flag == true &&
    currentPosition - oldScroll
  ) {
    moveDown();
    console.log("call function2");
    flag = false;
  } else if (
    currentPosition >= 405 &&
    currentPosition <= 420 &&
    flag == false &&
    currentPosition - oldScroll
  ) {
    moveDown();
    console.log("call function");

    flag = true;
  } else if (
    currentPosition >= 505 &&
    currentPosition <= 520 &&
    flag == true &&
    currentPosition - oldScroll
  ) {
    moveDown();
    console.log("call function2");
    flag = false;
  }

  oldScroll = currentPosition;
  // if (currentPosition > 0 && currentPosition <= 200) {
  //   // if (scrollPosition > 0 && scrollPosition < 200)
  //   // if (!isSeleted) {
  //   // navBar[0].classList.add("show-box");
  //   // mainContainer[0].style.gap = "100px";
  //   // navBar[1].classList.remove("show-box");
  //   // mainContainer[1].style.gap = "0px";
  //   // navBar[2].classList.remove("show-box");
  //   // mainContainer[2].style.gap = "0px";
  //   // navBar[3].classList.remove("show-box");
  //   // mainContainer[3].style.gap = "0px";
  //   // mainContainerTransform[0].style.transform = `translateY(0px)`;
  //   // scrollPosition = 0;
  //   // isSeleted = true;
  //   // return;
  //   // } else {
  //   //   let isRemoved = false;
  //   //   for (let index = 1; index < 2; index++) {
  //   //     // const element = array[index];
  //   //     if (navBar[index].classList.contains("show-box")) {
  //   //       if (navBar[navBar.length - 1].classList.contains("show-box")) {
  //   //         break;
  //   //       }
  //   //       // console.log(navBar[index]);
  //   //       navBar[index].classList.remove("show-box");
  //   //       mainContainer[index].style.gap = "0px";
  //   //       // mainContainerTransform[0].style.transform = `translateY(${
  //   //       //   index * -250
  //   //       // }px)`;
  //   //       mainContainerTransform[0].parentElement.scrollBy(0, 200);
  //   //       scrollPosition += 200;
  //   //       // console.log(scrollPosition);
  //   //       // console.log(index);
  //   //       navBar[index + 1].classList.add("show-box");
  //   //       mainContainer[index + 1].style.gap = "100px";
  //   //       break;
  //   //     }
  //   //     index++;
  //   //   }
  //   // }
  //   // console.log("movedown");
  //   // window.alert("scroll down");
  // }
  // if (currentPosition <= 0 && currentPosition > -200) {
  //   // moveUp();
  //   // console.log("move up");
  //   navBar[0].classList.remove("show-box");

  //   mainContainer[0].style.gap = "0px";
  //   navBar[2].classList.remove("show-box");

  //   mainContainer[2].style.gap = "0px";
  //   navBar[3].classList.remove("show-box");

  //   mainContainer[3].style.gap = "0px";
  //   // if (!isSeleted) {
  //   navBar[1].classList.add("show-box");

  //   mainContainer[1].style.gap = "100px";
  // }
  // if (currentPosition <= -200 && currentPosition > -400) {
  //   // moveUp();
  //   // console.log("move up");
  //   navBar[1].classList.remove("show-box");

  //   mainContainer[1].style.gap = "0px";
  //   navBar[3].classList.remove("show-box");

  //   mainContainer[3].style.gap = "0px";
  //   navBar[3].classList.remove("show-box");

  //   mainContainer[1].style.gap = "0px";
  //   // if (!isSeleted) {
  //   navBar[2].classList.add("show-box");

  //   mainContainer[2].style.gap = "100px";
  //   navBar[0].classList.remove("show-box");

  //   mainContainer[0].style.gap = "0px";
  // }
  // if (currentPosition <= -400 && currentPosition > -600) {
  //   // moveUp();
  //   // console.log("move up");
  //   navBar[2].classList.remove("show-box");

  //   mainContainer[2].style.gap = "  0px";
  //   navBar[0].classList.remove("show-box");

  //   mainContainer[0].style.gap = "0px";
  //   navBar[1].classList.remove("show-box");

  //   mainContainer[1].style.gap = "0px";
  //   // if (!isSeleted) {
  //   navBar[3].classList.add("show-box");

  //   mainContainer[3].style.gap = "100px";
  // }
  // mainContainerTransform[0].style.transform = `translateY(0px)`;
  // scrollPosition = 0;
  // isSeleted = true;
  // return;
  // } else {
  //     let isRemoved = false;

  //     for (let index = 2; index < 3; index++) {
  //       // const element = array[index];
  //       if (navBar[index].classList.contains("show-box")) {
  //         if (navBar[navBar.length - 1].classList.contains("show-box")) {
  //           break;
  //         }

  //         // console.log(navBar[index]);
  //         navBar[index].classList.remove("show-box");
  //         mainContainer[index].style.gap = "0px";
  //         // mainContainerTransform[0].style.transform = `translateY(${
  //         //   index * -250
  //         // }px)`;
  //         mainContainerTransform[0].parentElement.scrollBy(0, 200);
  //         scrollPosition += 200;

  //         // console.log(scrollPosition);
  //         // console.log(index);
  //         navBar[index + 1].classList.add("show-box");
  //         mainContainer[index + 1].style.gap = "100px";

  //         break;
  //       }
  //       index++;
  //     }
  //   }
  // }
  // console.log(e);
});

// document.addEventListener("scroll", (e) => {
//   // window.onscroll = function (e) {
//   // print "false" if direction is down and "true" if up
//   console.log(this.oldScroll > this.scrollY);
//   this.oldScroll = this.scrollY;
//   // };
// });
// let oldScroll = 0;

// Wrapper.onscroll = function (e) {
//   // print "false" if direction is down and "true" if up
//   console.log(oldScroll > this.scrollY);
//   oldScroll = this.scrollY;
//   console.log(Wrapper.scrollY);
// };

// console.log(document.documentElement.scrollTop);
// var lastScrollTop = 0;

// // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// Wrapper.addEventListener(
//   "scroll",
//   function () {
//     // or window.addEventListener("scroll"....
//     if ((this.scrollY = 200)) {
//       console.log("scroll");
//     }
//   },
//   false
// );
