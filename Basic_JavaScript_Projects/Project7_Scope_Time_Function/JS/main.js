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

addNumbers1(); //Display results of Class
addNumbers2();
addNumbers3();
addNumbers4();
divisionFunction1();
