
    // BUDGET CONTROLLER
let budgetController = (function() {

    // some code

})()

    // UI CONTROLLER
let UIController = (function() {

    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },
        getDOMstrings: function() {
            return DOMstrings
        }
    }
})()


// GLOBAL ALL CONTROLLER
let controller = (function(budgetCtrl, UICtrl) {

    let DOM = UICtrl.getDOMstrings()
    let ctrlAddItem = function() {

        // 1. get the field input data
        let input = UICtrl.getInput()
        console.log(input)
        // 2. add the item to the budget controller
        // 3. add the new item to the UI
        // 4. calculate the budget
        // 5. display the budget on the UI

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem()
            }

    })


})(budgetController, UIController)
