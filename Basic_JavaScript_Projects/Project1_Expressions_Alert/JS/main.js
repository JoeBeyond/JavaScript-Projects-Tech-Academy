window.alert("Hello, World!"); //Displays window that says the message, Hello, World!
document.write("HELLO, Planet Alpha-"); //Displays window that says the message
var A = 51-39; //Variable A; Performs Arithmetic; Expression
document.write(A); //Displays Variable A
var B = 100; //Variable B; whole number
document.write(" Hi, I\'m Joe!") //Displays text; Escape Character
document.write(" 5\$ for a meal" //Concatenated String and Escape Character
    + " that includes 3 tacos \& 3 lime slices.") //same as above
var C = (" 50\% off the first 1000 tacos!" //Concatenated String Variable with Escape Character
    + " Come get \'em while the tacos are fresh!") //same as above
document.write(C); //Displays Variable C
var D = "Combo Deals", Combo1 = " Rice and Beans Plate with 2 Corn Tortillas.", Combo2 = " 2 Tacos and 1 Bean, Rice and Cheese Burrito.",
    Combo3 = " 1 Chile Relano with Rice and Beans."; //Multiple Child Variables nested in Parent Variable
document.write(" We've chosen a combo-meal for you...") //Displays Text
document.write(Combo2); //Invoke Object; Variable
document.write(" That is 10.00\$ please. ") //A String with an Excape Character
document.write(3+7) //Simple Expression
var E = "Free Tacos!";
var F = "Free Burritos!";
function myDeals(){
    document.getElementById("Deals").innerHTML = E+F;
}
function myColor(){
    let C = "Text";
    let result = C.fontcolor("blue");
    document.getElementById("Color").innerHTML = result;
}
