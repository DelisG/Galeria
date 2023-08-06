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

  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row");

  galeria.forEach((foto) => {
    const colDiv = document.createElement("div");
    colDiv.classList.add("col-12", "col-sm-6", "col-md-3", "mt-3");

    const card = document.createElement("div");
    card.classList.add("card");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const imgElement = document.createElement("img");
    imgElement.src = foto.urlFoto;
    imgElement.alt = foto.descricao;
    imgElement.classList.add("card-img-top");

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const descricaoDiv = document.createElement("div");
    descricaoDiv.classList.add("description");
    descricaoDiv.textContent = foto.descricao;

    const dataDiv = document.createElement("div");
    dataDiv.classList.add("date");
    dataDiv.textContent = foto.data;

    overlay.appendChild(descricaoDiv);
    overlay.appendChild(dataDiv);

    const deleteButton = document.createElement("div");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "X";

    deleteButton.addEventListener("click", async () => {
      await deleteFoto(foto._id);
      init();
    });

    imageContainer.appendChild(imgElement);
    imageContainer.appendChild(overlay);

    card.appendChild(imageContainer);
    card.appendChild(deleteButton);

    colDiv.appendChild(card);

    rowDiv.appendChild(colDiv);
  });

  galeriaDeFotos.appendChild(rowDiv);
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
