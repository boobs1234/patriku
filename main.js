// Botão de mensagem

const btnMensagem = document.getElementById("btnMensagem");

btnMensagem.addEventListener("click", () => {
    alert("Cada ação sustentável contribui para um futuro melhor! 🌱");
});

// Contador animado de árvores

let contador = 0;
const numeroArvores = document.getElementById("arvores");

const intervalo = setInterval(() => {

    contador += 5;
    numeroArvores.textContent = contador;

    if(contador >= 1000){
        clearInterval(intervalo);
    }

}, 10);

// Formulário

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const nome = document.getElementById("nome").value;

    alert(`Obrigado pelo contato, ${nome}! 🌿`);

    formulario.reset();
});