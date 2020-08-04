let money, time; //doing vars global

function start() {
    money = +prompt("Ваш бюджет на месяц?", ''); // при перечислении переменных запятая! унарный плюс для превращениея в число
    time =  prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();


let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses: function() {
            for (let i = 0; i < 2; i++) {
                let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                 b = prompt("Во сколько это обойдётся?", '');

                if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
                && a != "" && b != '' && a.length < 50) {
                     appData.expenses[a] = b; //пара ключ-значение
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Min level of income");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Mid level of income");
        } else if (appData.moneyPerDay > 2000) {
            console.log("High level of income");
        } else {
            console.log("Must be some kind of mistake");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
                appData.monthIncome = save/100/12*percent;
    
                alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (перечислите через запятую)", "");
        appData.income = items.split(", ");
        appData.income.push(prompt("Может, что-то еще?", ""));
        appData.income.sort();
    }
};
