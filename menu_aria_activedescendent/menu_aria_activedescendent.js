const menuButton = document.getElementById("menubtn");
const dropDown = document.getElementById("dropdown");
const menuItems = dropDown.querySelectorAll(".menuitem");
let currentMenuItem = -1;  

menuButton.addEventListener("click", (event) => {
    if (dropDown.style.display === "block") {
        dropDown.style.display = "none";
        menuButton.setAttribute("aria-expanded", "false");
    } else {
        dropDown.style.display = "block";
        menuButton.setAttribute("aria-expanded", "true");
        menuItems[0].focus();
        // menuButton.addEventListener("keydown", keyboardNavigation);
        menuButton.addEventListener("keydown", keyboardNavigation);
    }
});

// Defining keyboard navigation function
function keyboardNavigation(event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
        
        
        for (let i = 0; i < menuItems.length; i++) {
            if (menuItems[i] === document.activeElement) {
                currentMenuItem = i;
                break;
            }
        }

        if (currentMenuItem >= 0 || currentMenuItem < menuItems.length) {
            let nextMenuItem = currentMenuItem;

            if (event.key === "ArrowUp") {
                nextMenuItem = currentMenuItem === 0 ? menuItems.length - 1 : currentMenuItem - 1;
            } else if (event.key === "ArrowDown") {
                nextMenuItem = currentMenuItem === menuItems.length - 1 ? 0 : currentMenuItem + 1;
            }

            menuItems[nextMenuItem].focus();
            currentMenuItem = nextMenuItem;
            menuButton.setAttribute("aria-activedescendant", menuItems[currentMenuItem].id);
        }
    }
}

let instagram = dropDown.querySelector("#menuitem1");
let facebook = dropDown.querySelector("#menuitem2");
let snapchat = dropDown.querySelector("#menuitem3    ");
let twitter = dropDown.querySelector("#menuitem4");

// defining function for instagram
instagram.addEventListener("click", () => {
    event.stopPropagation();
window.location.href = "www.instagram.com";
});

// defining function for facebook
facebook.addEventListener("click", () => {
    event.stopPropagation();
    window.location.href = "www.facebook.com";
    });

    // defining function for snapchat
snapchat.addEventListener("click", () => {
    event.stopPropagation();
    window.location.href = "www.snapchat.com";
    });

    // defining function for twitter
twitter.addEventListener("click", () => {
    event.stopPropagation();
    window.location.href = "www.twitter.com";
    });