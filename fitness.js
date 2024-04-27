// JavaScript for simple slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
document.querySelector('.marquee').addEventListener('mouseenter', function() {
    this.classList.add('paused');
  });
  
  document.querySelector('.marquee').addEventListener('mouseleave', function() {
    this.classList.remove('paused');
  });

  function open(){
    window.location.href("contact.html")
  }