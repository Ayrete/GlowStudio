# Glow Studio

## Escopo do Projeto

O **Glow Studio** é um site desenvolvido com o objetivo de facilitar a busca por serviços de beleza, permitindo que os usuários conheçam profissionais, visualizem os serviços oferecidos e encontrem informações para realizar um agendamento.

O público-alvo são pessoas que procuram serviços relacionados à beleza e bem-estar, como cabelos, unhas, maquiagem e estética, de forma prática e organizada.

### Paleta de cores

A identidade visual foi construída utilizando tons suaves e elegantes, transmitindo sofisticação, delicadeza e bem-estar.

**Cores principais:**

* Rosa claro
* Branco
* Tons de cinza
* Rosa mais intenso para destaques e botões

Essa combinação foi escolhida por estar associada ao universo da beleza, proporcionando uma experiência agradável ao usuário.

### Tipografia

Foi utilizada a fonte **Segoe UI**, uma fonte moderna, limpa e de fácil leitura, garantindo boa legibilidade em computadores e dispositivos móveis.

### Frameworks

O projeto foi desenvolvido **sem a utilização de frameworks**, utilizando apenas:

* HTML5
* CSS3
* JavaScript

A escolha foi feita para colocar em prática os conceitos estudados durante a disciplina, desenvolvendo toda a estrutura, estilização e funcionalidades manualmente.

---

# Estrutura do Site

O site é composto pelas seguintes páginas:

## Home (index.html)

Página inicial contendo:

* Banner principal;
* Apresentação do site;
* Destaque dos principais serviços;
* Navegação para as demais páginas.

---

## Serviços (servicos.html)

Página destinada à apresentação dos serviços oferecidos.

Funcionalidades:

* Pesquisa de serviços;
* Cards com descrição;
* Botão "Agendar";

---

## Sobre (sobre.html)

Apresenta informações sobre o Glow Studio, sua missão, visão e proposta de oferecer praticidade na busca por profissionais da área da beleza.

---

## Contato (contato.html)

Contém:

* Formulário para contato;
* Informações de comunicação;
* Localização (quando aplicável).

---

## Login (login.html)

Permite que usuários previamente cadastrados realizem o acesso ao sistema.

Funcionalidades:

* Validação de e-mail;
* Validação de senha;
* Verificação de usuário cadastrado;
* Persistência da sessão utilizando Local Storage.

---

## Cadastro (cadastro.html)

Permite o cadastro de novos usuários.

Funcionalidades:

* Validação dos campos;
* Verificação de e-mail duplicado;
* Barra indicadora da força da senha;
* Armazenamento dos dados utilizando Local Storage.

---

# Arquitetura da Informação

O projeto foi organizado da seguinte forma:

```text
/
├── index.html
├── servicos.html
├── sobre.html
├── contato.html
├── login.html
├── cadastro.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── script.js
│   ├── login.js
│   ├── cadastro.js
│   └── servicos.js
│
└── images/
```

Essa organização facilita a manutenção do projeto, separando estrutura, estilo, comportamento e recursos visuais.

---

# Funcionalidades Implementadas

* Navegação entre páginas;
* Layout responsivo;
* Menu de navegação;
* Pesquisa de serviços;
* Cadastro de usuários;
* Login utilizando Local Storage;
* Validação de formulários;
* Barra de força da senha;
* Persistência da sessão do usuário;
* Logout.

---

# Desenvolvimento

**Integrante:**

* **Ayra**

### Atividades desenvolvidas

Todo o projeto foi desenvolvido individualmente, incluindo:

* Planejamento da interface;
* Estruturação das páginas em HTML;
* Estilização utilizando CSS;
* Desenvolvimento das funcionalidades em JavaScript;
* Implementação do sistema de cadastro e login;
* Organização da arquitetura de arquivos;
* Testes e correções de funcionamento;
* Documentação técnica do projeto.
