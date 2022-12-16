export default function typeMachine() {
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
	
	const top = document.querySelector(".top");
	top.addEventListener("click",  () => {
		machine(mainSubtitle);
	});
}

