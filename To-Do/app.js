input=document.querySelector("#input")
button=document.querySelector(".button")
outer=document.querySelector("#content")
clear=document.querySelector(".clear")
clear.addEventListener('click',()=>{
    outer.innerHTML="";
})
let task=null;
input.addEventListener('keyup',(event)=>{
    if(event.key=="Enter")
        createtask()
});
window.addEventListener('keyup',(event)=>{
    if(event.key=="Delete"){
        outer.innerHTML="";
    }
});
button.addEventListener('click',()=>{
    createtask();
});
outer.addEventListener('click',(event)=>{
    if(event.target.nodeName=="I"){
        event.target.previousElementSibling.classList.add("cut");
    }
});
function createtask(){
    task=input.value
    if(input.value==null||input.value==""){
        alert("Please input a task");
        return ;
    }
    task=input.value;
    input.value=null;
    div=document.createElement("div");
    data=document.createElement("div");
    data.innerHTML=task;
    data.classList.add("text")
    div.appendChild(data);
    div.classList.add("task");
    div.innerHTML=div.innerHTML+"<i class='fa-solid fa-circle-xmark'></i>";
    outer.appendChild(div);
}