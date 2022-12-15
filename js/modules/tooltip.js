export default function initTooltip() {

	const tooltips = document.querySelectorAll("[data-tooltip]");

	tooltips.forEach((item) => {
		item.addEventListener("mouseover", onmouseover);
	});

	function onmouseover(event) {
		criarToolTipBox(this);
		console.log(event)
	};

	function criarToolTipBox(element) {
		const tooltipBox = document.createElement("div");
		const text = element.getAttribute("aria-label");
		tooltipBox.classList.add("tooltip");
		tooltipBox.innerText = text;
	}
}