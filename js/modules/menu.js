export default function initMenu() {
    const header = document.querySelector("header");
	window.addEventListener ("scroll", () => {
		header.classList.toggle ("sticky", window.scrollY > 40);
	});

	let menu = document.querySelector('#menu-icon');
	let navlist = document.querySelector('.navlist');

	menu.onclick = () => {
		menu.classList.toggle('bx-x');
		navlist.classList.toggle('open');
	};

	window.onscroll = () => {
		menu.classList.remove('bx-x');
		navlist.classList.remove('open');
	};
};
