const url = new URL(window.location.href);
console.log(url.pathname);

let menu = document.getElementsByClassName("nav-menu li");
console.log(menu.innerHTML);

if (url == menu) {
  console.log("cheese");
}
