function appendNumber(num)
{   let p = document.querySelector("p");  
if('0' === p.innerText){   
    p.innerText = "";
}
p.innerText = p.innerText + num;    
}
function equal(){
    let p = document.querySelector("p");  
    Number(p.innerText)
    let answ = eval(p.innerText)
   window.alert('The answer is: ' + answ); 
}
function clear(onclick){
    let p = document.querySelector("p");  
    p.innerText === '0';

}