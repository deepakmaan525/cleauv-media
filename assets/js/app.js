

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