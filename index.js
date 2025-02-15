const slider = document.getElementById('slider');
let isDragging = false;
let startY, initialBottom;

slider.addEventListener('mousedown', startDrag);
slider.addEventListener('touchstart', startDrag);

function startDrag(event) {
    isDragging = true;
    startY = event.touches ? event.touches[0].clientY : event.clientY;
    initialBottom = parseInt(getComputedStyle(slider).bottom);

    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchmove', onDrag);
    document.addEventListener('touchend', stopDrag);
}

function onDrag(event) {
    if (!isDragging) return;

    let currentY = event.touches ? event.touches[0].clientY : event.clientY;
    let diffY = (startY - currentY) * 2; // Movement difference
    let newBottom = Math.max(-window.innerHeight, Math.min(0, initialBottom + diffY));

    slider.style.bottom = `${newBottom}px`;
}

function stopDrag() {
    isDragging = false;
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
    document.removeEventListener('touchmove', onDrag);
    document.removeEventListener('touchend', stopDrag);

    let halfScreen = -window.innerHeight / 0.1;
    let finalBottom = parseInt(getComputedStyle(slider).bottom);
    slider.style.bottom = (finalBottom > -window.innerHeight * 0.25) ? "0" : "-40%";

}


const translider = document.getElementById('transitionSlider');
const linkdelay = document.getElementById('delayedLink');

linkdelay.addEventListener('click', animatetransition);

function animatetransition(){

    slider.style.right = '0%';
}
