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

// Format the date if available
let formattedDate = '';
if (params.created_at) {
    formattedDate = new Intl.DateTimeFormat("pt-BR").format(new Date(params.created_at));
}

// Update the page content
document.getElementById('project-details').innerHTML = `
    <h2>Nome: <br> ${params.name || 'N/A'}</h2>
    <h2>Descrição: <br> ${params.description || 'N/A'}</h2>
    <h2>ID:<br> ${params.id || 'N/A'}</h2>
    <h2>Linguagem:<br> ${params.language || 'N/A'} <i class="fa-solid fa-code"></i></h2>
    <h2>Data de Criação:<br> ${formattedDate || 'N/A'}</h2>
`;
