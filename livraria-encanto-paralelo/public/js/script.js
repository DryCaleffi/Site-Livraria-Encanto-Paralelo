document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const cadastroFormTabela1 = document.getElementById('cadastroFormTabela1');
    const cadastroFormTabela2 = document.getElementById('cadastroFormTabela2');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(loginForm);
            fetch('/auth/login', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = '/tabela1'; // Redireciona para a tabela1 após login
                } else {
                    alert(data.message); // Exibe mensagem de erro
                }
            });
        });
    }

    if (cadastroFormTabela1) {
        cadastroFormTabela1.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(cadastroFormTabela1);
            fetch('/tabela1/cadastrar', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = '/tabela1'; // Redireciona para a lista após cadastro
                } else {
                    alert(data.message); // Exibe mensagem de erro
                }
            });
        });
    }

    if (cadastroFormTabela2) {
        cadastroFormTabela2.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(cadastroFormTabela2);
            fetch('/tabela2/cadastrar', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = '/tabela2'; // Redireciona para a lista após cadastro
                } else {
                    alert(data.message); // Exibe mensagem de erro
                }
            });
        });
    }
});