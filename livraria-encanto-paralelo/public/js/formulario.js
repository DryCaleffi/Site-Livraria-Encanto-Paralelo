document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formCadastro');
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');
  
    // Máscara para telefone
    telefoneInput.addEventListener('input', function (e) {
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
      e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
  
    // Máscara para CPF
    cpfInput.addEventListener('input', function (e) {
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
      e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + (x[3] ? '.' + x[3] : '') + (x[4] ? '-' + x[4] : '');
    });
  
    // Validação de CPF
    function validarCPF(cpf) {
      cpf = cpf.replace(/\D/g, '');
    
      if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    
      let soma = 0;
      for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
      }
      let dig1 = (soma * 10) % 11;
      if (dig1 === 10 || dig1 === 11) dig1 = 0;
      if (dig1 !== Number(cpf[9])) return false;
    
      soma = 0;
      for (let i = 0; i < 10; i++) {
        soma += Number(cpf[i]) * (11 - i);
      }
      let dig2 = (soma * 10) % 11;
      if (dig2 === 10 || dig2 === 11) dig2 = 0;
    
      return dig2 === Number(cpf[10]);
    }
  
    // Validação e SweetAlert
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const cpf = cpfInput.value;
      const telefone = telefoneInput.value;
  
      if (!validarCPF(cpf)) {
        Swal.fire({
          icon: 'error',
          title: 'CPF inválido',
          text: 'Por favor, preencha um CPF válido com 11 dígitos.'
        });
        return;
      }
  
      if (telefone.length < 14) {
        Swal.fire({
          icon: 'error',
          title: 'Telefone inválido',
          text: 'Por favor, preencha um telefone válido.'
        });
        return;
      }
  
      // Tudo certo!
      Swal.fire({
        icon: 'success',
        title: 'Cadastro realizado!',
        text: 'Seus dados foram enviados com sucesso.'
      });
  
      // Aqui você pode enviar os dados via fetch ou limpar o formulário
      form.reset();
    });
  });
  