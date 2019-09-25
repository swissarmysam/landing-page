/* Code for generating random color */

const greeting = document.querySelector('#greeting');
const left = document.querySelector('.left');

function updateColor(){

    const colors = `hsl(${Math.random() * 360}, 60%, 40%)`;
    left.style.backgroundColor = colors;

}

greeting.addEventListener('click', updateColor);

/* Code for opening panel links in new tab */
/* @params event */

const panels = document.querySelectorAll('.panel');

function openLink(evt) {
    const link = evt.currentTarget.dataset.link;
    window.open(`http://${link}`, '_blank');
}

panels.forEach(panel => panel.addEventListener('click', openLink));