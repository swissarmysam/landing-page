const greeting = document.querySelector('#greeting');
const left = document.querySelector('.left');

function updateColor(){

    const colors = `hsl(${Math.random() * 360}, 60%, 40%)`;
    left.style.backgroundColor = colors;

}

greeting.addEventListener('click', updateColor);

const panel = document.querySelectorAll('.panel');

function openLink(evt) {
    const link = evt.currentTarget.dataset.link;
    window.open(`http://${link}`, '_newtab');
}

panel.forEach(panel => panel.addEventListener('click', openLink));