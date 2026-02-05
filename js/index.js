const p1 = document.getElementById('player1');
const p2 = document.getElementById('player2');
const cube1 = document.getElementById('cube1');
const cube2 = document.getElementById('cube2');
const roll = document.getElementById('roll');
const hold = document.getElementById('hold');
const allScore = document.getElementById('p1_jeneral');
const tempScore = document.getElementById('p1_current');
   
let count= 0 

function rollCube() {
        cube1.innerText = Math.floor(Math.random()*6)+1;
        cube2.innerText = Math.floor(Math.random()*6)+1;
        count+=1;
     
        if (!(count ===5 || cube1.textContent == cube2.textContent)){
            addScore(Number(cube1.textContent) + Number(cube2.textContent))    
        }
        if(cube1.textContent == cube2.textContent){
            roll.disabled =true
            tempScore.innerText = 0
        }
        else if(count ===5){
        roll.disabled =true
        addScore(Number(cube1.textContent) + Number(cube2.textContent))
        }
    }
    
    function addScore(scure){
        
        
        tempScore.innerText = Number(tempScore.textContent)+scure;   
        
    }
    hold.addEventListener('click', ()=>{
        
        count=0
        roll.disabled = false;
        allScore.innerHTML = Number(allScore.textContent)+Number(tempScore.textContent)
        tempScore.innerText = 0
})