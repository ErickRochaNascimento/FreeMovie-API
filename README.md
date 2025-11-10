# 🎬 Buscador de Filmes — IMDb API

Um projeto simples e funcional desenvolvido em HTML, CSS e JavaScript puro, que permite buscar informações sobre filmes utilizando a API do IMDb.

## 🚀 Demonstração

O usuário insere o **nome de um filme** no campo de busca e, ao clicar em **Procurar**, o sistema exibe dados como:

- Título do filme
- Poster
- Título alternativo (AKA)
- Ano de lançamento
- Elenco principal

Tudo isso de forma rápida e estilizada, com uma interface moderna e responsiva.



---

## 🧩 Estrutura do Projeto

```
📁 BuscadorFilmes
├── index.html     # Página principal com o campo de busca
├── style.css      # Estilos visuais da interface
└── filme.js       # Lógica de busca e exibição dos dados
```

---

## 🧠 Como Funciona

1. O usuário digita o **nome do filme** no campo de texto.  
2. A função `BuscaFilme()` (no arquivo `form.js`) é acionada ao clicar em **Procurar**.  
3. O JavaScript:
   - Faz uma requisição `fetch` para a **IMDb API**: 
     ```
     https://imdb.iamidiotareyoutoo.com/search?q={filme}
     ```
   - Processa os dados retornados e cria cards para cada resultado.
   - 
4. Caso o CNPJ seja inválido ou ocorra erro na requisição, uma mensagem de erro é exibida.

---

## 💻 Tecnologias Utilizadas

- **HTML5** — Estrutura do site  
- **CSS3** — Design moderno e responsivo  
- **JavaScript** — Consumo da API e manipulação do DOM  
- **[IMDb API](https://imdb.iamidiotareyoutoo.com/)** — Fonte de dados dos filmes

---

## 🧾 Exemplo de Uso

**Entrada:**  
```
Filme: Avengers
```

**Saída esperada:**
```
- Vários cards contendo:

Título: "The Avengers"
Poster do filme
Título alternativo: "The Avengers (2012)"
Ano: 2012
Atores: "Robert Downey Jr., Chris Evans, Scarlett Johansson..."
```

---

## 🌐 Acesse o site online:

O projeto está disponível publicamente através do GitHub Pages. Você pode testá-lo diretamente neste link:
👉 https://erickrochanascimento.github.io/FreeMovie-API/

---

## 🪪 Licença

Este projeto é de uso livre para fins de estudo e aprendizado.  
Os dados são públicos e provenientes da [IMDb API](https://imdb.iamidiotareyoutoo.com/).

---

## 🧑‍💻 Autor

**Erick Rocha Nascimento**  
📘 Desenvolvido como projeto prático de estudo de **APIs e JavaScript**.  
🔗 [LinkedIn](https://www.linkedin.com/in/erickrochanascimento) | [GitHub](https://github.com/ErickRochaNascimento)
