let numbers = document.querySelectorAll(".btns:not([aria-label='equals to'])");
let display = document.getElementById("screen");
let clearScreen = document.getElementById("slrscr");
let dlt = document.getElementById("btndelt");
let symbols = document.querySelectorAll(".symbbtns:not([aria-label='Delete']):not([aria-label='Clear screen'])");
// alert(symbol.length);
let calculate = document.getElementById("btnequalto");

// Defining a function to display the number when the button is clicked
function pressnumber(event) {
  let clickedButton = event.target;
  display.innerText += clickedButton.innerText;
}

// Defining a function to clear the entire screen
function clear() {
  display.innerHTML = "";
}

// Defining a function to remove the last character
function removeLastCharacter() {
  let currentText = display.innerText;
      display.innerText = currentText.slice(0, -1);
}

function addsymbol(){
    let currentText = display.innerText;
    let clickButton = event.target;
    display.innerText = currentText + " " + clickButton.innerText + " ";
}

function toperformcalculate(){
let expression = display.innerText;
let result = eval(expression);
display.innerText = result;
}

// Add event listeners
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  number.addEventListener("click", pressnumber);
}
clearScreen.addEventListener("click", clear);
dlt.addEventListener("click", removeLastCharacter);
for(let i = 0; i < symbols .length; i++){
let symbol = symbols[i];
symbol.addEventListener("click", addsymbol);
}
calculate.addEventListener("click", toperformcalculate);