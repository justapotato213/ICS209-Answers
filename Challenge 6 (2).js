let groceryList = {};
let groceryInput, submit, quantityInput, removeButton;

let itemIndex = [];

let foundItem = true;

let tooManyItem = false;

let duplicateItem = false;

let listYValue = 0;

function setup() {
  createCanvas(900, 500);

  groceryInput = createInput();
  groceryInput.position(110, 55);

  quantityInput = createInput();
  quantityInput.position(110, 95);

  submit = createButton("Add");
  submit.position(300, 55);
  submit.mousePressed(pressAdd);

  removeButton = createButton("Remove");
  removeButton.position(350, 55);
  removeButton.mousePressed(pressRemove);
}

function draw() {
  background(255);

  fill(0);
  textSize(20);
  text("Item: ", 20, 65);

  text("Current List: ", 20, 150);

  text("Quantity:", 20, 105)


  listYValue = 0

  // Displays all the items in the list
  for (let i in groceryList) {

    // changing text colour if the item is apples or chicken
    if (i == "apples" || i == "chicken") {
      fill(0, 255, 0);
    }
    else {
      fill(0);
    }
    // actually displaying the text
    text(i + ": " + groceryList[i], 150, 150 + listYValue * 20);
    // add y value 
    listYValue += 1
  }

  // checking if we haven't found the item 
  if (!foundItem) {
    text("Item is not in your list", 100, 25);
  }

  if (duplicateItem) {
    text("Item is already in your list!", 100, 25);
  }

  if (tooManyItem) {
    text("Too many items!", 100, 25);
  }


}

function pressAdd() {

  // reset duplicateItem and tooManyItem so text doesn't overlap
  duplicateItem = false;
  tooManyItem = false;


  // check if the length of the list is under 10 items and doesn't have the item already
  if (Object.keys(groceryList).length < 10) {
    // checking if its already in the list
    if (!(groceryInput.value() in groceryList)) {
      // add the item to the list
      groceryList[groceryInput.value()] = quantityInput.value();
    }
    // add the quantity onto it
    else {
      groceryList[groceryInput.value()] = Number(groceryList[groceryInput.value()]) + Number(quantityInput.value())
    }
  }
  // display tooManyItem text
  else {
    tooManyItem = true;
  }

  // reset the foundItem thing if they added something
  foundItem = true;

}

function pressRemove() {
  // reset these variables so text doesn't overlap
  duplicateItem = false;
  tooManyItem = false;

  // check if the item is even in the list
  if (groceryInput.value() in groceryList) {

    // check if the item has more quantity than the quantity we are removing
    if (Number(groceryList[groceryInput.value()]) > Number(quantityInput.value())){
      // minus it from the groceryList
      groceryList[groceryInput.value()] -= Number(quantityInput.value())
    }
    // they don't have enough so we delete it
    else{
      // remove it from the Object
      delete groceryList[groceryInput.value()]
    }
    
    // reset foundItem
    foundItem = true;

  }
  // display a message if it doesn't exist
  else {
    // set variable to false to signify that we haven't found the item
    foundItem = false;
  }

}
