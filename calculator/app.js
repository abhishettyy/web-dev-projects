let equals=document.querySelector("#equals");
equals.classList.add("btn");
let display=document.querySelector('#data');
let first=0;
let second=0;
let operand;
let result=null;
let storage=[];
let opCount=0;
let c=false;
let keys=document.querySelectorAll(".btn");
for(ele of keys){
    ele.addEventListener('click',e=>{
        inputValue(e.target);
    });
     ele.addEventListener('mousedown', e => {
        e.preventDefault();
    });
}
function inputValue(target){
    let value=target.getAttribute('id');
    switch(value){
        case 'clr':display.innerHTML="";
                    opCount=0;
                    storage=[];
                    first=0;
                    second=0;
                    storage=[];
                    result=null;
                    break;
        case 'del':deleting();
                    break;
        case 'mod':dataAcccept('%');
                    break;
        case 'div':dataAcccept('/');
                    break;
        case 'seven':dataAcccept('7');
                    break;
        case 'eight':dataAcccept('8');
                    break;
        case 'nine':dataAcccept('9');
                    break;
        case 'star':dataAcccept('*');
                    break;
        case 'four':dataAcccept('4');
                    break;
        case 'five':dataAcccept('5');
                    break;
        case 'six':dataAcccept('6');
                    break;
        case 'minus':dataAcccept('-');
                    break;
        case 'one':dataAcccept('1');
                    break;
        case 'two':dataAcccept('2');
                    break;
        case 'three':dataAcccept('3');
                    break;
        case 'plus':dataAcccept('+');
                    break;
        case 'dot':dataAcccept('.');
                    break;
        case 'zero':dataAcccept('0');
                    break;
    }      
}
document.addEventListener('keydown',e=>{
        keyboardInput(e.key);
    });
function keyboardInput(value){
    switch(value){
         case 'Backspace':deleting();
                    break;
        case '%':dataAcccept('%');
                    break;
        case '/': dataAcccept('/');
                    break;
        case '7':dataAcccept('7');
                    break;
        case '8':dataAcccept('8');
                    break;
        case '9':dataAcccept('9');
                    break;
        case '*':dataAcccept('*');
                    break;
        case '4':dataAcccept('4');
                    break;
        case '5':dataAcccept('5');
                    break;
        case '6':dataAcccept('6');
                    break;
        case '-':dataAcccept('-');
                    break;
        case '1':dataAcccept('1');
                    break;
        case '2':dataAcccept('2');
                    break;
        case '3':dataAcccept('3');
                    break;
        case '+':dataAcccept('+');
                    break;
        case '.':dataAcccept('.');
                    break;
        case '0':dataAcccept('0');
                    break;
        case 'Enter':verify();
    }       
}
function dataAcccept(data){
   display.innerHTML+=data;
   storage.push(data);
}
equals.addEventListener('click',()=>{
    verify();
});
function verify(){
    let last=storage[storage.length-1];
    if(last=='/'){
        display.innerHTML="ERROR :)";
    }
    else if(last=='*'){
        display.innerHTML="ERROR :)";

    }
    else if(last=='-'){
        display.innerHTML="ERROR :)";
    }
    else if(last=='+'){
        display.innerHTML="ERROR :)";
    }
     opCount=0;
    for(ele of storage){
        switch(ele){
            case '-': opCount+=1;
                    operand=ele;
                    break;
            case '+': opCount+=1;
                    operand=ele;
                    break;
            case '/' : opCount+=1;
                       operand=ele;
                        break;
            case '*' : opCount+=1;
                       operand=ele;
                        break;
            case '%' : opCount+=1;
                       operand=ele;
                        break;
        }
    }
    if(!(opCount==1)){
       negativeNumber();
    }
    else{
        operation();
    }
}
function operation(){
    let n1=storage.slice(0,storage.indexOf(operand));
    let n2=storage.slice(storage.indexOf(operand)+1,storage.length);
    first='';
    second='';
    for(ele of n1){
        first+=ele;
    }
    for(ele of n2){
        second+=ele;
    }
    console.log(first);
    console.log(second);
    calculate();
}
function calculate(){
    display.innerHTML="";
    switch(operand){
        case '-': result=first-second;
                    break;
        case '+': result=+(first)+Number(second);
                break;
        case '/' : result=first/second;
                    break;
        case '*' : result=first*second;
                    break;
        case '%' : result=first%second;
    }
    if(result%1==0){
        result=result/1;
    }
    else{
        result=result.toFixed(4);
    }
    display.innerHTML=result;
    storage=[];
    let temp=result.toString();
    for(ele of temp){
        storage.push(ele);
    }
}
function deleting(){
    if(result!=null){
        display.innerHTML="";
        storage=[];
        first=0;
        second=0;
        result=null;
    }
    else{
        storage.pop(storage.length-1);
        let disp=storage[0];
    for(let i=1;i<storage.length;i++){
        disp+=storage[i];
    }
    if(storage.length!=0){
        display.innerHTML=disp;
    }
    else{
        display.innerHTML="";
    }
    } 
}
function negativeNumber(){
    let index;
    let f=null;
    let s=null;
    if(((storage[0]!='*'&storage[0]!='/')&storage[0]!='%')){
       switch(storage[0]){
        case '+':{
             storage[1]=storage[0]+storage[1];
            storage=storage.slice(1,storage.length);
            console.log(storage);
            break;
        }
        case '-':{
             storage[1]=storage[0]+storage[1];
            storage=storage.slice(1,storage.length);
            console.log(storage);
            break;
        }
       }
       for(let i=storage.length-1;i>=0;i--){
        switch(storage[i]){
            case '+': if(f==null){
                f=storage[i];
                index=i;
                break;
            }
            else{
                s=storage[i];
                index=i+1;
                break;
            }
             case '-': if(f==null){
                f=storage[i];
                index=i;
                break;
            }
            else{
                s=storage[i];
                index=i+1;
                break;
            }
             case '*': if(f==null){
                f=storage[i];
                index=i;
                break;
            }
            else{
                s=storage[i];
                index=i+1;
                break;
            }
             case '/': if(f==null){
                f=storage[i];
                index=i;
                break;
            }
            else{
                s=storage[i];
                index=i+1;
                break;
            }
             case '%': if(f==null){
                f=storage[i];
                index=i;
                break;
            }
            else{
                s=storage[i];
                index=i+1;
                break;
            }
            default : break;
        }
       }
       if(f!=null&s!=null){
        console.log("2signs");
        if(f=='+'||f=='-'){
            operand=s;
            storage[index+1]=storage[index]+storage[index+1];
            storage.splice(index,1);
            operation();
        }
        else{
            display.innerHTML="ERROR :)";
        }
       }
       else{
        operand=f;
        operation();
       }
    }
    else{
        display.innerHTML="ERROR :)";
    }  
}