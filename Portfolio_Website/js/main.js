//Open and Close Form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//Displays the first image on slideshow on load
var slideIndex = 1;
showSlides(slideIndex);

//Changes slide when an arrow is pressed
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Changes slide when dots are pressed
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    //Initiating vars based on the classes slides and dots
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    //If the number passed is greater than array set to 1
    if (n > slides.length) {slideIndex = 1};
    //If it's greater than, set to the length of slides
    if (n < 1) {slideIndex = slides.length};
    //sets each item to none
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //removing active styling from dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //Setting active slide and dots
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}