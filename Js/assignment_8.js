const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText="It was 94 fahrenheit inside, so :insertx: messed around at the home. The house he get last year was placed in :inserty:. he like stared :insertz: in excitement at the new home. Bob also love whole thing. it was a cool.";
let insertX=["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY=["the soup kitchen", "Disneyland", "the White House"];
let insertZ=["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


randomize.addEventListener('click', result);

function result() {

  let newStory=storyText;
  let xItem=randomValueFromArray(insertX);
  let yItem=randomValueFromArray(insertY);
  let zItem=randomValueFromArray(insertZ);

  newStory=newStory.replace(":insertx:",xItem);
  newStory=newStory.replace(":inserty:",yItem);
  newStory=newStory.replace(":insertz:",zItem);
  
  if(customName.value !== '') {
    const name = customName.value;
    newStory=newStory.replace("Bob",name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.071428571428571)+' stone';
    const temperature =  Math.round((94-32)*(5/9))+' centigrade';

    newStory=newStory.replace("94 fahrenheit", temperature);
    newStory=newStory.replace("300 pounds", weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}