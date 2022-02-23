var overlay = document.getElementById("overlay");

window.addEventListener('load', function(){
  overlay.style.display = 'none';
})

//Nav Menu

const hamburger = document.querySelector(".hamburger");
const backdrop = document.querySelector(".backdrop2");
const sidebar = document.querySelector(".sidebar2");
const times = document.querySelector(".times");

hamburger.addEventListener("click", () => {
  toggleSlidebar();
});
backdrop.addEventListener("click", () => {
  toggleSlidebar();
});
times.addEventListener("click", () => {
  toggleSlidebar();
});

const toggleSlidebar = () => {
  backdrop.classList.toggle("backdrop2--active");
  sidebar.classList.toggle("sidebar2--active");
}

//Sliderbase

var slideNo = 1;
Carousel(slideNo);

function Carousel(n) {
  var slides = document.getElementsByClassName("image-container");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideNo = 1;
  }
  if (n < 1) {
    slideNo = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideNo - 1].style.display = "block";
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideNo - 1].className += " active";

}

function newSlide(n) {
  Carousel(slideNo += n);
}

function currentSlide(n) {
  Carousel(slideNo = n);
}


//slider1

var slideNo1 = 1;
Carousel1(slideNo1);

function Carousel1(n) {
  var slides1 = document.getElementsByClassName("image-container1");
  var dots1 = document.getElementsByClassName("dot1");
  if (n > slides1.length) {
    slideNo1 = 1;
  }
  if (n < 1) {
    slideNo1 = slides1.length;
  }
  for (var i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slides1[slideNo1 - 1].style.display = "block";
  for (var i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  dots1[slideNo1 - 1].className += " active";

}

function newSlide1(n) {
  Carousel1(slideNo1 += n);
}

function currentSlide1(n) {
  Carousel1(slideNo1 = n);
}

//slider2 

var slideNo2 = 1;
Carousel2(slideNo2);

function Carousel2(n) {
  var slides2 = document.getElementsByClassName("image-container2");
  var dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {
    slideNo2 = 1;
  }
  if (n < 1) {
    slideNo2 = slides2.length;
  }
  for (var i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slides2[slideNo2 - 1].style.display = "block";
  for (var i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  dots2[slideNo2 - 1].className += " active";

}

function newSlide2(n) {
  Carousel2(slideNo2 += n);
}


//slider3 

var slideNo3 = 1;
Carousel3(slideNo3);

function Carousel3(n) {
  var slides3 = document.getElementsByClassName("image-container3");
  var dots3 = document.getElementsByClassName("dot3");
  if (n > slides3.length) {
    slideNo3 = 1;
  }
  if (n < 1) {
    slideNo3 = slides3.length;
  }
  for (var i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  slides3[slideNo3 - 1].style.display = "block";
  for (var i = 0; i < dots3.length; i++) {
    dots3[i].className = dots3[i].className.replace(" active", "");
  }
  dots3[slideNo3 - 1].className += " active";
}
function newSlide3(n) {
  Carousel3(slideNo3 += n);
}

//slider4 

var slideNo4 = 1;
Carousel4(slideNo4);

function Carousel4(n) {
  var slides4 = document.getElementsByClassName("image-container4");
  var dots4 = document.getElementsByClassName("dot4");
  if (n > slides4.length) {
    slideNo4 = 1;
  }
  if (n < 1) {
    slideNo4 = slides4.length;
  }
  for (var i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  slides4[slideNo4 - 1].style.display = "block";
  for (var i = 0; i < dots4.length; i++) {
    dots4[i].className = dots4[i].className.replace(" active", "");
  }
  dots4[slideNo4 - 1].className += " active";
}
function newSlide4(n) {
  Carousel4(slideNo4 += n);
}


//slider5

var slideNo5 = 1;
Carousel5(slideNo5);

function Carousel5(n) {
  var slides5 = document.getElementsByClassName("image-container5");
  var dots5 = document.getElementsByClassName("dot5");
  if (n > slides5.length) {
    slideNo5 = 1;
  }
  if (n < 1) {
    slideNo5 = slides5.length;
  }
  for (var i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";
  }
  slides5[slideNo5 - 1].style.display = "block";
  for (var i = 0; i < dots5.length; i++) {
    dots5[i].className = dots5[i].className.replace(" active", "");
  }
  dots5[slideNo5 - 1].className += " active";
}
function newSlide5(n) {
  Carousel5(slideNo5 += n);
}