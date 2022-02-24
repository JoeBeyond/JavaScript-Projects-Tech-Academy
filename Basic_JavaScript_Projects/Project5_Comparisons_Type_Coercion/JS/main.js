document.write(typeof "Word");
document.write("A"+1);

function notNumber1(){
    document.getElementById("NaN1").innerHTML = 0/0
}

function notNumber2(){
    document.getElementById("NaN2").innerHTML = isNaN('Apple')
}

function notNumber3(){
    document.getElementById("NaN3").innerHTML = isNaN('101')
}