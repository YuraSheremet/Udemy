var money = +prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");

var appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var item1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    moneySpent1 = +prompt("Во сколько обойдется?", ""),
    item2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    moneySpent2 = +prompt("Во сколько обойдется?", "");

appData.expenses.item1 = moneySpent1;
appData.expenses.item2 = moneySpent2;
alert(appData.budjet / 30);

