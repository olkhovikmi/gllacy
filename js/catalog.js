let openForm = document.querySelector('.search');

openForm.onclick = function () {
	let elem = document.querySelector('.btn-search'), //находим блок div по его class, который передали в функцию
		state = elem.style.display; //смотрим, включен ли сейчас элемент
	if (state == '') {
		elem.style.display = 'block';
	} //если включен, то выключаем
	else {
		elem.style.display = '';
	} //иначе - включаем
};

let login = document.querySelector('.login');

login.onclick = function () {
	let loginForm = document.querySelector('.login-form');

	if (loginForm.style.display == '') {
		loginForm.style.display = 'block';
	} else {
		loginForm.style.display = '';
	}
};

///CART////////////////////////////////////////////////////////////

let cart = document.querySelector('.cart-active');

cart.onclick = function () {
	let cartForm = document.querySelector('.cart-form');

	if (cartForm.style.display == '') {
		cartForm.style.display = 'block';
	} else {
		cartForm.style.display = '';
	}
};
