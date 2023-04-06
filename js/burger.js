let menuBtn = document.querySelector('.nav__btn');
let menu = document.querySelector('.nav__inner');
let background = document.querySelector('.header__nav');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
	background.classList.toggle('active');
})