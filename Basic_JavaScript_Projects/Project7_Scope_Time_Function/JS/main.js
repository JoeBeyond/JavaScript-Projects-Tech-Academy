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

addNumbers1(); //Display results of Class
addNumbers2();
addNumbers3();
addNumbers4();
divisionFunction1();

