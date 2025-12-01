 let gameSeq=[];
 let userSeq=[];
 let highScore=0;
 let level=0;
 let start=document.querySelector("#start");
 let started=false;
 let color=["red","yellow","green","blue"];
 let h4=document.querySelector("h4");
 let btn1=document.querySelector(".red");
 let btn2=document.querySelector(".blue");
 let btn3=document.querySelector(".yellow ");
 let btn4=document.querySelector(".green");
 let h3=document.querySelector("h3");
 btn1.classList.add("btns");
 btn2.classList.add("btns");
 btn3.classList.add("btns");
 btn4.classList.add("btns");
 h3.innerHTML=`High Score:${highScore}`;
 start.addEventListener("click", function(){
    if(started==false){
        started=true;
        levelUp();
    }
 }); 
 function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 150);
 }
 function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 100);
 }
function checkAnswer(idx){
  if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000); 
    }
  }
  else{
    let gameScore=level;
    if(gameScore>highScore){
      highScore=gameScore;
    }
    h3.innerHTML=`High score:${highScore}`;
    h4.innerHTML=`Game over! Your score is<b> ${level}`;
    document.querySelector('body').style.backgroundColor="red";
    setTimeout(function(){
          document.querySelector('body').style.backgroundColor="rgb(18, 17, 17)";
    },150);
    reset();
  }
}
 function levelUp(){
   level++;
   userSeq=[];
   h4.innerText=`Level ${level}`;
   let randmInd=Math.trunc(Math.random()*4);
   let randmColor=color[randmInd];
   let randBtn=document.querySelector(`.${randmColor}`);
   gameSeq.push(randmColor); 
   gameFlash(randBtn);
 } 
 function btnPress(){
   let btn=this;
   userFlash(btn);
   let color= btn.getAttribute("id");
   userSeq.push(color);
   checkAnswer(userSeq.length-1);
 }
 let btns=document.querySelectorAll(".btns");
 for(ele of btns){
   ele.addEventListener("click", btnPress);
 }
 function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
 }