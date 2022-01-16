const li1 = document.getElementById("li-1");
const box = document.getElementById("row-container-1");
const rowContainer1 = document.getElementById("row-container-1");
const rowContainer2 = document.getElementById("row-container-2");
const rowCard1 = document.getElementById("card1");
const rowCard2 = document.getElementById("card2");
const some1 = document.getElementById("some1");
const some2 = document.getElementById("some2");
const some3 = document.getElementById("some3");
const some4 = document.getElementById("some4");

const box1 = document.getElementById("row-container-1");

// console.log(rowCard1);
li1.addEventListener("mouseenter", function () {
  box.style.gap = "100px";
});
li1.addEventListener("mouseleave", function () {
  box.style.gap = "0px";
});

rowCard1.addEventListener("mouseenter", function () {
  box.style.gap = "100px";
  box2.style.gap = "0px";
  //   rowCard1.style.transform = "rotateY(2deg)";
});
rowCard2.addEventListener("mouseenter", function () {
  box2.style.gap = "100px";
  box.style.gap = "0px";
});

// 2 row
const li2 = document.getElementById("li-2");
const box2 = document.getElementById("row-container-2");

li2.addEventListener("mouseenter", function () {
  box2.style.gap = "100px";
});
li2.addEventListener("mouseleave", function () {
  box2.style.gap = "0px";
});

//3row

const li3 = document.getElementById("li-3");
const box3 = document.getElementById("row-container-3");

li3.addEventListener("mouseenter", function () {
  box3.style.gap = "100px";
});
li3.addEventListener("mouseleave", function () {
  box3.style.gap = "0px";
});

//4row

const li4 = document.getElementById("li-4");
const box4 = document.getElementById("row-container-4");

li4.addEventListener("mouseenter", function () {
  box4.style.gap = "100px";
});
li4.addEventListener("mouseleave", function () {
  box4.style.gap = "0px";
});

//

// arrows
// const navbarChild = document.querySelectorAll(".navbar>*");
// window.addEventListener("keydown", (event) => {
//   //
//   if (event.key === "ArrowDown") {
//     let flag = false;
//     let firstChildFlag = false;

//     if (!firstChildFlag) {
//       navbarChild[0].classList.add("show-box");
//       firstChildFlag === true;
//     }
//     navbarChild.forEach((item) => {
//       console.log("het");
//       if (flag) {
//         item.classList.add("show-box");
//         flag === false;
//         firstChildFlag === true;
//       }
//       if (item.classList.contains("show-box")) {
//         item.classList.remove("show-box");
//         flag === true;
//         firstChildFlag === true;
//       }
//     });

// some2.classList.add("show-box");
// some1.classList.remove("show-box");
// some3.classList.remove("show-box");
// some4.classList.remove("show-box");

// box2.style.gap = "100px";
// box1.style.gap = "0px";
// box3.style.gap = "0px";
// box4.style.gap = "0px";
// }
// } else if (event.key === "ArrowUp") {
//   some1.classList.add("show-box");
//   some2.classList.remove("show-box");
//   some3.classList.remove("show-box");
//   some4.classList.remove("show-box");

//   box1.style.gap = "100px";
//   box2.style.gap = "0px";
//   box3.style.gap = "0px";
//   box4.style.gap = "0px";
// } else if (event.key === "ArrowRight") {
//   some1.classList.remove("show-box");
//   some2.classList.remove("show-box");
//   some3.classList.add("show-box");
//   some4.classList.remove("show-box");

//   box1.style.gap = "0px";
//   box2.style.gap = "0px";
//   box3.style.gap = "100px";
//   box4.style.gap = "0px";
// } else if (event.key === "ArrowLeft") {
//   some1.classList.remove("show-box");
//   some2.classList.remove("show-box");
//   some3.classList.remove("show-box");
//   some4.classList.add("show-box");
//   box1.style.gap = "0px";
//   box2.style.gap = "0px";
//   box3.style.gap = "0px";
//   box4.style.gap = "100px";
// }
// });

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
        // console.log(index);
        navBar[index - 1].classList.add("show-box");
        break;
      }
    }
  }
}
