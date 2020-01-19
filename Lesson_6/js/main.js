'use strict';

let startBtn = document.getElementById('start');
let budget = document.getElementsByClassName('budget-value')[0];
let daybudget = document.getElementsByClassName('daybudget-value')[0];
let level = document.getElementsByClassName('level-value')[0];
let expenses = document.getElementsByClassName('expenses-value')[0];
let optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0];
let income = document.getElementsByClassName('income-value')[0];
let monthsavings = document.getElementsByClassName('monthsavings-value')[0];
let yearsavings = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName('expenses-item');
let expensesBtn = document.getElementsByTagName('button')[0];
let optionalExpensesBtn = document.getElementsByTagName('button')[1];
let countBudgetBtn = document.getElementsByTagName('button')[2];
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
let incomeItem = document.querySelector('.choose-income');
let checkSavings = document.querySelector('#savings');
let sumValue = document.querySelector('.sum-value');
let percentValue = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money;
let time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
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
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', '');
            let b = +prompt('Во сколько обойдется?', '');

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                alert('Вы допустили ошибку, попробуйте еще раз');
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Eжедневный бюджет: ' + appData.moneyPerDay + 'руб.');
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?');
            let percent = prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с Вашего депозита ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt('Статья необязательных расходов?');

            if ((typeof (questionOptExpenses)) === 'string' && (typeof (questionOptExpenses)) != null && questionOptExpenses != '' && questionOptExpenses.length < 50) {
                appData.optionalExpenses[i] = questionOptExpenses;
                console.log(appData.optionalExpenses);
            }
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход?(Перечислите через запятую)', '');
        if (typeof (items) != 'string' || typeof (items) == null || items == '') {
            alert('Вы допустили ошибку, попробуйте еще раз');
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
        }

        appData.income.forEach(function (itemsData, i) {
            alert('Способы доп. заработка: ' + (i + 1) + ' ' + itemsData);
        });
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + '-' + appData[key]);
}

console.log([] + false - null + true);