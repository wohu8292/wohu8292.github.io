let spots = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = " ";
let dice_pic_2 = document.getElementById("die_2");
let messenger = document.getElementById("mes");
let counting = document.getElementById("spot");
let summed = document.getElementById("sum");
let playerEl = document.getElementById("player_el");
let player = {
  name: "james",
  chips: 200,
  sayHello: function () {
    console.log("heisann!");
  },
};

let dice = document.querySelectorAll("img");
let images = [
  "/img/dice-01.svg",
  "/img/dice-02.svg",
  "/img/dice-03.svg",
  "/img/dice-04.svg",
  "/img/dice-05.svg",
  "/img/dice-06.svg",
];

function roll() {
  isAlive = true;
  dice.forEach(function (die) {
    die.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (die) {
      die.classList.remove("shake");
    });
    let dieOneValue = getrandomdice();
    let dieTwoValue = getrandomdice();
    console.log(dieOneValue, dieTwoValue);
    document.querySelector("#die_1").setAttribute("src", images[dieOneValue]);
    document.querySelector("#die_2").setAttribute("src", images[dieTwoValue]);
    let dieOne = dieOneValue + 1;
    let dieTwo = dieTwoValue + 1;
    spots = [dieOne, dieTwo];
    sum = dieOne + dieTwo;
    console.log(spots);
    console.log(sum);
    renderGame();
  }, 800);
}

function getrandomdice() {
  let rd = Math.floor(Math.random() * 6);
  return rd;
}

function renderGame() {
  counting.textContent = "Spot: ";
  for (let i = 0; i < spots.length; i++) {
    counting.textContent += spots[i] + " ";
  }
  summed.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Press 'Roll' Button to roll next dice";
  } else if (sum === 21) {
    message = "You've got blackjack! Press 'Reset' Button to restart the game";
    hasBlackjack = true;
  } else {
    message = "You're out of the game. Press 'Reset' Button to restart the game";
    isAlive = false;
  }
  messenger.textContent = message;
}

function newDice() {
  if (isAlive === true && hasBlackjack === false) {
    dice.forEach(function (die) {
      die.classList.add("shake");
    });
    setTimeout(function () {
      dice.forEach(function (die) {
        die.classList.remove("shake");
      });
      let dice_1 = getrandomdice();
      document.querySelector("#die_1").setAttribute("src", images[dice_1]);
      dice_pic_2.remove();
      let die_1 = dice_1 + 1;
      sum += die_1;
      spots.push(die_1);
      renderGame();
    }, 800);
  }
}

function reset(){
    location.reload();
}