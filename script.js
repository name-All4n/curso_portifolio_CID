const hora = new Date().getHours();
let saudacao;
if (hora < 12) {
    saudacao = "Bom dia";
} else if (hora < 18) {
    saudacao = "Boa tarde";
} else {
    saudacao = "Boa noite";
}
document.querySelector("#saudacao").textContent = saudacao;

const habilidades = ["Comunicação", "Trabalho em equipe", "Resolução de problemas", "Aprendizado contínuo"];
const lista = document.querySelector("#habilidades");
for (const habilidade of habilidades) {
    lista.innerHTML += `<li>${habilidade}</li>`;
}

const projetos = [
    {titulo: "MInicurso no CID", categoria: "Extensão", texto: "Criação de portifólio"},
    {titulo: "Iniciação científica", categoria: "Pesquisa", texto: "Pesquisa sobre inclusão digital"},
    {titulo: "Semana Acadêmica", categoria: "Extensão", texto: "Apresentação de trabalho"}
];

const cards = document.querySelector("#cards");
function mostrarProjetos(filtro) {
    cards.innerHTML = "";
    for (const projeto of projetos) {
        if (filtro === "Todos" || projeto.categoria === filtro) {
            cards.innerHTML += `
                <article class="card">
                    <small>${projeto.categoria}</small>
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.texto}</p>
                </article>`;
        }
    }
}

mostrarProjetos("Todos");

for (const botao of document.querySelectorAll(".filtro")) {
    botao.addEventListener("click", function() {
        mostrarProjetos(botao.dataset.filtro);
    });
}

const tema = document.querySelector("#tema");
tema.addEventListener("click", function() {
    document.body.classList.toggle("claro");
    if (document.body.classList.contains("claro")) {
        localStorage.setItem("tema", "claro")
    } else {
        localStorage.setItem("tema", "escuro")
    }
});

if (localStorage.getItem("tema") === "claro") {
    document.body.classList.add("claro");
}