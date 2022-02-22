var A = 1000
var B = 50
function myButton(){
    document.getElementById("Button").innerHTML = A; //Displays Variable after Clicking Button
}
function myButton2(){
    var sentence = "My cat is"
    sentence += " at the window."
    document.getElementById("Concatenated String").innerHTML = sentence; //Displays Concatenated String after Clicking Button
}

function mathFunction(){
    document.getElementById("Math").innerHTML = A * B;
}