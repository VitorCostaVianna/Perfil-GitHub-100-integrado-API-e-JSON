const repositories = document.querySelector('body');

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



window.onload = () => {
    getApiGitHub();
};
