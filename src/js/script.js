const containersInputs = document.querySelectorAll(".container-input");
const inputs = document.querySelectorAll(".input");
const botao = document.querySelector(".botao");
const mensagem = document.createElement("p");
mensagem.textContent = "campo obrigatório";
mensagem.classList.add("aviso");

botao.addEventListener("click", (event) => {
	event.preventDefault();
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].value == "") {
			if (!inputs[i].classList.contains("invalido")) {
				inputs[i].classList.remove("valido");
				inputs[i].classList.add("invalido");
				adicionarMensagem(i);
			}
		} else {
			if (inputs[i].classList.contains("invalido")) {
				containersInputs[i].querySelector(".aviso").remove();
			}
			inputs[i].classList.remove("invalido");
			inputs[i].classList.add("valido");
		}
	}
});

function adicionarMensagem(index) {
	const mensagemAviso = mensagem.cloneNode(true);
	containersInputs[index].appendChild(mensagemAviso);
}
