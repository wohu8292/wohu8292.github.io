let Num=document.getElementById("num");
let Ale=document.getElementById("alert");
let Col=document.getElementById("col");
let a=0;

Ale.addEventListener('click', alet);
Col.addEventListener('click', chan);

function addone(){
    a++;
    Num.textContent=a;
}

function alet(){
    alert("hello. I'm Woong.");
}

function chan(){
    Col.textContent="Changed";
}