let input=document.querySelector("#input");
let done=document.querySelector("#done")
let clr=document.querySelector("#color");
let reset=document.querySelector("#reset");
let container=document.querySelector("#container");
container.innerHTML="";
let res;
let size;
let color;
let opacity=0.1;
input.value=null;
clr.value="#000";
color=clr.value;
done.addEventListener("click",()=>{
    container.innerHTML="";
    if(!(input.value>=16&&input.value<=200)){
        alert("Please enter the value within the range [16,200]");
    }
    else{
        input.disabled=true;
        done.disabled=true;
        size=input.value;
        appendBox();
    }
});
clr.addEventListener("change",()=>{
    color=clr.value;
});
reset.addEventListener("click",()=>{
    done.disabled = false;
    input.disabled = false;
    input.value=null;
    clr.value="#0000";
    color=clr.value;
    container.innerHTML="";
});
function appendBox(){
    let boxes=size*size;
    let boxWidth=`${503.8/size}px`;
    let count=1;
    let fragment=document.createDocumentFragment();
    while(count<=boxes){
        let div=document.createElement("div");
        div.style.width=boxWidth;
        div.style.height=boxWidth;
        div.classList.add("child");
       fragment.appendChild(div);
        count++;
    }
    container.appendChild(fragment);
}
container.addEventListener("mousedown",(event)=>{
      if(container.innerHTML==""&&input.value!=null){
        alert("Please enter the order and click done");
    }
    event.target.style.cursor="pointer"; 
    event.preventDefault();
     res= true;
    let target=event.target;
    if(target.classList.contains("child")){
        target.style.backgroundColor=color;
        shading(target);
    }
});
container.addEventListener("mouseover",(event)=>{
     event.target.style.cursor="pointer"; 
    if(res&&event.target.classList.contains("child")){
        event.target.style.backgroundColor=color;  
        shading(event.target);  
    }
});
window.addEventListener("mouseup",()=>{
    res=false;
});
function shading(target){
    let currentOpacity = parseFloat(target.style.opacity) || 0;
    if(currentOpacity<1){
        currentOpacity+=0.1;
    }
    target.style.opacity=`${currentOpacity}`;
}
