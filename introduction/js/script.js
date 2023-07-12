'use strict'

// ПОВТОР Таймеры//

// Запустите таймер, который каждые 3 секунды будет что-нибудь выводить в консоль.
// setInterval(function() {
// 	console.log('1');
// }, 3000);

// Пусть дана переменная, в которой изначально хранится число 100.
// Запустите таймер, который каждую секунду будет уменьшать значение
// этой переменной на 1 и выводить это значение в консоль.

// let i = 100;
// setInterval(function () {
// 	while (i >= 0) {
// 		console.log(i--)
// 	}
// },1000)

// Пусть дана переменная, в которой изначально
// хранится число 10. Запустите таймер, который каждую
// секунду будет уменьшать значение этой переменной на 1 и выводить
// это значение в консоль. Как только значение переменной достигнет нуля
// - остановите таймер.
// let i = 100;
// let timeId = setInterval(function () {
// 	console.log(i--)
// 	if (i <= 0) {
// 		clearInterval(timeId)
// 	}
// },500)

// Сделайте кнопку, по нажатию на которую в консол
// ь будет выводится обратный отсчет, начиная с 100.
// <input type="submit" name="Start" id="start">
// <p class="par"></p>

// let start = document.querySelector('#start');
// let par = document.querySelector('.par');
//
// start.addEventListener('click', function starts() {
// 	let testTime = 100;
// 	let test = setInterval(() => {
// 		par.innerHTML = String(testTime--);
// 		if (testTime <= 0) {
// 			clearInterval(test)
// 		}
// 	},200)
// 	this.removeEventListener('click', starts);
// })

// let start = document.querySelector('#start')
// let stop = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function () {
// 	let i = 0
//
// 	timerId = setInterval(function () {
// 		console.log('!')
// 	}, 1000)
// })
// // Останавливаем таймер:
// stop.addEventListener('click', function () {
// 	clearInterval(timerId)
// })

// Пусть дана переменная, в которой изначально хранится число 100.
// Даны также две кнопки. По нажатию на первую кнопку запустите таймер,
// который каждую секунду будет уменьшать значение переменной на 1 и выводить
// новое значение в консоль. Как только значение переменной достигнет нуля -
// остановите таймер.
// По нажатию на вторую кнопку остановите таймер.
// Также остановите таймер, если вторая кнопка не была нажата,
// но значение переменной достигло нуля.
//<button id="start">start</button>
// <button id="stop">stop</button>
// <p class="par"></p>

// let setTime
// let num = 100
//
// let start = document.querySelector('#start')
// start.addEventListener('click', starts)
//
// function starts () {
// 	setTime = setInterval(() => {
// 		let par = document.querySelector('.par')
// 		par.innerHTML = String(num--)
// 		if (num <= -1) {
// 			clearInterval(setTime)
// 		}
// 	}, 500)
// 	this.removeEventListener('click', starts)
// }
//
// let stop = document.querySelector('#stop')
// stop.addEventListener('click', () => {
// 	clearInterval(setTime)
// 	start.addEventListener('click', starts)
// })

// Некоторый программист написал код, который по нажатию на кнопку запускает таймер, выводящий в консоль текущий момент времени:

// <input type="submit" id="start"
// 	   value="start">
// 	<input type="submit" id="stop"
// 		   value="stop">
// <!--<p class="par"></p>-->
// let start = document.querySelector('#start')
// let stop = document.querySelector('#stop')
// let par = document.querySelector('.par')
// let timerId
// start.addEventListener('click', function () {
// 	timerId = setInterval(function () {
// 		let date = new Date
// 		par.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' +
// 			date.getSeconds()
// 	}, 1000)
// })
//
// stop.addEventListener('click', function () {
// 	clearInterval(timerId)
// })
// После запуска кода, однако, оказалось, что кнопка
// остановки не работает. Исправьте ошибку автора кода.

// Пусть дан такой код:

// <input type="button" id="elem" value="1">

// Автор кода хотел, чтобы по нажатию на кнопку,
// значение этой кнопки каждую секунду увеличивалось на 1.
// Однако, по нажатию на кнопку вообще ничего не происходит.
// Исправьте ошибку автора кода. Напишите текст, в котором вы дадите
// объяснение автору кода, почему возникла его ошибка.

// let elem = document.querySelector('#elem')
//
// elem.addEventListener('click', function () {
// 	let self = this
// 	setInterval(function () {
// 		self.value = Number(elem.value) + 1
// 	}, 1000)
// })

// Дана кнопка. Дан абзац, текстом которого является число.
// По нажатию на кнопку запустите таймер, который каждую
// секунду будет увеличивать текст абзаца на 1.
//<p class="par"></p>
// <button id="start">start</button>
// let par = document.querySelector('.par');
// let btn = document.querySelector('#start');
// btn.addEventListener('click', function () {
// 	let i = 0;
// 	let setInt = setInterval(() => {
// 		par.innerHTML = String(i++)
// 		if (i >= 11) {
// 			clearInterval(setInt);
// 		}
// 	}, 1000)
// })

// Дана кнопка. Дан абзац, текстом которого является число,
// например, 10. По нажатию на кнопку запустите таймер,
// который каждую секунду будет уменьшать текст абзаца на 1.
// Как только значение абзаца станет равно нулю - остановите таймер.
//<p class="par"></p>
// <button id="start">start</button>
// let par = document.querySelector('.par');
// let btn = document.querySelector('#start');
// btn.addEventListener('click', function noClick() {
// 	let i = 10;
// 	let setInt = setInterval(() => {
// 		par.innerHTML = String(i--)
// 		if (i <= -1) {
// 			clearInterval(setInt);
// 		}
// 	}, 1000)
// 	this.removeEventListener('click', noClick);
// })

// Дан инпут с числом. Сделайте так, чтобы каждую секунду
// в нем появлялся квадрат того числа, которое в нем записано.
// <input type="text" id="test" value="2">
// let inp = document.querySelector('#test');
// inp.addEventListener('focus', function noFocus() {
// 	let self = this
// 	let setInt = setInterval(() => {
// 		self.value = self.value ** 2;
// 		if (self.value >= 1000) {
// 			clearInterval(setInt);
// 		}
// 	}, 1000)
// 	this.removeEventListener('focus', noFocus)
// })

// Дан инпут. В него вводится число. По потери фокуса сделайте
// так, чтобы в абзаце ниже начал тикать обратный отсчет,
// начиная с введенного числа. Когда отсчет дойдет до нуля -
// он должен закончится.
// <input type="text" id="test" value="2">
// <p class="par"></p>
// let inp = document.querySelector('#test')
// let par = document.querySelector('.par')
// inp.addEventListener('blur', stopFunc)
// inp.addEventListener('focus', () => inp.value = '')
//
// function stopFunc (param) {
// 	let self = this
// 	let setInt = setInterval(() => {
// 		par.innerHTML = String(self.value--)
// 		if (self.value <= -1) {
// 			clearInterval(setInt)
// 		}
// 	}, 1000)
//
// }

// Дан инпут, кнопка и абзац. В инпут вводится какое-то число.
// По нажатию на кнопку запишите введенное число в текст абзаца и
// запустите обратный отсчет в абзаце: пусть каждую секунду число в
// абзаце уменьшается на единицу, пока не дойдет до нуля.
// <p class="par"></p>
// <input type="text" id="test" value="Введите число">
// <input type="button" id="elem" value="start">

// let par = document.querySelector('.par')
// let inp = document.querySelector('#test')
// let btn = document.querySelector('#elem')
// inp.addEventListener('focus', () => inp.value = '')
// btn.addEventListener('click', function stopClick () {
// 	par.innerHTML = inp.value
// 	let setInt = setInterval(() => {
// 		par.innerHTML--
// 		if (par.innerHTML <= 0) {
// 			clearInterval(setInt)
// 		}
// 	}, 1000)
// 	setTimeout(() => {
// 		inp.value = 'Введите число'
// 	}, 1000)
// })
// Дан абзац и две кнопки. Сделайте так, чтобы по нажатию
// на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности,
// а по нажатию на вторую таймер останавливался.
// <p class="par"></p>
// <button id="start">start</button>
// <button id="stop">stop</button>

// let par = document.querySelector('.par')
// let btn1 = document.querySelector('#start')
// let btn2 = document.querySelector('#stop')
// let setInt;
// let i = 0
// btn1.addEventListener('click',stopFunc)
// function stopFunc() {
// 	setInt = setInterval(() => {
// 		par.innerHTML = String(i++);
// 	},1000)
// 	this.removeEventListener('click', stopFunc);
// }
// btn2.addEventListener('click', () => {
// 	clearInterval(setInt)
// 	btn1.addEventListener('click', stopFunc);
// });


// Дан абзац. Сделайте так, чтобы каждую секунду
// он менял свой цвет с красного на зеленый и наоборот.
// <p class="par"></p>
// let par = document.querySelector('.par');
// let setInt = setInterval(() => {
// 	par.classList.toggle('active')
// }, 1000)

// Если выводить на экран каждую секунду текущий
// момент времени, то можно сделать тикающие часы.
// Реализуйте такие же часики, как показано ниже в образце:
// <p class="par"></p>
// let par = document.querySelector('.par');
// let setInt = setInterval(() => {
// 	let date = new Date();
// 	par.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
// })

// Дан абзац. Напишите код, который выведет сообщение
// в этот абзац через 10 секунд после загрузки страницы.
// <p class="par"></p>
//
// let par = document.querySelector('.par');
// let setTim = setTimeout(() => par.innerHTML = 'Hello men', 3000)

// Выведите в консоль число 0.
// Через секунду выведите число 1, через две секунды выведите число 2,
// через 3 секунды выведите число 3. И так далее до бесконечности.

// let i = 0;
//
// function timer() {
// 	setTimeout(function() {
// 		console.log(++i);
//
// 		timer(); // вызовем сами себя
// 	}, 1000);
// }
// timer();









