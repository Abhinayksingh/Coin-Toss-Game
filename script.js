
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");


buttons.innerHTML = "Heads";
console.log(buttons);
//message.querySelector(".message").style.color = "black";

const coinArray =['Head', 'Tails'];
const score =[0 ,0];

for(let i = 0; i < buttons.length; i++){
    console.log(buttons[i]);
    buttons[i].addEventListener("click", tossCoin);
}

function tossCoin(e){

    let playerGuess = e.target.innerText;
 
    let computerToss = Math.floor(Math.random()*2);
    let computerGuess = coinArray[computerToss];
    let output ;
    message.innerHTML = "Computer Selected " + computerGuess + "<br>" +
     " Player Selected  "+ playerGuess + "<br>";
    if(playerGuess === computerGuess){
        output= "Player Wins";
        score[0]++;
        
    }else{
        output = "Computer Wins";
        score[1]++
        
    }
    
    message.innerHTML += output + 
    "<br> Player Score " +  score[0] + " Computer Score " + score[1];

}

