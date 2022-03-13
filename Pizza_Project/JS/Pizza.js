function getReceipt()   {
    // This initializes our string so it can get passed from function to function, growing line by line into a full receipt.
    var text1 = "<h3>You ordered:</h3>";
    // This establishes a variable as a number.
    var runningTotal = 0;
    var sizeTotal = 0;
    // Variable called as class; for inputs.
    var sizeArray = document.getElementsByClassName("size");
    // Loop; checks against array for a choice of one size.
    for (var i = 0; i < sizeArray.length; i++)  {
        if (sizeArray[i].checked)   {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    // Determines size and type of pizza.
    if (selectedSize === "Personal Pizza")  {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza")    {
        sizeTotal = 16;
    }
    // Assigns values to the array of pizzas in the loops above.
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    // These variables will get passed on to each function.
    getTopping(runningTotal,text1);
};
// Allows the selection of toppings, as well as combinations of toppings on the pizzas.
function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++)   {
        if (toppingArray[j].checked)    {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    // Allows counting of toppings.
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1)   {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    // Prints the values tied together as a multiple strings.
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};