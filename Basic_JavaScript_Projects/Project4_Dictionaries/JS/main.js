function buttonClick(){
    const Animal = {
        Name: "Carlene",
        Breed: "Bombay",
        Age: 5,
        Color: "Black"
      };
      delete Animal.Breed;
      document.getElementById("Dictionary").innerHTML = Animal.Breed;
} // Button displaying another element from HTML Dictionary