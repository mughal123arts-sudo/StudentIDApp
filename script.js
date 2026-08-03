const images = [
"WhatsApp Image 2026-08-03 at 12.40.10 AM (1).jpeg",
"WhatsApp Image 2026-08-03 at 12.40.10 AM (2).jpeg",
"WhatsApp Image 2026-08-03 at 12.40.10 AM.jpeg"
];

let current = 0;

const slide = document.getElementById("slide");

function changeSlide() {

current++;

if (current >= images.length) {
current = 0;
}

slide.src = images[current];

}

setInterval(changeSlide,3000);
