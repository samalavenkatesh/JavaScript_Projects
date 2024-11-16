let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompchoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3); //Generate rand index from array
    return options[randIdx];
};

const drawGame = () =>{
    // console.log("Game was draw");
    msg.innerText = "Game was draw! Play gain";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin,userChoice, Compchoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you Win!");
        msg.innerText = `You Win! your ${userChoice} beats ${Compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lose"); 
        msg.innerText =  `You Lost ${Compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    
};

const playGame = (userChoice) =>{
    console.log(`user choice = ${userChoice}`);
    //Generate computer choice.
    const Compchoice = genCompchoice();
    console.log(`comp choice = ${Compchoice}`);

    if(userChoice === Compchoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = Compchoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = Compchoice === "scissors" ? false : true;
        }else{
            //rock, paper
            userWin = Compchoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,Compchoice);
    }
    
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () => {
        const  userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});