const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é Bullying?",
        alternativas: [
            {
                texto: "A aversão ao comportamento violento",
                afirmacao: "Você precisa se informar a respeito da temática,"
            },
            {
                texto: "É um comportamento agressivo repetitivo que causa grandes traumas." ,
                afirmacao: "Você está previamente informado sobre o bullying," 
            }
        ]
    },
    {
        enunciado: "Quais são os tipos comuns de bullying nas escolas?",
        alternativas: [
            {
                texto: "Físico, verbal, social e cyberbullying",
                afirmacao: "e compreende suas principais manifestações."
            },
            {
                texto: "Abraçar, agradecer o colega",
                afirmacao: "ademais precisa compreender como se ocorre."
            }
        ]
    },
    {
        enunciado: "Como o bullying afeta as pessoas?",
        alternativas: [
            {
                texto: "Pode causar danos emocionais, psicológicos e físicos.",
                afirmacao: "Muito bem, você está ciente dos possíveis danos,"
            },
            {
                texto: "O bullying não afeta após parar de ocorrer",
                afirmacao: "É perceptível, que você ainda não tem conhecimento abrangente sobre o bullying,"
            }
        ]
    },
    {
        enunciado: "Como as escolas lidam com o bulliyng?",
        alternativas: [
            {
                texto: "As escolas não possuem alternativas para reverter os casos de bullying",
                afirmacao: "além de não estar totalmente informado sobre como é enfrentado nas instituições de ensino."
            },
            {
                texto: "As escolas tem políticas anti-bullying e programas de prevenção para o acaso",
                afirmacao: "além de conhecer as medidas tomadas nas instituições de ensino."
            }


        ]
    },
    {
        enunciado: "Quais são os desafios enfrentados na prevenção do bullying nas escolas?",
        alternativas: [
            {
                texto: "Falta de conscientização sobre o bullying, relutância dos alunos em relatarem os incidentes e a falta de recursos.",
                afirmacao: "Parabéns, você identifica os principais desafios para enfrentar o bullying nas escolas brasileiras."
            },
            {
                texto:"Não possuem desafios, pois todos compreendem a gravidade do acaso",
                afirmacao: "Aparentemente, você não está ciente dos maiores entraves do combate à temática nas escolas brasileiras."
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();