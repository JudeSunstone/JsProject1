let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],


    expensesItem = document.getElementsByClassName("expenses-value"),
    expensesBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-value"),
    incomeItem = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    sumValue = document.querySelector(".choose-sum"),
    percentValue = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");


let money, time; //doing vars global

startBtn.addEventListener('click', function() {

    time =  prompt("Введите дату в формате YYYY-MM-DD", ''); 
    money = +prompt("Ваш бюджет на месяц?", ''); // при перечислении переменных запятая! унарный плюс для превращениея в число

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value =  new Date(Date.parse(time)).getFullYear(); //value - working with inputs
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1; //  month is from 0!
    dayValue.value = new Date(Date.parse(time)).getDay();
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value, // i - because of i = 0 => beginning
            b = expensesItem[++i].value; // prefix!

        if ( (//typeof(a))=== 'string' &&// 
        typeof(a)) != null && (typeof(b)) != null
        && a != "" && b != '' && a.length < 50) {
             appData.expenses[a] = b; //пара ключ-значение
             sum += +b; // +b for int 
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum; //why no work with html?
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value; //i - чтобы получать из каждого элемента по порядку
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; //in html shows undefined. why
    }
});

countBtn.addEventListener('click', function() {

    if (appData.budget != undefined) { //so there must be defined
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay < 100) {
            levelValue.textContent = "Min level of income";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Mid level of income";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "High level of income";
        } else { 
            levelValue.textContent = "Must be some kind of mistake";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('change', function() { //why INPUT no work in html
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {

    if (appData.savings = true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('change', function() {
    if (appData.savings == true) { // - prisvaivainie!//
        let sum = +sumValue.value,
            percent = +percentValue.value;

            appData.monthIncome = save/100/12*percent;
            appData.yearIncome = save/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

//why no work again - some parts

percentValue.addEventListener('change', function() {
    if (appData.savings == true) { // - prisvaivainie!//
        let sum = +sumValue.value,
            percent = +percentValue.value;

            appData.monthIncome = save/100/12*percent;
            appData.yearIncome = save/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        
};