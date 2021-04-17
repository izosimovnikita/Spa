// Индекс слайда по умолчанию
let slideIndex = 1;
showSlides(slideIndex);

// Определяем текущий слайд и передаем его в основную функцию
function currentSlide(current) {
	showSlides(current);
}

// Функция
function showSlides(current) {
	slideIndex = current;
	let slides = document.getElementsByClassName("slider-item");
	let dots = document.getElementsByClassName("slider-dots__item");

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (let i = 0; i < slides.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "flex";
	dots[slideIndex - 1].className += " active";
}