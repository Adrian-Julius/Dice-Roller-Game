/* ---------- Dice Roller Number Game ---------- */

function diceRoller() {
  const inputNumber = Number(document.getElementById("inputNumber").value);
  const diceImagesDisplay = document.getElementById("diceImagesDisplay");
  const dicesDisplay = document.getElementById("dices");
  const resultDisplay = document.getElementById("result");
  let total = 0;

  // arrays for dice values and images
  let diceNumbers = [];
  let diceImages = [];

  // If the User didn't input a number or input invalid number -----------------------------------------
  if (inputNumber === 0) {
    console.log(`Enter a valid number first.`, inputNumber);
    dicesDisplay.style.display = `none`;
    diceImagesDisplay.style.display = `none`;
    resultDisplay.style.color = `tomato`;
    resultDisplay.textContent = `Make sure to enter a valid number first.`;

    //reset
    document.getElementById("inputNumber").value = "";
  } else {
    for (let count = 0; count < inputNumber; count++) {
      // Random dice numbers generator -----------------------------------------------
      let randomNumbers = Math.floor(Math.random() * 6) + 1;
      total += randomNumbers;

      // Putting the dice value and images into an array  ----------------------------
      diceNumbers.push(randomNumbers);
      diceImages.push(
        `<img src="./assets/dice${randomNumbers}.png" alt="Dice${randomNumbers} Image" />`
      );
    }
    console.log(`Dices: ${diceNumbers}`);

    // Displaying the dices ----------------------------------------------------------
    dicesDisplay.style.display = `block`;
    dicesDisplay.textContent = `${diceNumbers.join(" → ")}`;

    resultDisplay.style.color = `black`;
    resultDisplay.textContent = `Total: ${total}`;

    diceImagesDisplay.style.display = `block`;
    diceImagesDisplay.innerHTML = diceImages.join("");
  }
}
