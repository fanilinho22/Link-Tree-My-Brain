// Função para exibir o aviso
function exibirAviso() {
  alert("Esta página está sendo construída ainda.\nEsperamos que você entenda!");
}
// Seleciona o último link com o texto "Landing Page" e adiciona um evento de clique
const landingPageLink = document.getElementById("landing-page-link");
landingPageLink.addEventListener("click", exibirAviso);