# 🎓 Gerador de Códigos por RA (CRUD Estático)

Este é um aplicativo web simples que permite cadastrar alunos através do nome e RA (Registro do Aluno), gerando automaticamente um código de identificação exclusivo para cada um.

O projeto foi desenvolvido para rodar diretamente no **GitHub Pages**, utilizando o navegador como banco de dados.

## 🚀 Funcionalidades

- **Create**: Adiciona um aluno com Nome e RA.
- **Read**: Lista todos os alunos cadastrados em uma tabela.
- **Update**: O sistema gera um código automático (Base64 simplificado) baseado no RA informado.
- **Delete**: Permite excluir registros da lista.
- **Persistência**: Os dados são salvos no `localStorage` do navegador (não somem ao atualizar a página).

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização e layout responsivo.
- **JavaScript (Vanilla)**: Lógica do CRUD e manipulação do DOM.
- **GitHub Pages**: Hospedagem gratuita do site estático.

## 📦 Como usar este repositório

1. Faça um **Fork** deste projeto.
2. Clone o repositório para sua máquina:
   ```bash
   git clone https://github.com
