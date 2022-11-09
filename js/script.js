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
			}, 82 * index)
		})
	}

	machine(mainSubtitle);
}

// typeMachine();



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

// initScrollSuave();
 





// ====> Navegação por tabs <====
const tabMenu = document.querySelectorAll(".js-tabmenu p");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if(tabMenu.length && tabContent.length) {
	tabContent[0].classList.add("ativo");
	
	function activeTab(index) {
		tabContent.forEach((section) => {
			section.classList.remove("ativo");
		})
		tabContent[index].classList.add("ativo");
	}
	
	tabMenu.forEach((itemMenu, index) => {
		itemMenu.addEventListener("click", () => {
			activeTab(index)
		});
	});
}



