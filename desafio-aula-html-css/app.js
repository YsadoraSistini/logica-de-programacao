    let titulo = document.querySelector('h1');
    titulo.innerHTML('Hora do Desafio');

    function exibirMensagemNoConsole(){
        console.log('O botão foi clicado!')
    }

    function exibirAlerta(){
        alert('Eu amo JavaScript')
    }

    function exibirPromtp(){
        let nomeDaCidade = ('Barretos')
        alert(`Eu estive em ${nomeDaCidade} e lembrei de você`)
    }

    function somandoDoisNumeros(){
        let primeironumero = parseInt(prompt('Digite o primeiro número da soma'));
        let segundonumero = parseInt(prompt('Digite o segundo numero para a soma'));
        let resultado = primeironumero + segundonumero;
        alert(`${primeironumero} + ${segundonumero} = ${resultado}`)
    }