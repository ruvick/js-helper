// Document Object Model =====================================================================================================

// Находим элементы в дом дереве
document.getElementById // поиск элемента по идентификатору;
document.getElementsByClassName // поиск элементов по названию класса;
document.getElementsByTagName // поиск элементов по названию тега;
document.querySelector // поиск первого элемента, подходящего под CSS-селектор;
document.querySelectorAll // поиск всех элементов подходящих под CSS-селектор.

// Примеры
const item = document.getElementById('item'); // Получаем элемент по id
const item = document.getElementsByClassName('item'); // Получаем элемент по классу
const item = document.getElementsByTagName('item'); // Получаем элемент по тегу
const item = document.querySelector('#item'); // Получаем один селектор по id
const item = document.querySelector('.item'); // Получаем первый селектор по тегу
const item = document.querySelectorAll('.item'); // Получаем все селекторы по классу
// =====================================================================================


// Циклы 
const buttons = document.querySelectorAll('.item');

buttons.forEach(button => {
	button.addEventListener('click', function () {
		// Здесь пишем код
		console.log('click');
	});
})

// Добавляем класс className для всех элементов с классом .block
// Для каждого из обьектов добавляем/убираем класс
const blocks = document.querySelectorAll('.block');
blocks.forEach(block => { block.classList.add('className') });
// Удаляем класс className у всех элементов с классом .block
blocks.forEach(block => { block.classList.remove('className') });
// Удаляем/добавляем класс className для всех элементов с классом .block
blocks.forEach(block => { block.classList.toggle('classNmae') });

//========================================================================================================================================================


// Функции 

// Создаем функцию
function initMenu() {
	console.log('menu');
}

// Стрелочная функция
const handleClick = () => {
	console.log('click');
}

initMenu(); //Вызщв функции

// Названия функций 
menuInit(); //Инициализация меню
popupInit(); //Инициализация popup
popupOpen(); //Открытие popup
popupClose(); //Закрытие popup
bodyLock(); //Блокировка body
initSpollers(); //Инициализация спойлеров
initGallery(); //Инициализация галереи
initSearch(); //Инициализация поиска
initRatings(); //Инициализация звездного рейтинга

// =====================================================================================
e.preventDefault(); //перенести
//======================================================================================


// Обработчики событий 

// Вешаем обработчик события клик на один эелемент, например открытие/закрытие меню
const iconMenu = document.querySelector(".icon-menu");

if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		// Пишем реакцию на клик
	});
}


// Вешаем обработчик события клик на все обьекты с классом .block
// Получаем коллекцию всех обьектов. Строим цикл и для каждого обьекта вешаем обработчик события
const blocks = document.querySelectorAll('.block');
blocks.forEach(block => {
	block.addEventListener("click", function (e) {
		// Пишем реакцию на клик
	});
})
// (!) или используем делегирование
// Вешаем событие на родителя. Отлавливаем класс с помощью closest
const lesson = document.querySelector('.lesson');
lesson.addEventListener("click", function (e) {
	if (e.target.closest('.block')) {
		// Пишем реакцию на клик
	}
});
// Но ранее closest не поддерживался всеми браузерами, поэтому дописываем полифил для closest
// Полифил для closest
// Оно же Function Expression - немедленное выполнение функции
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			let node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();


// Скрипт для отложенной загрузки
document.addEventListener('DOMContentLoaded', () => {
	setTimeout(function () {
		/*
		 * Тут код отслеживания всех метрик,
		 */
	}, 3500); // время указано в мс = 0,001 секунды, изменить по вкусу
});
// ========================================================================================


// Закрытие по Esc 

// document.addEventListener("DOMContentLoaded", () => {
window.onkeydown = function (event) {
	console.log(event.keyCode)
	if (event.keyCode == 27) {
		// Здесь пишем код... 
	}
};

document.addEventListener('keydown', function (e) {
	if (e.code === 'Escape') {
		//Здесь пишем код
		popup_close(); //Пример
	}
});
// }) 
//========================================================================================================================================================


// Обьект Window. 
window.innerWidth // внутренняя ширина окна браузера (в пикселях)
window.innerHeight // внутренняя высота окна браузера (в пикселях)
window.open(); // Открывает новую вкладку
window.close() // Закрывает текущее окно
window.moveTo() // Перемещает текущее окно
window.resizeTo() // Изменяет размер текущего окна
window.screen; // Возвращает объект, содержащий информацию об экране
window.scrollTo(0, 1000); // Перемещает страницу до точки (x-coord, y-coord)


// Перезагрузка страницы, при изменении размеров окна, при определенном разрешении
window.addEventListener('resize', function () {
	"use strict";
	var w = window.innerWidth;
	if (w > 1870) {
		window.location.reload();
		return;
	}
	if (w < 1919 && w > 1870) {
		window.location.reload();
		return;
	}
});


// При изменении размеров экрана, перезапускаем функцию
window.addEventListener('resize', controlNavItems);
//========================================================================================================================================================


// Анамировано показать блоки с классом .block
let slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
			// Код по завершению действия
			console.log('Текст показан!');
		}, duration);
	}
}
// Получаем коллекцию обьектов. Задаем константу со скоростью. Бегаем циклом по всем обьектам, и отправляем каждый из них в функцию
const blocks = document.querySelectorAll('.block');
const speed = 2000;
blocks.forEach(block => {
	slideDown(block, speed);
});
//========================================================================================================================================================


// AJAX запрос
// Простеший ajax запрос
// JavaScript (XMLHttpRequest)
// 1. Создаем новый	XMLHttpRequest-обьект
let xhr = new XMLHttpRequest();
// 2. Настраиваем его: GET-запрос по URL /article/...load
xhr.open('GET', '/article/xmlhttprequest/example/load');
//3. Отсылаем запрос
xhr.send();
// 4. Этот код сработает после того, как мы получили ответ сервера
xhr.onload = function () { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
	if (xhr.status != 200) {
		alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например 404: Not Found
	} else { // если все прошло успешно, выводим результат
		alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
	}
};
xhr.onprogress = function (event) {
	if (event.lengthComputable) {
		alert(`Получено ${event.loaded} из ${event.total} байт`);
	} else {
		alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
	}
};
xhr.onerror = function () {
	alert("Запрос не удался");
};

// JavaScript (Fetch)
async function postData(url = '', data = {}) {
	// Параметры по умолчанию отмечены знаком *
	const response = await fetch(url, {
		method: 'POST', // GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cashe', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *folow, error
		referrerPolicy: 'no-referrer', // no-referrer, *client
		body: JSON.stringify(data) // body data type must match "Content-Type"
	});
	return await response.json(); // pares JSON response into native JavaScript
}
postData('https://example.com/answer', { answer: 42 }).then((data) => {
	console.log(data); // JSON data parsed by `response.json()` call
});
//========================================================================================================================================================