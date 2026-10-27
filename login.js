/* =========================================================
   LOGIN — o JavaScript da página de entrar (aula 5 · 20/10)
   É o login da aula 4, agora DENTRO do portfólio, com UMA
   mudança: quando a conta confere, a página troca para o
   index.html.

   Usado só no login.html, depois do layout.js. Os ids são os
   mesmos do login da aula 4, e as cores dos avisos estão no
   fim do style.css.

   É um login de mentira: a conta fica aqui mesmo, só para
   treinar a lógica. Ele NÃO protege a página de verdade:
   qualquer pessoa pode digitar index.html no endereço.
   Proteger de verdade é trabalho do servidor (back-end).

   Conta de teste:  usuário aluno · senha bootcamp2026
   ========================================================= */


/* ---------------------------------------------------------
   1. A CONTA "CADASTRADA"
   --------------------------------------------------------- */

const usuarioCadastrado = "aluno";
const senhaCadastrada = "bootcamp2026";


/* ---------------------------------------------------------
   2. AS PEÇAS DA PÁGINA
   --------------------------------------------------------- */

const formulario = document.querySelector("#form-login");
const campoUsuario = document.querySelector("#usuario");
const campoSenha = document.querySelector("#senha");
const aviso = document.querySelector("#aviso");


/* ---------------------------------------------------------
   3. CONFERIR OS CAMPOS E A CONTA (igual à aula 4)
   --------------------------------------------------------- */

function validarUsuario(usuario) {
  if (usuario === "") {
    return "Digite o seu usuário.";
  } else if (usuario.length < 3) {
    return "O usuário precisa ter pelo menos 3 letras.";
  } else if (usuario.includes(" ")) {
    return "O usuário não pode ter espaço.";
  } else {
    return "";
  }
}

function validarSenha(senha) {
  if (senha === "") {
    return "Digite a sua senha.";
  } else if (senha.length < 6) {
    return "A senha precisa ter pelo menos 6 caracteres.";
  } else {
    return "";
  }
}

function conferirConta(usuario, senha) {
  if (usuario === usuarioCadastrado && senha === senhaCadastrada) {
    return true;
  } else {
    return false;
  }
}

function mostrarAviso(texto, tipo) {
  aviso.textContent = texto;
  aviso.classList.remove("erro");
  aviso.classList.remove("certo");
  aviso.classList.add(tipo);
}


/* ---------------------------------------------------------
   4. TROCAR DE PÁGINA — a novidade da aula 5
   window          → a janela do navegador
   location        → o endereço que está na barra lá em cima
   location.href   → trocar o endereço = ir para outra página,
                     como se a pessoa clicasse num link

   "index.html" é o nome do arquivo, na MESMA pasta. Nome
   errado dá "arquivo não encontrado".

   Link (<a href>)        → a PESSOA clica e vai
   window.location.href   → o JAVASCRIPT decide quando ir
                            (aqui: só se a conta conferir)
   --------------------------------------------------------- */

function irParaInicio() {
  window.location.href = "index.html";
}

function entrar(evento) {
  evento.preventDefault();

  const usuario = campoUsuario.value.trim();
  const senha = campoSenha.value;

  const erroUsuario = validarUsuario(usuario);
  const erroSenha = validarSenha(senha);

  if (erroUsuario !== "") {
    mostrarAviso(erroUsuario, "erro");
  } else if (erroSenha !== "") {
    mostrarAviso(erroSenha, "erro");
  } else if (conferirConta(usuario, senha)) {
    irParaInicio();
  } else {
    mostrarAviso("Usuário ou senha incorretos.", "erro");
  }
}

formulario.addEventListener("submit", entrar);


/* =========================================================
   DESAFIOS DO LOGIN
   1) Antes de trocar de página, mostre "Bem-vindo, aluno!
      Entrando..." e espere 1,5 segundo.
      Dica: setTimeout(irParaInicio, 1500);
   2) No contato.js: depois de "Mensagem enviada!", volte para
      o index.html em 2 segundos.
   ========================================================= */
