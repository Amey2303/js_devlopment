let dialogContainer = document.getElementById("dialogContainer");
let dialog = document.getElementById("dialog");
//retrieving all elements selector with query selector method 
//[tabindex]:not[tabindex= "-1"] not considering elements with negative tabindex as focusable element

let firstFocusableElement = dialog.querySelector("button, [href], input, select, textarea, [tabindex]:not([tabindex = '-1'])");
let lastFocusableElement = dialog.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex = '-1'])");
lastFocusableElement  = lastFocusableElement [lastFocusableElement .length - 1];
//defining the function onclicking the open dialog button
function show() {
  var setAriaHiddenElement = document.querySelectorAll("*:not(#dialogContainer):not(script)");
  for (let i = 0; i < setAriaHiddenElement.length; i++){
    var elements = setAriaHiddenElement[i];
    elements .setAttribute('ariaHidden', 'true');
  }
    dialogContainer.style.display = 'block';
    dialog.setAttribute('tabindex', '-1');
    dialog.focus();
    document.addEventListener("keydown", trapFocus);
  }
  
//defining the function on clicking Close and "no" button
function closedialog() {
dialogContainer.style.display = "none";
dialog.removeAttribute("tabindex");

document.removeEventListener('keydown', trapFocus);

}
function trapFocus(event) {
  if (event.key === 'Tab') {
    if (event.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    }
  } if (event.key == "Escape") {
  closedialog();
}

}
