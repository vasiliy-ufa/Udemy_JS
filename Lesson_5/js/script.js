'use strict';

let menu = document.getElementsByClassName('menu')[0]; // индекс нужен потомучто метод возвращает псевдо                                                           массив
let menuitem = document.getElementsByClassName('menu-item');
let title = document.getElementById('title');
let adv = document.getElementsByClassName('adv')[0];
let promptforApple = document.querySelector('#prompt'); //# это ID
let menuItemLi = document.createElement('li');

menu.insertBefore(menuitem[2], menuitem[1]); // поменяли местами третий и второй элементы меню

menuItemLi.classList.add('menu-item'); // Добавляем новый li, с классом и текстом
menuItemLi.textContent = 'Пятый элемент';
menu.appendChild(menuItemLi);

title.textContent = 'Мы продаем только подлинную технику Apple'; // попробовать сделать с Before
adv.remove(); // Удалил рекламу со страницы



document.body.style.backgroundImage = 'url(../img/apple_true.jpg)'; // поменял backgroundImage

let youOpinion = prompt('Ваше отношение к технике Apple'); // спросили отношение к технике Apple
promptforApple.textContent = youOpinion;  // вставили текст ответа в блок с ID prompt