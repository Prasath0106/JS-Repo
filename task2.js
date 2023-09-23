// var name="ram" , last="kumar" , age="30";
// document.write(name," ",last," ",age,"");

// var anchoviesPizzaScore = 0;
// var pepperoniPizzaScore = 4;
// var hawaiianPizzaScore = 4;
// var chickenBaconRanchPizzaScore = 6;
// (anchoviesPizzaScore<pepperoniPizzaScore)?document.write("True"):document.write("False"),document.write("<br> <br>");
// (chickenBaconRanchPizzaScore>hawaiianPizzaScore)?document.write("True"):document.write("False"),document.write("<br> <br>");
// (hawaiianPizzaScore>pepperoniPizzaScore)?document.write("True"):document.write("False"),document.write("<br> <br>");
// (pepperoniPizzaScore<=chickenBaconRanchPizzaScore)?document.write("True"):document.write("False"),document.write("<br> <br>");
// (hawaiianPizzaScore>=pepperoniPizzaScore)?document.write("True"):document.write("False");

for (var x=0; x<=15; x++) {
    if (x === 0) {
        document.write(x + "is even");
        document.write("<br>")
    }
    else if (x % 2 === 0) {
        document.write(x + "is even");
        document.write("<br>")
    }
    else{
        document.write(x + "is odd");
        document.write("<br>")
    }
}