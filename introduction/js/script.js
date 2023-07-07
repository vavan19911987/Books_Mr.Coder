'use strict'

// ПОВТОР Атрибуты с новыми фишками//

// Дан следующий код:
// Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.
// <div id="elem" data-text="str">text</div>

// let elDiv = document.querySelector('#elem');
// elDiv.addEventListener('click', function () {
// 	this.textContent = this.textContent + ' ' + this.dataset.text;
// })

// Даны дивы, содержащие в атрибуте data-num свой порядковый номер:
// Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.
// <div data-num="1">text</div>
// <div data-num="2">text</div>
// <div data-num="3">text</div>
// <div data-num="4">text</div>
// <div data-num="5">text</div>

// let allDiv = document.querySelectorAll('div');
// allDiv.forEach(function (el) {
// 	el.addEventListener('click', function () {
// 		this.textContent = this.textContent + ' ' + this.dataset.num
// 	})
// })

// Дана кнопка. Сделайте так, чтобы эта кнопка считала
// количество кликов по ней, записывая их в какой-нибудь
// пользовательский атрибут. Пусть по клику на другую
// кнопку на экран выводится, сколько кликов было сделано по первой кнопке.
// <div id="elem" data-num=""></div>
// <button id="btn1" type="submit">Click My</button>
// <button id="btn2" type="submit">Control</button>
// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')
//
// btn1.addEventListener('click', function () {
// 	elem.dataset.num = +elem.dataset.num + 1;
// })
// btn2.addEventListener('click', function () {
// 	elem.innerHTML = elem.dataset.num;
// })
// Дан инпут:
// В этом инпуте в атрибуте data-length
// содержится количество символов, которое нужно ввести в инпут.
// Сделайте так, чтобы по потери фокуса, если количество введенных
// символов не совпадает с заданным, выводилось сообщение об этом.
// <input id="elem" data-length="5">
//
// let inp = document.querySelector('#elem')
// inp.addEventListener('blur', function () {
// 	if (inp.value.length === +inp.dataset.length) {
// 		console.log('совпадает');
// 	} else {
// 		console.log('не совпадает')
// 	}
// })

// Дан инпут:
// В этом инпуте атрибуты data-min и data-max содержат диапазон.
// Сделайте так, чтобы по потери фокуса, если количество введенных
// символов не попадает в этот диапазон, выводилось сообщение об этом.
// <input id="elem" data-min="5" data-max="10">

// let inp = document.querySelector('#elem');
// inp.addEventListener('blur', function () {
// 	for (let i = 0; i < inp.value.length; i++) {
// 		if (inp.value.length >= inp.dataset.min && inp.value.length <= inp.dataset.max) {
// 			console.log('попадает')
// 		} else {
// 			console.log('не попадает')
// 		}
// 	}
// })



