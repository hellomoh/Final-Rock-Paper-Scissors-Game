let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");



const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "Game Was Draw";
}

const showWinner = (userWin) => {
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win");
    msg.innerText = "you win!";
    msg.style.backgroundcolor = "green";
  }else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you lose");
    msg.innerText = "you loose";
    msg.style.backgroundcolor = "red";
  }
}
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if(userChoice === compChoice){
    drawGame();
  }else{
    let userWin = true;
    if(userChoice === "rock"){
      userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper" ){
      userWin = compChoice === "scissors" ? false : true;
    }else{
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }

}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});