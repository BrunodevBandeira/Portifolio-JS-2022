export default function initTooltip() {

	// const tooltips = document.querySelectorAll("[data-tooltip]");

	// tooltips.forEach((item) => {
	// 	item.addEventListener("mouseover", onmouseover);
	// });

	// function onmouseover(event) {
	// 	const tooltipBox = criarToolTipBox(this);
	// 	tooltipBox.style.top = event.pageY + "px";
	// 	tooltipBox.style.top = event.pageX + "px";

	// 	onMouseLeave.pegaTooltipBox = tooltipBox;
	// 	this.addEventListener("mouseleave", onMouseLeave);
	// }

	// const onMouseLeave = {
	// 	pegaTooltipBox: "",
	// 	handleEvent() {
	// 		this.pegaTooltipBox.remove();
	// 	}
	// }

	// function criarToolTipBox(element) {
	// 	const tooltipBox = document.createElement("div");
	// 	const text = element.getAttribute("aria-label");
	// 	tooltipBox.classList.add("tooltip");
	// 	tooltipBox.innerText = text;
	// 	document.body.appendChild(tooltipBox);
	// 	return tooltipBox;
	// }
}