// get required elements from html
let select = document.querySelector('select');
let html = document.querySelector('.output');

// if option is selected, then execute function.
select.onchange=function(){
    const choice =select.value;

// Switch statement for different cases.
    switch(choice){
        case 'black':
            update('black', 'white');

// In case option is black, put black and white as a 
// parameter for update function.
            break;
        case 'white':
            update('white', 'black');
            break;
        case 'purple':
            update('purple', 'white');
            break;
        case 'yellow':
            update('yellow', 'darkgray');
            break;
        case 'psychedelic':
            update('lime', 'purple');
            break;
}
}

// this function change the style of background color
// and text color.
function update(bgColor, textColor){
    html.style.backgroundColor=bgColor;
    html.style.color=textColor;
}
