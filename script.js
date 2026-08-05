const images = [
"guide1.png",
"guide2.png",
"guide3.png",
"guide4.png",
"guide5.png",
"guide6.png",
"guide7.png",
"guide8.png",
"guide9.png",
"guide10.png",
"guide11.png"
];

let current = 0;
let autoSlide = true;

const slide = document.getElementById("slide");
const stepCounter = document.getElementById("stepCounter");
const autoBtn = document.getElementById("autoBtn");

function updateSlide() {
    slide.src = images[current];
    stepCounter.textContent = `Step ${current + 1} of ${images.length}`;
}

function nextSlide() {
    current++;
    if (current >= images.length) {
        current = 0;
    }
    updateSlide();
}

function previousSlide() {
    current--;
    if (current < 0) {
        current = images.length - 1;
    }
    updateSlide();
}

function toggleAutoSlide() {

    autoSlide = !autoSlide;

    if (autoSlide) {
        autoBtn.textContent = "Pause Auto Slide";
    } else {
        autoBtn.textContent = "Resume Auto Slide";
    }

}

setInterval(function(){

    if(autoSlide){
        nextSlide();
    }

},3000);

updateSlide();
