const container = document.getElementById('background_container');
const images = [
    'url("background1.jpg")',
    'url("background2.jpg")',
    'url("background3.jpg")'
];
let currentIndex = 0;

function changeBackgroundImage() {
   console.log(container.style.backgroundImage = images[currentIndex]) 
    currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeBackgroundImage, 2000);
changeBackgroundImage();
