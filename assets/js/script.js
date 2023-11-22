$(document).ready(function(){
    $('.clientes-logo').slick({
        dots: false,
        infinite: true,
        autoplaySpeed: 1600,
        slidesToShow: 6,
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

const imageOne = document.getElementById("posicionamiento-img")

document.getElementById("posicionamiento").addEventListener("mouseover", function(){
  imageOne.src = 'Posicionamiento Negro.png';
});

document.getElementById("posicionamiento").addEventListener("mouseout", function(){
  imageOne.src = 'Posicionamiento Blanco.png';
});

const imageTwo = document.getElementById("ads-img")

document.getElementById("ads").addEventListener("mouseover", function(){
  imageTwo.src = 'Ads negro.png';
});

document.getElementById("ads").addEventListener("mouseout", function(){
  imageTwo.src = 'Ads Blanco.png';
});

const imageThree = document.getElementById("design-img")

document.getElementById("design").addEventListener("mouseover", function(){
  imageThree.src = 'Diseño grafico negro.png';
});

document.getElementById("design").addEventListener("mouseout", function(){
  imageThree.src = 'Diseño grafico blanco.png';
});

const imageFour = document.getElementById("rrss-img")

document.getElementById("rrss").addEventListener("mouseover", function(){
  imageFour.src = 'Contenido RRSS NEGRO.png';
});

document.getElementById("rrss").addEventListener("mouseout", function(){
  imageFour.src = 'Contenido RRSS BLANCO.png';
});


const verMas = document.getElementById("ver-mas")
const clients = document.getElementsByClassName("see-more-clients")
const verMenos = document.getElementById("ver-menos")

verMas.addEventListener("click", function(){
  verMas.style.display = "none"
  verMenos.style.display = "block"
  for (let i = 0; i < clients.length; i++) {
    clients[i].style.display = "flex";
  }
})

verMenos.addEventListener("click", function(){
  verMas.style.display = "block"
  verMenos.style.display = "none"
  for (let i = 0; i < clients.length; i++) {
    clients[i].style.display = "none";
  }
})