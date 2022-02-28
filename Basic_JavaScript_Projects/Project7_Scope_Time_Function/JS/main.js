var A = 10;
function addNumbers1(){
    document.write(20 + A + "<br>"); //Global Variable pt1; Function 1 with arithmetic operators
}

function addNumbers2(){
    document.write(A + 100 + "<br>");  //Global Variable pt2; Function 1 with arithmetic operators
}

function addNumbers3(){
    var B = 25;
    document.write(20 + B + "<br>"); //Local Variable pt1
}

function addNumbers4(){
    var C = 35;
    document.write(C + 100); //Local Variable pt2
}


function divisionFunction1(){
    var Division = 25 / 5;
    document.getElementById("").innerHTML = "25 / 5 = " + Division; //ERROR Function for Division
    console.log(divisionFunction);
}

function dateFunction1() {
    if (new Date().getHours() < 17) {
        document.getElementById("Hours").innerHTML = "It's almost 5 whooo";
    } //IF Statement declaring if beofre 5pm, display value
}

function customFunction1() {
    if (new Date().getSeconds() > 30) {
        document.getElementById("Custom_Function").innerHTML = "Half a minute hass passed at least";
    } //Custom IF Statement that declares after a half minute has passed every minute
}

function ifElse1() {
    Sides = document.getElementById("Sides").value
    if (Sides != 8) {
        Display = "Incorrect.";
    } //IF, ELSE, Function that asks the user to enter input correctly and displays result strings
    else {
        Display = "You are Correct!"
    }
    document.getElementById("Guess").innerHTML = Display;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { //ELSE, IF Function with arithmetic operators; determines portion of day
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

addNumbers1(); //Display results of Class
addNumbers2();
addNumbers3();
addNumbers4();
divisionFunction1();

