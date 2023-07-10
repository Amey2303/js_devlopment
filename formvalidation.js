function validate() {
    var error = document.getElementById("error");

    var emptyElements = document.querySelectorAll("input[type='text'][aria-required='true']");
    // Declare newDiv outside the loop and initialize it to null as providing inside the 'for' loop will be inside one scope
    var newDiv = ""; 

    for (var i = 0; i < emptyElements.length; i++) {
        var element = emptyElements[i];
        if (element.value === "") {
            newDiv = document.createElement('div');
            newDiv.className = "error";
            newDiv.innerHTML = "Required field!";
         element.style.borderColor = "red";
            newDiv.style.color = "red";
            element.insertAdjacentElement("afterend", newDiv);
        }
    }
var realName = document.querySelectorAll(".name");

    // Preventing form submission if there are errors
    if (newDiv !== "") {
        event.preventDefault();
    }

}
