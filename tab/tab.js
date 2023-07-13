function rov(event) {
    var tablist = document.getElementById("tablist");
    var tabs = tablist.querySelectorAll(".tab");
var tabPannels = document.querySelectorAll(".tabpannels");
    // Accessing the current index of the active element 
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      // Initializing `currentTabIndex` with -1, useful to check whether it has been updated during the loop.
      // If the loop completes without finding a matching tab element, `currentTabIndex` will still have a value of -1,
      // indicating that the current active element is not one of the tabs.
      var currentTabIndex = -1;
      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] === document.activeElement) {
          currentTabIndex = i;
          break;
        }
      }
  
      if (currentTabIndex !== -1) {
        var nextTabIndex;
        if (event.key === "ArrowLeft") {
          // Using the ternary operator to define an if/else statement.
          // The statement before the ? symbol is a condition,
          // the statement between ? and : symbol is a true expression,
          // and the statement after the : symbol is a false expression.
          nextTabIndex = currentTabIndex === 0 ? tabs.length - 1 : currentTabIndex - 1;
        } else if (event.key === "ArrowRight") {
          nextTabIndex = currentTabIndex === tabs.length - 1 ? 0 : currentTabIndex + 1;
        }
  
        tabs[currentTabIndex].removeAttribute('aria-selected', 'false');
        tabs[currentTabIndex].setAttribute('tabIndex', '-1');
        

        tabs[nextTabIndex].setAttribute('tabIndex', '0');
        tabs[nextTabIndex].setAttribute('aria-selected', 'true');
        tabs[nextTabIndex].focus();
        }
    }
  }
  
  var tablist = document.getElementById("tablist");
  tablist.addEventListener("keydown", rov);
  