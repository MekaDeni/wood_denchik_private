/*______КАРУСЕЛЬ______*/
const carousel = document.querySelector(".main__carousel"); // пишем блок карусели
const carousel_button = document.getElementsByClassName("main__slaid-button"); // пишем массив кнопок слайдера

// функция обработчик для кнопок слайдера
function buttonCarouselEvent(e) {
	slaid_arr = carousel.getElementsByClassName("main__slaid"); // получаем массив слайов (HTML collection)
	slaid_arr = Array.from(slaid_arr); // преабразуем в норм массив


	if (e.target.classList[1] == "main__slaid-button--left") { // если нажата правая кнока
		for (let i = slaid_arr.length - 1; i > 0; i--) { 
			if (slaid_arr[i].classList[1] == "main__slaid--selected") { // если текущий элемент имеет класс --selected
				if (i == 0) { // если итерация равна первому элементу массива
					slaid_arr[i].classList.remove("main__slaid--selected");	
					slaid_arr[slaid_arr.length - 1].classList.add("main__slaid--selected");
					break;
				}

				slaid_arr[i].classList.remove("main__slaid--selected");
				slaid_arr[i-1].classList.add("main__slaid--selected");
				break;
			} else if (slaid_arr[0].classList[1] == "main__slaid--selected") { // если первый элемент выбран (но не равен итерации (она равна длинне - 1))
				slaid_arr[0].classList.remove("main__slaid--selected");
				slaid_arr[slaid_arr.length - 1].classList.add("main__slaid--selected");
			}
		}
	} else { // если нажата правая кнока
		for (let i = 0; slaid_arr.length > i; i++) { 
			if (slaid_arr[i].classList[1] == "main__slaid--selected") { // если текущий элемент имеет класс --selected
				if (i == slaid_arr.length - 1) { // если итерация равна крайнему элементу массива
					slaid_arr[i].classList.remove("main__slaid--selected");	
					slaid_arr[0].classList.add("main__slaid--selected");
					break;
				}

				slaid_arr[i].classList.remove("main__slaid--selected");
				slaid_arr[i+1].classList.add("main__slaid--selected");
				break;
			}
		}
	}
};

for (let i = 0; carousel_button.length > i; i++) {
	carousel_button[i].addEventListener("click", buttonCarouselEvent); //пишем в цикле обработчик в каждую кнопку
}