function validateForm() {
    let x = document.forms["my_Form"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }