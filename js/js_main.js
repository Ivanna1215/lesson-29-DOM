'use strict'

let elem = document.createElement('div');

function addDiv() {
    elem.innerText = 'Hello world!';
    document.body.appendChild(elem);
    elem.classList.add('danger');
    elem.classList.remove('big');
}

function editDiv() {
    elem.innerText = 'Hello world!';
    document.body.appendChild(elem);
    elem.classList.remove('danger');
    elem.classList.add('big');
    
}

function editColor() {
    let elem = document.getElementById('color');
    elem.style.backgroundColor =`rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`;
    // console.log (`Hello`);
}

function redColor() {
    let red = document.getElementById('red');
    let yellow = document.getElementById('yellow');
    let green = document.getElementById('green');
    red.style.backgroundColor = 'red';
    yellow.style.backgroundColor='white';
    green.style.backgroundColor= 'white';
    
}
function yellowColor() {
    let red = document.getElementById('red');
    let yellow = document.getElementById('yellow');
    let green = document.getElementById('green');
    red.style.backgroundColor = 'white';
    yellow.style.backgroundColor='yellow';
    green.style.backgroundColor= 'white';
    
}

function greenColor() {
    let red = document.getElementById('red');
    let yellow = document.getElementById('yellow');
    let green = document.getElementById('green');
    red.style.backgroundColor = 'white';
    yellow.style.backgroundColor='white';
    green.style.backgroundColor= 'green';
    
}


    let red = document.getElementById('red');
    let yellow = document.getElementById('yellow');
    let green = document.getElementById('green');
    let i = 1;
    function color() {
        if(i===1) {
            red.style.backgroundColor = 'red';
            yellow.style.backgroundColor='white';
            green.style.backgroundColor= 'white';
            console.log(i);
        } else if (i===2){
            red.style.backgroundColor = 'white';
            yellow.style.backgroundColor='yellow';
            green.style.backgroundColor= 'white';
            console.log(i);
        } else if (i===3) {
            red.style.backgroundColor = 'white';
            yellow.style.backgroundColor='white';
            green.style.backgroundColor= 'green';
            console.log(i);
            i=0;
        }
        else {
            red.style.backgroundColor = 'white';
            yellow.style.backgroundColor='white';
            green.style.backgroundColor= 'white';
        }
        i++;
        
}

function easy() {
let timeId = setInterval(() => color,2000);
setTimeout(() =>{ clearInterval(timeId)}, 5000);
}