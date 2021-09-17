"use strict";
/*
let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);
*/

let num = 50;

switch (num){
    case num < 49:
        console.log('Wrong');
    break;

    case num > 100:
        console.log('mnoqo');
    break;

    case num > 80:
        console.log('helede mnoqo');
    break;

    case 50:
        console.log('right');
    break;

    default:
        console.log('Some get Error');
    break;
}

while (num < 55){
    console.log(num);
    num++;
}

for (let i = 1; i < 8; i++){
    if ( i == 6){
        continue;
    }
    console.log(i);
}