const tituloEl = document.getElementById('titulo');
if (tituloEl) {
  tituloEl.innerText = "Bem-vindo à ONG Esperança!";
}

const linkProjetos = document.querySelector('a[href="projetos.html"]');
if (linkProjetos) {
  linkProjetos.addEventListener('click', e => {
    e.preventDefault();
    carregarPagina('projetos.html');
  });
}

// Formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('formCadastro');
  const modal = document.getElementById('modalErro');
  const fechar = document.querySelector('.fechar');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    if (nome === "" || email === "") {
      // Exibe o modal
      modal.style.display = "block";
    } else {
      alert("Cadastro realizado com sucesso!");
      form.reset(); // limpa o formulário
    }
  });

  // Fechar modal no X
  fechar.onclick = () => {
    modal.style.display = "none";
  };

  // Fechar clicando fora do modal
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

//cards
const projetos = [
  { titulo: "Educação para Todos", descricao: "Aulas gratuitas para crianças." },
  { titulo: "Alimentar com Amor", descricao: "Doações semanais de alimentos." }
];

const container = document.getElementById("listaProjetos");

projetos.forEach(projeto => {
  const card = `
    <div class="card">
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
    </div>
  `;
  container.innerHTML += card;
});

