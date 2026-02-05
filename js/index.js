const p1 = document.getElementById('player1');
const p2 = document.getElementById('player2');
const cube1 = document.getElementById('cube1');
const cube2 = document.getElementById('cube2');
const roll = document.getElementById('roll');
const hold = document.getElementById('hold');

function rollCube() {
        cube1.innerText = Math.floor(Math.random()*6)+1;
        cube2.innerText = Math.floor(Math.random()*6)+1;
        console.log(cube1, cube2);
}