let money = parseInt(prompt("Ваш бюджет на месяц?", "0"));
let time = prompt("Введите дату в формате YYYY-MM-DD?", "2019-05-05");
//let expenses = prompt("Введите дату в формате YYYY-MM-DD?", "2019-05-05");

let appData = {
    budjet: money,
    timeData: time,
    expenses: null,
    optionalExpenses: null,
    income: null,
    savings: false,
};

let topic1 = prompt("Введите обязательную статью расходов в этом месяце");
let spend1 = parseInt(prompt("Во сколько это обойдется?", "0"));

let topic2 = prompt("Введите обязательную статью расходов в этом месяце (2)");
let spend2 = parseInt(prompt("Во сколько это обойдется? (2)", "0"));

appData.expenses = {
    topic1: spend1,
    topic2: spend2
};

time = time.substring(8);
alert("Ваш бюджет на день - " + (appData.budjet - appData.expenses.topic1 - appData.expenses.topic2)/(30-parseInt(time)));


