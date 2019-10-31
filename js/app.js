//query select the input fields to gether data
const budgetInput = document.querySelector('#budgetAmount');
const expenseTitleInput = document.querySelector('#expenseType');
const expenseValueInput = document.querySelector('#expenseAmount');

//query select the buttons to trigger events
const calculateBtn = document.querySelector("#calculate");
const addExpenseBtn = document.querySelector("#addExpense");

//query select the data to display the results
const expensesList = document.querySelector(".expenseCollection");
let budgetValueDisplay = document.querySelector("#budgetValue");
let balanceValueDisplay = document.querySelector("#balanceValue");

//our running total for our budget
let totalFunds = 0;
let itemId = 0;

console.log(budgetInput);

loadEventListeners();

function loadEventListeners() {

  //add a click event listener for the calculate button that triggers a createBudget function
  calculateBtn.addEventListener("click", createBudget)
  //add a click event listener for the add expense button that triggers an addExpense function
  addExpenseBtn.addEventListener("click", addExpense)
}

function createBudget(event) {
  totalFunds = budgetInput.value;
  budgetValueDisplay.innerHTML = "$" + totalFunds;

  event.preventDefault();
}

function addExpense(event) {

  console.log('add expense test')
  //create an expense object that has 3 properties...id, title and amount 
  //note id is generated with our itemId variable and title and amount will be entered by the user in the text fields

  const expense = {
    id: itemId,
    title: expenseTitleInput.value,
    amount: expenseValueInput.value,
  };


  //dynamically create the list and take away from the budget
  var expenseLi = document.createElement("li");
  expensesList.appendChild(expenseLi);
  expenseLi.innerHTML =
    expense.title +
    " : $" +
    expense.amount;


  balanceValueDisplay.innerHTML = `$ ${totalFunds -= expense.amount}`;


  //create a remove button and once an item is deleted from the list it is added back to the budget
  removeBtn = document.createElement('a');
  removeBtn.className = "fa fa-trash"
  expenseLi.appendChild(removeBtn);


  removeBtn.addEventListener("click", function () {
    expensesList.removeChild(expenseLi);

    totalFunds = eval(totalFunds) + eval(expense.amount);
    balanceValueDisplay.innerHTML = `$ ${totalFunds}`;

  });

  itemId++;
  expenseTitleInput.value = '';
  expenseValueInput.value = '';
  event.preventDefault();
}

