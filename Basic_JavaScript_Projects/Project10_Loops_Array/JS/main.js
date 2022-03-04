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