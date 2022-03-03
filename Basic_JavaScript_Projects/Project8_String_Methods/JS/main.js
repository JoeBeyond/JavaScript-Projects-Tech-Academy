function concatenate_Function() {
    var A = "Push it to the limit, ";
    var B = "Walk along the razors edge, ";
    var C = "Don't look down just keep your head "; //Function to concatenate multiple strings using variables
    var D = "and you'll be finished! ";
    var whole_sentence = A.concat(B,C,D);
    document.getElementById("concat_strings").innerHTML = whole_sentence;
}

function sliceMethod() {
    var Sentence = "Years have passed since the Yam had grown.";
    var Section = Sentence.slice(5,31);
    document.getElementById("Slice").innerHTML = Section; //Function utilizing slice method to display a chunk of string
}

function upperCase() {
    let Blessing = "plus 3 constitution"
    let result = Blessing.toLocaleUpperCase(); //Function utilizing uppercase method
    document.getElementById("Caps").innerHTML = result;
}

function search_Function() {
    let text = "The river ran dry.";
    let position = text.search("river"); //Function utilizing search method
    document.getElementById("Search").innerHTML = position + " Gold Coins!";
}

function num2string() { //Function that converts number to string; Number Method
    var E = 13
    document.getElementById("numstring").innerHTML = E + " Damage taken!".toString();
}

function Precise_Method() {
    var F = 25.37579118; //Function that uses Precision Method to accurately display data
    document.getElementById("precision").innerHTML = "Success! Laceration debuff points: " + F.toPrecision(5);
}

function toFixedFunction() {
    let number = 73.89078300214233081; //Function that uses a toFixed Method to display a fixed amount of characters to the right of the decimal position
    let Deci = number.toFixed(6);
    document.getElementById("2Fixed").innerHTML = Deci + " Miles to Fort A";
}

function value_Function() {
    let Fleetfeet = "+10 to walking speed!"; //Function calling the return of a primitive value of a string
    let Effect = Fleetfeet;
    document.getElementById("Value").innerHTML = Effect;
}