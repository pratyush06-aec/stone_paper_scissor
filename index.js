let your_score= 0;
let computer_score= 0;

const choices= document.querySelectorAll(".choice");

const get_computer_choice=()=>{
    const options= ["stone" , "paper" , "scissor"];
    const random_index= Math.floor(Math.random()*3);
    return options[random_index];
}

const drawn_game=()=>{
    console.log("Game is Drawn!!!");
}
const playGame= (user_choice)=>{
    console.log("You choose: " , user_choice);
    const computer_choice= get_computer_choice();
    console.log("Computer choose: " , computer_choice);

    if(user_choice===computer_choice){
        drawn_game();
    }

    else if(user_choice==="stone" && computer_choice==="paper" || user_choice==="paper" && computer_choice==="scissor" || user_choice==="scissor" && computer_choice==="stone"){
        computer_score++;
        console.log("Computer winsss!!!!");
    }
    else{
        your_score++;
        console.log("You wonn!!!!");
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        const user_choice= choice.getAttribute("id");
        playGame(user_choice);
    });
});