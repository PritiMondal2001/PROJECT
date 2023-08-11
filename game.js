let userscore=0;
let compscore=0;
let moves=0;
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissor_div=document.getElementById("sciss");
const user_score_span=document.getElementById("user-score");//In website to get userscore we target the score by id 
const computer_score_span=document.getElementById("comp-score"); 
const result_p=document.querySelector(".result p");

function getcomputermove(){
    const option=['rock','paper','scissor'];
    const randomchoice=Math.floor(Math.random()*3);  
    return option[randomchoice];
}
function converttoword(str)
{
    if(str==="rock")
      return "Rock";
    if(str==="paper")
       return "Paper";
    if(str==="scissor")
      return "Scissor";
}
function win(userchoice,compchoice){
    userscore++;
    user_score_span.innerHTML=userscore;     //update the targetted userscore innerhtml by new score
    computer_score_span.innerHTML=compscore;

    const a="user".fontsize(3).sub();
    const b="computer".fontsize(3).sub();

    result_p.innerHTML=`${converttoword(userchoice)}${a}   beats  ${converttoword(compchoice)}${b}.You Win!`;
     /*const user_div=document.getElementById("option");
     user_div.classList.add('greenglow');
     setTimeout(function(){user_div.classList.remove('greenglow') },500);*/
}
function lose(userchoice,compchoice){
    compscore++;
    user_score_span.innerHTML=userscore;
    computer_score_span.innerHTML=compscore;
    const a="user".fontsize(3).sub();
    const b="computer".fontsize(3).sub();
    result_p.innerHTML=`${converttoword(userchoice)}${a}  loses to  ${converttoword(compchoice)}${b}.You lose !`;
    /*const user_div=document.getElementById(userchoice);
    user_div.classList.add('redglow');
    setTimeout(function(){user_div.classList.remove('redglow') },500);*/
}
function draw(userchoice,compchoice){
    const a="user".fontsize(3).sub();
    const b="computer".fontsize(3).sub();
    user_score_span.innerHTML=userscore;
    result_p.innerHTML=`${converttoword(userchoice)}${a}   equals ${converttoword(compchoice)}${b} .. Game draw!!`;
   
    /*const user_div=document.getElementById(userchoice);
     user_div.classList.add('yellowglow');
     setTimeout(function(){user_div.classList.remove('yellowglow') },500);*/
}

function gameplay(userchoice){
    const  compchoice=getcomputermove();

    switch(userchoice + compchoice){
        case "rockscissor":
        case "scissorpaper":
        case "paperrock":
             win(userchoice,compchoice);
             break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userchoice,compchoice);
            break;
        case "paperpaper":
        case "rockrock":
        case  "scissorscissor":
            draw(userchoice,compchoice);
            break;
       }

    
}
function main(){
   
    rock_div.addEventListener('click',function(){
     
        gameplay("rock");
        
    })
    paper_div.addEventListener('click',function(){
      
        gameplay("paper");
    })
    scissor_div.addEventListener('click',function(){
      
        gameplay("scissor");
    })
    
}
main();