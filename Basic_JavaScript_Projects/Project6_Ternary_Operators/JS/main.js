function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function(){
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail-Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1977, "Mustard");

function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function SpaceShip(Make, Model, Era, Color){
    this.SpaceShip_Make = Make;
    this.SpaceShip_Model = Model;
    this.SpaceShip_Era = Era;
    this.SpaceShip_Color = Color;
}
var Graxis = new SpaceShip("Nebulaton", "Gala-Star", 245, "Zyron");
var AI92 = new SpaceShip("Lyrazon", "X9", 109, "Rust");
var Burt = new SpaceShip("Light-Year", "Vortex-4", 158, "Prismatic");

function shipRegistration(){
    document.getElementById("New_and_This").innerHTML =
    "Burt pilots a " + Burt.SpaceShip_Color + "-colored " + Burt.SpaceShip_Model +
    " manufactured by the Company, " + Burt.SpaceShip_Make + ", in the Galactic Era: " + Burt.SpaceShip_Era;
}