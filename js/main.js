window.onscroll = function () {
  if (window.scrollY > 100) {
    document.getElementById("header").classList.add("header-scroll");
  } else {
    document.getElementById("header").classList.remove("header-scroll");
  }
};
