let menuButton = document.getElementById("menuButton");
let menu = document.getElementById("menu");
let menuItem = menu.querySelectorAll(".menuitem");
let firstElement = menu.querySelector(".menuitem");
let instagram = document.getElementById("option1");
let facebook = document.getElementById("option2");
let snapchat = document.getElementById("option3");
let twitter = document.getElementById("option4");

// Defining a function to show/hide menu
function show_hide_menuitem() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
    menuButton.setAttribute("aria-expanded", "true");
    firstElement.focus();
    firstElement.setAttribute("tabindex", "0");
  } else {
    menu.style.display = "none";
    menuButton.setAttribute("aria-expanded", "false");
    menuItem.forEach(item => {
      item.setAttribute("tabindex", "-1");
    });
  }
}

menuButton.addEventListener("click", show_hide_menuitem);

// Defining a function for keyboard navigation
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
      menuItem[nextTabIndex].setAttribute("tabindex", "0");
      menuItem[currentTabIndex].setAttribute("tabindex", "-1");
      menuItem[nextTabIndex].focus();
    }
  } else if (event.key === "Escape") { // Implementing the 'esc' function inside the 'else' statement
    menu.style.display = "none";
    menuButton.setAttribute("aria-expanded", "false");
    menuItem.forEach(item => {
      item.setAttribute("tabindex", "-1");
    });
    menuButton.focus(); // Move focus back to the menu button after closing the menu
  }
}

menu.addEventListener("keydown", rov);

//Defining a function for all menu items
instagram.addEventListener('click', () => {
  window.location.href = "https://www.instagram.com/";
});


facebook.addEventListener('click', () => {
  window.location.href = "https://www.facebook.com/";
});

twitter.addEventListener('click', () => {
  window.location.href = "https://twitter.com/i/flow/login?redirect_after_login=%2F";
});

snapchat.addEventListener('click', () => {
  window.location.href = "https://www.snapchat.com/";
});

