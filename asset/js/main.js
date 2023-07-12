// FAQ functional Arrow and Display

const faqs = document.querySelectorAll(".faq");

faqs.forEach((singleFaq) => {
  singleFaq.addEventListener("click", function () {
    singleFaq.classList.toggle("show");
    singleFaq.classList.toggle("arrowRotate");
  });
});

// Switch Between Tabs
const tab1 = document.querySelector(".activeTab1");
const tab2 = document.querySelector(".activeTab2");
const tab3 = document.querySelector(".activeTab3");
const txt1 = document.querySelector(".activeBody1");
const txt2 = document.querySelector(".activeBody2");
const txt3 = document.querySelector(".activeBody3");

txt2.style.display = "none";
txt3.style.display = "none";

tab1.addEventListener("click", function () {
  txt1.style.display = "grid";
  txt2.style.display = "none";
  txt3.style.display = "none";
  tab1.classList.add("activeTab1");
  tab2.classList.remove("activeTab2");
  tab3.classList.remove("activeTab3");
});

tab2.addEventListener("click", function () {
  txt1.style.display = "none";
  txt2.style.display = "grid";
  txt3.style.display = "none";
  tab1.classList.remove("activeTab1");
  tab2.classList.add("activeTab2");
  tab3.classList.remove("activeTab3");
});

tab3.addEventListener("click", function () {
  txt1.style.display = "none";
  txt2.style.display = "none";
  txt3.style.display = "grid";
  tab1.classList.remove("activeTab1");
  tab2.classList.remove("activeTab2");
  tab3.classList.add("activeTab3");
});

// Navigation for Responsiveness

const openNav = document.querySelector(".ri-menu-3-line");
const closeNav = document.querySelector(".ri-close-fill");
const navList = document.querySelector("nav ul");

openNav.addEventListener("click", function () {
  navList.style.top = "15%";
  openNav.style.display = "none";
  closeNav.style.display = "block";
});

function closeNavToggler() {
  navList.style.top = "-35%";
  openNav.style.display = "block";
  closeNav.style.display = "none";
}

closeNav.addEventListener("click", function () {
  closeNavToggler();
});

document.querySelectorAll("nav ul a").forEach((navSite) => {
  navSite.addEventListener("click", function () {
    closeNavToggler();
  });
});

// Back to Top Arrow
const arrow = document.querySelector(".ri-arrow-up-s-line");
window.addEventListener("scroll", function () {
  if (
    this.document.documentElement.scrollTop >= 60 ||
    document.body.scrollTop >= 60
  ) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
});

arrow.addEventListener("click", function () {
  document.documentElement.scrollTop = "0";
  document.body.scrollTop = "0";
});
