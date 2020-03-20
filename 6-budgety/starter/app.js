
    //// BUDGET CONTROLLER

let budgetController = (function() {

    // data set used for this project
    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }

    // define constructors for each income and each expense
    let Expense = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    let Income = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    // calculates the totals. takes the type as an input
    let calculateTotal = function(type) {
        let sum = 0
        data.allItems[type].forEach(function(cur) {
            sum += cur.value
        })
        data.totals[type] = sum
    }
    // begin return of public functions

    return {
        // adds item to the appropriate array (inc or exp)
        addItem: function(type, des, val) {
            let newItem, ID

            // create new ID (check to see if it's greater than 0, if not set it to 0)
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1
            } else {
                ID = 0
            }

            // create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val)
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val)
            }

            //push it into our data structure
            data.allItems[type].push(newItem)

            // return the new element
            return newItem
        },

        // calculates the budget by using calculateTotal method from Budget Controller
        calculateBudget: function() {

            // 1. calculate total income and expenses
            calculateTotal('exp')
            calculateTotal('inc')

            // 2. calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp

            // 3. calculate the percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100)
                console.log(data.percentage)
            } else {
                data.percentage = -1
            }



        },
        // returns the values for budget, income, expenses, and percentage
        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        // testing function to see data while building the app
        testing: function() {
            console.log(data)
        }
    }
})()

    // UI CONTROLLER
let UIController = (function() {

    // sets the DOMstrings variables in a consolidated place
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage'

    }
    // begin return of public functions
    return {

        // gets the input from the UI fields
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },

        //gets the values of the DOM strings to be used in the UI controller
        getDOMstrings: function() {
            return DOMstrings
        },

        // this adds the new income/expense to the UI using the values from the input
        addListItem: function(obj, type) {
            let html, newHtml, element

            // sets the html template for adding the new item to the UI (inc and exp)
            if (type === 'inc') {
                element = DOMstrings.incomeContainer

                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer

                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

            }
            //replaces the placeholder text with the actual inputs
                newHtml = html.replace('%id%', obj.id)
                newHtml = newHtml.replace('%description%', obj.description)
                newHtml = newHtml.replace('%value%', obj.value)

            // insert the income or expense line item into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
        },

        // clears the fields of description and value after each enter/click
        clearFields: function() {
            let fields, fieldsArr

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue)

            fieldsArr = Array.prototype.slice.call(fields)

            fieldsArr.forEach(function(current, index, array) {
                current.value = ""
            })
            fieldsArr[0].focus()
        },

        displayBudget: function(obj) {

            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp

            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%'
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '--'
            }
        }
    }
})()


// GLOBAL APP CONTROLLER
let controller = (function(budgetCtrl, UICtrl) {

    // sets up the event listeners to wait for user input
    let setupEventListeners = function() {
        let DOM = UICtrl.getDOMstrings()

        // captures the click action and then calls ctrlAddItem
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        // captures hitting the RETURN button and then calls ctrlAddItem
        document.addEventListener('keypress', function(event) {
                if (event.keyCode === 13 || event.which === 13) {
                    ctrlAddItem()
                }
        })
    }

    // updates the budget by calculating the budget and then returning it. Then displays the new budget
    let updateBudget = function() {

        // 1. calculate the budget
        budgetCtrl.calculateBudget()

        // 2. return the budget
        let budget = budgetCtrl.getBudget()

        // 3. display the budget in the UI
        UICtrl.displayBudget(budget)


    }

    // ctrlAddItem gets the input and makes sure it's valid. If it is, then adds the input to the budget Controller, adds the line item to the UI and then updates the budget.
    let ctrlAddItem = function() {
        let input, newItem

        // 1. get the field input data
        input = UICtrl.getInput()

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

            // 2. add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value)

            // 3. add the new item to the UI
            UICtrl.addListItem(newItem, input.type)

            // 4. clear the fields
            UICtrl.clearFields()

            // 5. calculate and update budget
            updateBudget()

        }
    }
    // begin return of public functions

    // this starts the app by using init and turning on the listeners
    return {
        init: function() {
            console.log('Application has started')
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            })
            setupEventListeners()
        }
    }
// the global controller app reads in the budget and UI modules when intialized
})(budgetController, UIController)

// starts the program
controller.init()
