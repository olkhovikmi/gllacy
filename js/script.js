let openForm = document.querySelector('.search');

openForm.onclick = function () {
	let elem = document.querySelector(".btn-search"); //находим блок div по его class, который передали в функцию
	let state = elem.style.display; //смотрим, включен ли сейчас элемент
	if (state == '') {
		elem.style.display = 'block';
	}//если включен, то выключаем
	else {
		elem.style.display = '';
	} //иначе - включаем
}

let login = document.querySelector(".login");

login.onclick = function () {
	let loginForm = document.querySelector(".login-form");
	let loginOn = loginForm.style.display;
	if (loginOn == "") {
		loginForm.style.display = "block";
	}	else {
		loginForm.style.display = "";
	}
}
//SLIDER////////////////////////////////////////////////////////////

let bodyColor = document.querySelector('body');
		slideOne = document.getElementById('radio-one');
		slideTwo = document.getElementById('radio-two');
		slideThree = document.getElementById('radio-three');

slideOne.onclick = function () {
	if (bodyColor.style.backgroundColor == '' || 
			bodyColor.style.backgroundColor == '#8996a6' ||
			bodyColor.style.backgroundColor == '#9d8b84') 
		{
			bodyColor.style.backgroundColor = '#849d8f';					
		} else {
			bodyColor.style.backgroundColor = '#849d8f';
		}
}

slideTwo.onclick = function () {
	if (bodyColor.style.backgroundColor == '' ||
			bodyColor.style.backgroundColor == '#849d8f' || 		
			bodyColor.style.backgroundColor == '#9d8b84') 
		{
			bodyColor.style.backgroundColor = '#8996a6';			
		} else {
			bodyColor.style.backgroundColor = '#8996a6';
		}
}

slideThree.onclick = function () {
	if (bodyColor.style.backgroundColor == '' || 
			bodyColor.style.backgroundColor == '#849d8f' || 
			bodyColor.style.backgroundColor == '#8996a6')
		{
			bodyColor.style.backgroundColor = '#9d8b84';
		} else {
			bodyColor.style.backgroundColor = '#9d8b84';
		}
}

////////////////////////////////////////////////////////////

//FEEDBACK////////////////////////////////////////////////////////////

let fromFeedback = document.querySelector('.feedback');
		formClose = document.querySelector('.form-feedback__close-btn');
		btnFeedback = document.querySelector('.footer-top-box__btn');
		bodyOverlay = document.querySelector('body');

btnFeedback.onclick = function () {
	if (fromFeedback.style.display == '') {
		fromFeedback.style.display = 'block';
		bodyOverlay.classList.add('overlay');
	}
}

formClose.onclick = function () {
	if (fromFeedback.style.display == 'block') {
		fromFeedback.style.display = '';
		bodyOverlay.classList.remove('overlay');
	}
}

////////////////////////////////////////////////////////////