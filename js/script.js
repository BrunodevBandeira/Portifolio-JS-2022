const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
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

// ===> Maquina de escrever <====

const mainSubtitle = document.querySelector(".main-subtitle");

function machine(tag) {
	const textoArray = tag.innerHTML.split("");
	tag.innerHTML = "";
	textoArray.forEach((element, index) => {
		setTimeout(() => {
			tag.innerHTML += element;
		}, 75 * index)
	})
}

machine(mainSubtitle);