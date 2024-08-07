const tree=document.getElementById('tree')
const animal=document.getElementById('animals')
const flower=document.getElementById('flowers')
const seaview=document.getElementById('seaviews')
const submit = document.getElementById('submit')
const container = document.getElementById('background_container');
const images = [
    'url("beautiful-cloudscape.jpg")',
    'url("26 Famous Landmarks in Canada.jpeg")',
    'url("background3.jpg")'
];
let currentIndex = 0;

function changeBackgroundImage() {
   console.log(container.style.backgroundImage = images[currentIndex]) 
    currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeBackgroundImage, 2000);
changeBackgroundImage();
 tree.addEventListener('click',()=>{
    window.location.href="./tree.html"
})
animal.addEventListener('click',()=>{
    window.location.href="./animal.html"
})
flower.addEventListener('click',()=>{
    window.location.href="./flowers.html"
})
seaview.addEventListener('click',()=>{
    window.location.href="./seaview.html"
})

if (submit) {
    submit.addEventListener('click', () => {
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)
    })

}
