let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

let scoreBoard_div = document.querySelector("#score-board");
let result_p = document.querySelector(".result p");

let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissor_div = document.getElementById("s");

function getcompChoice(){
    let choices = ['r', 'p', 's'];
    let randNum = (Math.floor(Math.random() * choices.length));
    return choices[randNum];
}

function convertWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    else return "Scissor";
}

function win(user, comp){
    const user_div=document.getElementById(user);
    const suw = "user".fontsize(3).sub();
    const scw = "comp".fontsize(3).sub();   
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore; 
    result_p.innerHTML = `${convertWord(user)}${suw} beats ${convertWord(comp)}${scw} . You Win! 👩‍💻😍🚀`;
    // result_p.innerHTML = convertWord(user) + " beats " + convertWord(comp) + ". You Win! "
    user_div.classList.add("green_glow");
    setTimeout ( ()=>user_div.classList.remove("green_glow"), 8000);
}

function lose(ur, cmp){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const suw = "user".fontsize(3).sub();
    const scw = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertWord(ur)}${suw} looses ${convertWord(cmp)}${scw} . You Lost.......🔥`    
    document.getElementById(ur).classList.add("red_glow");
    setTimeout (function(){document.getElementById(ur).classList.remove("red_glow")}, 5000);
}

function draw(usr, cp){
    const suw = "user".fontsize(3).sub();
    const scw = "comp".fontsize(3).sub();
    result_p.innerHTML = convertWord(usr)+suw + " equals " + convertWord(cp)+scw + " . Its a DrAw...... 🤖"    
    document.getElementById(usr).classList.add("grey_glow");
    setTimeout (function(){document.getElementById(usr).classList.remove("grey_glow")}, 1000);
}

function game(userChoice) {
    let compChoice = getcompChoice();

    if (userChoice==="r" && compChoice === "p"){
        return lose(userChoice, compChoice);
    }
    else if (userChoice==="p" && compChoice === "s"){
        return lose(userChoice, compChoice);
    }
    else if (userChoice==="s" && compChoice === "r"){
        return lose(userChoice, compChoice);
    } 
    else if (userChoice==="r" && compChoice === "s"){
        return win(userChoice, compChoice);
    }
    else if (userChoice==="p" && compChoice === "r"){
        return win(userChoice, compChoice);
    }
    else if (userChoice==="s" && compChoice === "p"){
        return win(userChoice, compChoice);
    }
    else{
        return draw(userChoice, compChoice);
    }
}
function main() {
    rock_div.addEventListener('click',  () => game("r") )

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissor_div.addEventListener('click', function () {
        game("s");
    })
}

main();
