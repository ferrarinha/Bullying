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
                afirmacao: "afirmação"
            },
            {
                texto: "Éum comportamento agressivo repetitivo que causa grandes traumas." ,
                afirmacao: "afirmação" 
            }

        ]
    },
    {
        enunciado: "Quais são os tipos comuns de bullying nas escolas?",
        alternativas: [
            {
                texto: "Físico, verbal, social e cyberbullying",
                afirmacao: "afirmação"
            },
            {
                texto: "Abraçar, agradecer o colega",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        pergunta: "Como o bullying afeta as pessoas?",
        alternativas: [
            {
                texto: "Pode causar danos emocionais, psicológicos e físicos.",
                afirmacao: "afirmação"
            },
            {
                texto: "O bullying não afeta após parar de ocorrer",
                afirmacao: "afirmação"
            }

        ]
    },
    {
        enunciado: "Como as escolas lidam com o bulliyng?",
        alternativas: [
            {
                texto: "As escolas não possuem alternativas para reverter os casos de bullying",
                afirmacao: "afirmação"
            },
            {
                texto: "As escolas tem políticas anti-bullying e programas de prevenção para o acaso",
                afirmacao: "afirmação"
            }


        ]
    },
    {
        enunciado: "Quais são os desafios enfrentados na prevenção do bullying nas escolas?",
        alternativas: [
            {
                texto: "Falta de conscientização sobre o bullying, relutância dos alunos em relatarem os incidentes e a falta de recursos.",
                afirmacao: "afirmação"
            },
            {
                texto:"Não possuem desafios, pois todos compreendem a gravidade do acaso",
                afirmacao: "afirmação"
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();