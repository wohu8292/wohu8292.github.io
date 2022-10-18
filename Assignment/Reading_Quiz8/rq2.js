// declare array and variables
let people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

let admitted = document.querySelector('.admitted');
let refused = document.querySelector('.refused');


// iterate elements in people array using for loop
for (let person of people){
// if loop argument get Phil and Lola from array,
// add these after refused with comma and space
    if (person==='Phil' || person==='Lola'){
        refused.textContent += `${person}, `;
    }
// Else, add after admitted with comma and space
    else {
        admitted.textContent += `${person}, `;
    }
}


// change last comma to dot
refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';