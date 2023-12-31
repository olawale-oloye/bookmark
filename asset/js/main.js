const form = document.querySelector("form");
const formValidatorModal = document.querySelector(".form-validation-modal-bg");
const errorText = document.querySelector(".form-validation-modal p");
const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
  tab1.classList.add("selectedTab");
  tab2.classList.remove("selectedTab");
  tab3.classList.remove("selectedTab");
});

tab2.addEventListener("click", function () {
  txt1.style.display = "none";
  txt2.style.display = "grid";
  txt3.style.display = "none";
  tab1.classList.remove("selectedTab");
  tab2.classList.add("selectedTab");
  tab3.classList.remove("selectedTab");
});

tab3.addEventListener("click", function () {
  txt1.style.display = "none";
  txt2.style.display = "none";
  txt3.style.display = "grid";
  tab1.classList.remove("selectedTab");
  tab2.classList.remove("selectedTab");
  tab3.classList.add("selectedTab");
});

// Navigation for Responsiveness

const openNav = document.querySelector(".ri-menu-3-line");
const closeNav = document.querySelector(".ri-close-fill");
const navList = document.querySelector("nav ul");

openNav.addEventListener("click", function () {
  navList.style.top = 0;
  openNav.style.display = "none";
  closeNav.style.display = "block";
});

function closeNavToggler() {
  navList.style.top = "-150%";
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

// closeModalButton.addEventListener("click", function () {
//   formValidatorModal.style.display = "none";
// });

function alertInfo(alertTxt) {
  formValidatorModal.style.display = "flex";
  errorText.textContent = alertTxt;
  form.formEmail.value = "";
}

// Form Validation
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(form.formEmail.value);
  const emailValue = form.formEmail.value;
  if (emailValue === "") {
    alertInfo("Whoops, make sure it is an email");
  } else if (!emailRegEx.test(emailValue)) {
    alertInfo("Please, provide a valid email address");
  } else {
    formValidatorModal.style.display = "flex";
    alertInfo("You have succesffully subscribe for the weekly newsletter");
  }
});

formValidatorModal.addEventListener("click", function (e) {
  if (e.target.classList.contains("close-modal")) {
    formValidatorModal.style.display = "none";
  }
});
