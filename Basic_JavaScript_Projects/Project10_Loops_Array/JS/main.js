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
