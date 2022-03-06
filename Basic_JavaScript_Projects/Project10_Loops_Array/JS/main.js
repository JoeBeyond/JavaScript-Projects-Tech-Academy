function Call_Loop () { //Function; Loop that decrements until zero then displays a message
    var Digit = "";
	var X = 30;
	while ( X > 0) {
		Digit += "<br>" + X;
		X --;
	}
	document.getElementById("Loop").innerHTML = Digit + "<br>" + " Finished!";
}

function string_Length1() { //Function that returns the length of a string as a number
    let text = "";
    let length = text.length;
    document.getElementById("stringlength").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = ""; //Function; For Loop that iterates through a list
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
} 

function array_Function() { //Function of Array calling index 3
    var Fruit = [];
    Fruit[0] = "Apple";
    Fruit[1] = "Kiwi";
    Fruit[2] = "Banana";
    Fruit[3] = "Raspberry";
    document.getElementById("Array").innerHTML = "The fourth item on this list is: " + Fruit[3];

}

function constant_function() { //Function featuring 2 const variables
    const Smoothie = {type:"Ice-Cream", flavor:"Caramel-Apple", size:"Large"};
    Smoothie.price = "6.49";
    document.getElementById("Constant").innerHTML = "The " + Smoothie.size + " " + Smoothie.type + " " + Smoothie.flavor + " Smoothie Costs " + Smoothie.price;
}

function let1Function() {
    var A = 25;
    document.write(A); { //LET Keyword Function
        let A = 50;
        document.write("<br>" + A);
    }
    document.write("<br>" + A);
}

function return_Function() { //Function that returns the value of PI
    return Math.PI;
}
document.getElementById("Return").innerHTML = return_Function();

function let2Function() { //LET Function with an Object with properties and a method(s)
    let Box = []
    Box[0] = "2-Dimensional";
    Box[1] = "1 Face";
    Box[2] = "4 Sides";
    document.getElementById("box").innerHTML = "This Box is " + Box[0] + " with " + Box[1] + " and " + Box[2];
}

function breakFunction() { //Break Statement in a Function; counts backwards from 10 until it reaches 3 in which it breaks out of the loop
    let countdown = "";
    for (let a = 10; a > 3; a--) {
        if (a == 3) break;
        countdown += a + "<br>";
    }
    document.getElementById("break").innerHTML = countdown;
}

function continue2_function() { //Continue Statement in a Function; counts upwards from 1 until 16, but at assigned variables, continues past the number
    let countup = "";
    for (let z = 1; z < 16; z++) {
        if (z === 4 || z === 9 || z === 13) continue;
        countup += z + "<br>";
    }
    document.getElementById("continue").innerHTML = countup;
}