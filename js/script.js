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

function typeMachine() {
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
}

typeMachine();

//======> Scroll Suave <======


function initScrollSuave() {
	const linksInternos = document.querySelectorAll('#js-menu a[href^="#"]');

	function scrollToSection(event) {
		event.preventDefault();
		const href = event.currentTarget.getAttribute('href'); //Pega o atributo
		const section = document.querySelector(href); // Pega a section, que tem o Href selecionado, aqui fazemos o linke do menu com as seções

		section.scrollIntoView({ 
			behavior: "smooth", 
			block: "start"
		});

		// const topo = section.offsetTop; //offsetTop => pega o topo das seções
		// //window.scrollTo(0, topo); //Posso passar isso de outra forma 
		// window.scrollTo({
		// 	top: topo,
		// 	behavior:"smooth",
		// });
	}

	linksInternos.forEach((link) => {
		link.addEventListener('click', scrollToSection);
	})
}

initScrollSuave();

