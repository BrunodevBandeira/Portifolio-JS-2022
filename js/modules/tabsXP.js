export default function initTabsXP() {
    const tabMenu = document.querySelectorAll(".xp-tabmenu p");
	const tabContent = document.querySelectorAll(".xp-tabcontent section");
	console.log("tabMenu", tabMenu)
	console.log("tabContent", tabContent)

if(tabMenu.length && tabContent.length) {
	tabContent[0].classList.add("ativo");
	
	function activeTab(index) {
		console.log("index", index)

		tabContent.forEach((section) => {
			console.log("section", section)

			section.classList.remove("ativo");
		})
		tabContent[index].classList.add("ativo");
	}
	
	tabMenu.forEach((itemMenu, index) => {
		console.log("itemMenu", itemMenu)
		console.log("index 02", index)

		itemMenu.addEventListener("click", () => {
			console.log("index 03", index)
			
			activeTab(index)
		});
	});
}

}