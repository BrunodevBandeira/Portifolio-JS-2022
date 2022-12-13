
export default function initScrollSuave() {
	const linksInternos = document.querySelectorAll('#js-menu a[href^="#"]');

	function scrollToSection(event) {
		event.preventDefault();
		const href = event.currentTarget.getAttribute('href'); //Pega o atributo
		const section = document.querySelector(href); // Pega a section, que tem o Href selecionado, aqui fazemos o linke do menu com as seções
		// section.scrollIntoView({ 
		// 	behavior: "smooth", 
		// 	block: "start"
		// });

		const topo = section.offsetTop; //offsetTop => pega o topo das seções
		//window.scrollTo(0, topo); //Posso passar isso de outra forma 
		console.log(" ====> " + topo + " <==== ");

		

		window.scrollTo({
			top: topo,
			behavior:"smooth",
		});
	}

	linksInternos.forEach((link) => {
		link.addEventListener('click', scrollToSection);
	})
}

initScrollSuave();