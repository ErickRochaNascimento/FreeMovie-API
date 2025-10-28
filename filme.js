
function BuscarFilme(filme) {

    const url = `https://imdb.iamidiotareyoutoo.com/search?q=${filme}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('container'); // Pega a div para renderização
            container.innerHTML = '';
            const description = data.description; // Obtem o array de resultados da API
            console.log(description)
            // Percorre o array description
            for (let i = 0; i < description.length; i++) {
                const filme = description[i];
                console.log(filme);

                const div = document.createElement('div');// cria elemneto div
                div.classList.add('filme');

                const TITLE = document.createElement('h2'); // cria elemento nome
                TITLE.textContent = filme['#TITLE']; // add o nome do personagem
                div.appendChild(TITLE); // add o nome na div

                const img_poster = document.createElement('img'); // cria elemento de IMG_POSTERm
                img_poster.src = filme['#IMG_POSTER']; // atributo 'src' da IMG_POSTERm
                div.appendChild(img_poster); // add a IMG_POSTERm na div

                const aka = document.createElement('p'); // cria elemento de especie
                aka.textContent = filme['#AKA']; // add a especie do personagem
                div.appendChild(aka); // add a espécie na div

                const year = document.createElement('p');
                year.textContent = filme['#YEAR']; 
                div.appendChild(year);

                const actors = document.createElement('p');
                actors.textContent = filme['#ACTORS']; 
                div.appendChild(actors);

                // add div criada acima no container
                container.appendChild(div);
            }
        })
        .catch(error => console.error('Erro:', error));

}
