const selectAllCheckBox = document.getElementById("selectAllCheckbox");
const iosCheckBox = document.getElementById("iosCheckBox");
const androidCheckBox = document.getElementById("androidCheckBox");
const windowsCheckBox = document.getElementById("windowsCheckBox");

function check() {
  if (selectAllCheckBox.checked) {
    iosCheckBox.checked = true;
    androidCheckBox.checked = true;
    windowsCheckBox.checked = true;
  } else {
    iosCheckBox.checked = false;
    androidCheckBox.checked = false;
    windowsCheckBox.checked = false;
  }
}

function updateSelectAllCheckboxState() {
  if (iosCheckBox.checked && androidCheckBox.checked && windowsCheckBox.checked) {
    selectAllCheckBox.checked = true;
    selectAllCheckBox.indeterminate = false;
  } else if (!iosCheckBox.checked && !androidCheckBox.checked && !windowsCheckBox.checked) {
    selectAllCheckBox.checked = false;
    selectAllCheckBox.indeterminate = false;
  } else {
    selectAllCheckBox.indeterminate = true;
  }
}

selectAllCheckBox.addEventListener("click", check);
iosCheckBox.addEventListener("click", updateSelectAllCheckboxState);
androidCheckBox.addEventListener("click", updateSelectAllCheckboxState);
windowsCheckBox.addEventListener("click", updateSelectAllCheckboxState);