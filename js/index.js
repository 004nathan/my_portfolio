let navs = document.querySelectorAll(".nav_li");
navs.forEach((ele) => {
  ele.addEventListener("click", () => {
    removeActive();
    ele.classList.add("active");
  });
});

function removeActive() {
  navs.forEach((ele) => {
    ele.classList.remove("active");
  });
}
