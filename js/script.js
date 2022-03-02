'use strict'
// Task 1

let playList = [

    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },

    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },

    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },

    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },

    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },

    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },

    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },

    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }

];

let list = document.createElement('ol');

for (let i = 0; i < playList.length; i++) {
    let li = document.createElement('li');
    let divOne = document.createElement('div');
    divOne.innerText = playList[i].author;
    li.appendChild(divOne);
    let divTwo = document.createElement('div');
    divTwo.innerText = playList[i].song;
    li.appendChild(divTwo);
    list.appendChild(li);
}
document.body.appendChild(list);

// Task 2

// let modal = document.getElementById('myModal');
// let btn = document.getElementById("myBtn");
// let span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// ModalWindow


function modalOpen() {
    let wrap = document.getElementById('wrap');
    wrap.style.display = 'block';
}


function closeOpen() {
    let wrap = document.getElementById('wrap');
    wrap.style.display = 'none';
}

// function redOpen() {
//     let red = document.getElementById('red');
//     let yellow = document.getElementById('yellow');
//     let green = document.getElementById('green');
//     red.style.background = 'white';
//     yellow.style.background = 'yellow';
//     green.style.background = 'white';
// }

// function yellow () {
//     let yellow = document.getElementById('yellow');
//     let green = document.getElementById('green');
//     let red = document.getElementById('red');
//     red.style.background = 'white';
//     yellow.style.background = 'white';
//     green.style.background = 'green';

// }

// function green() {
//     let green = document.getElementById('green');
//     let yellow = document.getElementById('yellow');
//     green.style.background = 'white';
//     yellow.style.background = 'white';
//     let red = document.getElementById('red');
//     red.style.background = 'red';
// }
function total() {
    let red = document.getElementById('red');
    let yellow = document.getElementById('yellow');
    let green = document.getElementById('green');
   

    for (let i = 0; i < 3; i++) {
    
            red.style.background = 'red';
            yellow.style.background = 'white';
            green.style.background = 'white';
        
        
            red.style.background = 'white';
            yellow.style.background = 'yellow';
            green.style.background = 'white';
        
        
            red.style.background = 'white';
            yellow.style.background = 'white';
            green.style.background = 'green';
        

    }

}