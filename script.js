let money = +prompt("Ваш бюджет на месяц?", ''), // при перечислении переменных запятая! унарный плюс для превращениея в число
    time =  prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько это обойдётся?", '');

    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != "" && b != '' && a.length < 50) {
        appData.expenses[a] = b; //пара ключ-значение
    } else {

    }
}

appData.moneyPerDay = appData.budget / 30;

alert ("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Min level of income");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Mid level of income");
} else if (appData.moneyPerDay > 2000) {
    console.log("High level of income");
} else {
    console.log("Must be some kind of mistake");
}
