function Ride_Function(){
    var Height, Can_ride; //Two Values
    Height = document.getElementById("Height").value; //Other Value
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //Input is weighed against a baseline value which then chooses an output based on input
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
} //Ternary Operator creating Input for Height verification; features 3 values operating together within a function

function Vote_Function(){
    var Age, Can_vote; //Two Values
    Age = document.getElementById("Age").value; //Other Value
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough"; //Input is weighed against a baseline value which then chooses an output based on input
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
} //Ternary Operator similar to the first, but made to reflect a decision to allow the user to vote or not based on Age

function Vehicle(Make, Model, Year, Color) { //State of Object
    this.Vehicle_Make = Make;
    this.Vehicle_Model= Model; //Constructor; Object is Vehicle
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color; //THIS Keyword
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //NEW Keyword
var Emily = new Vehicle("Jeep", "Trail-Hawk", 2019, "White and Black"); //Variables with Attributes
var Erik = new Vehicle("Ford", "Pinto", 1977, "Mustard");

function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + //Ternary Operator ( 3 values )
    " manufactured in " + Erik.Vehicle_Year;
}

function SpaceShip(Make, Model, Era, Color){ //State of Object
    this.SpaceShip_Make = Make;
    this.SpaceShip_Model = Model; //Constructor; Object is SpaceShip
    this.SpaceShip_Era = Era;
    this.SpaceShip_Color = Color; //THIS Keyword
}
var Graxis = new SpaceShip("Nebulaton", "Gala-Star", 245, "Zyron"); //NEW Keyword
var AI92 = new SpaceShip("Lyrazon", "X9", 109, "Rust");
var Burt = new SpaceShip("Light-Year", "Vortex-4", 158, "Prismatic");  //Variables with Attributes

function shipRegistration(){
    document.getElementById("New_and_This").innerHTML =
    "Burt pilots a " + Burt.SpaceShip_Color + "-colored " + Burt.SpaceShip_Model +
    " manufactured by the Company, " + Burt.SpaceShip_Make + ", in the Galactic Era: " + Burt.SpaceShip_Era;
} //Ternary Operator ( 3+ values )

function count_Function(){
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 5.345;
        function Plus_one () {Starting_point += 7.785;} //Nested Function(s)
        Plus_one();
        return Starting_point;
    }
}