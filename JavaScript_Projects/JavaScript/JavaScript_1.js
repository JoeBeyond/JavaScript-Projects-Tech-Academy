function Color_Function() { //Switch Statement that gives a list of colors with the user able to input a choice
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Spring Peony":
            Color_Output = "Spring Peony" + Color_String;
        break;
        case "Burnt Orange":
            Color_Output = "Burnt Orange" +
            Color_String;
        break;
        case "Wild Lavender":
            Color_Output = "Wild Lavender" + Color_String;
        break;
        case "Sea Green":
            Color_Output = "Sea Green" + Color_String;
        break;
        case "Golden Indigo":
            Color_Output = "Golden Indigo" + Color_String;
        break;
        case "Rustic Magenta":
            Color_Output = "Rustic Magenta" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exacly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function getClass1() { //Document.getElementByClassName method; calls the subprogram to h3 tag ( also index 2 ) in html file
    var Apple = document.getElementsByClassName("GetClass");
    Apple[2].innerHTML = "Apple Pie and Vanilla Ice Cream."
}