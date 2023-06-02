let scale = 1;
let nep = document.querySelector('.neptyn')
let nep1 = document.querySelector('.uran')
let nep2 = document.querySelector('.saturn')
let nep3 = document.querySelector('.jupiter')
let nep4 = document.querySelector('.mars')
let nep5 = document.querySelector('.zemla')
let nep6 = document.querySelector('.venera')
let nep7 = document.querySelector('.merkyir')
let nep8 = document.querySelector('.sun')

window.addEventListener('scroll', function () {
    if (scrollY < 10) {
        scale = 1;
    }
    else {
        scale = scale + 0.01;
    }

    //  transform: translate(1, 1);
    nep.style.transform = `translate(${scrollY / 1}px, ${-scrollY * 0.5}px)`
    nep1.style.transform = `translate(${scrollY / 2}px, ${-scrollY * 0.5}px)`
    nep2.style.transform = `translate(${scrollY / 3}px, ${-scrollY * 0.5}px)`
    nep3.style.transform = `translate(${scrollY / 4}px, ${-scrollY * 0.5}px)`
    nep4.style.transform = `translate(${scrollY / 5}px, ${-scrollY * 0.5}px)`
    nep5.style.transform = `translate(${scrollY / 6}px, ${-scrollY * 0.5}px)`
    nep6.style.transform = `translate(${scrollY / 7}px, ${-scrollY * 0.5}px)`
    nep7.style.transform = `translate(${scrollY / 8}px, ${-scrollY * 0.5}px)`
    nep8.style.transform = `scale(${scale})`;

})


//based on an Example by @curran
window.requestAnimFrame = (function () { return window.requestAnimationFrame })();
var canvas = document.getElementById("space");
var c = canvas.getContext("2d");

var numStars = 1900;
var radius = '0.' + Math.floor(Math.random() * 9) + 1;
var focalLength = canvas.width * 2;
var warp = 0;
var centerX, centerY;

var stars = [], star;
var i;

var animate = true;

initializeStars();

function executeFrame() {

    if (animate)
        requestAnimFrame(executeFrame);
    moveStars();
    drawStars();
}

function initializeStars() {
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    stars = [];
    for (i = 0; i < numStars; i++) {
        star = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
            o: '0.' + Math.floor(Math.random() * 99) + 1
        };
        stars.push(star);
    }
}

function moveStars() {
    for (i = 0; i < numStars; i++) {
        star = stars[i];
        star.z--;

        if (star.z <= 0) {
            star.z = canvas.width;
        }
    }
}

function drawStars() {
    var pixelX, pixelY, pixelRadius;

    // Resize to the screen
    if (canvas.width != window.innerWidth || canvas.width != window.innerWidth) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initializeStars();
    }
    if (warp == 0) {
        c.fillStyle = "rgba(0,10,20,1)";
        c.fillRect(0, 0, canvas.width, canvas.height);
    }
    c.fillStyle = "rgba(209, 255, 255, " + radius + ")";
    for (i = 0; i < numStars; i++) {
        star = stars[i];

        pixelX = (star.x - centerX) * (focalLength / star.z);
        pixelX += centerX;
        pixelY = (star.y - centerY) * (focalLength / star.z);
        pixelY += centerY;
        pixelRadius = 1 * (focalLength / star.z);

        c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
        c.fillStyle = "rgba(209, 255, 255, " + star.o + ")";
        //c.fill();
    }
}

document.getElementById('warp').addEventListener("click", function (e) {
    window.warp = window.warp == 1 ? 0 : 1;
    window.c.clearRect(0, 0, window.canvas.width, window.canvas.height);
    executeFrame();
});

executeFrame();
// _____________________________________

ScrollReveal().reveal('.anim-left',{reset: true, origin: 'left',  delay: 700 , distance: '150px' });
ScrollReveal().reveal('.anim-right',{reset: true, origin: 'right',  delay: 300,  distance: '150px' });
ScrollReveal().reveal('.anim-buttom',{ reset: true, origin: 'buttom', delay: 700 , duration: 3000, origin: 'bottom',  distance: '150px'});
ScrollReveal().reveal('.anim-top', {reset: true, origin: 'top', duration: 3000, interval: 500 , origin: 'top',  distance: '150px'});

