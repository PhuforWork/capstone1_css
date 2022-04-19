window.onscroll = function () {
  if (window.scrollY > 100) {
    document.getElementById("header").classList.add("header-scroll");
  } else {
    document.getElementById("header").classList.remove("header-scroll");
  }
};
// 1
var input = document.getElementById("_rotate");
var a = 0;
input.onclick = function () {
  a = a + 1;
  if (a == 1) {
    input.classList.add("rotate1");
  }
  else{
    input.classList.remove("rotate1");
    a=0;
  }
};
// 2
var input1 = document.getElementById("_rotate2");
var a = 0;
input1.onclick = function () {
  a = a + 1;
  if (a == 1) {
    input1.classList.add("rotate1");
  }
  else{
    input1.classList.remove("rotate1");
    a=0;
  }
};
// 3
var input2 = document.getElementById("_rotate3");
var a = 0;
input2.onclick = function () {
  a = a + 1;
  if (a == 1) {
    input2.classList.add("rotate1");
  }
  else{
    input2.classList.remove("rotate1");
    a=0;
  }
};
// 4
var input3 = document.getElementById("_rotate4");
var a = 0;
input3.onclick = function () {
  a = a + 1;
  if (a == 1) {
    input3.classList.add("rotate1");
  }
  else if( a==2){
    input3.classList.remove("rotate1");
    a=0;
  }
};  
// 5
var input4 = document.getElementById("_rotate5");
var a = 0;
input4.onclick = function () {
  a = a + 1;
  if (a == 1) {
    input4.classList.add("rotate1");
  }
  else if( a==2){
    input4.classList.remove("rotate1");
    a=0;
  }
};  