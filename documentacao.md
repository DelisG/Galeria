## :pencil: Documentação Tecnica do Projeto Galeria

Combinando a flexibilidade do frontend e a eficiência do backend em Node.js, o Projeto Galeria é uma solução completa para gerenciamento de fotos. Sua interface amigável permite realizar operações CRUD, enquanto a integração com o banco de dados oferece uma organização impecável das fotos. A opção de adicionar e excluir fotos diretamente do site torna o processo de gerenciamento da galeria simples e rápido.  tornando-o uma solução completa e eficiente para gerenciamento das fotográficas com uma experiência amigável e intuitiva. 

## Tecnologias Utilizadas

| Tecnologia    | Função na aplicação                                                                                                                |
|--------------|-------------------------------------------------------------------------------------------------------------------------|
| HTML         | Linguagem de marcação utilizada para estruturar e organizar o conteúdo da aplicação web. É a base da construção das páginas web, permitindo criar elementos como cabeçalhos, parágrafos, listas, imagens e links. |
| CSS          | Linguagem de estilo utilizada para estilizar e dar uma aparência visual às páginas HTML. Com o CSS, é possível definir cores, fontes, margens, tamanhos e posicionamento de elementos, criando layouts atraentes e responsivos. |
| Bootstrap    | Framework CSS popular que fornece uma biblioteca de estilos e componentes pré-definidos, tornando mais fácil e rápido o desenvolvimento de interfaces responsivas e modernas. Com o Bootstrap, é possível criar layouts sofisticados e compatíveis com diversos dispositivos. |
| JavaScript | Linguagem de programação utilizada para escrever o código do back-end da aplicação.                                                                  |
| Node.js    | Ambiente de execução JavaScript assíncrono orientado a eventos, utilizado como base para a aplicação fornecendo bibliotecas.                         |
| Nodemon    | Ferramenta que monitora alterações nos arquivos do projeto e reinicia automaticamente o servidor durante o desenvolvimento.                          |
| Mongoose   | Biblioteca do Node.js que simplifica a interação com o MongoDB, um banco de dados NoSQL orientado a documentos.                                      |
| Express    | Framework web para Node.js que simplifica o desenvolvimento de aplicativos e APIs RESTful.                                                           |
| Chalk      | Pacote npm para formatação de texto no console, utilizado para melhorar a legibilidade dos logs e mensagens de saída no ambiente de desenvolvimento. |
| MongoDB    | Banco de dados NoSQL orientado a documentos, usado para armazenar os dados do projeto.                                                               |
| Postman    | Ferramenta de testes de API, utilizada para testar e documentar as requisições e respostas do projeto.                                               |

## 📁 Arquitetura do Projeto

```
 📁Galeria
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||--📁 config
   |  |    |- 📄 dbConnect.js
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 fotoController.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 foto.json
   |  |    |- 📄 fotos.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 foto.js
   |  |    |- 📄 index.js
   |  |
   |  ||-📄 app.js
   |  |
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 README.md
   |- 📄 server.js


```

## Arquitetura MVC

O projeto segue a arquitetura Model-View-Controller (MVC), que divide a aplicação em três componentes principais:

1. **Model:** Responsável pela definição da estrutura de dados e regras de negócio.
2. **View:** Responsável pela interface de usuário e apresentação dos dados ao usuário final.
3. **Controller:** Responsável por receber as requisições do usuário, interagir com o Model e renderizar a View correspondente.

A utilização do padrão MVC permite uma separação clara de responsabilidades, facilitando a manutenção, reutilização de código e testabilidade do projeto.

## :memo: Esquema da Galeria usando Mongoose (MongoDB)

```
const fotoSchema = new mongoose.Schema({
  urlFoto: { type: String, required: true },
  descricao: { type: String, required: false },
  data: { type: String, required: false },
});

```
## :memo: Esquema para inserção de dados no banco de dados.

```
 [
  {
    "urlFoto": "https://thumbs.dreamstime.com/b/macho-lion5-6604483.jpg",
    "descricao": "Um majestoso leão africano descansando na savana.",
    "data": "10/05/2023"
  }
]
```

## :rocket: Testando Rotas

 <h3> Métodos e rotas Utilizados:</h3>

| Verbo  | EndPoint  | Descrição da Rota                                 |
| ------ | --------- | ------------------------------------------------- |
| GET    | / | listar todas as fotos cadastradas              |
| GET    | /:id      | Mostra o cadastro da foto por ID               |
| POST   | /         | Registra uma nova foto                          |
| PUT    | /:id      | Altera dados da foto identificada pelo id      |
| DELETE | /:id      | Remove o cadastro da foto identificada pelo id |
| DELETE | /      | Remove todas as fotos |

## Testando as APIs

Para testar as APIs do projeto, você pode utilizar o Postman. Siga as etapas abaixo:

1. Abra o Postman.
2. Importe a coleção de requisições do projeto, localizada no diretório `postman` do repositório.
3. Após importar a coleção, você poderá enviar as requisições para testar as funcionalidades disponíveis.

## Clonando o Repositório

Para clonar o repositório do projeto, siga as etapas abaixo:

1. Abra o terminal e navegue até o diretório em que deseja armazenar o projeto.
2. Execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/DelisG/Galeria.git
```

Certifique-se de substituir `DelisG` pelo seu nome de usuário do GitHub.

## Executando o Projeto

Após clonar o repositório, siga as etapas abaixo para executar o projeto localmente:

1. Navegue até o diretório do projeto:

```bash
cd Galeria
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Inicie o servidor local:

```bash
npm start
```

O servidor será iniciado e estará pronto para receber requisições.

## Contribuição

Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça um fork do repositório para o seu próp

usuário do GitHub. 2. Clone o repositório forkado para o seu ambiente de desenvolvimento local. 3. Crie uma branch para realizar suas alterações:

```bash
git checkout -b nome-da-sua-branch
```

4. Faça as alterações desejadas no código.
5. Commit suas alterações:

```bash
git commit -m "Descrição das alterações"
```

6. Envie suas alterações para o repositório remoto:

```bash
git push origin nome-da-sua-branch
```

7. Abra um pull request no repositório original, descrevendo suas alterações em detalhes.

<br>


## :ribbon: Obrigada a você que chegou até aqui!:ribbon: 
Espero que as informações aqui fornecidas tenham sido úteis e que você possa aproveitar ao máximo este projeto. Se você tiver alguma dúvida adicional, consulte a documentação do código ou entre em contato comigo pelo email: ***delisgmarques@gmail.com***

