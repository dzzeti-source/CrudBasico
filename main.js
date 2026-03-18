// Função para gerar o código baseado no RA (Exemplo: COD-base64)
function gerarCodigo(ra) {
    return "ID-" + btoa(ra).substring(0, 6).toUpperCase();
}

// CRUD: Create (Salvar)
function salvar() {
    const nome = document.getElementById('nome').value;
    const ra = document.getElementById('ra').value;

    if (!nome || !ra) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const aluno = { 
        nome, 
        ra, 
        codigo: gerarCodigo(ra),
        data: new Date().toLocaleDateString() 
    };
    
    let lista = JSON.parse(localStorage.getItem('alunos') || '[]');
    lista.push(aluno);
    localStorage.setItem('alunos', JSON.stringify(lista));

    limparCampos();
    listar();
}

// CRUD: Read (Listar)
function listar() {
    const corpoTabela = document.querySelector('#tabelaAlunos tbody');
    if(!corpoTabela) return;
    
    corpoTabela.innerHTML = '';
    const lista = JSON.parse(localStorage.getItem('alunos') || '[]');

    lista.forEach((aluno, index) => {
        corpoTabela.innerHTML += `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.ra}</td>
                <td><span class="badge">${aluno.codigo}</span></td>
                <td>
                    <button class="btn-del" onclick="excluir(${index})">Excluir</button>
                </td>
            </tr>`;
    });
}

// CRUD: Delete (Excluir)
function excluir(index) {
    if(confirm("Tem certeza que deseja excluir este aluno?")) {
        let lista = JSON.parse(localStorage.getItem('alunos'));
        lista.splice(index, 1);
        localStorage.setItem('alunos', JSON.stringify(lista));
        listar();
    }
}

function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('ra').value = '';
}

// Inicia a lista quando a página carrega
window.onload = listar;
