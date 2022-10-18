const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images=['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

/* Declaring the alternative text for each image file */


/* Looping through images */

for (const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'xxx');
    newImage.setAttribute('alt', 'xxx');
    thumbBar.appendChild(newImage);

    switch(image){
        case 'pic1.jpg':
            newImage.src="images/pic1.jpg";
            break;
        case 'pic2.jpg':
            newImage.src="images/pic2.jpg";
            break;
        case 'pic3.jpg':
            newImage.src="images/pic3.jpg";
            break;
        case 'pic4.jpg':
            newImage.src="images/pic4.jpg";
            break;
        case 'pic5.jpg':
            newImage.src="images/pic5.jpg";
            break;
    };

    newImage.addEventListener('click',()=>{
        displayedImage.setAttribute('src', newImage.getAttribute('src'));
    })

    /* Wiring up the Darken/Lighten button */
    btn.addEventListener('click',()=>{
        if (btn.getAttribute('class')==='dark'){
            btn.setAttribute('class','light');
            btn.textContent='Lighten';
            overlay.style.backgroundColor="rgba(0,0,0,0.5)";
        }
        else{
            btn.setAttribute('class','dark');
            btn.textContent='Darken';
            overlay.style.backgroundColor="rgba(0,0,0,0)";
        }
    })
}




