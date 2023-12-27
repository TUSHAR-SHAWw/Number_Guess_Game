let input
let chance=0
let hint
let hintlow=1
let hinthigh=100
let getnum=true
function gamestart(input,get) {
    if(get==true){
        input
        chance=0
        hint
        hintlow=1
        hinthigh=100
        ans = Math.floor(Math.random()*100)+1;
        getnum =false;
    }
    console.log(ans);
    chance+=1
    if (ans==input){
        text.innerHTML=("Congrats You Guessed the Number: "+ans+"<br>You take "+chance+" Chances"),("\nYour score:"+(100-chance));
        hinttext.style.opacity="0%";
        getnum=true;
        btn.innerHTML="Try Again";
        btn.addEventListener("click",function(){
            document.location.reload();                             
        })
    }
    else{value=(ans<input?"Lower":"Higher")
    value=="Lower"?(hinthigh>input?hinthigh=input:hinthigh):(hintlow<input?hintlow=input:hintlow)
    hint="("+hintlow+"-"+hinthigh+")"
    text.style.color = "white";
    text.innerHTML=("Wrong Guess Its "+value+"\n");
    hinttext.innerHTML=("Hint"+hint)}
    score.innerHTML=("Your Score:"+(100-chance))
}
let score = document.getElementsByClassName("score")[0]
let hinttext = document.getElementsByClassName("hint")[0]
let text=document.getElementsByClassName("guide")[0]
let num = document.getElementById("num")
let btn = document.getElementsByClassName("btn")[0]
btn.addEventListener("click",function(){
    num = document.getElementById("num")
    if(num.value>0 &&num.value<101){
        gamestart(num.value,getnum);
        hinttext.style.opacity = "100%"
    }
    else{
        text.style.color = "red";
        text.innerHTML= "Please enter a Valid Number";
    }
})