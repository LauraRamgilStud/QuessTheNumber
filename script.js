"use strict";

window.addEventListener("load", start);

let number;
let guess;

function start() {
  console.log("JavaSript is running");
  number = generateRandomNumber();
  document
    .querySelector("#input-form .btn")
    .addEventListener("click", recieveGuess);
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 99) + 1;
}

function recieveGuess() {
  const guess = document.getElementById("guess").valueAsNumber;
  document.getElementById("guess").value = "";
  checkGuess(guess);
}

function checkGuess(guess) {
  if (guess === number) {
    guessIsCorrect(guess);
  } else if (guess < number) {
    guessWrong(guess, "low");
  } else {
    guessWrong(guess, "high");
  }
}

function guessWrong(guess, msg) {
  const list = document.querySelector("#guess-list");
  const string = `<li>You guessed ${guess}: That is too ${msg}</li>`;
  list.insertAdjacentHTML("beforeend", string);
}

function guessIsCorrect(guess) {
  const list = document.querySelector("#guess-list");
  const string = `<li>You guessed ${guess}: That is correct!</li>`;
  list.insertAdjacentHTML("beforeend", string);
  document.querySelector("#input-form").remove();
}

/* function guessTooHigh(guess) {
  const list = document.querySelector("#guess-list");
  const string = `<li>You guessed ${guess}: That is too high</li>`;
  list.insertAdjacentHTML("beforeend", string);
} */
