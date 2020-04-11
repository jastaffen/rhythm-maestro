
window.addEventListener('keydown', (e) => {
    let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let pad = document.querySelector(`.pad[data-key="${e.keyCode}"]`)
    if (!sound || !pad) return;
    sound.currentTime = 0;
    sound.play();
    pad.classList.add('playing')
});


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const pads = document.querySelectorAll('.pad');
pads.forEach(pad => pad.addEventListener('transitionend', removeTransition));

