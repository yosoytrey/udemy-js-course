//// BUDGET CONTROLLER

var budgetController = (function() {

    // the data set used for this project
    var data = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        },
        budget: 0,
        percentage: -1
    }

    // define constructors for each income and each expense
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    }

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // calculates the percentages and stores it in the object
    Expense.prototype.calcPercentage = function(totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    // returns the percentage for the specific expense object
    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };

    // calculates the totals. takes the type as an input
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        })
        data.totals[type] = sum;
    };
    // begin return of public functions
    return {
        // adds item to the appropriate array (inc or exp)
        addItem: function(type, des, val) {
            var newItem, ID;

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
        // deletes the item from the appropriate array.
        deleteItem: function(type, id) {
            var ids, index;

            // id = 6
            //data.allItems[type][id] (can't do this)
            // ids = [1,2,4,6,8]
            // object 6 actually has an index of 3, so that's what we want to delete

            // 1. get an array of all the ids of the objets in the [type] array.
            ids = data.allItems[type].map(function(current) {
                return current.id;
            })
            // 2. pull out the index # of the object that we want to delete.
            index = ids.indexOf(id);

            // 3. delete that item from the appropriate array.
            // (don't confuse slice with splice)
            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
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
                //    console.log(data.percentage)
            } else {
                data.percentage = -1
            }
        },

        // calculates the percentages for all exp objects. Use forEach because we're only doing something, not returning anything.
        calculatePercentages: function() {

            data.allItems.exp.forEach(function(current) {
                current.calcPercentage(data.totals.inc);
            });
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

        // gets the percentages for all exp objects and stores them in an array. Use map because we're returning something, an array of all the percentages.
        getPercentages: function() {
            var allPerc = data.allItems.exp.map(function(current) {
                return current.getPercentage();
            });
            return allPerc;
        },

        // testing function to see data while building the app
        testing: function() {
            console.log(data)
        }
    }
})()

// UI CONTROLLER
var UIController = (function() {

    // sets the DOMstrings variables in a consolidated place
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

    var formatNumber = function(num, type) {
        var numSplit, int, dec;

        num = Math.abs(num);
        num = num.toFixed(2); //js converts the primitive to an object

        numSplit = num.split('.');
        int = numSplit[0];
        dec = numSplit[1];

        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }

        type === 'exp' ? sign = '-' : sign = '+';

        return sign + ' ' + int + '.' + dec;
    };

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

    displayDate: function() {
        var now, year, month;

        now = new Date();
         year = now.getFullYear();
         month = now.getMonth();
         months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

         document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ', ' + year;
    },

    // this adds the new income/expense to the UI using the values from the input
    addListItem: function(obj, type) {
        var html, newHtml, element

        // sets the html template for adding the new item to the UI (inc and exp)
        if (type === 'inc') {
            element = DOMstrings.incomeContainer

            html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

        } else if (type === 'exp') {
            element = DOMstrings.expensesContainer

            html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

        }
        //replaces the placeholder text with the actual inputs
        newHtml = html.replace('%id%', obj.id)
        newHtml = newHtml.replace('%description%', obj.description)
        newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

        // insert the income or expense line item into the DOM
        document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
    },

    deleteListItem: function(selectedID) {
        var el;
        // this pulls the element out of the DOM
        el = document.getElementById(selectedID);
        // this is done, because you can't delete an element in js, only a child.
        el.parentNode.removeChild(el);
    },

    // clears the fields of description and value after each enter/click
    clearFields: function() {
        var fields, fieldsArr

        fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue)

        fieldsArr = Array.prototype.slice.call(fields)

        fieldsArr.forEach(function(current, index, array) {
            current.value = ""
        })
        fieldsArr[0].focus()
    },

    displayBudget: function(obj) {
        var type;
        obj.budget >= 0 ? type = 'inc' : type = 'exp';

        document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
        document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, type);
        document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, type);

        if (obj.percentage > 0) {
            document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%'
        } else {
            document.querySelector(DOMstrings.percentageLabel).textContent = '---'
        }
    },

    displayPercentages: function(percentages) {

        var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

        var nodeListForEach = function(list, callback) {
            for (var i = 0; i < list.length; i++) {
                callback(list[i], i);
            }
        };

        nodeListForEach(fields, function(current, index) {
            if (percentages[index] > 0) {
                current.textContent = percentages[index] + '%';
            } else {
                current.textContent = '---';
            }
        });
    },


}
})()


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    // sets up the event listeners to wait for user input
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings()

        // captures the click action and then calls ctrlAddItem
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        // captures hitting the RETURN button and then calls ctrlAddItem
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem()
            }
        })
        // listener for deleting an item
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem)
    }

    // updates the budget by calculating the budget and then returning it. Then displays the new budget
    var updateBudget = function() {

        // 1. calculate the budget
        budgetCtrl.calculateBudget()

        // 2. return the budget
        var budget = budgetCtrl.getBudget()

        // 3. display the budget in the UI
        UICtrl.displayBudget(budget)


    }

    // ctrlAddItem gets the input and makes sure it's valid. If it is, then adds the input to the budget Controller, adds the line item to the UI and then updates the budget.
    var ctrlAddItem = function() {
        var input, newItem

        // 1. get the field input data
        input = UICtrl.getInput()

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

            // 2. add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value)

            // 3. add the new item to the UI
            UICtrl.addListItem(newItem, input.type);

            // 4. clear the fields
            UICtrl.clearFields();

            // 5. calculate and update budget
            updateBudget();

            // 6. calculate and update percentages.
            updatePercentages();

        }
    }
    // deletes the item from the budgetcontroller and removes the element from the UI. Then updates the budget.
    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;

        // identifes the parentNode ID that encapsulates both income and expenses. In this case, container. (container -> income/exepenses -> item --> item delete --> item__delete--btn)
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {

            //inc-1
            splitID = itemID.split('-');
            type = splitID[0]
            ID = parseInt(splitID[1]);

            // 1. delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);

            // 2. delete the item from the user interface.
            UICtrl.deleteListItem(itemID);

            // 3. update and show the new budget
            updateBudget();

            // 4. calculate and update percentages.
            updatePercentages();
        }
    }

    var updatePercentages = function() {

        // 1. calculate the percentage for the expense object.
        budgetCtrl.calculatePercentages();

        // 2. read percentages from the budget controller.
        var percentages = budgetCtrl.getPercentages();

        // 3. update the UI with the new percentages.
        UICtrl.displayPercentages(percentages);
    };


    // begin return of public functions

    // this starts the app by using init and turning on the listeners
    return {
        init: function() {
            console.log('Application has started');
            UICtrl.displayDate();
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
