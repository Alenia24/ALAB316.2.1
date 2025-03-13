let nameEl;
setTimeout(() => {
  nameEl = prompt(`Enter your player name`);
}, 2000);

let imageEl = document.querySelector(".image");
let titleEl = document.querySelector("#title");
titleEl.classList.add("title");
let guessEl = document.querySelector("#count");
let number = Math.floor(Math.random() * 25 + 1);
let guessCount = 5;
let guess;
setTimeout(() => {
  guess = Number(prompt("Guess a number between 1 and 25!"));
  checkGuess();
}, 3000);

function checkGuess() {
  if (guess >= 1 && guess <= 25 && guess !== number && guessCount >= 0) {
    titleEl.innerHTML = `<h1>Wrong Guess ! 😂😂😂</h1>`;
    imageEl.innerHTML = `<img
        class="img-fluid"
        src="https://media.giphy.com/media/fUYhyT9IjftxrxJXcE/giphy.gif?cid=790b7611ukolnshvv3t53liyc1i144asklshft0p1ofqu9o2&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt=""
        width=300
        style="border-radius: 8px"
      />`;
    setTimeout(tryAgain(), 6000);
  } else if (guess > 25 && guess !== number && guessCount > 0) {
    alert(`You must enter a number between 1 and 25!`)
    guess = Number(
      prompt("Guess a number between 1 and 25!")
    );
    checkGuess();
  } else {
    if (guess === number) {
      titleEl.innerHTML = `<h1>You won ${nameEl}!</h1>`;
      guessEl.innerHTML = `<h6>I lose! 😭😭😭</h6>`;
      imageEl.innerHTML = `<img
        class="img-fluid"
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXM3Y3V5eXVyZmFvMmdqNGR5aHpta3QwOGVyYnAxc2RrdmthbTN2dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/d3mlE7uhX8KFgEmY/giphy.gif"
        alt=""
        width=300
        style="border-radius: 8px"
      />`;
    } else {
      titleEl.innerHTML = `<h1>You loose ${nameEl}!</h1>`;
      alert(`The number was ${number}`);
      imageEl.innerHTML = `<img
        class="img-fluid"
        src="https://media.giphy.com/media/6ElPiQGynp3oAFPxij/giphy.gif?cid=790b7611401yihubsz6a5xxxz0oc2fq7oifpo2dg7yhyym4u&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt=""
        width=300
        style="border-radius: 8px"
      />`;
    }
  }
}

function tryAgain() {
  if (guess > number) {
    guessCount--;
    guessEl.innerHTML = `<h6>You have ${guessCount} guess(es) remaining ${nameEl}!</h6>`;
    setTimeout(() => {
      guess = Number(
        prompt("The number is lower!\nGuess a number between 1 and 25!")
      );
      checkGuess();
    }, 500);
  } else {
    guessCount--;
    guessEl.innerHTML = `<h6>You have ${guessCount} guess(es) remaining ${nameEl}!</h6>`;
    setTimeout(() => {
      guess = Number(
        prompt("The number is higher!\nGuess a number between 1 and 25!")
      );
      checkGuess();
    }, 500);
  }
}
