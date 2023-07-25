// Accessing all the elements
const comboBox = document.getElementById("input");
const optionContainer = document.getElementById("listboxoptionscontainer");
const listBoxOptions = document.getElementById("listboxoptions");
const options = listBoxOptions.querySelectorAll('.options');

// Defining function to show options on click
function show(){
    listBoxOptions.style.display = "block";
    comboBox.setAttribute("aria-expanded", "true");
    // alert("show");
}

// Defining a function to hide option on click
function hide(){
    listBoxOptions.style.display = "none";
    comboBox.setAttribute("aria-expanded", "false");
    // alert("hide");
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
function handlekey(event){
    if(event.key === "Enter"){
        event.preventDefault();
        toggleoptions();
    }
}

comboBox.addEventListener('click', toggleoptions);
comboBox.addEventListener('keydown', handlekey);
