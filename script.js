// Verifica se o usuário está logado e carrega perfil/foto
function carregarUsuario() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  if (usuario) {
    const nome = document.getElementById("nomeUsuario");
    const avatar = document.getElementById("avatar");

    if (nome) nome.textContent = usuario.nome;
    if (avatar && usuario.foto) avatar.src = usuario.foto;
  }
}

// Redireciona se não estiver logado
function protegerPerfil() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  if (!usuario) {
    alert("Você precisa estar cadastrado para acessar o perfil.");
    window.location.href = "index.html";
  }
}

// Cadastro de usuário
function cadastrarUsuario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuario = {
    nome: nome,
    email: email,
    senha: senha,
    foto: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));
  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
}

// Login
function loginUsuario() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuario = JSON.parse(localStorage.getItem("usuario"));
  if (usuario && usuario.email === email && usuario.senha === senha) {
    alert("Login bem-sucedido!");
    window.location.href = "index.html";
  } else {
    alert("Email ou senha incorretos!");
  }
}

// Upload de imagem no perfil
function carregarImagem(input) {
  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const imagem = e.target.result;
    document.getElementById("avatar").src = imagem;

    const usuario = JSON.parse(localStorage.getItem("usuario"));
    usuario.foto = imagem;
    localStorage.setItem("usuario", JSON.stringify(usuario));
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

// Sair da conta
function logout() {
  localStorage.removeItem("usuario");
  window.location.href = "index.html";
}
