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
    var Section = Sentence.slice(10,20);
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