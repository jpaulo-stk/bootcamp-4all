/* =========================================================
   CONTATO — o JavaScript do formulário (aula 4 · 15/10)
   O formulário foi montado com a Alana (contato.html). Este
   arquivo confere os campos antes de "enviar".

   Usado só no contato.html, depois do layout.js. O
   <p id="aviso"> está dentro do formulário, e as cores dos
   avisos estão no fim do style.css.

   Nada é enviado de verdade: para enviar, precisaria de um
   servidor. O que a gente treina é a lógica de conferir.
   ========================================================= */


/* ---------------------------------------------------------
   1. AS PEÇAS DO FORMULÁRIO
   Os ids do contato.html: é por eles que o JavaScript acha
   cada campo.
   value → o que está escrito (ou escolhido) no campo AGORA.
   No <select>, o value é o da opção escolhida: a primeira
   ("Escolha um assunto") tem value "", ou seja, vazio.
   --------------------------------------------------------- */

const formulario = document.querySelector("#form-contato");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoAssunto = document.querySelector("#assunto");
const campoMensagem = document.querySelector("#mensagem");
const aviso = document.querySelector("#aviso");


/* ---------------------------------------------------------
   2. CONFERIR CADA CAMPO
   Cada função DEVOLVE a mensagem de erro, ou "" (vazio) se
   não tem nada a reclamar.
   .length   → conta as letras
   .includes → pergunta se tem aquilo dentro (true ou false)
   Para testar no console:  validarEmail("ana.com")
   --------------------------------------------------------- */

function validarNome(nome) {
  if (nome === "") {
    return "Digite o seu nome.";
  } else if (nome.length < 3) {
    return "O nome precisa ter pelo menos 3 letras.";
  } else {
    return "";
  }
}

function validarEmail(email) {
  if (email === "") {
    return "Digite o seu e-mail.";
  } else if (email.includes("@") === false) {
    return "O e-mail precisa ter @.";
  } else if (email.includes(".") === false) {
    return "O e-mail precisa ter um ponto, como em .com.";
  } else {
    return "";
  }
}

function validarAssunto(assunto) {
  if (assunto === "") {
    return "Escolha um assunto.";
  } else {
    return "";
  }
}

function validarMensagem(mensagem) {
  if (mensagem === "") {
    return "Escreva a sua mensagem.";
  } else if (mensagem.length < 10) {
    return "A mensagem precisa ter pelo menos 10 letras.";
  } else {
    return "";
  }
}


/* ---------------------------------------------------------
   3. ESCREVER A RESPOSTA
   Dois parâmetros: O QUE escrever e DE QUE COR.
   "erro" deixa vermelho, "certo" deixa verde (o CSS está no
   formulario.css).
   --------------------------------------------------------- */

function mostrarAviso(texto, tipo) {
  aviso.textContent = texto;
  aviso.classList.remove("erro");
  aviso.classList.remove("certo");
  aviso.classList.add(tipo);
}


/* ---------------------------------------------------------
   4. JUNTANDO TUDO: o envio (submit)
   evento          → um "bilhete" que o navegador entrega
                     para a função na hora do envio
   preventDefault  → "não faça o de sempre": não recarregue
                     a página. Sem ele, a mensagem pisca e some
   .trim()         → tira os espaços das pontas

   O novalidate que a Alana pôs no <form> desliga a conferência
   automática do navegador: quem confere é o nosso código.

   No addEventListener vai o NOME da função, sem parênteses.
   Com enviarMensagem(), dá: Cannot read properties of
   undefined (reading 'preventDefault')
   --------------------------------------------------------- */

function enviarMensagem(evento) {
  evento.preventDefault();

  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const assunto = campoAssunto.value;
  const mensagem = campoMensagem.value.trim();

  const erroNome = validarNome(nome);
  const erroEmail = validarEmail(email);
  const erroAssunto = validarAssunto(assunto);
  const erroMensagem = validarMensagem(mensagem);

  if (erroNome !== "") {
    mostrarAviso(erroNome, "erro");
  } else if (erroEmail !== "") {
    mostrarAviso(erroEmail, "erro");
  } else if (erroAssunto !== "") {
    mostrarAviso(erroAssunto, "erro");
  } else if (erroMensagem !== "") {
    mostrarAviso(erroMensagem, "erro");
  } else {
    mostrarAviso(`Mensagem enviada! Valeu, ${nome}.`, "certo");
  }
}

formulario.addEventListener("submit", enviarMensagem);


/* =========================================================
   DESAFIOS DO FORMULÁRIO
   1) Depois de "Mensagem enviada", limpe os campos.
      Dica: formulario.reset();
   2) Quando der erro, leve o cursor para o campo errado.
      Dica: campoNome.focus();
   3) Bônus: se o assunto for "projeto", a resposta muda para
      "Valeu, Ana! Respondo sobre o seu projeto em até 24 horas."
      Dica: mais um else if antes do último else
   ========================================================= */
