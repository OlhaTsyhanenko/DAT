let menuBtn = document.querySelector('.nav__btn');
let menu = document.querySelector('.nav__inner');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})