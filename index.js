let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice")
const msg1=document.querySelector("#msg1")


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score")

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx =Math.floor(Math.random()*3)
    return options[randIdx]

}


const drawgame=()=>{
    console.log("game was draw")
    msg1.style.backgroundColor = "#081b31";

}
const showWinner=(userwin,userChoice, compChoice)=>{
    if(userwin){
        userscore++;
        userScorePara.innerText = userscore;
        msg1.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg1.style.backgroundColor = "green";
    }else{
        computerscore++;
        compScorePara.innerText = computerscore;
        msg1.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg1.style.backgroundColor = "red"
        
    }
}


const playGame=(userchoice)=>{
    
    const compchoice=genCompChoice();
   

    if(userchoice===compchoice){
        drawgame()

    }else {
        let userWin = true;
    if(userchoice==="rock"){
        userWin= compchoice==="paper"?false:true;
    } else if(userchoice==="paper"){
        userWin=compchoice==="scissors"?false:true
    }else{
        userWin=compchoice==="rock"?false:true;

    }
    showWinner(userWin, userchoice, compchoice)
}
    
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });


