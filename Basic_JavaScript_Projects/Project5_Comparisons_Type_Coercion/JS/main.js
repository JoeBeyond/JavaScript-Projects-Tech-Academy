document.write(typeof "Word" + "<br>");
document.write("A"+1 + "<br>");
document.write(2E310 + "<br>");
document.write(-3E310 + "<br>");
document.write(10>5);
document.write("<br>");
document.write(10<5);
console.log(5+5);
console.log(3>5);

function notNumber1(){
    document.getElementById("NaN1").innerHTML = 0/0
}

function notNumber2(){
    document.getElementById("NaN2").innerHTML = isNaN('Apple')
}

function notNumber3(){
    document.getElementById("NaN3").innerHTML = isNaN('101')
}