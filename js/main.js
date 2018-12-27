
jQuery( document ).ready(function($) {
 
 if (window.innerWidth > 560) {
   $('.owl-carousel').owlCarousel({
       loop:true,
       margin:10,
       nav:false,
        responsive:{
            0:{
                items:1,           
            }, 
            560:{
                items:1,           
            }, 
            1000:{
                items:5,                
            }
        }
   });
}
 
  
 
});



var slideIndex = 0;
//showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    console.log(slides)
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
