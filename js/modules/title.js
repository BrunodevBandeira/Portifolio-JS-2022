export default function initTitle() {
    const date = new Date();
// console.log(date.getMinutes());
date.getMinutes() % 2 === 0 ? document.title = "Bruno Bandeira 2023" : document.title = "Seja Bem vindo...";
}