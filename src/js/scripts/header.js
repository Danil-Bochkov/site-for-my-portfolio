// для пиздатого  хедера
const header = document.querySelector('.header');
let userScrollPosition = 0;
let defaultOffset = 200; // чтоб хедер  прятался не сразу

// для определения места скрола юзера
function scrollPosition() {
    return document.documentElement.scrollTop
}
// проверка на налицие класса hide-header
function includeHide() {
    return header.classList.contains('hide-header')
}
document.addEventListener('scroll', () => {

    if (scrollPosition() > userScrollPosition && !includeHide() && scrollPosition() > defaultOffset) {
        header.classList.add('hide-header');
    } else if (scrollPosition() < userScrollPosition && includeHide()) {
        header.classList.remove('hide-header');
    }

    userScrollPosition = scrollPosition();
});


// для бургера

const menu = document.querySelector('.nav');
const menuBtn = document.querySelector('.nav_menu-btn');
const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', (e) => {
		menu.classList.toggle('active-burger')
		menuBtn.classList.toggle('active-burger')
		body.classList.toggle('lock')
        // &.lock {
        //     overflow: hidden;
        // }   дописать это  к бади чтоб залочить  скролл
	})

	menu.addEventListener('click', (e) => {
		if (e.target.classList.contains('nav')) {
			menu.classList.remove('active-burger')
			menuBtn.classList.remove('active-burger')
			body.classList.remove('lock')
		}
	})
}


// для переключателя темы сайта

// для начала надо просто  сделать два класса,  вариаблы не нужно  подписывать  как под  разные темы,  и потом можно  ротейтом свг повернуть вместо  использования еще одной свг

