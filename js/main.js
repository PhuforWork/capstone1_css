window.onscroll = function () {
  if (window.scrollY > 100) {
    document.getElementById("header").classList.add("header-scroll");
  } else {
    document.getElementById("header").classList.remove("header-scroll");
  }
};
// // 1
// var input = document.getElementById("_rotate");
// var click = document.getElementById("click");
// var a = 0;
// click.onclick = function () {
//   a = a + 1;
//   if (a == 1) {
//     input.classList.add("rotate1");
//   } else {
//     input.classList.remove("rotate1");
//     a = 0;
//   }
// };
// // 2
// var input1 = document.getElementById("_rotate2");
// var click1 = document.getElementById("click1");
// var a = 0;
// click1.onclick = function () {
//   a = a + 1;
//   if (a == 1) {
//     input1.classList.add("rotate1");
//   } else {
//     input1.classList.remove("rotate1");
//     a = 0;
//   }
// };
// // 3
// var input2 = document.getElementById("_rotate3");
// var click2 = document.getElementById("click2");
// var a = 0;
// click2.onclick = function () {
//   a = a + 1;
//   if (a == 1) {
//     input2.classList.add("rotate1");
//   } else {
//     input2.classList.remove("rotate1");
//     a = 0;
//   }
// };
// // 4
// var input3 = document.getElementById("_rotate4");
// var click3 = document.getElementById("click3");
// var a = 0;
// click3.onclick = function () {
//   a = a + 1;
//   if (a == 1) {
//     input3.classList.add("rotate1");
//   } else if (a == 2) {
//     input3.classList.remove("rotate1");
//     a = 0;
//   }
// };
// // 5
// var input4 = document.getElementById("_rotate5");
// var click4 = document.getElementById("click4");
// var a = 0;
// click4.onclick = function () {
//   a = a + 1;
//   if (a == 1) {
//     input4.classList.add("rotate1");
//   } else if (a == 2) {
//     input4.classList.remove("rotate1");
//     a = 0;
//   }
// };
// // 6
// var input5 = document.getElementById("_rotate6");
// var click5 = document.getElementById("click5");
// var a = 0;
// click5.onclick = function () {
//   a = a + 1;
//   if (a == 1) {
//     input5.classList.add("rotate1");
//   } else if (a == 2) {
//     input5.classList.remove("rotate1");
//     a = 0;
//   }
// };

// toggle dark mode
window.onload = function () {
  const themeBtn = document.getElementById("_1st-toggle-btn");
  themeBtn.addEventListener("click", function () {
    // Lấy thuộc tính data-theme
    const root = document.querySelector(":root");
    const isLightMode =
      root.getAttribute("data-theme") === "dark" ? false : true;
    // toggle theme mode
    if (isLightMode) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
    // thay đổi vị trí của button
    this.classList.toggle("active");
  });
};
//
