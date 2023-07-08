'use strict'

// ПОВТОР Формы с новыми фишками//

// Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.
//<textarea id="elem">text</textarea>
// <p class="par"></p>

// let text = document.querySelector('#elem');
// let par = document.querySelector('.par');
//
// text.addEventListener('blur', function () {
// 	par.innerHTML = text.value;
// })

// Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.
// 	//<input type="text" class="elem">
// // <input type="submit" class="btn">
// let inp = document.querySelector('.elem');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', () => inp.disabled = true)
// Дан инпут и две кнопки. Пусть нажатие на первую
// кнопку блокирует инпут, а нажатие на вторую - отблокирует.
//<input type="text" class="elem">
// <input type="submit" class="btn">
// <input type="submit" class="btn2">
// let inp = document.querySelector('.elem');
// let btn = document.querySelector('.btn');
// let btn2 = document.querySelector('.btn2');
// btn.addEventListener('click', () => inp.disabled = true)
// btn2.addEventListener('click', () => inp.disabled = false)

// Дан инпут и кнопка. По нажатию на кнопку
// узнайте, заблокирован инпут или нет
// //<input type="text" class="elem">
// // <input type="submit" class="btn">
// // <input type="submit" class="btn2">
// // <input type="submit" class="btn3">
// let inp = document.querySelector('.elem');
// let btn = document.querySelector('.btn');
// let btn2 = document.querySelector('.btn2');
// let btn3 = document.querySelector('.btn3');
// btn.addEventListener('click', () => inp.disabled = true)
// btn2.addEventListener('click', () => inp.disabled = false)
// btn3.addEventListener('click', () => inp.disabled ? console.log('Блокирован') : console.log('Не блокирован'))

// Дан чекбокс и две кнопки.
// По нажатию на первую кнопку установите чекбокс
// в отмеченное состояние, а по нажатию на вторую - в неотмеченное.
// <input type="checkbox" class="elem">
// <input type="submit" class="btn" value="Подписаться">
// <input type="submit" class="btn2" value="Игнорирлвать">
// let check = document.querySelector('.elem');
// let btn1 = document.querySelector('.btn');
// let btn2 = document.querySelector('.btn2');
// btn1.addEventListener('click', () => check.checked = true)
// btn2.addEventListener('click', () => check.checked = false)

// Дан чекбокс, кнопка и абзац.
// По нажатию на кнопку, если чекбокс отмечен,
// выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.
// let check = document.querySelector('.elem');
// let btn1 = document.querySelector('.btn');
// let btn2 = document.querySelector('.btn2');
// let par = document.querySelector('.par');
// btn1.addEventListener('click', function (func) {
// 	check.checked = true;
// 	if (check.checked) {
// 		par.textContent = 'Привет'
// 	}
// })
// btn2.addEventListener('click', function (func) {
// 	check.checked = false;
// 	if (!check.checked) {
// 		par.textContent = 'Пока'
// 	}
// })

// Дан чекбокс и кнопка. Сделайте так,
// чтобы каждый клик по кнопке приводил к смене состояния чекбокса.
// <input type="checkbox" class="elem">
// <input type="submit" class="btn" value="Подписаться">

// let check = document.querySelector('.elem');
// let btn = document.querySelector('.btn')
// btn.addEventListener('click',  () => check.checked = !check.checked)

// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector('#button');
//
// button.addEventListener('click', function() {
// 	for (let radio of radios) {
// 		if (radio.checked) {
// 			console.log(radio.value);
// 		}
// 	}
// });

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('input', function() {
// 	console.log(this.value);
// });

// Даны два инпута. Сделайте так, чтобы
// после ввода двух символов фокус ввода
// переходил ко второму инпуту, а после ввода
// двух символов в этот инпут - фокус из него убирался.
// <input id="elem">
// <input id="elem2">

// let inp1 = document.querySelector('#elem')
// let inp2 = document.querySelector('#elem2')
// inp1.addEventListener('input', () => {
// 	if (inp1.value.length >= 2) {
// 		inp2.focus();
// 	}
// })
// inp2.addEventListener('input', () => {
// 	if (inp2.value.length >= 2 ) {
// 		inp2.blur();
// 	}
// })

// По потери фокуса текст из textarea должен записаться в див:

// 	<textarea></textarea>
// <div></div>
// let textarea = document.querySelector('textarea');
// let div = document.querySelector('div');
//
// textarea.addEventListener('blur', function() {
// 	div.textContent = textarea.value
// });

// По клику на кнопку в див должно записаться или одно, или другое значение:
//<input type="checkbox">
//<div></div>
//<button>button</button>
// let checkbox = document.querySelector('#checkbox')
// let button = document.querySelector('button')
// let div = document.querySelector('div')
// button.addEventListener('click', () => {
// 	checkbox.checked = !checkbox.checked
// 	checkbox.checked ? div.innerHTML = 'Привет' : div.innerHTML = 'Пока'
// })

// По клику на кнопку, если чекбокс отмечен,
// то должно вывестись одно значение, а если не отмечен - другое:
//
// <input type="checkbox">
// 	<button>button</button>
// let checkbox = document.querySelector('[type="checkbox"]')
// let button = document.querySelector('button')
//
// button.addEventListener('click', function () {
// 	if (checkbox.checked === true) {
// 		console.log('+++')
// 	} else {
// 		console.log('---')
// 	}
// })






























