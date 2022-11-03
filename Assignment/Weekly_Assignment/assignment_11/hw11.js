const Generate=document.querySelector(".generate");
const Quote=document.querySelector(".quote");
const Author=document.querySelector(".author");
const Imagee=document.querySelector(".imagee");
const Wrapper=document.querySelector(".wrapper");

Generate.addEventListener('click', getQuote);
const api_url='https://thesimpsonsquoteapi.glitch.me/quotes?count=num';
const img = document.createElement("img");
img.style.height='250px';

async function getQuote(){
    console.log("hello");
    let Quote=await fetch(api_url);
    let response=await Quote.text();
    console.log(response);
    let json_par=JSON.parse(response);
    console.log(json_par[0].quote);
    displayQuote(json_par[0].quote, json_par[0].image);
}

function displayQuote(x,y){
    img.src = y;
    Wrapper.appendChild(img);
    Quote.textContent=x;
}

getQuote();