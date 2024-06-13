const repositories = document.querySelector('.content-main');
const perfil = document.querySelector('.perfil');
const container = document.getElementById("colegasDiv");
const carrosselDiv = document.querySelector('.carrosel');
const jsonData = {
    colegas: [
        {
            id: 1,
            nome: "Joaquim Vilela",
            foto: "https://avatars.githubusercontent.com/u/160603058?v=4",
            perfil: "https://github.com/JoaquimGCVS",
        },
        {
            id: 2,
            nome: "Arlindo Junior",
            foto: "../public/assents/img/coelgaTp.jfif",
            perfil: "https://github.com/ArlindoSPJr",
        },
        {
            id: 3,
            nome: "Eliseu Chaves",
            foto: "../public/assents/img/imagemcolega3.jfif",
            perfil: "https://github.com/eliseu324",
        },
    ],
};
const jsonCarrosel = {
    carroselInfo: [
        {
            id: 1,
            titulo: "Kevin Slavin",
            foto: "../public/assents/img/tedtalks.jpg",
            descricao: "Como os algoritmos moldam nosso mundo",
        },
        {
            id: 2,
            titulo: "John McWhorter",
            foto: "../public/assents/img/carrosel2.jpg",
            descricao: "4 Reasons to Learn a New Language",
        },
        {
            id: 3,
            titulo: "Professor Pietro Martins",
            foto: "../public/assents/img/carrosel3.jpg",
            descricao: "Cursos gratuitos de programação",
        },
        {
            id: 4,
            titulo: "Gustavo Guanabara",
            foto: "../public/assents/img/carrosel4.jpg",
            descricao: "Cursos gratuitos de programação",
        },
        {
            id: 5,
            titulo: "BBC News",
            foto: "../public/assents/img/carrosel5.png",
            descricao: "As promessas da tecnologia para 2024",
        },
    ],
};

function populateCarousel() {
    const carouselIndicators = document.querySelector('.carousel-indicators');
    const carouselInner = document.querySelector('.carousel-inner');

    jsonCarrosel.carroselInfo.forEach((item, index) => {
        // Create indicator
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.setAttribute('data-bs-target', '#carouselExampleCaptions');
        indicator.setAttribute('data-bs-slide-to', index);
        indicator.setAttribute('aria-label', `Slide ${index + 1}`);
        if (index === 0) {
            indicator.classList.add('active');
            indicator.setAttribute('aria-current', 'true');
        }
        carouselIndicators.appendChild(indicator);

        // Create carousel item
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
            carouselItem.classList.add('active');
        }
        carouselItem.innerHTML = `
            <img src="${item.foto}" class="d-block w-100" alt="${item.titulo}">
            <div class="carousel-caption d-none d-md-block">
                <h5>${item.titulo}</h5>
                <a href="${item.descricao}" target="_blank">${item.descricao}</a>
            </div>
        `;
        carouselInner.appendChild(carouselItem);
    });
}
function getColegas() {

    jsonData.colegas.forEach((colega) => {
        const colegaDiv = document.createElement("div");
        colegaDiv.className = "colega";

        colegaDiv.innerHTML = `
            <img src="${colega.foto}" alt="${colega.nome}">
            <h2>${colega.nome}</h2>
            <a href="${colega.perfil}" target="_blank">Perfil no GitHub</a>
            `;

        container.appendChild(colegaDiv);
    });
}



function getApiGitHub() {
    fetch('https://api.github.com/users/VitorCostaVianna/repos')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();
            data.map(item => {
                let project = document.createElement('div');

                project.innerHTML = `
                <div class="project">
                    <div>
                        <h4 class="title">${item.name}</h4>
                        <span class="data-create">${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</span>
                    </div>
                    <div>
                        <a href="${item.html_url}" target="_blank">${item.html_url}</a>
                        <spam class="language"><span class="circle"></span>${item.language}</spam>
                    </div>
                </div>
                `

                repositories.appendChild(project);
            })
        })
}


function getPerfilApiGitHub() {
    fetch('https://api.github.com/users/VitorCostaVianna')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();

            let project = document.createElement('div');
            project.classList.add('perfilGIT');

            project.innerHTML = `
                <div class="img">
                    <img src="${data.avatar_url}" alt="">
                </div>
                <div class="texto">
                    <h3>${data.name}</h3>
                    <p>${data.bio}</p>
                    <ul>
                        <li><b>Localização: </b> ${data.location}</li>
                        <li><b>Site: </b><a href="${data.html_url}" target="_blank">${data.html_url}</a></li>
                        <li><a href="${data.html_url}" target="_blank"></a></li>
                    </ul>
                </div>
            `;

            perfil.appendChild(project);
        })
        .catch(error => {
            console.error('Error fetching GitHub profile:', error);
        });
}







window.onload = () => {
    getApiGitHub();
    getPerfilApiGitHub()
    getColegas()
    populateCarousel()
};