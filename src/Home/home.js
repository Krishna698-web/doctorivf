let navbar = document.getElementById("navbar");

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    navbar.classList.add("menu_scroll");
  } else {
    navbar.classList.remove("menu_scroll");
  }
}
