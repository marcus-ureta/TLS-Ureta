
let imgIndex = 1;

const imageCarousel = [
    './img/gallery/1.webp',
    './img/gallery/2.webp',
    './img/gallery/3.webp',
    './img/gallery/4.webp',
    './img/gallery/5.webp',
    './img/gallery/6.webp',
    './img/gallery/7.webp'
]

function updateCarousel(n){

    imgIndex += n;

    if (imgIndex >= imageCarousel.length) imgIndex = 0;
    else if (imgIndex < 0) imgIndex = imageCarousel.length - 1;

    console.log(imgIndex);
    
    let leftImg = document.getElementById("left-img");
    let rightImg = document.getElementById("right-img");
    let mainImg = document.getElementById("select-img");

    leftImg.src = imageCarousel[(imgIndex - 1 < 0) ? imageCarousel.length - 1 : imgIndex - 1];
    mainImg.src = imageCarousel[imgIndex];
    rightImg.src = imageCarousel[(imgIndex + 1 > imageCarousel.length - 1) ? 0 : imgIndex + 1];
}


function goItchPage(){
    window.open('https://pingem.itch.io/marshmallow-boy');
}