const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
    {
        enunciado: "O que é bullying?",
        alternativas: [
            "A averssão ao comportamento violento.",
            "É um comportamento agresssivo repetitivo que causa grandes traumas."
        ]
    },
    {
        enunciado: "Quais são os tipos comuns de bullying nas escolas?",
        alternativas: [
            "Físico, verbal, social e cyberbullying.",
            "Abraçar, agradecer o colega."
        ]
    },
    {
        enunciado: "Como o bullying afeta as pessoas?",
        alternativas: [
            "Pode causar danos emocionais, psicológicos e físicos.",
            "O bullying não afeta após parar de ocorrer."
        ]
    },
    {
        enunciado: "Como as escolas lidam com o bullying?",
        alternativas: [
            "As escolas não possuem alternativas para reverter os casos de bullying.",
            "As escolas tem políticas anti-bullying e programas de prevenção para o acaso."
        ]
    },
    {
        enunciado: "Quais são os desafios enfrentados na prevenção do bullying nas escolas?",
        alternativas: [
            "Falta de conscietização sobre o bullying, relutância dos alunos em relatarem os incidentes e a falta de recursos.",
            "Não possuem desafios, pois todos compreendem a gravidade do acaso."
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
