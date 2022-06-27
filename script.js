let slideIndex = 1;
showSlides(slideIndex);

function plus(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");

  let thumb = document.getElementsByClassName("demo");
  let caption = document.getElementById("text");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumb.length; i++) {
    thumb[i].className = thumb[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  thumb[slideIndex - 1].className += " active";
  caption.innerHTML = thumb[slideIndex - 1].alt;
}
