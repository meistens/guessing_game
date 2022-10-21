function guessGame() {
  let user = prompt("enter name: ");
  let score = 0;
  let level = 0;
  
  /**
  * using a for loop
  * i is the range
  * 10 is the maximum level attained
  * i is incremented
  */
  for (let i = 2; i < 10; i++) {
    let guess = Math.floor(Math.random() * i) + 1;
    let userInput = parseInt(prompt(`enter a value between 1 and ${i}`));
    
    if (userInput == guess) {
      level++;
      console.log(`congrats ${user}!\nYou are at level ${level}`);
      score++;
      console.log(`your score is ${score}`);
    } else if (i == 10) {
      console.log(`Perfect score ${user}`);
      break;
    } else {
      console.log(`wrong guess. It is ${guess}\nCurrent level: ${level}\nScore: ${score}`);
      break
    }
  }
}
guessGame();