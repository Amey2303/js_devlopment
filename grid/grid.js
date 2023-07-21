let gridContainer = document.getElementById("gridcontainer");
let selectAllCheckBox = document.getElementById("selectall");
let ameyCheckBox = document.getElementById("ameycheckbox");
let aakashCheckBox = document.getElementById("aakashcheckbox");
let kinjalCheckBox = document.getElementById("kinjalcheckbox");

// Defining a function for the select all checkbox
function updateChildCheckboxState() {
  if (selectAllCheckBox.checked) {
    // Checking all the child checkboxes
    ameyCheckBox.checked = true;
    aakashCheckBox.checked = true;
    kinjalCheckBox.checked = true;
    selectAllCheckBox.removeAttribute("aria-checked");
  } else {
    ameyCheckBox.checked = false;
    aakashCheckBox.checked = false;
    kinjalCheckBox.checked = false;
    selectAllCheckBox.removeAttribute("aria-checked");
  }
}

// Defining a function to change the status of the select all checkbox with respect to changes in the state of the child checkboxes
function updateSelectAllCheckboxState() {
  if (ameyCheckBox.checked && aakashCheckBox.checked && kinjalCheckBox.checked) {
    selectAllCheckBox.checked = true;
    selectAllCheckBox.setAttribute("aria-checked", "true");
  } else if (!ameyCheckBox.checked && !aakashCheckBox.checked && !kinjalCheckBox.checked) {
    selectAllCheckBox.checked = false;
    selectAllCheckBox.setAttribute("aria-checked", "false");
  } else {
    selectAllCheckBox.checked = false;
    selectAllCheckBox.setAttribute("aria-checked", "mixed");
  }
}

selectAllCheckBox.addEventListener("click", updateChildCheckboxState);
ameyCheckBox.addEventListener("click", updateSelectAllCheckboxState);
aakashCheckBox.addEventListener("click", updateSelectAllCheckboxState);
kinjalCheckBox.addEventListener("click", updateSelectAllCheckboxState);

        // JavaScript code for roving tabindex in the grid

        // Get all focusable elements inside the grid
        const focusableElements = document.querySelectorAll(
            "#gridcontainer input[type='checkbox'], #gridcontainer [role='columnheader'], #gridcontainer [role='gridcell']"
        );

        // Initially, set tabindex="-1" for all elements inside the grid
        for (let i = 0; i < focusableElements.length; i++) {
            focusableElements[i].setAttribute("tabindex", "-1");
        }

        // Set the initially focused element to the first column header
        const firstColumnHeaderFocusable = document.querySelector("#gridcontainer [role='columnheader']");
        firstColumnHeaderFocusable.setAttribute("tabindex", "0");
        firstColumnHeaderFocusable.focus();

        // Defining a function to handle keyboard navigation iwth arrows
        function rov(event) {
            const key = event.key;

            // Getting the index of the currently focused element
let focusedElement = document.activeElement;
for(let j = 0; j < focusableElements.length; j++){
  if(focusableElements[j] === focusedElement ){
    const currentFocusIndex = j;

    switch (key) {
      case "ArrowDown":
          setFocus(currentFocusIndex + 5); // Moving focus to the next row
          break;
      case "ArrowUp":
          setFocus(currentFocusIndex - 5); // Moving  focus to the previous row
          break;
      case "ArrowLeft":
          setFocus(currentFocusIndex - 1); // moving focus to the previous column
          break;
      case "ArrowRight":
          setFocus(currentFocusIndex + 1); // Move focus to the next column
          break;
      case "Home":
          setFocus(0); // moving focus to the first element in the grid
          break;
      case "End":
          setFocus(focusableElements.length - 1); // moving focus to the last element in the grid
          break;
          case "":
            case "enter":
            if(focusedElement.type === "checkbox"){
              focusedElement.checked = !focusedElement.checked;
              updateSelectAllCheckboxState();
            }
  }
  break;
}
  }
}
             

            

        // Function to set the focus on the next or previous element
        function setFocus(index) {
            if (index >= 0 && index < focusableElements.length) {
for(let l = 0; l < focusableElements.length; l++){
  if(l === index) {
    focusableElements[l].focus();
    // focusableElements[l].tabIndex = "0";
focusableElements[l].setAttribute("tabindex", "0");
  } else {
    // focusableElements[l].tabIndex = "-1";
focusableElements[l].setAttribute("tabIndex", "-1");
  }
}


            }

          }

        // Add event listener for keydown on the grid container
                gridContainer.addEventListener("keydown", rov);