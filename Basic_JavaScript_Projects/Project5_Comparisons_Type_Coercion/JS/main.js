A = 5;
document.write(A === A); //Data Type and Value Match; Result is True
document.write("<br>");

B = 5;
C = "10";
document.write(B === C); //Different Data Type and Different Value; Result is False
document.write("<br>")

D = 5;
E = "5";
document.write(D === E); //Different Data Type but Same Value; Returns False
document.write("<br>")

F = 5;
G = 10;
document.write(F === G); //Same Data Type and Different Value; Returns False;
document.write("<br>")

document.write(1<2 && 2>1); //AND Operator; Returns True
document.write("<br>"); //..
document.write(5>10 && 5<10); //AND Operator; Returns False
document.write("<br>") //..

X = 50; //Key-Value Pair
Y = 100; //Key-Value Pair
document.write(154>86 || 49>33); //OR Operator; Returns True
document.write("<br>"); //..
document.write(X>Y || Y<X); //OR Operator featuring Values X and Y; Returns False
document.write("<br>"); //..

document.write(typeof "Word" + "<br>"); //Displays a string; string
document.write("A"+1 + "<br>"); //"One" String begins where the first Ends
document.write(2E310 + "<br>"); //Infinity
document.write(-3E310 + "<br>"); //Negative Infinity
document.write(10>5); //10 is Greater than 5; True
document.write("<br>"); //..
document.write(10<5); //10 is Less than 5; False
document.write("<br>"); //..
document.write(5+5 == 10); //Value 1 is Equal to Value 2; True
document.write("<br>"); //..
document.write(5+5 == 15); //Value 1 is Equal to Value 2; False
console.log(5+5); //Write in Browser Console the number 10
console.log(3>5); //Write in Browser Console that 3 is Greater than 5; False


function notNumber1(){
    document.getElementById("NaN1").innerHTML = 0/0 //Divide by Zero
}

function notNumber2(){
    document.getElementById("NaN2").innerHTML = isNaN('Apple') //NaN String
}

function notNumber3(){
    document.getElementById("NaN3").innerHTML = isNaN('101') //NaN Number
}