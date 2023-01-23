export default function initExpeModal() {
const botaoAbrir = document.querySelector('[data-modal="expe-abrir"]');
const botaoFechar = document.querySelector('[data-modal="expe-fechar"]');
const containerModal = document.querySelector('[data-modal="expe-container"]');

if(botaoAbrir && botaoFechar && containerModal) {
  
  function toggleModal(event) {
	event.preventDefault();
	containerModal.classList.toggle('ativo');
  }
  function cliqueForaModal(event) {
	if(event.target === this) {
	  toggleModal(event);
	}
  }

  botaoAbrir.addEventListener('click', toggleModal);
  botaoFechar.addEventListener('click', toggleModal);
  containerModal.addEventListener('click', cliqueForaModal);
}

}