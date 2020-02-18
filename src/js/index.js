import "../sass/main.scss";

const todoBaseMarkup = `
	<div class="todo">
		<input class="todo__check" type="checkbox">
		<h2 class="todo__title">
		%todo-title%
		</h2>
		<span class="todo__cross">&times;</span>
	</div>
`;

document.querySelector('.header__date').innerHTML = new Date().toLocaleDateString('en-UK', {
	month: 'long',
	day: 'numeric'
}).concat(`<sup>${new Date().getDay.toString().endsWith('1') ? 'nd' : new Date().getDay.toString().endsWith('2') ? 'nd' : new Date().getDay.toString().endsWith('3') ? 'rd' : 'th'}<sup>`);

document.querySelector('.field__form').addEventListener('submit' , ev => {
	ev.preventDefault();
	const newTodoTitle = document.querySelector('.field__input').value;
	const newTodoMarkup = todoBaseMarkup.replace('%todo-title%', newTodoTitle[0].toUpperCase().concat(newTodoTitle.slice(1)));
	document.querySelector('.ground').insertAdjacentHTML('beforeend', newTodoMarkup);
	document.querySelector('.field__input').value = "";
	Array.from(document.querySelectorAll('.todo__cross')).forEach(el => {
		el.addEventListener('click', () => {
			el.parentElement.remove();
		});
	});
});
