//=========================================================================================
const menu = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
// =========================================================================================
const btnSosial = document.querySelector("#sosial-media-btn");
const contenSosial = document.querySelector("#sosial-media");
const logoRight = document.querySelector("#logo-right");
const logoDown = document.querySelector("#logo-down");

btnSosial.addEventListener("click", function () {
  contenSosial.classList.toggle("hidden");
  logoRight.classList.toggle("hidden");
  logoDown.classList.toggle("hidden");
});
// ==========================================================================================
const programBtn = document.querySelector("#pemograman-btn");
const contenProgram = document.querySelector("#conten-pemograman");
const logo2Right = document.querySelector("#logo2-right");
const logo2Down = document.querySelector("#logo2-down");

programBtn.addEventListener("click", function () {
  contenProgram.classList.toggle("hidden");
  logo2Right.classList.toggle("hidden");
  logo2Down.classList.toggle("hidden");
});
//===========================================================================================
const lgBtn = document.querySelector("#lgbtn");
const lgConten = document.querySelector("#lgprogram");
const btnLg1Right = document.querySelector("#btnlg1");
const btnLg2Down = document.querySelector("#btnlg2");

lgBtn.addEventListener("click", function () {
  lgConten.classList.toggle("hidden");
  btnLg1Right.classList.toggle("hidden");
  btnLg2Down.classList.toggle("hidden");
});
//============================================================================================
const lgsosial = document.querySelector("#lgsoaialmedia");
const lgBtnSosial = document.querySelector("#lgbtnsosial");
const lgRight = document.querySelector("#btnright");
const lgDown = document.querySelector("#btndown");

lgBtnSosial.addEventListener("click", function () {
  lgsosial.classList.toggle("hidden");
  lgDown.classList.toggle("hidden");
  lgRight.classList.toggle("hidden");
});

//kode ke portofolio dan sebaliknya versi mobile
const portofolioBtn = document.querySelector("#portofolio-btn");
const porsee = document.querySelector("#por-see");
const porhidden = document.querySelector("#por-hidden");
const homeConten = document.querySelector("#home");
const portofolio = document.querySelector("#portofolio-conten");

portofolioBtn.addEventListener("click", function () {
  homeConten.classList.toggle("hidden");
  porsee.classList.toggle("hidden");
  porhidden.classList.toggle("hidden");
  portofolio.classList.toggle("hidden");
});

// kode ke fortofolio dan sebaliknya versi dekstop
const pnd = document.querySelector("#btn-navdekstop");
const bdp = document.querySelector("#btn-dekstoppor");
const bdh = document.querySelector("#btn-dekstophome");

pnd.addEventListener("click", function () {
  bdh.classList.toggle("hidden");
  bdp.classList.toggle("hidden");
  portofolio.classList.toggle("hidden");
  homeConten.classList.toggle("hidden");
});

// nav menu

// kode header portofolo
window.onscroll = function () {
  const header = document.querySelector("#header-portofolio");
  const fixedHeader = header.offsetTop;

  if (window.pageYOffset > fixedHeader) {
    header.classList.add("header-fortofolio");
  } else {
    header.classList.remove("header-fortofolio");
  }
};

// kode header activer portofolio

const pnb = document.querySelector("#portofolio-navbtn");
const pbtn1 = document.querySelector("#portofolio-navsee");
const pbtn2 = document.querySelector("#portofolio-navhidden");
const pnm = document.querySelector("#header-navmenu");

pnb.addEventListener("click", function () {
  pbtn1.classList.toggle("hidden");
  pbtn2.classList.toggle("hidden");
  pnm.classList.toggle("header-active");
});
