document.getElementById("ano").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formFila");
  const aviso = document.createElement("p");
  const resultado = document.getElementById("resultado");
  const dados = [];

  aviso.textContent = "Por favor, preencha todos os campos obrigatórios.";
  aviso.classList.add("form-aviso"); // classe CSS para estilização
  form.parentNode.insertBefore(aviso, form);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();

    if (!nome || !email) {
      aviso.style.display = "block";
      form.classList.add("shake");
      setTimeout(() => form.classList.remove("shake"), 500);
      return;
    }

    aviso.style.display = "none";

    const usuario = {
      nome,
      email,
      telefone: form.telefone.value.trim(),
      mensagem: form.mensagem.value.trim(),
    };

    dados.push(usuario);
    mostrarDados();
    form.reset();
    scrollToResultado();
  });

  function mostrarDados() {
    resultado.innerHTML = `<h4>Lista de Candidatos:</h4>`;
    const lista = document.createElement("div");
    lista.classList.add("lista-usuarios");

    dados.forEach((item, index) => {
      const userItem = document.createElement("div");
      userItem.classList.add("usuario-item");

      userItem.innerHTML = `
        <span class="usuario-num">${index + 1}.</span>
        <span class="usuario-nome">${item.nome}</span> - 
        <span class="usuario-email">${item.email}</span>
        ${item.telefone ? " - <span class='usuario-telefone'>" + item.telefone + "</span>" : ""}
        <p class="usuario-msg">${item.mensagem}</p>
      `;

      lista.appendChild(userItem);
    });

    resultado.innerHTML = "<h4>Lista de Candidatos:</h4>";
    resultado.appendChild(lista);
  }

  function scrollToResultado() {
    resultado.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
function scrollToCandidatar() {
  const section = document.getElementById("candidatar");
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}