alert("Olá, seja bem-vindo ao projeto de lista de compras");

const inputItem = document.getElementById("input-item"); // Campo de entrada
const listaDeCompras = document.getElementById("lista-de-compras"); // Lista de compras
const botaoAdicionar = document.getElementById("adicionar-item"); // Botão de adicionar
let contador = 0; // Contador de itens

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault(); // Evita o comportamento padrão do formulário

  const nomeDoItem = inputItem.value.trim(); // Remove espaços extras

  if (nomeDoItem === "") {
    alert("Por favor, insira um item na lista de compras.");
    return;
  }

  // Verifica se o item já existe na lista
  const itensExistentes = document.querySelectorAll(".lista-item-container p");
  const itemJaExiste = [...itensExistentes].some(
    (item) => item.textContent.toLowerCase() === nomeDoItem.toLowerCase()
  );

  if (itemJaExiste) {
    alert("O item já foi adicionado.");
    return;
  }

  // Criando os elementos
  const itemDaLista = document.createElement("li");
  const containerItemDaLista = document.createElement("div");
  containerItemDaLista.classList.add("lista-item-container");

  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = "checkbox-" + contador++;

  const nomeItem = document.createElement("p");
  nomeItem.textContent = nomeDoItem;

  // Adiciona efeito de riscado ao marcar o checkbox
  inputCheckbox.addEventListener("click", () => {
    nomeItem.style.textDecoration = inputCheckbox.checked
      ? "line-through"
      : "none";
  });

  // Criando o botão de exclusão
  const botaoExcluir = document.createElement("button");
  botaoExcluir.innerText = "❌";
  botaoExcluir.addEventListener("click", () => {
    itemDaLista.remove();
  });
  itemDaLista.appendChild(botaoExcluir);

  // Adicionando os elementos ao container
  containerItemDaLista.appendChild(inputCheckbox);
  containerItemDaLista.appendChild(nomeItem);
  itemDaLista.appendChild(containerItemDaLista);

  // Data e hora formatadas
  const dataAtual = new Date();
  const dataCompleta = `${dataAtual.toLocaleDateString(
    "pt-BR",
    { weekday: "long" }
  )} (${dataAtual.toLocaleDateString("pt-BR")}) às ${dataAtual.toLocaleTimeString(
    "pt-BR",
    { hour: "numeric", minute: "numeric" }
  )}`;

  const itemData = document.createElement("p");
  itemData.innerText = dataCompleta;
  itemData.classList.add("texto-data");
  itemDaLista.appendChild(itemData);

  listaDeCompras.appendChild(itemDaLista);
  inputItem.value = ""; // Limpa o campo de entrada;
});

