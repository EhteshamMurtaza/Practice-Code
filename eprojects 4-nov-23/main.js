function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";
    var text;

    // Check if the name has at least 3 characters
    if (name.length < 3) {
        text = "Please Enter Valid Name (Minimum 3 characters)";
        error_message.innerHTML = text;
        return false;
    }

    // Check if the subject has at least 10 characters
    if (subject.length < 10) {
        text = "Please Enter Valid Subject (Minimum 10 characters)";
        error_message.innerHTML = text;
        return false;
    }

    // Check if the phone number is a valid 10-digit number
    if (isNaN(phone) || phone.length !== 10) {
        text = "Please Enter Valid Phone Number (10 digit)";
        error_message.innerHTML = text;
        return false;
    }

    // Check if the message has at least 140 characters and less than 500 characters
    if (message.length < 140 || message.length > 500) {
        text = "Message length should be between 140 and 500 characters";
        error_message.innerHTML = text;
        return false;
    }

    // If all checks pass, the form is valid
    return true;
}
