
document.addEventListener("DOMContentLoaded", function () {
    const btnLogin = document.querySelector(".btnLogin");
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");

    btnLogin.addEventListener("click", function () {
      const email = emailInput.value.trim();
      const senha = senhaInput.value.trim();

      if (!email.includes("@")) {
        Swal.fire({
          icon: "error",
          title: "Email inválido",
          text: "O email deve conter '@'",
        });
        return;
      }

      if (email === "teste@teste" && senha === "teste") {
        Swal.fire({
          icon: "success",
          title: "Bem-vindo!",
          text: "Login realizado com sucesso.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: "Email ou senha incorretos.",
        });
      }
    });
  });