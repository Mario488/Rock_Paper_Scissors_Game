//initializing the needed variables
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let message = document.getElementById('message'); 
let user = document.getElementById('user');
let computer = document.getElementById('computer');
let userScore = localStorage.getItem('userScore') || 0;
let computerScore = localStorage.getItem('computerScore') || 0;
let userChoice = document.getElementById('userChoice');
let container2 = document.getElementById('container2');
let choises = ['rock1','paper','scissors1'];
let computerChoice = choises[Math.floor(Math.random()*choises.length)];
//the logic of the game 
rock.addEventListener('click', rock1);
function rock1(){
let choises = ['rock1','paper','scissors1'];
let computerChoice = choises[Math.floor(Math.random()*choises.length)];
	if(computerChoice === 'rock1'){
        message.innerText = 'Draw!';
        message.style.color = '#000';
        computerChoice.src = "images/rock1.png";
        let img = document.createElement('img');
        img.id = 'computerMove';
        img.src = `images/${computerChoice}.png`;
        container2.appendChild(img);
        setTimeout(() => {
            container2.removeChild(container2.lastElementChild)
        }, 1500);   
    }
	else if(computerChoice === 'paper'){
        message.innerText = 'You lost!';
        message.style.color = '#ae0000';
        computerScore++;
        let img = document.createElement('img');
        img.id = 'computerMove';
        img.src = `images/${computerChoice}.png`;
        container2.appendChild(img);
        computer.textContent = 'Computer: ' + computerScore;
        localStorage.setItem('computerScore', computerScore);
        setTimeout(() => {
            container2.removeChild(container2.lastElementChild)
        }, 1500);
    }
	else if(computerChoice === 'scissors1'){
        message.innerText = 'You won!';
        message.style.color = 'green';
        let img = document.createElement('img');
        img.id = 'computerMove';
        img.src = `images/${computerChoice}.png`;
        container2.appendChild(img);
        userScore++;
        user.textContent = 'You: ' + userScore;
        localStorage.setItem('userScore', userScore);
        setTimeout(() => {
            container2.removeChild(container2.lastElementChild)
        }, 1500);
    }
}
paper.addEventListener('click', paper1);
function paper1(){
    let choises = ['rock1','paper','scissors1'];
    let computerChoice = choises[Math.floor(Math.random()*choises.length)];
	if(computerChoice === 'rock1'){
        message.innerText = 'You won!';
        message.style.color = 'green';
        let img = document.createElement('img');
        img.id = 'computerMove';
        img.src = `images/${computerChoice}.png`;
        container2.appendChild(img);
        userScore++;
        user.textContent = 'You: ' + userScore;
        localStorage.setItem('userScore', userScore);
        setTimeout(() => {
            container2.removeChild(container2.lastElementChild)
        }, 1500);
    }
	else if(computerChoice === 'paper'){
        message.innerText = 'Draw!';
        let img = document.createElement('img');
        img.id = 'computerMove';
        img.src = `images/${computerChoice}.png`;
        container2.appendChild(img);
        message.style.color = '#000';
        setTimeout(() => {
            container2.removeChild(container2.lastElementChild)
        }, 1500);
    }
	else if(computerChoice === 'scissors1'){
        message.innerText = 'You lost!';
        let img = document.createElement('img');
        img.id = 'computerMove';
        img.src = `images/${computerChoice}.png`;
        container2.appendChild(img);
        message.style.color = '#ae0000';
        computerScore++;
        computer.textContent = 'Computer: ' + computerScore;
        localStorage.setItem('computerScore', computerScore);
        setTimeout(() => {
            container2.removeChild(container2.lastElementChild)
        }, 1500);
    }
}
scissors.addEventListener('click', scissors1);
function scissors1(){
    let choises = ['rock1','paper','scissors1'];
    let computerChoice = choises[Math.floor(Math.random()*choises.length)];
	if(computerChoice === 'rock1'){
        message.innerText = 'You lost!';
        message.style.color = '#ae0000';
        computerScore++;
        let img = document.createElement('img');
        img.id = 'computerMove';
        img.src = `images/${computerChoice}.png`;
        container2.appendChild(img);
        computer.textContent = 'Computer: ' + computerScore;
        localStorage.setItem('computerScore', computerScore);
        setTimeout(() => {
            container2.removeChild(container2.lastElementChild)
        }, 1500);
    }
	else if(computerChoice === 'paper'){
        message.innerText = 'You won!';
        message.style.color = 'green';
        let img = document.createElement('img');
        img.id = 'computerMove';
        img.src = `images/${computerChoice}.png`;
        container2.appendChild(img);
        userScore++;
        user.textContent = 'You: ' + userScore;
        localStorage.setItem('userScore', userScore);
        setTimeout(() => {
            container2.removeChild(container2.lastElementChild)
        }, 1500);
    }
	else if(computerChoice === 'scissors1'){
        message.innerText = 'Draw!';
        let img = document.createElement('img');
        img.id = 'computerMove';
        img.src = `images/${computerChoice}.png`;
        container2.appendChild(img);
        message.style.color = '#000';
        setTimeout(() => {
            container2.removeChild(container2.lastElementChild)
        }, 1500);
    }
}
