const body = document.getElementById('body');
const p1 = document.getElementById('player1');
const p2 = document.getElementById('player2');
const cube1 = document.getElementById('dice1');
const cube2 = document.getElementById('dice2');
const roll = document.getElementById('roll');
const hold = document.getElementById('hold');
const max = document.getElementById('max');
let allScore;
let tempScore;
let count= 0;
const maxScore = 200;
let playing = null;
const players = ['Ron', 'Dani']
playing = players[Math.floor(Math.random() * players.length)];
console.log(playing);


const maxNote = document.createElement('div');
maxNote.innerText = `The max score are ${maxScore}`
maxNote.style.background = 'white'
maxNote.style.opacity = '80%'
max.appendChild(maxNote);



function check_players() {
    if(playing === 'Ron'){
        allScore = document.getElementById('p1_jeneral');
        tempScore = document.getElementById('p1_current');
        p1.style.background = '#3055b4'
        p2.style.background = 'none'
    }
    else if(playing ==='Dani'){
        allScore = document.getElementById('p2_jeneral');
        tempScore = document.getElementById('p2_current');
        p2.style.background = '#3055b4'
        p1.style.background = 'none'
    }
}
function rplace(){
    if(playing === 'Ron') {
        playing ='Dani';
    }
    else if(playing ==='Dani'){
        playing = 'Ron';
    }
}


function rollCube() {
        check_players()
        cube1.innerText = Math.floor(Math.random()*6)+1;
        cube2.innerText = Math.floor(Math.random()*6)+1;
        cube(cube1.textContent, cube2.textContent)
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
        chekWin(allScore.textContent);
        rplace()
        console.log(playing);
        
})

function cube(c1, c2){
    console.log(c1, c2);
    
    if (c1 ==1){
        cube1.classList.add('cube1')
        console.log(cube1);
        
        console.log(1);    
    }
    else if (c1 ==2){
        cube1.classList.add('cube2')
        console.log(2);
              console.log(cube1);
    }
    else if (c1 ==3){
        cube1.classList.add('cube3')
        console.log(3);
              console.log(cube1);
    }
    else if (c1 ==4){
        cube1.classList.add('cube4')
              console.log(cube1);
    }
    else if (c1 ==5){
        cube1.classList.add('cube5')
              console.log(cube1);
    }
    else if (c1 ==6){
        cube1.classList.add('cube')
              console.log(cube1);
    }
    if (c2 ==1){
        cube2.classList = 'cube1'
    }
    if (c2 ==2){
        cube2.classList = 'cube2'
    }
    if (c2 ==3){
        cube2.classList = 'cube3'
    }
    if (c2 ==4){
        cube2.classList = 'cube4'
    }
    if (c2 ==5){
        cube2.classList = 'cube5'
    }
    if (c2 ==6){
        cube2.classList = 'cube6'
    }
}

function chekWin(score){
    if (score>= maxScore){
        const win = document.createElement('div');
        win.className = 'Winner'
        win.style.position = 'absolute'
        win.style.alignSelf = 'center'
        win.style.fontSize = 'x-large'
        win.style.background = 'yellwo'
        win.style.paddingTop = '10vh'
        body.appendChild(win)
        roll.disabled = true;
        hold.disabled = true;
    }
}