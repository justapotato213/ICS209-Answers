

//Defining stuff
var number1Input, number2Input;

//bonus 2 input
var number3Input;

//drop down
var operatorSelector, operatorSelector2;

//Currently selected operator
var operator, operator2;

//numbers 
var number1, number2, number3;


var bonus2Array;


function setup() {
  createCanvas(900, 900);

  //Creating the input part of the calculator  
  number1Input = createInput("Number 1");
  number1Input.position(100, 100);

  number2Input = createInput("Number 2");
  number2Input.position(350, 100);

  //Bonus 2 input
  number3Input = createInput("Bonus input");
  number3Input.position(600, 100);

  //Operator drop down
  operatorSelector = createSelect();
  operatorSelector2 = createSelect();

  // Options
  operatorSelector.option("+");
  operatorSelector.option("-");
  operatorSelector.option("*");
  operatorSelector.option("/");
  operatorSelector.option("^");
  operatorSelector.option("√");

  operatorSelector2.option(" ");
  operatorSelector2.option("+");
  operatorSelector2.option("-");
  operatorSelector2.option("*");
  operatorSelector2.option("/");


  operatorSelector.position(300, 100);
  operatorSelector2.position(550, 100);

}

function draw() {
  //clearing the old numbers off the screen
  clear();

  operator = operatorSelector.value()
  operator2 = operatorSelector2.value()


  number1 = Number(number1Input.value());
  number2 = Number(number2Input.value());
  number3 = Number(number3Input.value());

  //only dealing with 2 numbers  
  if (operator2 == " ") {
    //checking the value of the selected operator
    if (operator == "+") {
      //Calculating and displaying the result
      text(number1 + number2, 300, 200);
    }
    else if (operator == "-") {
      //Calculating and displaying the result
      text(number1 - number2, 300, 200);
    }
    else if (operator == "*") {
      //Calculating and displaying the result
      text(number1 * number2, 300, 200);
    }
    else if (operator == "/") {
      //Calculating and displaying the result
      text(number1 / number2, 300, 200);
    }
    else if (operator == "^") {
      //Calculating and displaying the result
      text(Math.pow(number1, number2), 300, 200);
    }
    else if (operator == "√") {
      //Calculating and displaying the result
      text(Math.sqrt(number1), 300, 200);
    }
  }
  
  //javascript should auto follow the order of operations so we can just let the program do the math in the text()

  //there is probably a much cleaner and less spaghetti way of doing it

  else if (operator2 == "+") {
    //checking the value of the selected operator
    if (operator == "+") {
      //Calculating and displaying the result
      text(number1 + number2 + number3, 300, 200);
    }
    else if (operator == "-") {
      //Calculating and displaying the result
      text(number1 - number2 + number3, 300, 200);
    }
    else if (operator == "*") {
      //Calculating and displaying the result
      text(number1 * number2 + number3, 300, 200);
    }
    else if (operator == "/") {
      //Calculating and displaying the result
      text(number1 / number2 + number3, 300, 200);
    }
  }
 
  else if (operator2 == "-") {
    //checking the value of the selected operator
    if (operator == "+") {
      //Calculating and displaying the result
      text(number1 + number2 - number3, 300, 200);
    }
    else if (operator == "-") {
      //Calculating and displaying the result
      text(number1 - number2 - number3, 300, 200);
    }
    else if (operator == "*") {
      //Calculating and displaying the result
      text(number1 * number2 - number3, 300, 200);
    }
    else if (operator == "/") {
      //Calculating and displaying the result
      text(number1 / number2 - number3, 300, 200);
    }
  }


  else if (operator2 == "*") {
    //checking the value of the selected operator
    if (operator == "+") {
      //Calculating and displaying the result
      text(number1 + number2 * number3, 300, 200);
    }
    else if (operator == "-") {
      //Calculating and displaying the result
      text(number1 - number2 * number3, 300, 200);
    }
    else if (operator == "*") {
      //Calculating and displaying the result
      text(number1 * number2 * number3, 300, 200);
    }
    else if (operator == "/") {
      //Calculating and displaying the result
      text(number1 / number2 * number3, 300, 200);
    }
  }

  else if (operator2 == "/") {
    //checking the value of the selected operator
    if (operator == "+") {
      //Calculating and displaying the result
      text(number1 + number2 / number3, 300, 200);
    }
    else if (operator == "-") {
      //Calculating and displaying the result
      text(number1 - number2 / number3, 300, 200);
    }
    else if (operator == "*") {
      //Calculating and displaying the result
      text(number1 * number2 / number3, 300, 200);
    }
    else if (operator == "/") {
      //Calculating and displaying the result
      text(number1 / number2 / number3, 300, 200);
    }
  }
}
