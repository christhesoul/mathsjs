"use strict";

let form = document.querySelector('form');
let question = document.querySelector('[data-text="question"]');
let result = document.querySelector('[data-text="result"]');
let answer = form.querySelector('[data-input="answer"]');
let multiplicand = form.querySelector('[data-value="multiplicand"]');
let multiplier = form.querySelector('[data-value="multiplier"]');

function randomNumber() {
  return Math.floor(Math.random() * 12);
}

function resetAnswer() {
  answer.value = null;
  result.innerHTML = null;
  answer.focus();
}

function showQuestion() {
  question.innerHTML = `${multiplicand.value} x ${multiplier.value}`;
}

function generateQuestion() {
  multiplicand.value = randomNumber();
  multiplier.value = randomNumber();
  resetAnswer();
  showQuestion();
}

function isCorrect() {
  return Number(answer.value) == (multiplicand.value * multiplier.value);
}

function resultMessage() {
  return isCorrect() ? 'Correct!' : 'Nope!';
}

function showResult() {
  result.innerHTML = resultMessage();
}

function nextStep() {
  return isCorrect() ? generateQuestion() : resetAnswer();
}

function processResult() {
  showResult();
  setTimeout(() => nextStep(), 440);
  return false;
}

function submitAnswer() {
  if (answer.value == '') {

  } else {
    processResult();
  }
}

function init() {
  answer.focus();
  answer.onblur = submitAnswer;
  form.onsubmit = processResult;
  generateQuestion();
}

init();
