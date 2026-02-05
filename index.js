let your_score= 0;
let computer_score= 0;

const choices= document.querySelectorAll(".choice");
const message= document.querySelector(".message");
const self_score= document.querySelector(".your_score");
const opponent_score= document.querySelector(".computer_score");

const get_computer_choice=()=>{
    const options= ["stone" , "paper" , "scissor"];
    const random_index= Math.floor(Math.random()*3);
    return options[random_index];
}

const drawn_game=()=>{
    message.innerText= "Game is drawnn!! Play again";
    message.style.backgroundColor="#081b31";
}
const playGame= (user_choice)=>{
    console.log("You choose: " , user_choice);
    const computer_choice= get_computer_choice();
    console.log("Computer choose: " , computer_choice);

    if(user_choice===computer_choice){
        drawn_game();
    }

    else if(user_choice==="stone" && computer_choice==="paper" || user_choice==="paper" && computer_choice==="scissor" || user_choice==="scissor" && computer_choice==="stone"){
        message.innerText= `Opponent won!!, ${computer_choice} beats your ${user_choice}`;
        computer_score++;
        opponent_score.innerText= computer_score;
        message.style.backgroundColor="red";
    }
    else{
        message.innerText= `You won!!, Your ${user_choice} beats ${computer_choice}`;
        your_score++;
        self_score.innerText= your_score;
        message.style.backgroundColor="green";
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        const user_choice= choice.getAttribute("id");
        playGame(user_choice);
    });
});