function validateForm() {
    let x = document.forms["myForm"]["orderNumber"].value;
    if (x == "") {
        alert("Please check that at least Order Number is filled-out.")
        return false;
    }
}