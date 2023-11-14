$(document).ready(function(){
    $('.clientes-logo').slick({
        dots: false,
        infinite: true,
        autoplaySpeed: 1600,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
})
var prevScrollpos = window.scrollY;
var navbar = document.getElementById("navbar");
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  const minSize = window.matchMedia("(min-width: 992px)")
  const mobileSize = window.matchMedia("(max-width: 768px)")
  if (minSize.matches){
    if (currentScrollPos > 100) {
      navbar.style.backgroundColor = "#FED621";
    } else {
      navbar.style.backgroundColor = "";
    }
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-200px";
    }
  
    prevScrollpos = currentScrollPos;
  }
  if (mobileSize.matches){
    navbar.style.top = "0";
  }
}
var nombre = document.querySelector('#nombre').value;
var mensaje = document.querySelector('#mensaje').value;
var whatsappMessage = 'Hola, mi nombre es ' + nombre + '\n\n' + mensaje;

document.getElementById("enviar").addEventListener("click", function(){
  window.open('https://wa.me/5491155555555?text=' + whatsappMessage, '_blank');
})
