'use strict'

// ПОВТОР Введение в DOM с новыми фишками//
// Даны 3 абзаца:
// Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих переменных в консоль.

// let el1 = document.querySelector('#elem1');
// let el2 = document.querySelector('#elem2');
// let el3 = document.querySelector('#elem3');
// console.log(el1.textContent,el2.textContent,el3.textContent);

// Дан следующий HTML:
// Получите ссылку на первый абзац из дива с id, равным block.

// let block = document.querySelectorAll('#block p');
// console.log(block);

// Даны 3 кнопки:
// Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, а по клику на третью - число 3.
// <input id="button1" type="submit">
// 	<input id="button2" type="submit">
// 	<input id="button3" type="submit">
// let btn1 = document.querySelector('#button1');
// let btn2 = document.querySelector('#button2');
// let btn3 = document.querySelector('#button3');
//
// btn1.addEventListener('click', function () {
// 	console.log('1');
// })
// btn2.addEventListener('click', function () {
// 	console.log('2');
// })
// btn3.addEventListener('click', function () {
// 	console.log('3');
// })

// Дан следующий HTML код:

// <input id="button1" type="submit" value="button1">
// 	<input id="button2" type="submit" value="button2">
// 		Даны следующие функции:
// 		Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.

// let btn1 = document.querySelector('#button1')
// let btn2 = document.querySelector('#button2')
// btn1.addEventListener('click', func1);
// function func1() {
// 	console.log(1);
// }
// btn2.addEventListener('click', func2)
// function func2() {
// 	console.log(2);
// }

// Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.
// <input id="button" type="submit">
// 	<p id="elem3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam esse harum libero molestias nemo neque
// numquam placeat, quo rerum tenetur? In laborum magnam, minus nobis non quos reprehenderit tenetur velit?</p>

// let btn = document.querySelector('#button')
// let p = document.querySelector('#elem3');
// btn.addEventListener('click', function () {
// 	console.log(p.textContent);
// })

// Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст.
// let btn = document.querySelector('#button')
// let p = document.querySelector('#elem3');
// let str = 'new text';
// btn.addEventListener('click', function () {
// 	console.log(p.textContent = str);
// })

// Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.
// <input id="button" type="submit">
// 	<p id="elem1">123</p>
// <p id="elem2">123</p>

// let btn = document.querySelector('#button')
// let p = document.querySelector('#elem1');
// let p2 = document.querySelector('#elem2');
// btn.addEventListener('click', function () {
// 	let res = +p.textContent + +p2.textContent
// 	console.log(res)
// })

// Даны три абзаца с числами, див, и кнопка. По нажатию на кнопку запишите в текст дива сумму чисел.
// <input id="button" type="submit">
// 	<p id="elem1">2</p>
// <p id="elem2">3</p>
// <p id="elem3">3</p>
// <div id="block"></div>

// let btn = document.querySelector('#button')
// let p = document.querySelector('#elem1');
// let p2 = document.querySelector('#elem2');
// let p3 = document.querySelector('#elem3');
// let block = document.querySelector('#block');
// btn.addEventListener('click', function () {
// 	let res = +p.textContent + +p2.textContent + +p3.textContent
// 	let result  = block.textContent = res;
// 	console.log(result)
// })

// Дан абзац и кнопка. По клику на кнопку прочитайте HTML код абзаца и выведите его в консоль.
// <input id="button" type="submit">
// 	<p id="elem1">2</p>
// let btn = document.querySelector('#button')
// let el = document.querySelector('#elem1');
// btn.addEventListener('click', () => console.log(el.innerHTML))

// Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст так, чтобы он был жирным.
// let btn = document.querySelector('#button')
// let el = document.querySelector('#elem1');
// btn.addEventListener('click', () => console.log(el.innerHTML = '55'))

// Дан следующий инпут:Дана также кнопка.
// По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.
// <input id="elem" type="email">
// <input id="button" type="submit">

// let btn = document.querySelector('#button');
// let input = document.querySelector('#elem');
// btn.addEventListener('click', () => console.log(input.type));

// Дан следующий инпут:
// Дана также кнопка. По нажатию на кнопку запишите в атрибут type значение submit
// let btn = document.querySelector('#button');
// let input = document.querySelector('#elem');
// btn.addEventListener('click', () => console.log(input.type = 'submit'));

// Пусть у вас есть ссылка в виде тега a, кнопка и абзац. По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.
// <input id="button" type="submit">
// 	<p id="elem1"></p>
// <a id="link" href="http://google.com">GOOGLE</a>
// let btn = document.querySelector('#button');
// let par = document.querySelector('#elem1');
// let link = document.querySelector('#link');
// btn.addEventListener('click', () => par.innerHTML = link.href);

// Пусть у вас есть ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках.
// <input id="button" type="submit">
// <a id="link" href="http://google.com">GOOGLE</a>
// let btn = document.querySelector('#button');
// let link = document.querySelector('#link');
// btn.addEventListener('click', () => link.innerHTML +=  ' ' + ' ( ' + link.href + ' )')

// Пусть у вас есть картинка. Разместите ее на странице с помощью тега img.
// Пусть даны также кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.
// <input id="button" type="submit">
// 	<p id="elem1"></p>
// <img id="img" src="./img/img2.jpg" alt="">
// let btn = document.querySelector('#button');
// let par = document.querySelector('#elem1');
// let img = document.querySelector('#img');
// btn.addEventListener('click', () => par.innerHTML = img.src);

// Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.
// <input id="button" type="submit">
// 	<input id="inp" type="text" value="text">
// let btn = document.querySelector('#button');
// let input = document.querySelector('#inp');
// btn.addEventListener('click', () => input.value = 'new text');

// Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.
// <input id="button" type="submit">
// 	<p id="par"></p>
// <input id="inp" type="text" value="text">
// let btn = document.querySelector('#button');
// let input = document.querySelector('#inp');
// let par = document.querySelector('#par');
// btn.addEventListener('click', () => par.innerHTML = input.value);

// Даны два инпута и кнопка. В первый инпут пользователем вводится число. По нажатию на кнопку запишите во второй инпут квадрат введенного числа.
// <input id="button" type="submit">
// 	<input id="inp" type="text" value="text">
// 	<input id="inp2" type="text" value="text">

// let btn = document.querySelector('#button');
// let input = document.querySelector('#inp')
// let input2 = document.querySelector('#inp2')
// btn.addEventListener('click', function () {
// 	input2.value  = input.value ** 2;
// })

// Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута,
// а во второй инпут - значение первого. Ваш код должен работать универсально, для любых значений инпутов.
// <input id="button" type="submit">
// 	<input id="inp" type="text" value="text">
// 	<input id="inp2" type="text" value="text">

// let btn = document.querySelector('#button');
// let input = document.querySelector('#inp')
// let input2 = document.querySelector('#inp2')
// btn.addEventListener('click', function () {
//     let elem1 = input.value;
//     let elem = input2.value;
//     input2.value = elem1;
//     input.value = elem;
// });

// Дан инпут. По получению фокуса этим инпутом запишите в него число 1,
// а по потери фокуса - число 2. Для обращения у инпуту внутри функции-обработчика используйте объект this.
// <input id="inp" type="text" value="text">

// let inp = document.querySelector('#inp');
// inp.addEventListener('focus', function () {
// 	this.value = 1;
// })
// inp.addEventListener('blur', function () {
// 	this.value = 2;
// })

// Дана кнопка, значением которой служит число 1. Сделайте так,
// чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.
// <button id="button">1</button>
// let btn = document.querySelector(' #button')
// btn.addEventListener('click', function () {
// 	this.innerHTML = +this.innerHTML + 1
// })

// Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.
//	<p id="elem1">Lorem ipsum dolor sit amet.</p>
// <p id="elem2">Lorem ipsum dolor sit amet.</p>
// <p id="elem3">Lorem ipsum dolor sit amet.</p>
// <p id="elem4">Lorem ipsum dolor sit amet.</p>
// <p id="elem5">Lorem ipsum dolor sit amet.</p>
// let el1 = document.querySelector('#elem1')
// let el2 = document.querySelector('#elem2')
// let el3 = document.querySelector('#elem3')
// let el4 = document.querySelector('#elem4')
// let el5 = document.querySelector('#elem5')
//
// el1.addEventListener('click', func)
// el2.addEventListener('click', func)
// el3.addEventListener('click', func)
// el4.addEventListener('click', func)
// el5.addEventListener('click', func)
//
// function func () {
// 	this.textContent += '!!!'
// }

// Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите из циклом и установите текст каждого абзаца в значение 'text'.
// <input id="button" type="submit">
// <p className="elem">Lorem ipsum dolor sit amet.</p>
// <p className="elem">Lorem ipsum dolor sit amet.</p>
// <p className="elem">Lorem ipsum dolor sit amet.</p>
// <p className="elem">Lorem ipsum dolor sit amet.</p>
// let parAll = document.querySelectorAll('.elem');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', function () {
// 	for (const el of parAll) {
// 		el.textContent = 'new text';
// 	}
// })

// Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.
// <input id="button" type="submit">
// <p className="elem">Lorem ipsum dolor sit amet.</p>
// <p className="elem">Lorem ipsum dolor sit amet.</p>
// <p className="elem">Lorem ipsum dolor sit amet.</p>
// <p className="elem">Lorem ipsum dolor sit amet.</p>
// let parAll = document.querySelectorAll('.elem');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', function () {
// 	parAll.forEach(function (el,i){
// 		el.textContent += i;
// 	})
// })

// Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.
// <input id="button" type="submit">
// <input class="inp" type="number" value="2">
// <input class="inp" type="number" value="2">
// <p class="elem">Сумма инпутов = <span></span></p>

// let btn = document.querySelector('#button')
// let inpAll = document.querySelectorAll('.inp')
// let parSpan = document.querySelector('.elem span')
// btn.addEventListener('click', function () {
// 	let sum = 0
// 	inpAll.forEach(function (el) {
// 		sum += +el.value
// 	})
// 	parSpan.textContent = sum
// })

// Дана следующая функция:
// Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.
// <!--<input id="inp" type="text" value="text">-->
// 	<!--<input id="inp2" type="text" value="text">-->

// let inp = document.querySelectorAll('input');
// for (const el of inp) {
// 	el.addEventListener('blur', func)
// }
// function func() {
// 	this.value = Number(this.value) + 1;
// }

// Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.
//<p class="elem">2</p>
// <p class="elem">2</p>
// <p class="elem">2</p>
// <p class="elem">2</p>

// let parAll = document.querySelectorAll('.elem');
// for (const parAllElement of parAll) {
// 	parAllElement.addEventListener('click', function () {
// 		this.innerHTML = Number(this.innerHTML ** 2 );
// 	});
// }

// Дана ссылка и кпнока. По нажатию на кнопку
// добавьте в конец текста ссылки содержимое ее атрибута href
// в круглых скобках. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
// <input id="button" type="submit">
// 	<a id="link" href="http://google.com">GOOGLE</a>

// let btn = document.querySelector('#button');
// let link = document.querySelector('#link');
// btn.addEventListener('click', addRem)
// function addRem () {
// 	link.innerHTML += '(' + link.href + ')';
// 	this.removeEventListener('click', addRem);
// }

// Дана кнопка, значением которой служит число 1.
// Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.
// После того, как значение кнопки достигнет 10 -
// отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие.
// <input id="button" type="submit" value="1">
// let btn = document.querySelector('#button');
//
// btn.addEventListener('click', func);
// function func() {
// 	this.value = +this.value + 1
// 	if (this.value >= 10) {
// 		this.removeEventListener('click', func);
// 	}
// }

// Даны абзацы. По нажатию на любой из абзацев добавьте ему в
// конец восклицательный знак. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
// <!--<p class="elem">2</p>-->
// <!--<p class="elem">2</p>-->
// <!--<p class="elem">2</p>-->
// <!--<p class="elem">2</p>-->

// let parAll = document.querySelectorAll('.elem');
// for (const el of parAll) {
// 	el.addEventListener('click', add);
// }r
// function add () {
// 	this.innerHTML += '!';
// 	this.removeEventListener('click', add);
// }

// Дан список ul, в каждом пункте которого записано число. Сделайте так, чтобы по клику на любую li ее число увеличивалось на единицу.

// <ul>
// <li>2</li>
// <li>2</li>
// <li>2</li>
// <li>2</li>
// <li>2</li>
// </ul>

// let list = document.querySelectorAll('ul li');
//
// for (const listElement of list) {
// 	listElement.addEventListener('click', function add() {
// 		this.textContent = +this.textContent + 1
// 	})
// }

// Модифицируйте предыдущую задачу так, чтобы каждая li увеличивала свое значение только по первому нажатию на нее.
// let list = document.querySelectorAll('ul li');
//
// for (const listElement of list) {
// 	listElement.addEventListener('click', function add() {
// 		this.textContent = +this.textContent + 1
// 		this.removeEventListener('click', add)
// 	})
// }

// Модифицируйте предыдущую задачу так, чтобы каждая li увеличивала свое значение только если ее значение меньше 10.
// let list = document.querySelectorAll('ul li');
//
// for (const listElement of list) {
// 	listElement.addEventListener('click', function add() {
// 		if (this.textContent < 10) {
// 			this.textContent = +this.textContent + 1
//
// 		} else {
// 			this.removeEventListener('click', add)
// 		}
//
// 	})
// }

// Дан список с годами:
// Получите года, сумма цифр которых равна 6.
// Найдите сумму полученных годов.
// <ul>
// <li>2000</li>
// <li>2004</li>
// <li>2021</li>
// <li>2022</li>
// <li>2025</li>
// <li>2031</li>
// </ul>
// let listAll = document.querySelectorAll('ul li');
// let resSumYear = 0
// for (let i = 0; i < listAll.length; i++) {
// 	let el = listAll[i].textContent.split(' ');
// 	for (let j = 0; j < el.length; j++) {
// 		let sum = 0;
// 		for (let k = 0; k < el[j].length; k++) { // второе прочтение учебника
// 			sum += +el[j][k]
// 		}
// 		if (sum === 6) resSumYear += +el[j];
// 	}
// }
// console.log(resSumYear)
//
// let ulLi1 = document.querySelectorAll('li');
// function getArr1() {
//     let arr = [];
//     let arrYear = []
//     let result = 0;
//     ulLi1.forEach((elem) => arr.push(elem.textContent.split('')));
//     arr.map(function (el){
//         let sumYears = 0;
//         el.map((el2) => sumYears += +el2);
//         if (sumYears === 6) {
//             let res = el.join('').split(' '); // первое прочтение учебника код работает
//             arrYear.push(...res)
//         }
//     })
//     arrYear.map((el3) => result += +el3);
//     console.log(result)
// }
// getArr1();

// Код должен добавить текст в конец каждого абзаца:
// 	<p>1</p>
// <p>2</p>
// <p>3</p>
// let elems = document.querySelectorAll('p');
// for (const elem of elems) {
// 	elem.textContent += '!';
// }

// По клику на абзац его значение должно увеличиться на единицу:
//
// 	<p>1</p>
// <p>2</p>
// <p>3</p>
// let elems = document.querySelectorAll('p');
//
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.textContent = +this.textContent +  Number(1);
// 	});
// }

// По клику на кнопку текст абзаца должен стать жирным:

// 	<p>text</p>
// <button>click</button>
// let button = document.querySelector('button');
// let elem   = document.querySelector('p');
//
// button.addEventListener('click', function() {
// 	elem.innerHTML = `<b>${elem.textContent}</b>`;
// });

// По клику на кнопку должна вывестись сумма чисел из абзацев:

// 	<p>1</p>
// <p>2</p>
// <p>3</p>
//
// <button>click</button>
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// button.addEventListener('click', function() {
// 	let sum = 0;
// 	for (let elem of elems) {
// 		sum += +elem.textContent;
// 	}
// 	console.log(sum);
// });

// По клику на абзац ему в конец должен добавиться заданный текст:

// 	<p>1</p>
// <p>2</p>
// <p>3</p>
// let elems = document.querySelectorAll('p');
//
// for (let elem of elems) {
// 	elem.addEventListener('click', function (){
// 		this.textContent += '!';
// 	});
// }

// Дан инпут и абзац. По потери фокуса в инпуте
// запишите значение инпута в конец текста абзаца.
// <input id="inp" type="text">
// 	<p id="par">Lorem ipsum dolor.</p>
// let inp = document.querySelector('#inp');
// let par = document.querySelector('#par');
// inp.addEventListener('blur', function () {
// 	par.innerHTML +=  ' ' + this.value;
// })

// Дано несколько инпутов, абзац и кнопка.
// По нажатию на кнопку получите числа, стоящие
// в этих инпутах и запишите их сумму в абзац.
// <button id = "btn" > click < /button>
// <input className="inp" type="number">
// 	<input className="inp" type="number">
// 		<input className="inp" type="number">
// 			<p id="par">Lorem ipsum dolor.</p>

// let btn = document.querySelector('#btn');
// let inp = document.querySelectorAll('.inp');
// let par = document.querySelector('#par');
// btn.addEventListener('click', function () {
// 	let sumInp = 0;
// 	for (const inpElement of inp) {
// 		sumInp += +inpElement.value;
// 	}
// 	par.innerHTML = sumInp;
// })

// Дан инпут. В него вводится число.
// По потери фокуса найдите сумму цифр этого числа.
// <input class="inp" type="number">
// let inp = document.querySelector('.inp')
// inp.addEventListener('blur', function () {
// 	let sum = 0
// 	for (const inpElement of inp.value) {
// 		sum += +inpElement
// 	}
// 	console.log(sum);
// })

// Дан инпут. В него вводятся числа через запятую.
// По потери фокуса найдите среднее арифметическое этих чисел
// (сумма делить на количество).

// <input class="inp" type="number">
// let inp = document.querySelector('.inp')
// let arr = []
// inp.addEventListener('blur', function () {
// let sum = 0;
// 	for (let i = 0; i < inp.value.length; i++) {
// 		if (inp.value[i] === ',') {
// 			continue;
// 		}
// 		arr.push(inp.value[i]);
// 	}
// 	for (const arrElement of arr) {
// 		sum += +arrElement / arr.length
// 	}
// 	console.log(sum);
// })

// Даны 4 инпута. В первый инпут вводится ФИО через пробел.
// По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
//<input class="inp1" type="text" value="Ведите ФИО">
// <input class="inp" type="text">
// <input class="inp" type="text">
// <input class="inp" type="text">

// let inp1 = document.querySelector('.inp1');
// let inp2 = document.querySelector('.inp2');
// let inp3 = document.querySelector('.inp3');
// let inp4 = document.querySelector('.inp4');
// inp1.addEventListener('blur', function () {
// 	let arr = inp1.value.split(' ')
// 	console.log(arr)
// 		for (let i = 0; i < arr.length; i++) {
// 			inp2.value = arr[0];
// 			inp3.value = arr[1];
// 			inp4.value = arr[2];
// 	}
// })
// Дан инпут. В него вводится ФИО через пробел.
// ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери
// фокуса инпутом, введенные фамилия, имя и отчество
// автоматически стали записанными с большой буквы (в этом же инпуте).
//<input class="inp2" type="text">

// let inp = document.querySelector('.inp2');
// inp.addEventListener('blur', function () {
// 	let arr = inp.value.split(' ')
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1)
// 	}
// 	inp.value = arr.join(' ')
// })

// Дан инпут. В него вводится текст.
// По потери фокуса узнайте количество слов в этом тексте.
//<input class="inp2" type="text">
// let inp = document.querySelector('.inp2');
// inp.addEventListener('blur', () => console.log(inp.value.length))

// Дан инпут. В него вводится дата в формате 31.12.2016.
// По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
//<input class="inp2" type="text">
// let inp = document.querySelector('.inp2');
// inp.addEventListener('blur', function () {
// 	while (inp.value.includes('.')) {
// 		inp.value = inp.value.replace('.', '-');
// 	}
// })

// Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то,
// что это слово читается с начала и с конца одинаково (например, мадам).
//<input class="inp2" type="text" value="мадам">
//<button id="btn">click</button>
// let btn = document.querySelector('#btn');
// let inp = document.querySelector('.inp2');
// btn.addEventListener('click', function () {
// 	if (inp.value === String(inp.value).split('').reverse().join('')) {
// 		console.log(true)
// 	} else {
// 		console.log(false)
// 	}
// })

// Дан инпут. В него вводится число. Проверьте по потери фокуса,
// что это число содержит внутри себя цифру 3.
//<input class="inp2" type="text" value="мадам">
// let inp = document.querySelector('.inp2');
// inp.addEventListener('blur', function () {
// 	let res =  String(inp.value).indexOf('3');
// 	console.log(res);
// })
// Даны несколько абзацев и кнопка. По нажатию на кнопку
// запишите в конец каждого абзаца его порядковый номер.
// <p>1</p>
// <p>2</p>
// <p>3</p>
// <button id="btn">click</button>
// let btn = document.querySelector('#btn');
// let allPar = document.querySelectorAll('p');
// btn.addEventListener('click', function () {
// 	allPar.forEach(function (el,i) {
// 		el.textContent += i
// 	})
// })
// Даны несколько абзацев с числами. По нажатию на любой абзац
// запишите в него квадрат числа, которое в нем находится.
//<p class="elem1">2</p>
// <p class="elem2">2</p>
// <p class="elem3">2</p>
// <p class="elem4">2</p>
// let par1 = document.querySelector('.elem1');
// let par2 = document.querySelector('.elem2');
// let par3 = document.querySelector('.elem3');
// let par4 = document.querySelector('.elem4');
// par1.addEventListener('click', square)
// par2.addEventListener('click', square)
// par3.addEventListener('click', square)
// par4.addEventListener('click', square)
// function square () {
// 	this.textContent = this.textContent ** 2
// 	this.removeEventListener('click', square)
// }

// Дан инпут. В него вводится дата в формате 31.12.2016.
// По потери фокуса узнайте день недели (словом),
// который приходится на эту дату.

// Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать
// или уменьшать на 1 значение инпута. Сделайте так,
// чтобы это значение не могло стать меньше нуля.
//<input class="inp" type="text">
// <button id="btn1">+1</button>
// <button id="btn2">-1</button>
// let inp = document.querySelector('.inp')
// let btn1 = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')
//
// function upInp () {
// 	btn1.addEventListener('click', () => inp.value = +inp.value + 1)
// }
// upInp();
// function downInp() {
// 		btn2.addEventListener('click', () => inp.value > 0 ? inp.value = +inp.value - 1 : inp.value)
// }
// downInp()

// Дан инпут. Даны абзацы. Пусть в этот инпут
// записывается суммарное количество нажатий по этим абзацам.
//<input class="inp" type="text">
// <p class="par1">1</p>
// <p class="par2">2</p>
// <p class="par3">3</p>
// let inp = document.querySelector('.inp');
// let par1 = document.querySelector('.par1');
// let par2 = document.querySelector('.par2');
// let par3 = document.querySelector('.par3');
//
// par1.addEventListener('click', clicks);
// par2.addEventListener('click', clicks);
// par3.addEventListener('click', clicks);
// function clicks () {
// 	inp.value = +inp.value + 1;
// }

// Дан инпут. В него вводится число. По потери фокуса проверьте,
// что в нем лежит число от 1 до 100. Если это так
// - покрасьте инпут в зеленый цвет, а если не так - в красный.
//<input class="inp" type="text">
// let inp = document.querySelector('.inp');
// inp.addEventListener('blur', () => inp.value >= 1 && inp.value <= 100 ? inp.style.border = '2px solid green' : inp.style.border = '2px solid red')

// Дан инпут и кнопка. По нажатию на кнопку
// сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
// <input class="inp" type="text">
// <button id="btn1" type="submit">Genirator</button>
// let inp = document.querySelector('.inp')
// let btn = document.querySelector('#btn1');
// btn.addEventListener('click', function (){
// 	let resStr = '';
// 	let inpStr = inp.value;
// 	for (let i = 0; i < 8; i++) {
// 		resStr += inpStr[getRandom(0, inpStr.length)];
//     }
// 	console.log(resStr);
// 	inp.value = resStr;
//
// 	function getRandom (min, max) {
// 		return Math.floor(Math.random() * max - min) + min
// 	}
// 	getRandom()
// })

//
















