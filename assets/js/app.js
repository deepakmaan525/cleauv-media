let nav = document.getElementById("nav");
let flow = document.querySelector(".sec-flow");
let cross4 = document.querySelector(".cross-4");
let cross5 = document.querySelector(".cross-5");
let cross6 = document.querySelector(".cross-6");
let menuIcon = document.querySelector("#menuIcon");
let home = document.querySelector(".home");
let about = document.querySelector(".about");
let services = document.querySelector(".services");
let pricing = document.querySelector(".pricing");
let faq = document.querySelector(".faq");
let login = document.querySelector(".faq");

menuIcon.addEventListener("click", function () {
    if (nav.classList !== document.querySelector("fix-lft")) {
        nav.classList.toggle("fix-lft");
        flow.classList.toggle("flow-hidden");
        cross4.classList.toggle("cross-1");
        cross5.classList.toggle("cross-2");
        cross6.classList.toggle("cross-3")
    }
});

home.addEventListener("click", function () {
    nav.classList.toggle("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
about.addEventListener("click", function () {
    nav.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
services.addEventListener("click", function () {
    nav.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
pricing.addEventListener("click", function () {
    nav.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
faq.addEventListener("click", function () {
    nav.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

// back to top //
let backToTop = document.getElementById('backToTop')
 backToTop.addEventListener("click", function () {
 window.scrollTo(0, 0,{behavior: 'smooth'})
});
window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        backToTop.classList.remove('display_none');
        backToTop.classList.add('display_block');
    } else {
        backToTop.classList.remove('display_block');
        backToTop.classList.add('display_none');
    }
});