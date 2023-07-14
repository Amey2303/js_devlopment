var tabcontainer = document.getElementById("tabcontainer");
var tablist = document.getElementById("tablist");
var tabs = tablist.querySelectorAll(".tab");
var tabPannels = document.querySelectorAll(".tabpannel");

// Selecting the "greet tab" tab by default and making it's corrosponding tab pannel visible
tabs[0].setAttribute("aria-selected", "true");
tabs[0].setAttribute("tabindex", "0");
tabPannels[0].style.display = "block";

function rov() {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    //Assigning -1 to currentTabIndex variable so that no no active tab initially 
    var currentTabIndex = -1;
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i] === document.activeElement) {
        currentTabIndex = i;
        break;
      }
    }
    
    if (currentTabIndex !== -1) {
      tabs[currentTabIndex].removeAttribute("aria-selected");
      tabs[currentTabIndex].setAttribute("tabindex", "-1");
      tabPannels[currentTabIndex].style.display = "none";
      
      var nextTabIndex;
      if (event.key === "ArrowLeft") {
        /*Using tertinory operator statemenet before ? ssymbol is a condition
        statement between ? symbol and : symbol is an expression for true and
        ststatement after : symbol is for flase expression*/
        nextTabIndex = currentTabIndex === 0 ? tabs.length - 1 : currentTabIndex - 1;
      } else if (event.key === "ArrowRight") {
        nextTabIndex = currentTabIndex === tabs.length - 1 ? 0 : currentTabIndex + 1;
      }
      
      tabs[nextTabIndex].setAttribute("aria-selected", "true");
      tabs[nextTabIndex].setAttribute("tabindex", "0");
      tabPannels[nextTabIndex].style.display = "block";
      tabs[nextTabIndex].focus();
    }
  }
}

tabcontainer.addEventListener("keydown", rov);
