/* =========================================================
   PORTFÓLIO — o JavaScript da página inicial (aulas 1 a 5)
   aula 1 · 06/10 — a página fala: variáveis e template string
   aula 2 · 07/10 — a página responde: if e cliques
   aula 3 · 08/10 — organizando o código: funções e menu
   aula 4 · 15/10 — listas: as skills nascem de arrays
   aula 5 · 20/10 — os dados mandam: for, objetos e trocar de página

   O index.html já tem os botões 🌙 e ☰, os ids nas listas
   de Skills, o id lista-projetos e o link Sair no menu. O
   style.css já tem o modo escuro, o menu do celular e os
   avisos do formulário colados no fim.

   Este arquivo é só da página inicial. As outras páginas têm
   o seu: contato.html → contato.js · login.html → login.js.
   ========================================================= */

/* =========================================================
   PARTE 1 — AULA 1 (06/10): a página fala
   ========================================================= */

const nome = "João Paulo";

// console.log("Olá mundo")
// console.log(nome)
// console.log(nome + " Desenvolvedor")

let projetosFeitos = 2;
projetosFeitos = projetosFeitos + 9;

// console.log(nome + " possui " + projetosFeitos + " projetos")

const profissao = "Desenvolvedor de IA";
const cidade = "Peabiru";
const anoAtual = 2026;
const anoNascimento = 2004;
const anoDeCurso = 2024

const idade = anoAtual - anoNascimento
const curso = anoAtual- anoDeCurso

// console.log(nome + " possui " + idade + " de idade, trabalha como " + profissao + " e mora em " + cidade + ".")

const titulo = `Oi, eu sou ${nome}`

const bio = `possui ${idade} de idade, ${curso} de curso, trabalha com ${profissao} e mora em ${cidade}. `

console.log(titulo + bio)

document.querySelector(".hero h1").textContent = nome
document.querySelector(".hero h2").textContent = `${profissao} - ${cidade}`

const birthday = new Date("July, 28 2004");

document.querySelector(".hero p").textContent = `${bio} - data de aniversario ${birthday.getDate()}/${birthday.getMonth() + 1}/${birthday.getFullYear()}`

const hora = new Date().getHours();

document.querySelector(".rodape h5").textContent = nome

document.querySelector(".rodape h6").textContent = `
Feito com HTML, CSS e JavaScript - ${hora}h`


/* =========================================================
   PARTE 2 — AULA 2 (07/10): revisão e dúvidas

   O tema de cada aula:
   aula 1 · 06/10 — a página fala: variáveis e template string
   aula 2 · 07/10 — a página responde: if e cliques
   aula 3 · 08/10 — organizando o código: funções e menu
   aula 4 · 15/10 — formulários (contato e login) e listas
   aula 5 · 20/10 — fechando o projeto: objetos, projetos e publicação
   03, 04 e 05/11 — ajuda no projeto · 06/11 — apresentação
   ========================================================= */


/* ---------------------------------------------------------
   0. PARA QUE SERVE O console.log
   Mostra mensagens no console (F12), não na página: quem
   visita o site não vê. Serve para:
   - espiar o valor de uma variável
   - confirmar que uma linha rodou
   - achar erros: algo não apareceu? console.log nele
   textContent = para o visitante · console.log = para você
   No back-end não existe página: o console.log é como o
   servidor fala com a gente, no terminal.
   --------------------------------------------------------- */

console.log(idade);
console.log("A idade é", idade);   // com vírgula, mostra várias coisas

// Pratique: mostre no console a sua cidade e a sua profissão.


/* ---------------------------------------------------------
   1. TIPOS
   string  → texto, sempre entre aspas: "João", "22"
   number  → número, sem aspas: 22, 3.5 (ponto, não vírgula)
   boolean → só true ou false
   typeof pergunta o tipo:  typeof idade → "number"
   Pegadinha:  "10" + 5 → "105"  (com texto, o + gruda)
   --------------------------------------------------------- */


/* ---------------------------------------------------------
   2. AS TRÊS ASPAS
   "duplas"   Shift + tecla à esquerda do 1
   'simples'  tecla à esquerda do 1, sem Shift
   `crase`    Shift + tecla do acento agudo (´), depois espaço

   Duplas e simples são a mesma coisa: abriu com uma, fecha
   com a mesma. Misturar ("texto') dá:
     SyntaxError: Invalid or unexpected token
   A crase (o nome certo é acento grave; em inglês, backtick)
   é a única que aceita lacunas com ${}.
   Se apertar ' ou ` e não aparecer nada, aperte espaço.
   --------------------------------------------------------- */

// O + junta exatamente o que tem, sem espaço ("João Paulopossui").
// Com crase, o espaço é só digitar:
console.log(`${titulo} ${bio}`);

// Pratique: qual é o tipo de 22, de "22" e de true? Confira com typeof.
// Pratique: corrija a linha  const frase = 'Oi";


/* ---------------------------------------------------------
   3. DATA E HORA
   new Date()  → uma FOTO do relógio no momento em que a
                 página abriu. Ela não muda sozinha: o F5
                 tira uma foto nova. Por isso a hora fica
                 numa const.
   new Date("July, 28 2004") → a foto de um DIA ESPECÍFICO
                 (o texto vai em inglês: mês, dia e ano)
   getHours()    → a hora, de 0 a 23 (um number)
   getDate()     → o dia do mês
   getMonth()    → o mês, mas começando do ZERO
                   (janeiro = 0), por isso o + 1
   getFullYear() → o ano

   CUIDADO: new Date("28/07/2004") não funciona. O JavaScript
   não entende o formato brasileiro: dá Invalid Date, e na
   página aparece NaN ("Not a Number", não é um número).

   A linha do aniversário da aula 1, pedaço por pedaço:
     document.querySelector(".hero p")  → procure o parágrafo do topo
     .textContent =                     → troque o texto dele por
     `${bio} - data de aniversario      → a frase de crase, com a bio
     ${birthday.getDate()}              → o dia: 28
     /${birthday.getMonth() + 1}        → o mês: 7
     /${birthday.getFullYear()}`        → o ano: 2004
   --------------------------------------------------------- */

const agora = new Date();
const dia = agora.getDate();
const mes = agora.getMonth() + 1;
const ano = agora.getFullYear();

console.log(dia, mes, ano);

// Esta linha vem DEPOIS da linha do const hora.
// Antes dela dá: Cannot access 'hora' before initialization
document.querySelector(".rodape h6").textContent = `Feito com HTML, CSS e JavaScript · ${dia}/${mes}/${ano} às ${hora}h`;

// Pratique: mostre no console "Hoje é dia" e o dia de hoje.
// Pratique: mostre no console só o ano em que você nasceu, usando birthday.


/* ---------------------------------------------------------
   4. MUDANDO OS BOTÕES PELO JAVASCRIPT
   document      → a página inteira
   querySelector → procure (pega o PRIMEIRO que encontrar)
   "seletor"     → o mesmo do CSS: . para classe, # para id
   textContent   → o texto que aparece
   href          → para onde o link leva

   "Ver projetos" e "Falar comigo" são links (<a>) com cara de
   botão. Link leva para outro lugar; botão (<button>) faz
   uma ação. O JavaScript muda a página aberta, não o arquivo:
   o index.html continua igual.
   --------------------------------------------------------- */

const botaoProjetos = document.querySelector(".botao");
botaoProjetos.textContent = "Meus projetos";

const botaoContato = document.querySelector(".botao-claro");
botaoContato.textContent = "Bora conversar";

// Pratique: troque o texto do primeiro link "Ver projeto", nos cards
// de Projetos, para "Abrir projeto". Dica: o seletor é "#projetos a".


/* =========================================================
   PARTE 3 — AULA 2 (07/10): a página responde
   ========================================================= */


/* ---------------------------------------------------------
   5. DECISÕES: if e else
   if (pergunta de sim ou não) { caminho do sim }
   else { caminho do não }

   Comparações:
     >   maior            <=   menor ou igual
     <   menor            ===  igual
     >=  maior ou igual   !==  diferente

   ATENÇÃO: um = GUARDA, três === COMPARAM.
   --------------------------------------------------------- */

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// O else é opcional:
if (cidade === "Peabiru") {
  console.log("Vizinho!");
}

// && (E): as duas precisam ser verdade
// || (OU): basta uma
const temIngresso = true;
const temDocumento = false;

if (temIngresso && temDocumento) {
  console.log("Pode entrar no show");
} else {
  console.log("Não pode entrar");
}

// Pratique: se projetosFeitos for maior que 5, mostre no console
// "Já tenho experiência".


/* ---------------------------------------------------------
   6. SAUDAÇÃO POR HORÁRIO: else if
   O JavaScript testa de cima para baixo e para no primeiro
   caminho que der certo.
   Para testar outro horário, troque por um minuto a linha
   da hora por:  const hora = 9;
   --------------------------------------------------------- */

let saudacao = "";

if (hora < 12) {
  saudacao = "Bom dia";
} else if (hora < 18) {
  saudacao = "Boa tarde";
} else {
  saudacao = "Boa noite";
}

document.querySelector(".hero h1").textContent = `${saudacao}! Eu sou ${nome}`;


/* ---------------------------------------------------------
   7. MODO ESCURO
   Na aula 3, o código do clique ganhou uma função com nome.
   Ele está mais abaixo, na parte 4 (item 12).
   --------------------------------------------------------- */


/* =========================================================
   PARTE 4 — AULA 3 (08/10): organizando o código
   ========================================================= */


/* ---------------------------------------------------------
   8. FUNÇÃO: uma receita com nome
   function nome() { ...ordens... }  → escreve a receita
   nome();                            → CHAMA a receita (roda)
   Escrever a receita não faz o bolo: sem chamar, nada
   acontece. E sem os parênteses, também não.
   --------------------------------------------------------- */

function mostrarBoasVindas() {
  console.log("Bem-vindo ao meu portfólio!");
}

mostrarBoasVindas();
mostrarBoasVindas();

// Pratique: crie a função mostrarCidade, que escreve a sua cidade
// no console, e chame ela.


/* ---------------------------------------------------------
   9. PARÂMETRO: a lacuna da função
   O valor da chamada entra na lacuna, na mesma ordem:
   o primeiro valor vai para a primeira lacuna.
   --------------------------------------------------------- */

function escreverNaPagina(seletor, texto) {
  document.querySelector(seletor).textContent = texto;
}

// Antes:  document.querySelector(".rodape h5").textContent = nome
// Depois: escreverNaPagina(".rodape h5", nome)
// Na aula, trocamos as linhas repetidas da aula 1 por chamadas
// como estas. No seu script, pode apagar as linhas antigas.
escreverNaPagina(".hero h2", `${profissao} - ${cidade}`);
escreverNaPagina(".rodape h5", nome);

// Pratique: troque o título "Sobre mim" por "Quem sou eu"
// usando escreverNaPagina (seletor "#sobre h2").


/* ---------------------------------------------------------
   10. return: a função que DEVOLVE
   FAZER (sem return) → mexe na página: escreverNaPagina(...)
   DEVOLVER (return)  → entrega um valor para usar:
                        montarSaudacao(hora)
   Sem o return, aparece undefined ("não tem nada aqui").
   --------------------------------------------------------- */

function dobro(numero) {
  return numero * 2;
}

console.log(dobro(5));   // 10

// A saudação da aula 2, agora como função.
// Para testar outro horário, no console: montarSaudacao(9)
function montarSaudacao(horaAtual) {
  if (horaAtual < 12) {
    return "Bom dia";
  } else if (horaAtual < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}

escreverNaPagina(".hero h1", `${montarSaudacao(hora)}! Eu sou ${nome}`);

// Pratique: crie a função idadeEm(ano), que devolve quantos anos
// você vai ter naquele ano. Mostre idadeEm(2030) no console.


/* ---------------------------------------------------------
   11. ESCOPO
   O que é criado dentro da função só existe lá dentro.
   Fora dela, dá: ReferenceError: segredo is not defined
   De dentro da função, dá para usar as variáveis de fora.
   --------------------------------------------------------- */

function testarEscopo() {
  const segredo = 42;
  console.log(segredo);
}

testarEscopo();


/* ---------------------------------------------------------
   12. MODO ESCURO COM FUNÇÃO
   No addEventListener vai o NOME da função, SEM parênteses:
   o navegador roda quando o clique acontecer.
   Com parênteses — alternarTema() — ela roda na hora: a
   página já abre escura e o clique para de funcionar.
   --------------------------------------------------------- */

const pagina = document.querySelector("html");
const botaoTema = document.querySelector(".botao-tema");

function alternarTema() {
  pagina.classList.toggle("modo-escuro");

  if (pagina.classList.contains("modo-escuro")) {
    botaoTema.textContent = "☀️";
  } else {
    botaoTema.textContent = "🌙";
  }
}

botaoTema.addEventListener("click", alternarTema);


/* ---------------------------------------------------------
   13. MENU DO CELULAR
   classList.add    → põe a classe
   classList.remove → tira a classe
   setAttribute     → muda um atributo do HTML (aqui, o
                      aria-expanded, que avisa o leitor de
                      tela se o menu está aberto)
   Funções podem chamar outras funções: a alternarMenu decide
   se chama a abrirMenu ou a fecharMenu.
   Para testar: F12 → Ctrl + Shift + M (modo celular).
   --------------------------------------------------------- */

const botaoMenu = document.querySelector(".botao-menu");
const menu = document.querySelector(".topo nav");

function abrirMenu() {
  menu.classList.add("aberto");
  botaoMenu.textContent = "✕";
  botaoMenu.setAttribute("aria-expanded", "true");
}

function fecharMenu() {
  menu.classList.remove("aberto");
  botaoMenu.textContent = "☰";
  botaoMenu.setAttribute("aria-expanded", "false");
}

function alternarMenu() {
  if (menu.classList.contains("aberto")) {
    fecharMenu();
  } else {
    abrirMenu();
  }
}

botaoMenu.addEventListener("click", alternarMenu);


/* =========================================================
   PARTE 5 — AULA 4 (15/10): listas
   ========================================================= */


/* ---------------------------------------------------------
   14. ARRAY: a lista
   Uma variável que guarda uma LISTA, entre colchetes, com
   vírgula entre os itens. Pense na lista de chamada.
   turma[0]      → o primeiro item: a contagem começa do ZERO
                   (é quantos passos andar a partir do começo)
   turma.length  → o tamanho: sempre 1 a mais que o último
                   número
   turma.push(x) → põe x no FIM da lista
   Um número que não existe (turma[9]) dá undefined.
   --------------------------------------------------------- */

const turma = ["Ana", "Bruno", "Carla", "Diego"];

console.log(turma);
console.log(turma[0]);       // "Ana"
console.log(turma.length);   // 4

turma.push("Eduarda");
console.log(turma.length);   // 5

// A const não deixa trocar a lista inteira, mas deixa mexer
// no que tem dentro: por isso o push funciona.

// Pratique: crie a lista frutas com 3 frutas e mostre no
// console a ÚLTIMA. Dica: frutas[frutas.length - 1]


/* ---------------------------------------------------------
   15. for...of: para cada item da lista
   for (const item of lista) { ... }
   O for anda pela lista do começo ao fim. A cada volta, a
   variável (aqui, aluno) vale um item.
   É sempre OF. Com in, ele anda pelos números (0, 1, 2...).
   --------------------------------------------------------- */

for (const aluno of turma) {
  console.log(`Bem-vindo, ${aluno}!`);
}

// Pratique: crie a lista meusProjetos com 3 projetos e mostre
// "Projeto: ..." no console para cada um.


/* ---------------------------------------------------------
   16. O MENU FECHA AO CLICAR NOS LINKS
   querySelector    → pega só o PRIMEIRO elemento
   querySelectorAll → pega TODOS e devolve uma lista
   As quatro linhas quase iguais do desafio da aula 3 viram
   um for. Se o menu ganhar mais links, o código não muda.
   (Usou querySelector aqui? Dá "is not iterable": não dá
   para percorrer uma coisa só.)
   --------------------------------------------------------- */

const linksDoMenu = document.querySelectorAll(".topo nav a");

for (const link of linksDoMenu) {
  link.addEventListener("click", fecharMenu);
}


/* ---------------------------------------------------------
   17. SKILLS A PARTIR DE LISTAS
   As skills moram nas listas do JavaScript, e a montarLista
   monta o HTML sozinha. Skill nova? É só pôr na lista.

   html = html + ...  → a cada volta, o html GANHA mais um
                        <li>. Sem o "html +", cada volta
                        apaga a anterior e só sobra a última.
   innerHTML          → como o textContent, mas escreve HTML:
                        as tags viram elementos de verdade.
                        Com textContent, o <li> aparece
                        escrito na tela.

   No index.html, cada lista da seção Skills ganhou um id:
     <ul id="lista-front">  <ul id="lista-back">
     <ol id="lista-ferramentas">
   --------------------------------------------------------- */

const skillsFront = ["HTML e CSS", "JavaScript", "React"];
const skillsBack = ["Node.js", "Python", "PostgreSQL"];
const ferramentas = ["Figma", "GitHub", "Docker"];

function montarLista(seletor, itens) {
  let html = "";

  for (const item of itens) {
    html = html + `<li>${item}</li>`;
  }

  document.querySelector(seletor).innerHTML = html;
}

montarLista("#lista-front", skillsFront);
montarLista("#lista-back", skillsBack);
montarLista("#lista-ferramentas", ferramentas);

// Troque as skills pelas SUAS. Para pôr uma nova sem mexer na
// lista, use o push ANTES do montarLista daquela lista.


/* =========================================================
   DESAFIO DA AULA
   1) Use o push para pôr mais uma skill numa lista, ANTES do
      montarLista, e veja ela aparecer.
   2) Mostre o total de skills no título da seção: "Skills (9)".
      Dica: skillsFront.length + skillsBack.length + ferramentas.length
      e a escreverNaPagina com o seletor "#skills h2".
   3) Crie a lista meusProjetos e mostre "Projeto: ..." no
      console para cada um, com for...of.
   4) Bônus: faça a montarLista escrever "<li>Em breve</li>"
      quando a lista estiver vazia. Dica: if (itens.length === 0)
   5) Mande no grupo um print da seção Skills com a sua skill
      nova.

   Crie a conta no GitHub, se ainda não tem: a aula 5 publica o
   portfólio. Próxima aula: terça, 20/10.
   ========================================================= */


/* =========================================================
   PARTE 6 — AULA 5 (20/10): os dados mandam
   ========================================================= */


/* ---------------------------------------------------------
   18. O for, DO COMEÇO
   À mão, é uma linha por item, e só o número muda:
     console.log(turma[0]);
     console.log(turma[1]);
   O for diz: "repita esta linha, trocando o número".

   O for CLÁSSICO — o "padrão" de quase toda linguagem:
     let i = 0          → ONDE COMEÇA (let: o i muda a cada
                          volta; com const dá "Assignment to
                          constant variable")
     i < turma.length   → ATÉ QUANDO (com <= aparece um
                          undefined no fim)
     i++                → COMO ANDA: i = i + 1. Sem ele, o for
                          nunca termina e a página trava

   O for...of — o ATALHO: faz o i sozinho e já entrega o item.
     of = "de": para cada aluno DE turma (com in, aparecem as
     posições 0, 1, 2)
     const: a cada volta nasce um aluno novo, que não muda

   Quer cada ITEM? for...of. Precisa da POSIÇÃO (numerar) ou
   repetir N vezes? o clássico.
   --------------------------------------------------------- */

for (let i = 0; i < turma.length; i++) {
  console.log(i, turma[i]);
}

for (const aluno of turma) {
  console.log(aluno);
}


/* ---------------------------------------------------------
   19. AS TRÊS RECEITAS DO for
   1. FAZER ALGO COM CADA UM  → o for do menu (item 16)
   2. JUNTAR TUDO             → começa vazio ANTES do for,
                                junta mais um DENTRO, usa DEPOIS
                                (o html do montarLista é assim)
   3. ESCOLHER ALGUNS         → for com um if dentro
   --------------------------------------------------------- */

const notas = [8, 5, 10, 7];

// Receita 2: juntar. A soma vai de 0 para 8, 13, 23 e 30.
// Sem o "soma +", cada volta troca em vez de somar.
let soma = 0;
for (const nota of notas) {
  soma = soma + nota;
}
console.log(`Média da turma: ${soma / notas.length}`);   // 7.5

// Receita 3: escolher. O for passa por todos; o if decide quem entra.
for (const nota of notas) {
  if (nota >= 7) {
    console.log(`${nota}: aprovado`);
  }
}

// Pratique: os 10 exercícios da pasta exercicios-for.


/* ---------------------------------------------------------
   20. OBJETO: A FICHA
   Lista  [ ]  → várias coisas, pega pela POSIÇÃO: turma[0]
   Ficha  { }  → várias informações sobre UMA coisa, pega
                 pelo NOME: pessoa.nome
   Cada linha da ficha é  nome: valor,  com dois-pontos e
   vírgula entre as linhas. Campo que não existe dá undefined.
   Faltou vírgula? O erro aponta a linha DE BAIXO.
   --------------------------------------------------------- */

const pessoa = {
  nome: "Ana",
  cidade: "Peabiru",
  idade: 22
};

console.log(pessoa);
console.log(pessoa.nome);                               // "Ana"
console.log(`${pessoa.nome} mora em ${pessoa.cidade}`);

// A ficha "eu": nome, cidade e profissão da aula 1, agora juntos.
const eu = {
  nome: "João Paulo",
  cidade: "Peabiru",
  profissao: "Desenvolvedor de IA"
};

console.log(`${eu.nome} é ${eu.profissao} e mora em ${eu.cidade}`);


/* ---------------------------------------------------------
   21. A LISTA DE FICHAS: os projetos
   Uma ficha por projeto, todas numa lista — um fichário.
   projetos[0].nome → "a ficha 0, o campo nome"
   projetos.nome    → undefined: a LISTA não tem nome, cada
                      FICHA tem
   Entre as fichas também vai vírgula.

   Cuidado com texto copiado da IA ou do Word: aspas curvas
   (“ ”) quebram o arquivo inteiro.
   --------------------------------------------------------- */

const projetos = [
  {
    nome: "Agenda Fácil",
    descricao: "Sistema de agendamento online para clínicas.",
    tecnologias: "React, Node.js, PostgreSQL",
    imagem: "img/agenda-facil.png",
    link: "#"
  },
  {
    nome: "Lojinha de Pet-Shop",
    descricao: "Loja virtual de pet-shop com carrinho e pagamento.",
    tecnologias: "JavaScript, Python",
    imagem: "img/pet-shop.png",
    link: "#"
  },
  {
    nome: "Portfólio",
    descricao: "Esta página, feita no Bootcamp4all.",
    tecnologias: "HTML, CSS, JavaScript",
    imagem: "img/gato.png",
    link: "#"
  }
];

console.log(projetos.length);    // 3
console.log(projetos[0].nome);   // "Agenda Fácil"


/* ---------------------------------------------------------
   22. OS PROJETOS NASCEM DA LISTA
   É o montarLista de novo (receita 2, juntar), só que cada
   volta junta um card inteiro em vez de um <li>. O card é o
   mesmo HTML do index.html, com ${projeto.campo} no lugar de
   cada texto.

   No index.html, o div da seção PROJETOS ganhou um id:
     <div class="colunas" id="lista-projetos">
   Os cards que estão no HTML podem ficar: o JavaScript troca
   tudo (e, se ele quebrar, eles aparecem no lugar).
   Projeto novo? É só pôr mais uma ficha na lista.
   --------------------------------------------------------- */

function montarProjetos(lista) {
  let html = "";

  for (const projeto of lista) {
    html = html + `
      <article class="cartao">
        <img src="${projeto.imagem}" alt="Imagem do projeto ${projeto.nome}">
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <h4>Tecnologias</h4>
        <p>${projeto.tecnologias}</p>
        <a href="${projeto.link}">Ver projeto</a>
      </article>`;
  }

  document.querySelector("#lista-projetos").innerHTML = html;
}

montarProjetos(projetos);


/* ---------------------------------------------------------
   23. TROCAR DE PÁGINA
   O login mora no portfólio: login.html + login.js. Quando a
   conta confere, ele leva para esta página:
     window.location.href = "index.html";

   <a href="...">          → a PESSOA clica e vai
   window.location.href    → o JAVASCRIPT decide quando ir

   No index.html, o menu ganhou o link de volta, depois do
   Contato:  <a href="login.html">Sair</a>
   O for do menu (item 16) já cuida dele, sem mudar nada:
   no console, linksDoMenu.length agora dá 5.
   --------------------------------------------------------- */


/* =========================================================
   FIM DO MÓDULO DE JAVASCRIPT
   aula 1 · a página fala ........ variáveis e template string
   aula 2 · a página responde .... if e clique
   aula 3 · organizando .......... funções
   aula 4 · formulários e listas . value, submit, array
   aula 5 · os dados mandam ...... for, objetos, trocar de página
   ========================================================= */
