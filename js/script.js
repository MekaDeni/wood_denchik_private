/*______КАРУСЕЛЬ______*/
const carousel = document.querySelector(".main__carousel"); // пишем блок карусели
const carousel_button = document.getElementsByClassName("main__slaid-button"); // пишем массив кнопок слайдера

// функция обработчик для кнопок слайдера
function buttonCarouselEvent(e) {
	if (e.target.classList[1] == "main__slaid-button--left") {
		alert("Я ОП");
	} else {
		alert("Я БОБ");
	}
};

for (let i = 0; carousel_button.length > 0; i++) {
	carousel_button[i].onclick = buttonCarouselEvent;//пишем в цикле обработчик в каждую кнопку
}