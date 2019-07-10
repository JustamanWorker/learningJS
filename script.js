let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "0");
    time = prompt("Введите дату в формате YYYY-MM-DD?", "2019-05-05");

    while(isNaN(money) || money =="" || money == null){
        money = parseInt(prompt("Ваш бюджет на месяц?", "0"));
    }
}

start();

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for (let i=0; i<2; i++){
            let topic = prompt("Введите обязательную статью расходов в этом месяце"),
                spend = parseInt(prompt("Во сколько это обойдется?", "0"));
            if ((typeof(topic))==='string'&&(typeof(topic))!=null &&
            (typeof(spend))!= null && topic!='' && spend != "" && topic.length<50) {
                console.log("done");
                    appData.expenses[topic]=spend;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function(){
        alert("Ваш бюджет на день - " + (appData.budjet/30).toFixed());
    },
    checkSavings: function(){
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: "+ appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for (let i = 0; i<3; i++){
            let topic = prompt("Статья необязательных расходов?"),
                spend = parseInt(prompt("Во сколько это обойдется?", "0"));
            appData.optionalExpenses[topic]=spend;
        }
    },
    chooseIncome: function(){
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)","");
        while(typeof(items)!='string' || items == "" || items==null){
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)","");
        }
        appData.income=items.split(", ");
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
        appData.income.forEach(function(itemm, i){
            alert("способы доп заработка: " + (i+1) + " - " + itemm);
        });
    }
};

for (let key in appData){
    console.log("Наша программа включает в себя данные: "+ key+ " - "+appData[key]);
}