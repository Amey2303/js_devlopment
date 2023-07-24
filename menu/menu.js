let menuButton = document.getElementById("menuButton");
let menu = document.getElementById("menu");
let menuItem = menu.querySelectorAll(".menuitem");
let firstElement = menu.querySelector(".menuitem");
let lastElement = menuItem[menuItem.length - 1];

// Defining a function to show menu
function show_hide_menuitem(){
 if(menu.style.display === "none"){
    menu.style.display = "block";
    menuButton.setAttribute("aria-expanded", "true");
    firstElement.focus();
    firstElement.setAttribute("tabindex", "0");
 } else {
    menu.style.display = "none";
    menuButton.setAttribute("aria-expanded", "false");
    // firstElement.setAttribute("tabindex", "-1");
    menuItem.forEach(item => {
        item.setAttribute("tabindex", "-1");
      });
 }
    
}

menuButton.addEventListener("click", show_hide_menuitem);

//Setting roving tabindex
//Defining a function for keyboard navigation
let currentTabIndex = -1;
let nextTabIndex = -1;

function rov(event) {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    for (let i = 0; i < menuItem.length; i++) {
      if (menuItem[i] === document.activeElement) {
        currentTabIndex = i;
        break;
      }
    }

    if (currentTabIndex !== -1) {
      if (event.key === "ArrowUp") {
        nextTabIndex = currentTabIndex === 0 ? menuItem.length - 1 : currentTabIndex - 1;
      } else if (event.key === "ArrowDown") {
        nextTabIndex = currentTabIndex === menuItem.length - 1 ? 0 : currentTabIndex + 1;
      }
    }
    menuItem[nextTabIndex].setAttribute("tabindex", "0");
    menuItem[currentTabIndex].setAttribute("tabindex", "-1");
    menuItem[nextTabIndex].focus();
  }
  
    
}
menu.addEventListener("keydown", rov);

/*if (event.key === "ESCAPE") {
    menu.style.display = "none";
    menuButton.setAttribute("aria-expanded", "false");
    menuItem.forEach(item => {
      item.setAttribute("tabindex", "-1");
    });
    menuButton.focus(); // Move focus back to the menu button after closing the menu
  }*/