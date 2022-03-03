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
console.log(`rgb(${Math.round(Math.random()*10)},${Math.round(Math.random()*10)},${Math.round(Math.random()*10)})`);