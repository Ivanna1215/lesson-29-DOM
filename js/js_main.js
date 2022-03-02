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
