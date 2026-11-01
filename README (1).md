# Curso Portfólio CID

Site de portfólio pessoal desenvolvido durante um **minicurso de introdução ao desenvolvimento web**, com foco em ensinar as pessoas a criarem o próprio site.

> **Projeto construído em 2 aulas** no minicurso ministrado no **CID — Centro de Inclusão Digital**, projeto da **UFAL Campus Arapiraca**.

---

## Sobre o minicurso

O minicurso foi pensado para quem está dando os primeiros passos na programação. Em apenas **duas aulas**, os participantes saem com um portfólio funcional, feito por eles, que pode ser publicado e compartilhado.

- **Onde:** CID (Centro de Inclusão Digital), UFAL Campus Arapiraca
- **Duração:** 2 aulas
- **Público:** iniciantes, sem necessidade de experiência prévia
- **Objetivo:** ensinar a criar um site de portfólio do zero, usando HTML, CSS e JavaScript

## Funcionalidades do site

- 👋 **Saudação dinâmica** (Bom dia, Boa tarde ou Boa noite) de acordo com o horário
- 🧠 **Lista de habilidades** gerada com JavaScript
- 🗂️ **Cards de projetos** com **filtro por categoria** (Todos, Extensão, Pesquisa)
- 🌗 **Tema claro e escuro**, com a escolha salva no navegador (`localStorage`)
- 📱 **Layout responsivo**, que se adapta a celulares e computadores
- 🔗 **Links de contato** (e-mail, LinkedIn e Instagram)

## Tecnologias

| Tecnologia | Uso no projeto |
|------------|----------------|
| **HTML5** | Estrutura e conteúdo da página |
| **CSS3** | Estilização, variáveis, Flexbox, Grid e animações |
| **JavaScript** | Interatividade, manipulação do DOM e `localStorage` |
| **Google Fonts** | Fonte Poppins |

## O que é trabalhado no curso

**Aula 1: estrutura e estilo**
- Estrutura básica de uma página HTML
- Cabeçalho, seções, imagens, links e botões
- Estilização com CSS: cores, tipografia, espaçamentos
- Layout com Flexbox e Grid
- Variáveis CSS (`:root`) e responsividade

**Aula 2: interatividade**
- Introdução ao JavaScript
- Variáveis, condicionais e laços de repetição
- Manipulação do DOM (`querySelector`, `textContent`, `innerHTML`)
- Eventos de clique
- Arrays e objetos
- Salvando preferências com `localStorage`

## Estrutura do projeto

```
curso_portifolio_CID/
├── index.html    # Estrutura da página
├── style.css     # Estilos e temas
├── script.js     # Interatividade
└── img/
    └── foto.jpg  # Foto do portfólio
```

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/name-All4n/curso_portifolio_CID.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd curso_portifolio_CID
   ```
3. Abra o arquivo `index.html` no navegador (clique duas vezes nele ou use a extensão *Live Server* do VS Code).

Não é preciso instalar nada: o projeto roda direto no navegador.

## Personalize o seu portfólio

Para transformar o projeto no **seu** portfólio, edite:

- **`index.html`**: nome, descrição, foto (`img/foto.jpg`) e links de contato (e-mail, LinkedIn, Instagram)
- **`script.js`**: a lista `habilidades` e a lista `projetos`
- **`style.css`**: as cores, nas variáveis dentro de `:root`

## 🌐 Publicação

Por ser um site estático, ele pode ser publicado gratuitamente no **GitHub Pages**:

1. Acesse **Settings → Pages** no repositório
2. Em *Branch*, selecione `main` e a pasta `/ (root)`
3. Salve e aguarde o link ser gerado

## Autor

**Allan**, estudante de Ciência da Computação na UFAL e instrutor do minicurso no CID.

- GitHub: [@name-All4n](https://github.com/name-All4n)

---

<p align="center">Feito com 💜 no CID - Centro de Inclusão Digital, UFAL Campus Arapiraca</p>
