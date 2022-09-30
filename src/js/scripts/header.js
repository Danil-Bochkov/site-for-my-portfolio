// для умного  хедера
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

const menu = document.querySelector('.navbar');
const menuBtn = document.querySelector('.nav_menu-btn');
const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', (e) => {
		menu.classList.toggle('active-burger')
		menuBtn.classList.toggle('active-burger')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', (e) => {
		if (e.target.classList.contains('navbar')) {
			menu.classList.remove('active-burger')
			menuBtn.classList.remove('active-burger')
			body.classList.remove('lock')
		}
	})
	menu.querySelectorAll('.nav-list__link').forEach(link => {
		link.addEventListener('click', () => {
		  menu.classList.remove('active-burger')
		  menuBtn.classList.remove('active-burger')
		  body.classList.remove('lock')
		})
	  })
}


// для переключателя темы сайта


