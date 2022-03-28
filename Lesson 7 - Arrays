

let groceryList = [];
let groceryInput, submit, removeInput, removeButton;

let itemIndex = [];

let foundItem = true;

let tooManyItem = false;

let duplicateItem = false;

function setup() {
  createCanvas(500, 500);

  groceryInput = createInput();
  groceryInput.position(100, 55);

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


  // Displays all the items in the list
  for (let i = 0; i <= groceryList.length; i++) {
    
    // checking if the current item is apples or chicken to make the font green

    if (groceryList[i] == "apples" || groceryList[i] == "chicken") {
      // changing the colour
      fill(0, 255, 0);
    }

    else {
      // resetting the colour
      fill(0);
    }

    // actually displaying the text
    text(groceryList[i], 150, 150 + i * 20);
  }

  // checking if we haven't found the item 
  if (!foundItem) {
    text("Item is not in your list", 100, 25);
  }

  if (duplicateItem){
    text("Item is already in your list!", 100, 25);
  }

  if (tooManyItem){
    text("Too many items!", 100, 25);
  }


}

function pressAdd() {

  // reset duplicateItem and tooManyItem so text doesn't overlap
  duplicateItem = false;
  tooManyItem = false;


  // check if the length of the list is under 10 items and doesn't have the item already
  if (groceryList.length < 10 ) {
    // checking if its already in the list
    if (!groceryList.includes(groceryInput.value())){
      // add the item to the list
      groceryList.push(groceryInput.value());
      // sort the list
      groceryList.sort();


    } 
    // display duplicateItem text
    else{
      duplicateItem = true;
    }
  }
  // display tooManyItem text
  else{
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
  if (groceryList.includes(groceryInput.value())) {
    // item is in the list, find the index of item and delete it
    groceryList.splice(groceryList.indexOf(groceryInput.value()), 1);

    // sort the list again
    groceryList.sort();

    // reset foundItem
    foundItem = true;

  }

  // display a message if it doesn't exist
  else {
    // set variable to false to signify that we haven't found the item
    foundItem = false;
  }

}
