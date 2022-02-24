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

//query Selector
const lightboxEnabled = document.querySelectorAll(".lightbox-enabled");
const lightboxContainer = document.querySelector(".lightbox-container");
const lightboxImgage = document.querySelector(".lightbox-image");

// fucntions 

// event listeners
lightboxEnabled.forEach(item => {
 image.addEventListener("click", (e) => {
     console.log(e.target);
 })
})