function formValidation(){
    var firstName = document.getElementById('first-name-input');
    var lastName = document.getElementById('last-name-input');
    var email = document.getElementById('email-input');

    if(firstName.value == ""){
        firstName.value='Enter First Name'
        firstName.style.borderColor = "red";
        return false;
    }
    if(lastName.value == ""){
        lastName.value='Enter Last Name'
        lastName.style.borderColor = "red";
        return false;
    }
    if(email.value == ""){
        email.value='Enter your Email'
        email.style.borderColor = "red";
        return false;
    }

    alert("First Name : "+firstName.value+"\nLast Name : "+lastName.value+"\nEmail : "+email.value)
}

