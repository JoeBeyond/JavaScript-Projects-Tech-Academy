// This is a JSON string variable //
var dog = '{"name": "Dax", "breed": "Great Pyrenees", "color": "White"}';

// Converts JSON strings to JavaScript objects //
var JSONstring = JSON.parse(dog);
document.getElementById("myDog").innerHTML = JSONstring.name + " the " +
    JSONstring.breed;