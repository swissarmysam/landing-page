const greeting = document.querySelector('#greeting');
const left = document.querySelector('.left');

function randomItem(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

function updateGreeting(){
    
    const greetings = [
    "Hello",
    "Hey",
    "Howdy",
    "Hi",
    "Salut"
    ];
    
   const msg = randomItem(greetings);

   greeting.innerHTML = `${msg},`;

}

function updateColor(){

    const colors = `hsl(${Math.random() * 360}, 60%, 40%)`;
    left.style.backgroundColor = colors;

}

document.addEventListener('load', updateGreeting);
greeting.addEventListener('click', updateColor);