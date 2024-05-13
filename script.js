const navBar = document.querySelector("nav");
const carousal = document.getElementById("projectCarousal");
const carousalNextBtn = document.getElementById("carousalNext");
const carousalPrevBtn = document.getElementById("carousalPrev");
let prevScroll = 50;
const sections = document.querySelectorAll(".catalyst");

window.addEventListener("scroll", () => {
  window.scrollY > prevScroll
    ? (navBar.style.transform = "TranslateY(-100px)")
    : (navBar.style.transform = "TranslateY(0)");
  prevScroll = window.scrollY;
});

const observer = new IntersectionObserver((elements) => {
  elements.forEach((element) => {
    element.isIntersecting && element.target.classList.add("show");
  });
});

sections.forEach((el) => observer.observe(el));

const iscarousalAtEnd = () => {
  if (carousal.scrollLeft + carousal.clientWidth >= carousal.scrollWidth)
    return true;
  else return false;
};

const iscarousalAtStart = () => {
  if (carousal.scrollLeft <= 1) return true;
  else return false;
};

carousal.addEventListener("scrollend", () => {
  carousalNextBtn.classList.remove("disable");
  carousalPrevBtn.classList.remove("disable");
  if (iscarousalAtEnd()) carousalNextBtn.classList.add("disable");
  else if (iscarousalAtStart()) carousalPrevBtn.classList.add("disable");
});

carousalNextBtn.addEventListener("click", () => {
  if (iscarousalAtEnd()) return;
  carousal.scrollLeft += carousal.clientWidth;
});

carousalPrevBtn.addEventListener("click", () => {
  if (iscarousalAtStart()) return;
  carousal.scrollLeft -= carousal.clientWidth;
});
