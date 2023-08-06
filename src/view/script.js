const galeriaDeFotos = document.getElementById("galeria-de-fotos");
const botao_add_foto = document.getElementById("botao-add-foto");
const input_url_foto = document.getElementById("url-foto");
const input_descricao = document.getElementById("descricao");
const input_data = document.getElementById("data");

async function fetchGaleria() {
  const response = await fetch("http://localhost:2727/foto");
  const galeria = await response.json();
  return galeria;
}

function rendergaleria(galeria) {
  galeriaDeFotos.innerHTML = "";

  galeria.forEach((foto) => {
    const cardWrapper = document.createElement("div"); // Wrapper para cada card da galeria
    cardWrapper.classList.add("card-wrapper");

    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";

    const fotoCell = document.createElement("div");
    fotoCell.classList.add("card-body");

    const imgElement = document.createElement("img");
    imgElement.src = foto.urlFoto;
    imgElement.alt = foto.descricao;
    imgElement.classList.add("card-img-top");
    fotoCell.appendChild(imgElement);

    const descricaoCell = document.createElement("p");
    descricaoCell.textContent = foto.descricao;
    descricaoCell.classList.add("card-text");

    const dataCell = document.createElement("p");
    dataCell.textContent = foto.data;
    dataCell.classList.add("card-date");

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "card-delete");

    // Criar o elemento de ícone e adicionar a classe do ícone de lixeira
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash-alt");

    // Adicionar o elemento de ícone como filho do botão
    deleteButton.appendChild(deleteIcon);

    deleteButton.addEventListener("click", async () => {
      await deleteFoto(foto._id);
      init();
    });

    fotoCell.appendChild(deleteButton);
    fotoCell.appendChild(descricaoCell);
    fotoCell.appendChild(dataCell);

    card.appendChild(fotoCell);
    cardWrapper.appendChild(card); // Adicionar o card ao wrapper

    galeriaDeFotos.appendChild(cardWrapper); // Adicionar o wrapper à galeria
  });
}

async function deleteFoto(fotoId) {
  try {
    const response = await fetch(`http://localhost:2727/foto/${fotoId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Erro ao excluir a tarefa");
    }

    const fotoDeletada = await response.json();
    return fotoDeletada;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function formatarData(data) {
  const day = data.getDate().toString().padStart(2, "0");
  const month = (data.getMonth() + 1).toString().padStart(2, "0");
  const year = data.getFullYear();
  return `${day}/${month}/${year}`;
}

async function adicionarFotos(urlFoto, descricao, data) {
  const dataFormatada = formatarData(new Date(data));

  var raw = JSON.stringify({
    descricao: descricao,
    data: dataFormatada,
    urlFoto: urlFoto,
  });

  const response = await fetch("http://localhost:2727/foto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: raw,
  });

  const novaFoto = await response.json();
  return novaFoto;
}

botao_add_foto.addEventListener("click", async () => {
  const urlFoto = input_url_foto.value.trim();
  const descricao = input_descricao.value.trim();
  const data = input_data.value.trim();
  if (descricao) {
    const novaFoto = await adicionarFotos(urlFoto, descricao, data);
    //rendergaleria([novaFoto]);
    init();
    input_descricao.value = "";
  }
});

async function init() {
  try {
    const galeria = await fetchGaleria();
    rendergaleria(galeria);
  } catch (error) {
    console.error("Erro ao carregar fotos:", error);
  }
}

init();
