// Document Object Model =====================================================================================================

// Находим элементы в дом дереве
document.getElementById // поиск элемента по идентификатору;
document.getElementsByClassName // поиск элементов по названию класса;
document.getElementsByTagName // поиск элементов по названию тега;
document.querySelector // поиск первого элемента, подходящего под CSS-селектор;
document.querySelectorAll // поиск всех элементов подходящих под CSS-селектор.

// Примеры
const item = document.getElementById('item');
const item = document.getElementsByClassName('item');
const item = document.getElementsByTagName('item');
const item = document.querySelector('.item');
const item = document.querySelectorAll('.item');
// =====================================================================================


// Функции =============================================================================

// Создаем функцию
function initMenu() {
	console.log('menu');
}

// Стрелочная функция
const handleClick = () => {
	console.log('click');
}

initMenu();
// =====================================================================================


// Обработчики событий =================================================================

// AddEventListener
// 1й вариант
button.addEventListener('click', function () {
	console.log('click');
})

// 2й вариант
function handleClick() {
	console.log('click');
}

button.addEventListener('click', handleClick);

// Снять обработчик событий с конкретной функции
button.removeEventListener('click', handleClick);
// ========================================================================================

// Циклы ==================================================================================
const buttons = document.querySelectorAll('.item');

buttons.forEach(button => {
	button.addEventListener('click', function () {
		console.log('click');
	});
})