// Created by Joshua Petrus
// Using math functions in as little lines as I could

// Code that will use math to answer a function

while(true){
// Two inputs needed to operate the equation picked
    var Var1 = prompt('What number would you like to input?');
    var Var2 = prompt('What is the 2nd number to input');

// Input for the scenerios to equate to vlaues of youur choice
    var Operation = prompt("Which mathematical operation would you like to do to those 2 numbers? You can 'add', 'subtract', 'multiply', 'divide', or 'sqaure'.");

// Different scenrios used for different scenerios
    if(Operation == "add"){
        print(float(Var1) + float(Var2))
    }

    if(Operation == "subtract"){
        print(float(Var1) - float(Var2))
    }

    if(Operation == "multiply"){
        print(float(Var1) * float(Var2))
    }

    if (Operation == "divide"){
        print(float(Var1) / float(Var2))
    }

    if(Operation == "square"){
        print(float(Var1) * float(Var1))
    }


}
