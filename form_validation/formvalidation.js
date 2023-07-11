// Defining the function with a parameter
function validate(event) {
    var errorDisplays = document.querySelectorAll(".error");
    const regex = /^[a-zA-Z]+$/; // Using regular expressions for only string
const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//Using regular expression no space, using @ symbol and a domain name
    
    let errorFirstName = document.getElementById('error_fname');
    let errorLastName = document.getElementById('error_lname');
    let errorAge = document.getElementById('error_age');
    let errorDate = document.getElementById('error_date');
    let errorMonth = document.getElementById("error_month");
    let errorYear = document.getElementById("error_year");
    let errorEmail = document.getElementById("error_email");
    let errorPassword = document.getElementById("error_password");
    let errorConfirmPassword = document.getElementById("error_confpassword");

    let firstName = document.getElementById("fname");
    let lastName = document.getElementById("lname");
    let age = document.getElementById("age");
    let bDate = document.getElementById("date");
    let bMonth = document.getElementById("month");
    let bYear = document.getElementById("year");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmpassword = document.getElementById("confpassword");
  
    // Checking if first name is not empty and has only characters as input
    if (firstName.value === "") {
      errorFirstName.innerHTML = "First Name is a mandatory field";
    } else if (!regex.test(firstName.value)) {
      errorFirstName.innerHTML = "First Name must only have characters";
    } else {
      errorFirstName.innerHTML = "";
    }
  
    // Checking if last name is not empty and has only characters as input
    if (lastName.value === "") {
      errorLastName.innerHTML = "Last Name is a mandatory field";
    } else if (!regex.test(lastName.value)) {
      errorLastName.innerHTML = "Last Name must have characters only";
    } else {
      errorLastName.innerHTML = "";
    }
  
    // Checking if age is empty and age is between 1 to 120
    if (age.value === "") {
      errorAge.innerHTML = "Age is a mandatory field";
    } else if (age.value < 1 || age.value >= 120) {
      errorAge.innerHTML = "Age must be between 1 and 120";
    } else {
      errorAge.innerHTML = "";
    }
  
    // Validating if date field is not empty and must be between 1 to 31
    if (bDate.value === "") {
      errorDate.innerHTML = "Date is a mandatory field";
    } else if (bDate.value < 1 || bDate.value > 31) {
      errorDate.innerHTML = "Date must be between 1st to 31st";
    } else {
      errorDate.innerHTML = "";
    }
  
    // Validating if month field is not empty and must be between 1 to 12
    if (bMonth.value === "") {
      errorMonth.innerHTML = "Month is a mandatory field";
    } else if (bMonth.value < 1 || bMonth.value > 12) {
      errorMonth.innerHTML = "Month must be between 1st to 12th";
    } else {
      errorMonth.innerHTML = "";
    }
  
// Validating if Year field is not empty and must be between 0 to 3000
if (bYear.value === "") {
    errorYear.innerHTML = "Year is a mandatory field";
  } else if (bYear.value < 1 || bYear.value > 3000) {
    errorYear.innerHTML = "Year must be between 1st to 3000";
  } else {
    errorYear.innerHTML = "";
  }

  //Validating email
  if(email.value === ""){
    errorEmail.innerHTML = "Email is a mandatory field";
  }else if (!regex_email.test(email.value)){
    errorEmail.innerHTML = 'Invalid Email Id :' + "<br>" + 'Email must have a domain name, @ symbol for example ameyasrane23@gmail.com';
  }else {
    errorEmail.innerHTML = "";
  }

//Validating password
if (password.value === "") {
    errorPassword.innerHTML = "Password is a mandatory field";
  } else if (password.value.length > 7 && password.value.length <= 30) {
    if (!/[a-z]/.test(password.value) || !/[A-Z]/.test(password.value) || !/[0-9]/.test(password.value) || !/[!@#$%^&*()_+]/.test(password.value)) {
      errorPassword.innerHTML = 'Invalid password :' + "<br>" + 'Password must have more than 8 characters. Must have at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character';
    } else {
      errorPassword.innerHTML = "";
    }
  } else {
    errorPassword.innerHTML = "Password must be more than 8 characters";
  }
  
//Checking if confirm password matches password
if (confirmpassword.value !== "") {
    if (confirmpassword.value === password.value) {
      errorConfirmPassword.innerHTML = "Password does not match";
    } else {
      errorConfirmPassword.innerHTML = "";
    }
  } else {
    errorConfirmPassword.innerHTML = "Confirm password is a mandatory field";
  }
  

    // Checking if any element with error class name has any inner text, if yes, stopping the form from being submitted
    for (let i = 0; i < errorDisplays.length; i++) {
      let errorDisplay = errorDisplays[i];
      if (errorDisplay.innerHTML !== "") {
        event.preventDefault();
      }
    }
  }
  