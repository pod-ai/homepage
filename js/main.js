var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var slides = document.getElementsByClassName('hero-slider-template');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        slides[i].classList.remove('flex-active-slide');
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove('flex-active');
    }
    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].style.opacity = '1';
    slides[slideIndex - 1].classList.add('flex-active-slide');
    dots[slideIndex - 1].classList.add('flex-active');
}
