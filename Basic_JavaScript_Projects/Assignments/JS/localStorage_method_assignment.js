// Set the data as a key/value pair to be saved locally in your browser //
localStorage.setItem("Name","Dax");

// Then use the key "Name" to return its value "Dax" //
document.getElementById("myDog").innerHTML =
localStorage.getItem("Name");