// Accessing all the elements
const comboBox = document.getElementById("input");
const optionContainer = document.getElementById("listboxoptionscontainer");
const listBoxOptions = document.getElementById("listboxoptions");
const options = listBoxOptions.querySelectorAll('.options');
const firstFocusableElement = document.querySelector("#option1");
const actualFirstFocusableElement = document.querySelector(".options");
const lastFocusableElement = options[options.length - 1];



// Hide the options by default when the page loads
hide();


// Defining function to show options on click
function show(){
    listBoxOptions.style.display = "block";
    comboBox.setAttribute("aria-expanded", "true");
    firstFocusableElement.focus();
    firstFocusableElement.setAttribute("tabindex", "0");
}

// Defining a function to hide option on click
function hide(){
    listBoxOptions.style.display = "none";
    comboBox.setAttribute("aria-expanded", "false");
    comboBox.focus();
    for(let i = 0; i < options.length; i++){
        let option = options[i].setAttribute("tabindex", "-1");
    }
}

function toggleoptions(){
    let isVisible = listBoxOptions.style.display !== "none";
    if(isVisible){
        hide();
    } else {
        show();
    }
}

// Defining a function as default function of enter key is to submit change the functionality to toggleoptions
function handlekey(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        toggleoptions();
    }  else if(event.altKey && event.key === "ARROWDOWN"){
        show();
    }
}



comboBox.addEventListener('click', toggleoptions);
comboBox.addEventListener('keydown', handlekey);

//Defining a function for keyboard navigation
// Defining a function for keyboard navigation
function listBoxKeyboardNavigation(event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        // event.preventDefault();
        let currentTabIndex = -1;
        for (let i = 0; i < options.length; i++) {
            if (options[i] === document.activeElement) {
                currentTabIndex = i;
                break; // existing the loop once the current index is found
            }
        }

        if (currentTabIndex !== -1) {
            let nextTabIndex;
            if (event.key === "ArrowUp") {
                nextTabIndex = currentTabIndex === 0 ? options.length - 1 : currentTabIndex - 1;
            } else if (event.key === "ArrowDown") {
                nextTabIndex = currentTabIndex === options.length - 1 ? 0 : currentTabIndex + 1;
            } 

            options[nextTabIndex].focus();
            options[nextTabIndex].setAttribute("tabindex", "0");
            options[currentTabIndex].setAttribute("tabindex", "-1");
        }
}
}

optionContainer.addEventListener("keydown", listBoxKeyboardNavigation);


//Function to select an option 
function selectOption(event) {
const selectedOption = event.target;
comboBox.innerText = selectedOption.innerText;

for(let i =0;i<options.length;i++){
    options[i].setAttribute("aria-selected", "false");
}
selectedOption.setAttribute("aria-selected", "true");
hide();
}

// Add the "click" event listener to each option for selecting options when clicked
for (let i = 0; i < options.length; i++) {
options[i].addEventListener("click", selectOption);
}

// Add the "keydown" event listener to each option for selecting options with the Enter key
for (let i = 0; i < options.length; i++) {
options[i].addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        selectOption(event);
    }
});
}