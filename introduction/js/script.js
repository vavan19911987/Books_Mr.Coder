"use strict";

//"Формы"//
// Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.
// <p></p>
// <textarea></textarea>

// let p = document.querySelector('p');
// let text = document.querySelector('textarea');
// text.addEventListener('blur', () => {
//     p.textContent = text.value;
// })
// №1 Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.
//<input type="text" name="" id="">
// <button type="submit">BLOCK</button>
// let inp = document.querySelector('input');
// let btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     inp.disabled = true;
// })


// №2 Дан инпут и две кнопки. Пусть нажатие на первую
// кнопку блокирует инпут, а нажатие на вторую - отблокирует.
////<input type="text" name="" id="">
// <button type="submit">BLOCK</button>
// <button type="submit">REMIVEBLOCK</button>

// let inp = document.querySelector('input');
// let btn1 = document.querySelector('.btn');
// let btn2 = document.querySelector('.btn2');
// btn1.addEventListener('click', () => {
//     inp.disabled = true;
// })
// btn2.addEventListener('click', () => {
//     inp.disabled = false;
// })
// №3 Дан инпут и кнопка. По нажатию на кнопку узнайте,
// заблокирован инпут или нет.
// <input type="text" name="" id="">
//     // <button type="submit">BLOCK</button>
//     // <button type="submit">REMIVEBLOCK</button>
// <button className="btn3" type="submit">LOOKSBLOCK</button>

// let inp = document.querySelector('input');
// let btn1 = document.querySelector('.btn1');
// let btn2 = document.querySelector('.btn2');
// let btn3 = document.querySelector('.btn3');
// btn1.addEventListener('click', () => {
//     inp.disabled = true;
// })
// btn2.addEventListener('click', () => {
//     inp.disabled = false;
// })
// btn3.addEventListener('click', () => {
//     console.log(inp.disabled);
// })
// №1 Дан чекбокс и две кнопки. По нажатию на
// первую кнопку установите чекбокс в отмеченное состояние,
// а по нажатию на вторую - в неотмеченное.
// <input type="checkbox" checked id="elem">
// <button className="btn2" type="submit">Yes</button>
// <button className="btn3" type="submit">No</button>

// let inp = document.querySelector('#elem');
// let btn1 = document.querySelector('.btn1');
// let btn2 = document.querySelector('.btn2');
// btn1.addEventListener('click', () => {
//     inp.checked = true;
// })
// btn2.addEventListener('click', () => {
//     inp.checked = false;
// })

// №2 Дан чекбокс, кнопка и абзац. По нажатию на
// кнопку, если чекбокс отмечен, выведите в абзац слово
// 'привет', а если чекбокс не отмечен, то слово 'пока'.
// let inp = document.querySelector('#elem');
// let btn1 = document.querySelector('.btn1');
// let p = document.querySelector('p');
// btn1.addEventListener('click', () => {
//     if (inp.checked === true) {
//         p.textContent = 'привет';
//     } else {
//         p.textContent = 'пока'
//     }
// })

// Дан чекбокс и кнопка. Сделайте так, чтобы каждый
// клик по кнопке приводил к смене состояния чекбокса.
// <button className="btn2" type="submit">Up</button>
// <input type="checkbox" checked id="elem">
//  let inp = document.querySelector('#elem');
//  let btn = document.querySelector('.btn2');
//  btn.addEventListener('click', () => {
//      inp.checked = !inp.checked
//  })
// Даны 3 радиокнопки, абзац и кнопка. По клику на
// кнопку выведите в абзац value отмеченной радиокнопки.
// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector('#button');
//
// button.addEventListener('click', function() {
//     for (let radio of radios) {
//         if (radio.checked) {
//             console.log(radio.value);
//         }
//     }
// });

// №1 Дан инпут и абзац. По изменению инпута выведите его текст в абзац.
// <input id="elem" value="text">
//     <p></p>

// let inp = document.querySelector('#elem');
// let p = document.querySelector('p');
// inp.addEventListener('change', () => {
//     p.textContent = inp.value;
// })


// №2 Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.
// <input type="radio" name="elem" value="1">

// let radios = document.querySelector('input[type = "radio"]');
// radios.addEventListener('click', () => {
//     if (radios.checked === true) {
//         console.log(true);
//     }
// })

// №4 Дан инпут. По его изменению проверьте, количество символов
// в нем меньше 5-ти или нет. Если меньше - покрасьте границу инпута
// в зеленый цвет, а если больше - в красный.
// <input id="elem" value="text">

// let inp = document.querySelector('#elem');
// inp.addEventListener('change', () => {
//     if (inp.value.length < 5) {
//         inp.style.border = '2px solid green';
//     } else {
//         inp.style.border = '2px solid red';
//     }
// });
// Дан инпут. Пусть в него вводится текст. Как
// только длина текста достигнет 5-ти,
//     выведите на экран сообщение об этом.
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#button');
// elem.addEventListener('input', function() {
//     if (elem.value.length === 5) {
//         console.log('Max')
//         elem.disabled = true;
//     }
// });
// btn.addEventListener('click', () => {
//     elem.disabled = false
//     elem.value = '';
// }) // сам дополнил

// Дан инпут. Пусть в него разрешено ввести 5
// символов. Дан также абзац. По мере ввода символов
// в инпут пишите, сколько еще символов можно ввести.
// Когда количество символов превысит 5-ти, то в абзац выводите
// то, на сколько символов превышена длина текста.
// let elem = document.querySelector('#elem');
// let par = document.querySelector('p');
// let btn = document.querySelector('#button');
//
// elem.addEventListener('focus', () => {
//     par.innerHTML = '5';
// }) // сам дополнил
// elem.addEventListener('input', () => {
//     par.textContent -= '1';
//     if (elem.value.length === 5) {
//         par.textContent = 'Вы ввели максимальное количество символов'
//                 elem.disabled = true;
//     }
// })
// btn.addEventListener('click', () => {
//     elem.disabled = false
//     elem.value = '';
// }) // сам дополнил

// Даны два инпута. Сделайте так, чтобы после ввода
// двух символов фокус ввода переходил ко второму инпуту,
// а после ввода двух символов в этот инпут - фокус из него убирался.
// <input id="elem1">
//     <input id="elem2">
// let inp1 = document.querySelector('#elem1');
// let inp2 = document.querySelector('#elem2');
//
// inp1.addEventListener('input', () => {
//     if (inp1.value.length === 2) {
//         inp1.blur();
//         inp2.focus();
//     }
// })
// inp2.addEventListener('input', () => {
//     if (inp2.value.length === 2) {
//         inp2.blur();
//     }
// })

// let select = document.querySelector('#select');
//
// select.addEventListener('change', function(){
//     console.log(this.value);
// });

// Дан селект, абзац и кнопка.
// По клику на кнопку выведите текст
// выбранного пункта списка в абзац.
// <select id="select">
//     <option value="1">one</option>
//     <option value="2" selected>two</option>
//     <option value="3">three</option>
// </select>
// <p></p>
// <input id="button" type="submit" value="Go">
// let select = document.querySelector('#select');
// let par = document.querySelector('p');
// let btn = document.querySelector('#button');
//
// btn.addEventListener('click', () => {
//     par.innerHTML  = select.value;
// })
// Сделайте выпадающий список годов от 2020 до 2030.
// При выборе какого-нибудь пункта списка выведите
// сообщение о том, високосный этот год или нет.
// <select id="select">
//     <option value="2020" selected>2020</option>
//     <option value="2021">2021</option>
//     <option value="2022">2022</option>
//     <option value="2023">2023</option>
//     <option value="2024">2024</option>
//     <option value="2025">2025</option>
//     <option value="2026">2026</option>
//     <option value="2027">2027</option>
//     <option value="2028">2028</option>
//     <option value="2029">2029</option>
//     <option value="2030">2030</option>
// </select>
// <p></p>
// <input id="button" type="submit" value="Go">

// let select = document.querySelector('#select');
// let par = document.querySelector('p');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', () => {
//     const monthAfterFebruaryNumber = 2;
//     const maxDaysInFebruary = 29;
//     function isLeap(y) {
//         if (new Date(y, monthAfterFebruaryNumber, 0).getDate() === maxDaysInFebruary) {
//             par.innerHTML  = 'Високосный год';
//         } else {
//             par.innerHTML  = 'Не високосный год';
//         }
//     }
//     isLeap(select.value);
// })

// Сделайте выпадающий список с названиями дней недели.
// В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7.
// По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.
// <select id="select">
//     <option value="1">Понедельник</option>
//     <option value="2">Вторник</option>
//     <option value="3">Среда</option>
//     <option value="4">Четверг</option>
//     <option value="5">Пятница</option>
//     <option value="6">Суббота</option>
//     <option value="7">Воскресенье</option>
// </select>
// <p></p>
// <input id="button" type="submit" value="Go">
// let select = document.querySelector('#select');
// let par = document.querySelector('p');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', () => {
//     function data() {
//         if (select.value > 0 && select.value < 6) {
//             par.innerHTML = 'Рабочий день';
//         }else  {
//             par.innerHTML = 'Выходной';
//         }
//     }
//     data();
// })
// Сделайте выпадающий список с названиями месяцев.
// Сделайте так, чтобы JavaScript по умолчанию выбирал в этом списке текущий месяц.
// <select id="select">
//     <option value="1">Январь</option>
//     <option value="2">Февраль</option>
//     <option value="3">Март</option>
//     <option value="4">Апрель</option>
//     <option value="5">Май</option>
//     <option value="6">Июнь</option>
//     <option value="7">Июль</option>
//     <option value="8">Август</option>
//     <option value="9">Сентябрь</option>
//     <option value="10">Октябрь</option>
//     <option value="11">Ноябрь</option>
//     <option value="12">Декабрь</option>
// </select>
// <input type="submit" id="button">
// let select = document.querySelector('#select');
// let button = document.querySelector('#button');
//     button.addEventListener('click', function() {
//         let data = new Date();
//         select.value = data.getMonth() + 1;
//     });

// Дан инпут и селект. В инпут вводится какое-то число.
// По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.

// <select id="select">
//         <option value="1">Январь</option>
//         <option value="2">Февраль</option>
//         <option value="3">Март</option>
//         <option value="4">Апрель</option>
//         <option value="5">Май</option>
//         <option value="6">Июнь</option>
//         <option value="7">Июль</option>
//         <option value="8">Август</option>
//         <option value="9">Сентябрь</option>
//         <option value="10">Октябрь</option>
//         <option value="11">Ноябрь</option>
//         <option value="12">Декабрь</option>
//     </select>
// <input id="elem">
// let select = document.querySelector('#select');
// let inp = document.querySelector('#elem');
//     inp.addEventListener('blur', function() {
//         select.value = inp.value;
//     });

// Сделайте выпадающий список с названиями дней недели.
// Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий день.
// let select = document.querySelector('#select');
// let date = new Date();
// select.value = date.getDay();
// select.addEventListener('blur', () => select.value = date.getDay());

// console.log(document.querySelectorAll('#select option'));
// Еще способ
// Пусть у нас есть переменная, хранящая ссылку на селект:

// let select = document.querySelector('#select');
// В таком случае поиск тегов option можно вести не по всему документу, а конкретно в нашем селекте:

// console.log(select.querySelectorAll('option'));

// let select = document.querySelector('#select');
//
// for (let option of select) {
//     console.log(option);
// }

// Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.
// <select id="select">
//     <option value="1">Январь</option>
//     <option value="2">Февраль</option>
//     <option value="3">Март</option>
//     <option value="4">Апрель</option>
//     <option value="5">Май</option>
//     <option value="6">Июнь</option>
//     <option value="7">Июль</option>
//     <option value="8">Август</option>
//     <option value="9">Сентябрь</option>
//     <option value="10">Октябрь</option>
//     <option value="11">Ноябрь</option>
//     <option value="12">Декабрь</option>
// </select>
// let select = document.querySelector('#select');
// for (let elem of select) {
//     elem.innerHTML  +=  ' ' + '(' + elem.value + ')';
// }
// Переберите пункты списка циклом и для выбранного пункта
// в конец текста добавьте восклицательный знак, а для невыбранных пунктов - вопросительный.
//<select id="select">
//     <option value="1">Январь</option>
//     <option value="2">Февраль</option>
//     <option value="3">Март</option>
//     <option value="4">Апрель</option>
//     <option value="5">Май</option>
//     <option value="6">Июнь</option>
//     <option value="7">Июль</option>
//     <option value="8">Август</option>
//     <option value="9">Сентябрь</option>
//     <option value="10">Октябрь</option>
//     <option value="11">Ноябрь</option>
//     <option value="12">Декабрь</option>
// </select>
// let select = document.querySelector('#select');
// for (let elem of select) {
//     elem.text += '!';
// }

// Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка
//<select id="select">
//     <option value="1">Январь</option>
//     <option value="2">Февраль</option>
//     <option value="3">Март</option>
//     <option value="4">Апрель</option>
//     <option value="5">Май</option>
//     <option value="6">Июнь</option>
//     <option value="7">Июль</option>
//     <option value="8">Август</option>
//     <option value="9">Сентябрь</option>
//     <option value="10">Октябрь</option>
//     <option value="11">Ноябрь</option>
//     <option value="12">Декабрь</option>
// </select>
// <input className="btn" type="submit" value="Up">

// let select = document.querySelector('#select');
// let btn = document.querySelector('.btn');
// let option = select[11];
// btn.addEventListener('click', () => {
//     option.selected = true;
// })
// Переберите пункты списка циклом и для выбранного пункта в конец
// текста добавьте восклицательный знак, а для невыбранных пунктов - вопросительный.
// let select = document.querySelector('#select');
// select.addEventListener('change', () => {
//     for (let el of select) {
//         if (el.selected) {
//             el.text += '!'
//         } else if (!el.selected) {
//             el.text += '?'
//         } else {
//             el.text = el.text
//         }
//
//     }
// })

// for (let i = 0; i < select.length; i++) {
//     if (select[i].selected === option) {
//         select[i].text += '!';
//     }
//     console.log(select[i].selected)
// }


// По потери фокуса текст из textarea должен записаться в див:
//
//     <textarea></textarea>
// <div></div>

// let textarea = document.querySelector('textarea');
// let div = document.querySelector('div');
//
// textarea.addEventListener('blur', function() {
//     div.innerHTML = textarea.value;
// });


// По клику на кнопку в див должно записаться или одно, или другое значение:
// <input type="checkbox">
//     <div></div>
//     <button>button</button>

// let checkbox = document.querySelector('#checkbox');
// let button = document.querySelector('#buttons');
// let div = document.querySelector('div');
//
// button.addEventListener('click', function () {
//     if (checkbox.checked) {
//         div.innerHTML = '111';
//     } else {
//         div.innerHTML = '222';
//     }
// });

// По клику на кнопку, если чекбокс отмечен, то должно вывестись одно значение, а если не отмечен - другое:

// <input type="checkbox">
//     <button>button</button>
// let checkbox = document.querySelector('[type="checkbox"]');
// let button = document.querySelector('button');
//
// button.addEventListener('click', function () {
//     if (checkbox.checked) {
//         console.log('+++');
//     } else {
//         console.log('---');
//     }
// });












