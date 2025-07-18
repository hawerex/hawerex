// CADASTRO
document.getElementById("cadastroForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  const dados = { email, usuario, senha };
  localStorage.setItem("hawerexUser", JSON.stringify(dados));
  alert("Cadastro feito com sucesso!");
  window.location.href = "login.html";
});

// LOGIN
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const usuario = document.getElementById("loginUsuario").value;
  const senha = document.getElementById("loginSenha").value;

  const dadosSalvos = JSON.parse(localStorage.getItem("hawerexUser"));

  if (dadosSalvos && usuario === dadosSalvos.usuario && senha === dadosSalvos.senha) {
    alert("Login bem-sucedido!");
    // Redirecionar para dashboard futuramente
  } else {
    alert("Usuário ou senha incorretos.");
  }
});
