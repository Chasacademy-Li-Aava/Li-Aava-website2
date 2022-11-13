let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div =  document.getElementById("r");
const paper_div =  document.getElementById("p");
const scissors_div =  document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    /* Number between 0 and 2 (0 1 2)*/
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function convertToWord(letter) {
if (letter === "r") return "rock";
if (letter === "p") return "paper";
return "scissors";
}

/* User wins, computer loses*/
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}(comp). You win!`;
  //  document.getElementById(userChoice).classList.add('green-glow');
   // setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 300);
}


/*User loses, computer wins*/
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) loses to ${convertToWord(computerChoice)}(comp). You lose...`;

}
/* Draw between user and computer*/
function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) ${convertToWord(computerChoice)}(comp). It's a draw.`;

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
   /* console.log("user choice : " + userChoice);
    console.log("computer choice : " + computerChoice);*/
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
}




function main() {
rock_div.addEventListener('click', function() {
    console.log("you clicked rock");
    game("r");
})

paper_div.addEventListener('click', function() {
    console.log("you clicked paper");
    game("p");
})

scissors_div.addEventListener('click', function() {
    console.log("you clicked scissors");
    game("s");
})

}

main();