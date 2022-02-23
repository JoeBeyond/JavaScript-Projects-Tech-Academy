function hoverEffect1(){
    var addition = 5 + 5;
    document.getElementById("Math1").innerHTML = "5 + 5 = " + addition; //Function for Addition
}

function clickEffect1(){
    var Subtraction = 10 - 5;
    document.getElementById("Math2").innerHTML = "10 - 5 = " + Subtraction; //Function for Subtraction; notice it is Subtraction with a capitalized S
}

function hoverEffect2(){
    var multiplication = 5 * 5;
    document.getElementById("Math3").innerHTML = "5 * 5 = " + multiplication; //Function for Multiplication
}

function clickEffect2(){
    var Division = 25 / 5;
    document.getElementById("Math4").innerHTML = "25 / 5 = " + Division; //Function for Division
}

function hoverEffect3(){
    var mathTime = (5+5) * 4 / 2 * 3; //Arithmetic Operations Function
    document.getElementById("Math5").innerHTML = "5 plus 5, times 4, divided by 2, then multiplied by 3 equals " + mathTime
}

function clickEffect3(){
    var moduleOperator = 50 % 7; //Module Operator
    document.getElementById("Math6").innerHTML = "When you divide 50 by 7, you have a remainder of: " + moduleOperator;
}