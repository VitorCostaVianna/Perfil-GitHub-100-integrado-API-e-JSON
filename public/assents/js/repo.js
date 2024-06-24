// Function to get URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name'),
        id: params.get('id'),
        language: params.get('language'),
        created_at: params.get('created_at'),
        description: params.get('description')
    };
}

// Capture URL parameters
const params = getUrlParams();

// Format the date
const formattedDate = new Intl.DateTimeFormat("pt-BR").format(new Date(params.created_at));

// Update the page content
document.getElementById('project-details').innerHTML = `
    <p>Nome: <br> ${params.name}</p>
    <p>Descrição: <br> ${params.description}</p>
    <p>ID:<br> ${params.id}</p>
    <p>Linguagem:<br> ${params.language}</p>
    <p>Data de Criação:<br> ${formattedDate}</p>
`;
