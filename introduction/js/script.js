"use strict";

//"Введение в DOM"
// Даны 3 абзаца:
// Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих переменных в консоль.
// <p id="elem1">1</p>
// <p id="elem2">2</p>
// <p id="elem3">3</p>

// let p1 = document.querySelector('#elem1');
// let p2 = document.querySelector('#elem2');
// let p3 = document.querySelector('#elem3');
// console.log(p1.innerHTML,p2.innerHTML,p3.innerHTML);

// let block = document.querySelector('.block p');
// console.log(block);

// Дан следующий HTML:
// <p class="www">text</p>
// <p class="www">text</p>
// Получите ссылку на первый абзац с классом www.

// function val() {
//     return document.querySelector('.www').innerHTML;// если получать сам <p><p/> то innerHTML не нужен
// }
// console.log(val());

// Даны 3 кнопки:
//
// <input id="button1" type="submit">
// <input id="button2" type="submit">
// <input id="button3" type="submit">
//  Сделайте так, чтобы по клику на первую кнопку на экран выводилось
//число 1, по клику на вторую - число 2, а по клику на третью - число 3.

// function clickBtn() {
//     let inputBtn1 = document.querySelector('#button1');
//     let inputBtn2 = document.querySelector('#button2');
//     let inputBtn3 = document.querySelector('#button3');
//     inputBtn1.addEventListener('click', () => console.log('btn1'));
//     inputBtn2.addEventListener('click', () => console.log('btn2'));
//     inputBtn3.addEventListener('click', () => console.log('btn3'));
// }
// clickBtn();

// Дан следующий HTML код:

// <input id="button1" type="submit" value="button1">
//     <input id="button2" type="submit" value="button2">
//         Даны следующие функции:
// Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.

// let inputBtn1 = document.querySelector('#button1');
// inputBtn1.addEventListener('click',func1);
// let inputBtn2 = document.querySelector('#button2');
// inputBtn2.addEventListener('click', func2);
//
// function func1() {
//     console.log(1);
// }
//
// function func2() {
//     console.log(2);
// }

// Даны 5 абзацев:
//
//     <p id="elem1">text</p>
// <p id="elem2">text</p>
// <p id="elem3">text</p>
// <p id="elem4">text</p>
// <p id="elem5">text</p>
// Дана следующая функция:
//
//     function func() {
//         console.log('message');
//     }
// Привяжите эту функцию ко всем 5-ти абзацам.

// let elemP1 = document.querySelector('#elem1');
// let elemP2 = document.querySelector('#elem2');
// let elemP3 = document.querySelector('#elem3');
// let elemP4 = document.querySelector('#elem4');
// let elemP5 = document.querySelector('#elem5');
//
// elemP1.addEventListener('click', func);
// elemP2.addEventListener('click', func);
// elemP3.addEventListener('click', func);
// elemP4.addEventListener('click', func);
// elemP5.addEventListener('click', func);
//
// function func() {
//         console.log('message');
// }

// Дана кнопка. По двойному клику по ней выведите какое-нибудь сообщение.
// <input id="button" type="submit">
// let inBtn = document.querySelector('#button');
// inBtn.addEventListener('dblclick', func);
// function func() {
//         console.log('message');
// }
// Дана кнопка. По наведению на нее выведите какое-нибудь сообщение.
// <input id="button" type="submit">
// let inBtn = document.querySelector('#button');
// inBtn.addEventListener('mouseover', func);
// function func() {
//     console.log('message');
// }

// Дана кнопка. По уходу курсора с нее выведите какое-нибудь сообщение.
// // <input id="button" type="submit">
// let inBtn = document.querySelector('#button');
// inBtn.addEventListener('mouseout', func);
// function func() {
//     console.log('message');
// }


// Дана кнопка. По наведению на нее выведите одно сообщение, а по уходу с нее - другое.
// <input id="button" type="submit">
// let inBtn = document.querySelector('#button');
// inBtn.addEventListener('mouseover', () => console.log('message'));
// inBtn.addEventListener('mouseout', () => console.log('message2'));
// function func() {
//         console.log('message');
// }
// function func2() {
//     console.log('message2');
// }

// Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.
// <p id="elem">text</p>

// <input id="button" type="submit">
// let elem = document.querySelector('#elem');
// let inBtn = document.querySelector('#button');
// inBtn.addEventListener('click', () => console.log(elem.textContent));

// Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст.
// <p id="elem">text</p>

// let elem = document.querySelector('#elem');
// let inBtn = document.querySelector('#button');
// inBtn.addEventListener('click', () => console.log(elem.textContent = 'cool'));

// Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.
// <p id="elem">123</p>
// <p id="elem1">123</p>
// <input id="button" type="submit">


// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// let inBtn = document.querySelector('#button');
// inBtn.addEventListener('click', function () {
//     let sum = 0;
//     // console.log(+elem.textContent + +elem1.textContent);
//     sum = +elem.textContent + +elem1.textContent;  // работает?
//     // console.log(sum);
// });


// Даны три абзаца с числами, див, и кнопка. По нажатию на кнопку запишите в текст дива сумму чисел.
// <p id="elem">123</p>
// <p id="elem1">123</p>
// <div id="div"></div>

// let elem11 = document.querySelector('#elem');
// let elem12 = document.querySelector('#elem1');
// let div = document.querySelector('#div');
// let inBtn1 = document.querySelector('#button');
// inBtn1.addEventListener('click', function () {
//     div.innerHTML = +elem11.innerHTML + +elem12.innerHTML;
//     // console.log(sum);
// });
// Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.


// Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.


// Дан следующий инпут:
//     Дана также кнопка. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.
// <input id="elem" type="email">
// <input id="button" type="submit">

// let elem = document.querySelector('#elem');
// let inBtn = document.querySelector('#button');
// inBtn.addEventListener('click', function () {
//     console.log(elem.type);
// })

// Дан следующий инпут:
// <input id="elem" type="email">
// Дана также кнопка. По нажатию на кнопку запишите в атрибут type значение submit.

// let elem = document.querySelector('#elem');
// let inBtn = document.querySelector('#button');
// inBtn.addEventListener('click', function () {
//     console.log(elem.type = 'submit');
// })
// Пусть у вас есть ссылка в виде тега a, кнопка и абзац.
//     По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.
// <a className="href" href="http://localhost"></a>
// <p className="str"></p>
// <input id="button" type="submit">

// let href = document.querySelector('.href');
// let str = document.querySelector('.str');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', function (){
//     str.innerHTML = href.href;
//     console.log(href.href);
// })

// Пусть у вас есть ссылка и кнопка. По нажатию на
// кнопку добавьте в конец текста ссылки
// содержимое ее атрибута href в круглых скобках.

// <a className="href" href="http://localhost"></a>
// <input id="button" type="submit">

// let href = document.querySelector('.href');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', function (){
//     href.innerHTML = href.innerHTML.split('-') + ' ' + '(' + href.href + ')';
// });
// Пусть у вас есть картинка. Разместите ее на странице в помощью тега img.
//     Пусть даны также кнопка и абзац. Сделайте так, чтобы
// по клику на кнопку в абзац записался путь к картинки из ее атрибута src.
// <img className="img" src="img/abc.jpg" alt="adc">
//     <input id="button" type="submit">
//         <p id="elem1"></p>

// let img = document.querySelector('#img');
// let elem = document.querySelector('#elem1');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', function () {
//     elem.textContent = img.src;
//     console.log(elem.innerHTML);
// });

// Дана картинка в теге img и кнопка.
// По нажатию на кнопку в атрибут width запишите значение 300.
// <img className="img" src="img/abc.jpg" alt="adc">
//     <input id="button" type="submit">

// let img = document.querySelector('#img');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', function () {
//     img.width = 700;
// });
// btn.addEventListener('dblclick', function () {
//     img.width = 300;
// })
// Пусть у вас есть две картинки.
// Сделайте на странице тег img и две кнопки.
// По нажатию на первую кнопку запишите в атрибут src
// путь к первой картинке, а по нажатию на вторую -
// путь ко второй картинке.
// <img id="img" src="img/abc.jpg" width="255" alt="adc">
//     <img id="img2" src="img/img2.jpg" width="300" alt="adc">
//         <input id="button" type="submit">
//             <input id="button2" type="submit">

// let img = document.querySelector('#img');
// let img2 = document.querySelector('#img2');
// let btn = document.querySelector('#button');
// let btn2 = document.querySelector('#button2');
// btn.addEventListener('click', function () {
//     img.src = img2.src;
// })
// btn2.addEventListener('click', function () {
//     img2.src = img.src;
// })

// Дан инпут:
// <input id="elem" value="text">
//Сделайте кнопку, нажатие на которую будет выводить текущий текст инпута.
// После захода на страницу нажмите на кнопку, чтобы увидеть текущий текст
// инпута, затем поредактируйте текст в инпуте и еще раз нажмите на кнопку.
// Убедитесь в том, что выведется новый текст инпута.

// let elemText = document.querySelector('#elemText');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function () {
//     console.log(elemText.value);
// })

// Дан инпут и кнопка. По нажатию на кнопку
// запишите в инпут какой-нибудь текст.

// let elemText = document.querySelector('#elemText');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function () {
//     elemText.value = 'Вы ввели не корректное Имя';
// })

// Дан инпут, абзац и кнопка. По нажатию на
// кнопку запишите в абзац текст из инпута.

// let str = document.querySelector('.str');
// let elemText = document.querySelector('#elemText');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function () {
//     elemText.value = 'Не верно';
//     str.innerHTML = elemText.value;
// })

// Даны два инпута и кнопка.
// В первый инпут пользователем вводится число.
// По нажатию на кнопку запишите во второй инпут квадрат введенного числа.

// let elemNum1 = document.querySelector('#elemNum1');
// let elemNum = document.querySelector('#elemNum');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function () {
//     elemNum.value = elemNum1.value ** 2;
// })

// Даны два инпута и кнопка.
// По нажатию на кнопку запишите в первый инпут значение второго инпута,
// а во второй инпут - значение первого. Ваш код должен работать
// универсально, для любых значений инпутов.
// <input id="elemNum1" type="text" value="">
//     <input id="elemNum" type="text" value="">
//         <input id="btn" type="submit">
// let elemNum1 = document.querySelector('#elemNum1');
// let elemNum = document.querySelector('#elemNum');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function () {
//     let elem1 = elemNum1.value;
//     let elem = elemNum.value;
//     elemNum.value = elem1;
//     elemNum1.value = elem;
// });

// Дан инпут. По получению фокуса запишите в него число 1,
// а по потери фокуса - число 2.
// <input id="elem" type="text" value="">

// let elem = document.querySelector('#elem');
//     elem.addEventListener('focus', () => elem.value = 1)
//     elem.addEventListener('blur', () => elem.value = 2)

// Дан инпут. Пусть в него вводится число.
// По потери фокуса выведите на экран квадрат этого числа.
// <input id="elem" type="text" value="">

// let elem = document.querySelector('#elem');
//     elem.addEventListener('blur', function () {
//         elem.value = elem.value ** 2;
//     })

// Дан инпут, в котором изначально есть какой-то текст.
// По получению фокуса инпутом очистите содержимое этого инпута.
// <input id="elem" type="text" value="">

// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function () {
//     elem.value = '';
// })

// Дан див:
// <div id="elem" class="content no-gap"></div>
// <input id="button2" type="submit">
// Дана также кнопка. По нажатию на кнопку прочитайте и выведите
// на экран значение атрибута class нашего дива.

// let divElem = document.querySelector('#elem');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', function () {
//     divElem.innerHTML = divElem.className;
// })

// Дан див с несколькими CSS классами, записанными через пробел:
// <div id="elem" class="aaa bbb ccc"></div>
// <input id="button" type="submit">
// Дана также кнопка. По нажатию на кнопку получите массив CSS
// классов нашего дива.
// let divElem = document.querySelector('#elem');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', function () {
//     console.log(divElem.className.split(' '))
// });

// Дан див:
// <div id="elem"></div>
// <input id="button" type="submit">
// Дана также кнопка. По нажатию на кнопку запишите в атрибут
// class нашего дива какой-нибудь класс.

// let divElem = document.querySelector('#elem');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', function () {
//     divElem.className = 'list';
//     console.log(divElem);
// });

// Дан следующий код:
// <img id="image" src="avatar.png">
//  let image = document.querySelector('#image');
//  console.log(image.src);
//  Переделайте приведенный выше код так, чтобы
//  вместо введения переменной image использовалась цепочка.

// console.log(document.querySelector('#image').src);

// Дан инпут. По получению фокуса этим
// инпутом запишите в него число 1, а по потери фокуса - число 2.
// Для обращения у инпуту внутри функции-обработчика
// используйте объект this.
// <input id="elem" type="text" value="">

// let elem = document.querySelector('#elem');
//
//     // elem.addEventListener('focus', () => this.value = 1)
//     // elem.addEventListener('blur', () => this.value = 2)
//
//     elem.addEventListener('focus', function () {
//         this.value = 1
//     })
//     elem.addEventListener('blur', function () {
//         this.value = 2
//     })


// Дана кнопка, значением которой служит число 1.
// Сделайте так, чтобы по клику на эту кнопку
// ее значение каждый раз увеличивалось на единицу.
// <button id="btn">1</button>

// let btn = document.querySelector('#btn');
//
// btn.addEventListener('click', function () {
//     this.innerHTML = +this.innerHTML + 1;
// });

// Даны 5 абзацев с какими-то текстами.
// По клику на любой абзац запишите в конец его текста
// восклицательный знак.
// <p id="elem1">привет</p>
// <p id="elem2">я тут</p>
// <p id="elem3">как ты</p>
// <p id="elem4">сколько</p>
// <p id="elem5">вы тут</p>
// let  elem1 = document.querySelector('#elem1');
// let  elem2 = document.querySelector('#elem2');
// let  elem3 = document.querySelector('#elem3');
// let  elem4 = document.querySelector('#elem4');
// let  elem5 = document.querySelector('#elem5');
//
// elem1.addEventListener('click',func);
// elem2.addEventListener('click',func);
// elem3.addEventListener('click',func);
// elem4.addEventListener('click',func);
// elem5.addEventListener('click',func);
//
// function func() {
//     this.innerHTML = this.textContent + '!';
// }


// Даны 3 инпута, в которых записаны какие-то числа.
// По потери фокуса в любом из инпутов возведите стоящее
// в нем число в квадрат.

// <input id="elem1" type="text" value="">
//     <input id="elem2" type="text" value="">
//         <input id="elem3" type="text" value="">

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
//
// elem1.addEventListener('blur', func);
// elem2.addEventListener('blur', func);
// elem3.addEventListener('blur', func);
//
// function func() {
//     this.value  = this.value ** 2;
// }

// let calculator = {
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     },
//     read() {
//         this.a = +prompt('Первое значение', '0');
//         this.b = +prompt('Второе значение', '0');
//     }
// };
// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );

// У нас есть объект ladder (лестница), который
// позволяет подниматься и спускаться:

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         console.log(this.step)
//         return this;
//     }
// };
//
// ladder.up().up().down().showStep().down().showStep().up().showStep();

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep();

// Даны абзацы и кнопка.
// По нажатию на кнопку найдите все абзацы,
// переберите из циклом и установите текст каждого
// абзаца в значение 'text'.
// <p className="www">text1</p>
// <p className="www">text2</p>
// <p className="www">text3</p>
// <input id="button" type="submit">


// let p = document.querySelectorAll('.www');
// let btn = document.querySelector('#button');
//
// btn.addEventListener('click', function () {
//     function test() {
//         for (let elem of p) {
//             elem.innerHTML = 'text';
//         }
//     }
//     test();
// });


// Даны абзацы с текстом и кнопка.
// По нажатию на кнопку запишите в конец текста каждого
// абзаца его порядковый номер.
// <p className="www">text1</p>
// <p className="www">text2</p>
// <p className="www">text3</p>
// <input id="button" type="submit">

// let p = document.querySelectorAll('.www');
// let btn = document.querySelector('#button');
//
// btn.addEventListener('click', function () {
//     function test() {
//         for (let i = 0; i < p.length; i++) {
//             p[i].innerHTML = 'text' +  ' ' + i;
//         }
//     }
//     test();
// });

// Даны инпуты с числами, абзац и кнопка.
// По нажатию на кнопку найдите сумму чисел из
// инпутов и запишите эту сумму в текст абзаца.
// <input className="elem" type="text" value="">
//     <input className="elem" type="text" value="">
//         <input className="elem" type="text" value="">
//             <p className="www"></p>
//             <input id="button" type="submit">

// let elemAll = document.querySelectorAll('.elem');
// let btn = document.querySelector('#button');
// let p = document.querySelector('.www');
// btn.addEventListener('click', function () {
//     let sum = 0;
//     for (let elem of elemAll) {
//         for (let elemVal of elem.value) {
//             sum += +elem.value;
//         }
//         // sum = +elem.value + +elem.value + +elem.value;
//     }
//     p.innerHTML = sum;
//
// })

// Дана следующая функция:
// Даны также инпуты. Сделайте так, чтобы по
// потери фокуса в любом из наших инпутов выполнялась
// приведенная выше функция.
// <input className="elem" type="text" value="">
//     <input className="elem" type="text" value="">
//         <input className="elem" type="text" value="">

// let elemInput = document.querySelectorAll('.elem');
// for (let elem of elemInput) {
//     elem.addEventListener('focus', func);
// }
// function func() {
//     this.value = Number(this.value) + 1;
// }


// Даны абзацы с числами. Сделайте так,
// чтобы по клику на любой абзац его число в
// нем возводилось в квадрат.
// <p className="www">2</p>
// <p className="www">3</p>
// <p className="www">4</p>

// let p = document.querySelectorAll('.www');
// for (let elem of p) {
//     elem.addEventListener('click', function () {
//         this.innerHTML = Number(this.innerHTML) ** 2;
//     })
// }
// let divs = document.querySelectorAll('div');
//
// for (let div of divs) {
//     div.addEventListener('click', function () {
//         this.textContent++;
//     });
// }

// Дана ссылка. По нажатию на эту ссылку
// добавьте в конец ее текста содержимое
// ее атрибута href в круглых скобках.
// Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
// <a className="link" href="vk.com">Вконтакте</a>
// let links = document.querySelector('.link');
// links.addEventListener('click', func);
// function func() {
//     this.innerHTML = this.innerHTML + ' ' + this.href;
//     this.removeEventListener('click',func);
// }

// Дана кнопка, значением которой служит число 1.
// Сделайте так, чтобы по клику на эту кнопку ее значение
// каждый раз увеличивалось на единицу. После того, как
// значение кнопки достигнет 10 - отвяжите обработчик события,
// чтобы кнопка больше не реагировала на нажатие.
// <button id="btn">1</button>

// let btn = document.querySelector('#btn');
// btn.addEventListener('click', func);
// function func() {
//     this.innerHTML = +this.innerHTML + 1;
//     if (this.innerHTML === '10') {
//         this.removeEventListener('click', func)
//     }
// }

// Даны абзацы. По нажатию на любой из абзацев
// добавьте ему в конец восклицательный знак.
// Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
// <p>text1</p>
// <p>text2</p>
// <p>text3</p>

// let paragraph = document.querySelectorAll('p');
// paragraph.forEach(function (elem) {
//     elem.addEventListener('click', func);
// })
// function func() {
//     this.innerHTML = this.innerHTML + '!';
//     this.removeEventListener('click',func);
// }

// Дан список ul, в каждом пункте которого
// записано число. Сделайте так, чтобы по клику на
// любую li ее число увеличивалось на единицу.

// let ulList = document.querySelectorAll('li');
// ulList.forEach(function (elem) {
//     elem.addEventListener('click', function func() {
//         this.innerHTML = +this.textContent + 1;
//         if (this.innerHTML === '10') {
//             this.removeEventListener('click', func);
//         }
//
//     })
// })


// Дан элемент:
// <input id="elem" value="text">
// <input id="elem" className="www zzz">
// Получите значение его атрибута value.
// let elemInput = document.querySelector('#elem');
// let attribute = elemInput.getAttribute('value');
// console.log(attribute);
// let elemInput = document.querySelector('#elem');
// let attribute = elemInput.getAttribute('class');
// console.log(attribute);

// Дан элемент
// <input id="elem">
//  Установите его атрибут value в значение 'text'.
//  Дан элемент:
//  <input id="elem">
//  Установите ему атрибут class в значение 'valid'.
// let elemInput = document.querySelector('#elem');
// elemInput.setAttribute('class', 'valid');
// elemInput.setAttribute('value', 'text');

// Дан элемент:
// <input id="elem" value="text">
// Удалите у него атрибут value.
// let elem = document.querySelector('#elem');
// elem.removeAttribute('value');


// Дан элемент:
// <p id="elem" class="www ggg zzz"></p>
// Узнайте количество его классов.
// Дан элемент:
// <p id="elem" class="www ggg zzz"></p>
// Переберите в цикле его классы.
//  let elem = document.querySelector('#elem');
//  let coll = elem.classList.length;
// console.log(coll);
//  let classNames = elem.classList;
//  let a = [];
// for (let classElem of classNames) {
//     a.push(classElem);
//     document.write(classElem + '<br>')
// }
// console.log(a);

// Дан элемент:
// <p id="elem" class="www ggg zzz"></p>
// Добавьте ему класс xxx.

// let addClass = document.querySelector('#elem');
// addClass.classList.add('xxx');

// Дан элемент:
//     <p id="elem" class="www ggg zzz"></p>
// Удалите у него класс www и класс zzz.
//
// let removeClass = document.querySelector('#elem');
// removeClass.classList.remove('zzz');

// Дан элемент:
//     <p id="elem" class="www ggg zzz"></p>
// Проверьте наличие у него класса ggg.

// let containsClass = document.querySelector('#elem');
// let cont = containsClass.classList.contains('ggg');
// console.log(cont);

// Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть
// <p id="elem" className="www ggg zzz"></p>
// let toggleClass = document.querySelector('#elem');
// toggleClass.classList.toggle('zzz');
// toggleClass.classList.toggle('ccc');

// Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.
// <div className="divs"></div>
// <input type="submit" value="width">

// let inputSubmit = document.querySelector('.in');
// let divWidth = document.querySelector('.divs');
// inputSubmit.addEventListener('click', func);
// function func() {
//     divWidth.style.width = '200px';
//     divWidth.style.height = '200px';
//     divWidth.style.border = 'red 1px solid';
//     inputSubmit.style.marginTop = '10px';
// }
// Дан див с текстом и кнопка. По клику на кнопку установите диву размер шрифта в 20px, а также верхнюю границу и фон.

// let inputSubmit = document.querySelector('.in');
// let divWidth = document.querySelector('.divs');
// inputSubmit.addEventListener('click', func);
// function func() {
//     inputSubmit.style.marginTop = '10px';
//     divWidth.style.fontSize = '20px'
//     divWidth.style.background = 'red';
// }

// Дан список ul и кнопка. По клику на кнопку добавьте тегам li свойство float в значении left.
// let inputSubmit = document.querySelector('.in');
// let ulLi = document.querySelectorAll('li');
// inputSubmit.addEventListener('click', func);
// function func() {
//     inputSubmit.style.marginTop = '10px';
//     for (let elem of ulLi) {
//         elem.style.cssFloat = 'left';
//         elem.style.marginRight = '10px'
//         elem.style.listStyleType = 'none'
//     }
// }

// Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'.
// Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем
// (становится красным, например).
// <p>Lorem ipsum dolor sit amet.</p>
// <input className="in" type="submit" value="Перечеркнуть">
//     <input className="in" type="submit" value="Сделать жирным">
//         <input className="in" type="submit" value="Сделать красным">

// let btn1 = document.querySelector('.in1');
// let btn2 = document.querySelector('.in2');
// let btn3 = document.querySelector('.in3');
// let par = document.querySelector('.par');
// btn1.addEventListener('click', function () {
//     par.classList.add('par1')
// })
// btn2.addEventListener('click', function () {
//     par.classList.add('par2')
// })
// btn3.addEventListener('click', function () {
//     par.classList.add('par3')
// })

// Модифицируйте предыдущую задачу так, чтобы повторное
// нажатие на кнопку отменяло действие этой кнопки.
// let btn1 = document.querySelector('.in1');
// let btn2 = document.querySelector('.in2');
// let btn3 = document.querySelector('.in3');
// let par = document.querySelector('.par');
// btn1.addEventListener('click', function () {
//     par.classList.toggle('par1')
// })
// btn2.addEventListener('click', function () {
//     par.classList.toggle('par2')
// })
// btn3.addEventListener('click', function () {
//     par.classList.toggle('par3')
// })

// Дан элемент #elem:
//
//     <ul id="elem">
//         <li>text</li>
//         <li>text</li>
//         <li>text</li>
//         <li>text</li>
//         <li>text</li>
//     </ul>
// Найдите первого потомка этого элемента и сделайте его текст красного цвета.
//
//
// let ulElem = document.querySelector('#elem');
// let firstTextRed = ulElem.firstElementChild.style.color = 'red';
// let lastTextRed = ulElem.lastElementChild.style.color = 'red';
// let allUlElemLi = ulElem.children;
// for (let elem of allUlElemLi) {
//     elem.innerHTML += ' !'
// }
// Дан элемент #elem:
//
//     <div>
//         <ul>
//             <li>text</li>
//             <li>text</li>
//             <li id="elem">text</li>
//             <li>text</li>
//             <li>text</li>
//         </ul>
//     </div>
// Найдите его родителя и задайте ему красную границу.

// let elemUlLi = document.querySelector('#elem');
// let parens = elemUlLi.parentElement;
// let parent = parens.parentElement;
// console.log(parens);
// console.log(parent);

// Дан элемент:
//     <header>
//         <div>
//             <p>
//                 <span id="elem"></span>
//             </p>
//         </div>
//     </header>
// Найдите ближайшего родителя этого элемента, являющегося тегом div.
// let elemChild = document.querySelector('#elem');
// let parentChild = elemChild.closest('div');
// console.log(parentChild);

// Дан элемент:
//     <header>
//         <div class="www">
//             <p class="www">
//                 <span id="elem"></span>
//             </p>
//         </div>
//     </header>
// Найдите ближайшего родителя этого элемента,
// являющегося элементом с классом www.

// let elemChild = document.querySelector('#elem');
// let parentChild = elemChild.closest('.www');
// console.log(parentChild);

// Дан элемент #elem:
//     <ul>
//         <li>text</li>
//         <li>text</li>
//         <li id="elem">text</li>
//         <li>text</li>
//         <li>text</li>
//     </ul>
// Найдите его соседа сверху и добавьте ему в конец текст '!'.

// let elemChild = document.querySelector('#elem');
// elemChild.previousElementSibling.innerHTML += ' !';
// let nextElem = elemChild.nextElementSibling;
// nextElem.nextElementSibling.innerHTML += ' !';

// Дан элемент #elem:
//     <ul>
//         <li>text1</li>
//         <li>text2</li>
//         <li id="elem">text3</li>
//         <li>text4</li>
//         <li>text5</li>
//     </ul>
// Поменяйте местами текст его соседа сверху и текст его соседа снизу.

// let elemChild = document.querySelector('#elem');
// let elemPrevious = elemChild.previousElementSibling.innerHTML;
// let elemNext = elemChild.nextElementSibling.innerHTML
// elemChild.previousElementSibling.innerHTML = elemNext;
// elemChild.nextElementSibling.innerHTML = elemPrevious;

// Дан элемент #parent:
//     <div id="parent">
//         <p class="www">text</p>
//         <p class="www">text</p>
//         <p class="www">text</p>
//         <p class="ggg">text</p>
//         <p class="ggg">text</p>
//         <p class="ggg">text</p>
//     </div>
// let parent = document.querySelector('#parent');
// Найдите внутри родителя элементы с классом www
// и запишите их в переменную elems1. Затем найдите
// внутри родителя элементы с классом ggg и запишите их в переменную elems2.
// let parent = document.querySelector('#parent');
// let elem1 = parent.querySelectorAll('.www');
// console.log(elem1);
// let elem2 = parent.querySelectorAll('.ggg')
// console.log(elem2);

// Дан следующий код:
//     <div id="elem" data-text="str">text</div>
// Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.
//   let elem = document.querySelector('#elem');
//   elem.addEventListener('click', function () {
//       elem.innerHTML += ' ' + elem.dataset.text;
//   })

// Даны дивы, содержащие в атрибуте data-num свой порядковый номер:
// <div data-num="1">text</div>
// <div data-num="2">text</div>
// <div data-num="3">text</div>
// <div data-num="4">text</div>
// <div data-num="5">text</div>
// Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер
// let elemDiv = document.querySelectorAll('div');
// for (let elem of elemDiv) {
//     elem.addEventListener('click', function () {
//         this.innerHTML += this.dataset.num;
//     })
// }

// Дана кнопка. Сделайте так, чтобы эта кнопка считала
// количество кликов по ней, записывая их в какой-нибудь
// пользовательский атрибут. Пусть по двойному клику на эту кнопку
// на экран выводится, сколько кликов по этой кнопке было сделано.

// let inputBtn = document.querySelector('#click');
//
// inputBtn.addEventListener('click', function () {
//     let number = ++inputBtn.dataset.num;
//     console.log(number)
// })
// inputBtn.addEventListener('dblclick', function () {
//     let clickRes = 1;
//     clickRes += +inputBtn.dataset.num
//     console.log(clickRes - 2 + ' dblclick');
// })
// Дан инпут:
//  <input id="elem" data-length="5">
//   В этом инпуте в атрибуте data-length содержится количество символов, которое нужно
//   ввести в инпут. Сделайте так, чтобы по потери фокуса
//   если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.

// let input = document.querySelector('#elem');
// input.addEventListener('blur', function () {
//     let val = +input.value;
//     let data = +input.dataset.length;
//     if (val < data) {
//         console.log('no');
//     } else  if (val > data) {
//         console.log('yes');
//     }
// })

// Дан инпут:
// <input id="elem" data-min="5" data-max="10">
//  В этом инпуте атрибуты data-min и data-max содержат диапазон. Сделайте так, чтобы по потери фокуса,
//  если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.

// let input = document.querySelector('#elem');
// input.addEventListener('blur', function () {
//     let val = +input.value;
//     let dataMax = +input.dataset.max;
//     let dataMin = +input.dataset.min;
//     if (val >= dataMin && val <=  dataMax) {
//         console.log('yes');
//     } else {
//         console.log('no');
//     }
// })

// Дан следующий код:
//
//     <div id="elem" data-product-price="1000" data-product-amount="5">
//         товар яблоки
//     </div>
// Сделайте так, чтобы по клику на див в конец
// его текста добавлялась стоимость покупки,
// равная цене, умноженной на количество.
// let getSum = document.querySelector('#elem');
// let sum = 0;
// getSum.addEventListener('click', function () {
//     sum = getSum.dataset.productPrice * getSum.dataset.productAmount;
//     getSum.innerHTML +=  ' ' + sum;
// })

// Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num запишите
// порядковый номер этого абзаца. Используйте метод setAttribute.

// let elem = document.querySelectorAll('div');
// for (let i = 1; i <= elem.length; i++) {
//     elem[i].setAttribute('data-num', i);
// }
// Напишите код, который покажет разницу между lastChild и lastElementChild.
// let divElem = document.querySelector('#elem');
// console.log(divElem.firstChild);
// console.log(divElem.lastElementChild);

// Напишите код, который покажет разницу между nextSibling и nextElementSibling.
// let divElem = document.querySelector('#elem')
// console.log(divElem.nextSibling);
// console.log(divElem.nextElementSibling);

// Напишите код, который покажет разницу между previousSibling и previousElementSibling.
// let divElem = document.querySelector('#elem')
// console.log(divElem.previousSibling);
// console.log(divElem.previousElementSibling);

// Дан див:
// <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
// Переберите циклом все узлы этого дива и выведите их в консоль.
// let divElem = document.querySelector('#elem');
//
// for (let elem of divElem.childNodes) {
//     console.log(elem);
// }

// Дан див:
// <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
// Переберите циклом все узлы этого дива и выведите в консоль только узлы-элементы и текстовые узлы.

// let divElem = document.querySelector('#elem');
// for (let elem of divElem.childNodes) {
//     if (elem.nodeType === Node.TEXT_NODE) {
//         console.log(elem.nodeType)
//     }
// }

// Дан див:
//
//     <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
// // Переберите циклом все узлы этого дива и выведите в консоль тексты всех узлов.
//
// let divElem = document.querySelector('#elem');
// // console.log(divElem.childNodes[0]);
// for (let elem of divElem.childNodes) {
//     console.log(elem);
// }

// let elem = document.querySelector('#elem');
// console.log(elem.firstChild);        // комментарий
// console.log(elem.firstElementChild); // тег span

// Дан список с годами:
// <ul>
//     <li>2000</li>
//     <li>2004</li>
//     <li>2021</li>
//     <li>2022</li>
//     <li>2025</li>
//     <li>2031</li>
// </ul>
// Получите года, сумма цифр которых равна 6. Найдите сумму полученных годов.
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
//             let res = el.join('').split(' ');
//             arrYear.push(...res)
//         }
//     })
//     arrYear.map((el3) => result += +el3);
//     console.log(result)
// }
// getArr1();
//
//
//
// let ulLi = document.querySelectorAll('li');
// function getArr() {
//     let arr = [];
//     let arrYear = []
//     let result = 0;
//     for (let i = 0; i < ulLi.length; i++) {
//         arr.push(ulLi[i].textContent.split(''));
//     }
//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0;
//         for (let j = 0; j < arr[i].length; j++) {
//             let num = +arr[i][j]
//             sum += num;
//         }
//         if (sum === 6) {
//            let  res = arr[i].join('').split(' ');
//            arrYear.push(...res)
//         }
//     }
//     for (let elem of arrYear) {
//         result += +elem;
//     }
//     console.log(result)
// }
// getArr();

// РАБОТА НАД ОШИБКАМИ

// Код должен добавить текст в конец каждого абзаца:
// <p>1</p>
// <p>2</p>
// <p>3</p>

// let elems = document.querySelectorAll('p');
// elems.forEach((el) => el.textContent += '!')

// По клику на абзац его значение должно увеличиться на единицу:
// <p>1</p>
// <p>2</p>
// <p>3</p>
// let elems = document.querySelectorAll('p');
// elems.forEach(function (el) {
//     el.addEventListener('click', function() {
//         this.textContent = +el.innerHTML + +'1';
//         console.log(+el.textContent);
//     });
// })

// По клику на кнопку текст абзаца должен стать жирным:

// let button = document.querySelector('button');
// let elem   = document.querySelector('p');
//
// button.addEventListener('click', function() {
//     elem.style.fontWeight = 'bold';
// });


// По клику на кнопку должна вывестись сумма чисел из абзацев:
// <p>1</p>
// <p>2</p>
// <p>3</p>
// <button>click</button>

// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// button.addEventListener('click', function() {
//     let sum = 0;
//     for (let elem of elems) {
//         sum += +elem.textContent;
//     }
//     console.log(sum);
// });

// По клику на абзац ему в конец должен добавиться заданный текст:
// <p>1</p>
// <p>2</p>
// <p>3</p>
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
//     elem.addEventListener('click', () => {
//         elem.textContent += '!';
//     });
// }

// По клику на кнопку текст каждого абзаца должен стать жирным:
//
//     <p>text1</p>
// <p>text2</p>
// <p>text3</p>
// <button>click</button>
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// button.addEventListener('click', function() {
//     for (let elem of elems) {
//         elem.style.fontWeight = 'bold';
//     }
// });

// По клику на кнопку в консоль должна вывестись сумма чисел из абзацев:
// <p>1</p>
// <p>2</p>
// <p>3</p>
//
// <button>click</button>

// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
//     button.addEventListener('click', function() {
//         let sum = 0;
//         for (let elem of elems) {
//             sum += +elem.textContent
//         }
//         console.log(sum);
//     });

// В инпуты вводятся числа.
// По клику на кнопку в консоль должна вывестись сумма чисел из инпутов:
//
// <input>
//  <input>
//  <input>
//
//  <button>click</button>
// let button = document.querySelector('button');
// let elems = document.querySelectorAll('input');
// button.addEventListener('click', function () {
//     let sum = 0;
//     for (let elem of elems) {
//         sum += +elem.value;
//     }
//     console.log(sum);
// });

// В первые два инпута вводятся числа.
// По клику на кнопку в третий инпут должна вывестись сумма этих чисел:

// <input id="inp1">
//     <input id="inp2">
//         <input id="inp3">
//
//             <button id="btn">click</button>
// let btn = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');
// btn.addEventListener('click', function () {
//     inp3.value = +inp1.value + +inp2.value;
// });


// В первые два инпута вводятся числа.
// По клику на кнопку в абзац должна вывестись сумма этих чисел:

// <input id="inp1">
//     <input id="inp2">
//         <p id="res"></p>
//
//         <button id="btn">click</button>
// let btn = document.querySelector('#btn');
// let res = document.querySelector('#res');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// btn.addEventListener('click', function () {
//     res.innerHTML = +inp1.value + +inp2.value;
// });

// По клику на кнопку нужно проверить,
// что текст в каждом инпуте совпадает с текстом его data атрибута:

// <input data-text="text1">
//     <input data-text="text2">
//         <input data-text="text3">
//
//             <button id="btn">click</button>
// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')
// button.addEventListener('click', function () {
//     for (let input of inputs) {
//         if (input.value === input.dataset.text) {
//             console.log('совпадает')
//         } else {
//             console.log('не совпадает')
//         }
//     }
// });


// По клику на кнопку нужно проверить,
// что текст в каждом инпуте совпадает с текстом
// соответствующего элемента массива:
// <input>
// <input>
// <input>
// <button id="btn">click</button>
// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')
// let texts = ['1', '2', '3'];
// button.addEventListener('click', function () {
//     for (let input of inputs) {
//         for (let i = 0; i < texts.length; i++) {
//             if (input.value === texts[i]) {
//                 console.log('совпадает');
//             } else {
//                 console.log('не совпадает');
//
//             }
//         }
//     }
// });


// В инпуты вводятся числа. По клику на кнопку
// в консоль должна вывестись сумма введенных чисел:

// <input>
//     <input>
//         <input>
//
//             <button id="btn">click</button>
// let inputs = document.querySelectorAll('input');
// let btn = document.querySelector('#btn');
// let sum = 0;
// btn.addEventListener('click', function () {
//     for (let input of inputs) {
//         sum += +input.value;
//     }
//     console.log(sum);
// });

// В первые два инпута вводятся числа.
// По клику на кнопку в третий инпут должна вывестись сумма этих чисел:

// <input id="inp1">
//     <input id="inp2">
//         <input id="inp3">
//
//             <button id="btn">click</button>
// let btn = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');
// btn.addEventListener('click', function () {
//     inp3.value = +inp1.value + +inp2.value;;
// });

// В инпут вводится число. По потери фокуса в
// консоль должна вывестись сумма цифр этого числа:
// <input id="inp">

// let inp = document.querySelector('#inp');
// inp.addEventListener('blur', function () {
//     let digits = inp.value.split('');
//     let sum = 0;
//     for (let digit of digits) {
//         sum += +digit;
//     }
//     console.log(sum);
// });

//////////// ПРАКТИКА

// Дан инпут и абзац. По потери фокуса в
// инпуте запишите значение инпута в конец текста абзаца.
// <input id="inp">
// <p>text</p>

// let inp = document.querySelector('#inp');
// let p = document.querySelector('p');
// inp.addEventListener('blur', function () {
//     p.textContent += inp.value;
// })

// Дано несколько инпутов, абзац и кнопка.
// По нажатию на кнопку получите числа, стоящие в этих
// инпутах и запишите их сумму в абзац.
// <input>
//     <input>
//         <input>
//             <button type="submit">click My</button>
//             <p></p>
// let inp = document.querySelectorAll('input');
// let btn = document.querySelector('button');
// let p = document.querySelector('p');
// let sum = 0;
// btn.addEventListener('click', () => {
//     for (let elem of inp) {
//         sum += +elem.value
//         p.textContent = sum
//     }
// })

// Дан инпут. В него вводится число.
// По потери фокуса найдите сумму цифр этого числа.
// <input>

// let inp = document.querySelector('input');
// inp.addEventListener('blur', () => {
//     let arrVal = inp.value.split('');
//     let sum = 0;
//     for (let elem of arrVal) {
//         sum += +elem;
//     }
//    inp.value = sum;
// })

// Дан инпут. В него вводятся числа через запятую.
// По потери фокуса найдите среднее арифметическое этих
// чисел (сумма делить на количество).
// <input>

// let inp = document.querySelector('input');
// inp.addEventListener('blur', () => {
//     let arrVal = inp.value.split(',');
//     let sum = 0;
//     for (let elem of arrVal) {
//         sum += +elem;
//     }
//     sum /= arrVal.length
//    inp.value = sum;
// })

// Даны 4 инпута. В первый инпут вводится ФИО через пробел.
// По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.

// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');
// let inp4 = document.querySelector('#inp4');
// inp1.addEventListener('blur', () => {
//     let obj = {}
//     let val = inp1.value.split(' ')
//     let arr = ['firstName', 'lastName', 'SurName']
//     arr.forEach((el, i) => {
//         obj[el] = val[i];
//     })
//     inp2.value += obj['firstName'];
//     inp3.value += obj['lastName'];
//     inp4.value += obj['SurName'];
// })
// // Владимир Михайлович Пулин
// Дан инпут. В него вводится ФИО через пробел.
// ФИО вводится с маленькой буквы. Сделайте так,
// чтобы по потери фокуса инпутом, введенные фамилия,
// имя и отчество автоматически стали записанными с большой
// буквы (в этом же инпуте).

// let inp1 = document.querySelector('#inp1');
// inp1.addEventListener('blur', () => {
//     let upper = inp1.value.split(' ')
//     let newArr = [];
//     for (let i = 0; i < upper.length; i++) {
//         let res = upper[i].slice(0, 1).toUpperCase() + upper[i].slice(1)
//         newArr.push(res)
//     }
//     inp1.value = newArr.join(' ');
// })
// владимир михайлович пулин
// Дан инпут. В него вводится текст.
// По потери фокуса узнайте количество слов в этом тексте.
// <input id="inp1">

// let inp1 = document.querySelector('#inp1');
// inp1.addEventListener('blur', () =>
//     console.log(inp1.value.split(' ').length))

// Дан инпут. В него вводится дата в формате 31.12.2016.
// По потери фокуса в этом же инпуте поставьте эту
// дату в формате 2016-12-31.
// let inp1 = document.querySelector('#inp1');
// inp1.addEventListener('blur', () => {
//     inp1.value = inp1.value.split('.').reverse().join('-')
// })

// Дан инпут. В него вводится слово.
// По нажатию на кнопку проверьте то, что это слово
// читается с начала и с конца одинаково (например, мадам).
// <input id="inp1">
//     <button type="submit">click My</button>
// let inp1 = document.querySelector('#inp1');
// let btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     let arr1 = [];
//     let arr2 = [];
//     arr1.push(inp1.value.split('').slice(3))
//     arr2.push(inp1.value.split('').slice(0,2).reverse())
//     console.log(arr1);
//     console.log(arr2)
//     if (arr1.join('') === arr2.join('')) {
//         console.log('yes');
//     } else {
//         console.log('no')
//     }
// })

// Дан инпут. В него вводится число.
// Проверьте по потери фокуса, что это число
// содержит внутри себя цифру 3.
// let inp1 = document.querySelector('#inp1');
// inp1.addEventListener('blur', () => {
//     if (+inp1.value === 3) {
//         console.log('yes');
//     }
// })

// Даны несколько абзацев и кнопка.
// По нажатию на кнопку запишите в конец каждого
// абзаца его порядковый номер.
// <p>Lorem ipsum.</p>
// <p>Lorem ipsum.</p>
// <p>Lorem ipsum.</p>
// <button type="submit">click My</button>
// let btn = document.querySelector('button');
// let par = document.querySelectorAll('p');
// btn.addEventListener('click', () => {
//     par.forEach((el,i) => el.textContent += i)
// })

// Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
// <a href="http://wel.ru">q</a>
// <a href="http://wel.ru">q</a>
// <a href="http://wel.ru">q</a>
// <button type="submit">click My</button>

// let btn = document.querySelector('button');
// let links = document.querySelectorAll('a');
// btn.addEventListener('click', () => {
//     links.forEach((el) => {
//         el.style.textDecoration = 'none';
//         el.textContent += ' - (' + el.href + ')'
//         console.log( el.href)
//     })
// })

// Даны ссылки. Если ссылка начинается с http://,
// то добавьте ей в конец стрелку → (делается так: &rarr;).

// let btn = document.querySelector('button');
// let links = document.querySelectorAll('a');
// let str = 'http://';
// btn.addEventListener('click', () => {
//     links.forEach((el) => {
//         let arr = el.href.split('').slice(0, 7).join('');
//         el.style.textDecoration = 'none';
//         if (arr === str) {
//             el.innerHTML += ' &rarr;'
//             el.style.color = 'red'
//         } else {
//             el.innerHTML += ' не ссылка'
//         }
//         console.log(arr);
//     })
// })

// Даны несколько абзацев с числами.
// По нажатию на любой абзац запишите в него квадрат числа,
// которое в нем находится.


// Даны несколько абзацев с числами.
// По нажатию на любой абзац запишите в него квадрат числа,
// которое в нем находится.
// <p>2</p>
// <p>4</p>
// <p>6</p>
// let par = document.querySelectorAll('p');
// par.forEach((el,i) => {
//     el.addEventListener('click', () => {
//         el.innerHTML **= 2;
//     })
// })

// Дан инпут. В него вводится дата в формате 31.12.2016.
// По потери фокуса узнайте день недели (словом), который
// приходится на эту дату.
// <input id="inp1">

// let inp1 = document.querySelector('#inp1');
// inp1.addEventListener('blur', () => {
//     let inputData = inp1.value.split('.').reverse().join('.').split(' ').join('.')
//     let date = new Date(inputData);
//     let day = date.getDay();
//     let days = ['вс', 'пн', 'вт', 'ср',
//         'чт', 'пт', 'сб'];
//     console.log(days[day]);
// })

// Дан инпут. Реализуйте кнопочки +1, -1,
// которые будут увеличивать или уменьшать на 1 значение инпута.
// Сделайте так, чтобы это значение не могло стать меньше нуля.
// <input id="inp1">
//     <button type="submit">+1</button>
//     <button type="submit">-1</button>

// let btn1 = document.querySelector('.btn1');
// let btn2 = document.querySelector('.btn2');
// let inp1 = document.querySelector('#inp1');
//
// function plus() {
//     btn1.addEventListener('click', () =>  inp1.value = +inp1.value + 1)
// }
// plus();
// function minus() {
//     btn2.addEventListener('click', function func() {
//         inp1.value = +inp1.value - 1;
//         if (inp1.value <= 0) {
//             btn2.removeEventListener('click', func)
//         } else if (inp1.value > 0) {
//             btn2.addEventListener('click', func);
//         }
//     })
// }
// minus();
// Дан инпут. Даны абзацы. Пусть в этот инпут
// записывается суммарное количество нажатий по этим абзацам.
// <input id="inp1">
//     <p>one</p>
//     <p>two</p>
//     <p>three</p>
// let inp = document.querySelector('#inp1');
// let par = document.querySelectorAll('p');
// for (let parElement of par) {
//     parElement.addEventListener('click', () => {
//             inp.value = +inp.value + 1;
//     })
// }

// На странице есть дивы. В них есть текст.
// Обойдите все дивы и обрежьте тот текст, который в них стоит так,
//  чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста
// let getDiv = document.querySelectorAll('div');
// function minTextDiv() {
//     for (let i = 0; i < getDiv.length; i++) {
//         let splits = getDiv[i].textContent.split(' ');
//         if (splits.length > 10) {
//             splits.length -=  6;
//             getDiv[i].textContent = splits + '...';
//         }
//     }
// }
// minTextDiv();

// Дан инпут. В него вводится число.
// По потери фокуса проверьте, что в нем лежит число от 1 до 100.
// Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.
// // <input id="inp1">
// let inp1 = document.querySelector('#inp1');
// function comparison() {
//     inp1.addEventListener('blur', function () {
//         if (+inp1.value <= 100 && +inp1.value >= 1) {
//             inp1.style.border = '2px green solid';
//         } else {
//             inp1.style.border = '2px red solid';
//         }
//     })
// }
// comparison();

// Дан инпут и кнопка.
// По нажатию на кнопку сгенерируйте случайную
// строку из 8-ми символов и запишите в инпут.
// let strInput = document.querySelector('#str-input');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     let result = '';
//     let str = strInput.value;
//     for (let i = 0; i < 8; i++) {
//         result += str[getRandom(0, str.length)];
//     }
//     console.log(result)
// });
// function getRandom(min, max) {
//     return Math.floor(Math.random() * max - min) + min;
// }
// getRandom(); // написал не полностью сам пришлось подглядеть

// Дан инпут, кнопка и абзац.
// В инпут вводится температура в градусах Фаренгейта.
// По клику на кнопку выведите в абзац температуру в градусах Цельсия.
// <input type="text" id="str-input">
//     <button id="button">click me</button>
//     <p className="par"></p>

// let strInput = document.querySelector('#str-input');
// let btn = document.querySelector('#button');
// let par = document.querySelector('.par');
// const farNum1 = 32;
// const farNum2 = 1.8;
// btn.addEventListener('click', () => {
//     let celsius = (+strInput.value - farNum1) / farNum2;
//     par.style.fontSize = '20px'
//     par.innerHTML += celsius + 'c';
// })



















