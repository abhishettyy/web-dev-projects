let body=document.querySelector("body");
let start=document.querySelector("#start");
let pause=document.querySelector("#pause");
let reset=document.querySelector("#reset");
let h2=document.querySelector("h2");
let btn=document.querySelector("#btn");
let div=document.querySelector("#container");
let h1=document.querySelector("h1");
let tgl=document.querySelector("i");
let h=0;
let m=0;
let s=0;
let ref;
let toggle=document.querySelector("#btn");
start.addEventListener("click",()=>{
    if(ref==null){
        st();
    }
    
});
pause.addEventListener("click",()=>{
    clearInterval(ref);
    ref=null;
    start.innerHTML="Resume";
});
reset.addEventListener("click",()=>{
    res();
});
function st(){
    ref=setInterval(()=>{
    h2.innerHTML=`${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    if(s==59){
        m+=1;
        s=-1;
    }
    if(m==60){
        h+=1;
        m=0;
    }
    if(h==24){
        h=0;
            
    }
    s+=1;
    },1000);
}
function res(){
    start.innerHTML="Start";
    h=0;
    s=0;
    m=0;
    h2.innerHTML=`00:00:00`;
    clearInterval(ref);
    ref=null;
}
toggle.addEventListener("click",()=>{
    console.log("hye nigga");
});
btn.addEventListener("click",()=>{
    body.classList.toggle("body");
    div.classList.toggle("body");
    h2.classList.toggle("h2");
    h1.classList.toggle("h1");
    tgl.classList.toggle("toggle");
    let ele=document.querySelectorAll(".child");
    console.log(ele);
    for(e of ele){
        e.classList.toggle("children");
    }
    

});

