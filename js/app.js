//query select the input fields to gether data
const budgetInput = ?;
const expenseTitleInput = ?;
const expenseValueInput = ?;

//query select the buttons to trigger events
const calculateBtn = ?;
const addExpenseBtn = ?;

//query select the data to display the results
const expensesList = ?;
let budgetValueDisplay = ?;
let balanceValueDisplay = ?;

//our running total for our budget
let totalFunds = 0;

let itemId = 0;

loadEventListeners();

function loadEventListeners() {
  //add a click event listener for the calculate button that triggers a createBudget function
  //add a click event listener for the add expense button that triggers an addExpense function
}

function createBudget(event) {
  
  event.preventDefault();
}

function addExpense(event) {
  //create an expense object that has 3 properties...id, title and amount 
  //note id is generated with our itemId variable and title and amount will be entered by the user in the text fields

  //dynamically create the list and take away from the budget
  //create a remove button and once an item is deleted from the list it is added back to the budget
  
  
  itemId++;
  expenseTitleInput.value = '';
  expenseValueInput.value = '';
  event.preventDefault();
}
